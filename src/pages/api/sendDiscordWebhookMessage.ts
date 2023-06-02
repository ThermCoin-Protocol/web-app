import { NextApiRequest, NextApiResponse } from 'next';
import {isValidRequest} from '@sanity/webhook'
// I am trying to make an API endpoint that will send a message to a discord webhook
// I have a webhook setup with sanity and discord but I need to make an API endpoint that will send a message to the webhook
export default async function sendDiscordWebhookMessage(_req: NextApiRequest, res: NextApiResponse) {

  // check if the request is valid
  const secret = process.env.NEXT_PUBLIC_MY_WEBHOOK_SECRET || '';
  if (!isValidRequest(_req, secret)) {
    return res.status(403).json({ message: 'Invalid request' });
  }

  // get the body of the request
  const body: any = await readBody(_req);
  // parse the body of the request
  const bodyJson = JSON.parse(body);

  // get the webhook url from the environment variables
  const webhookUrl = process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL || '';
  // make a post request to the webhook url
  fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content: bodyJson,
    }),
  }); 
  res.status(200).json({ message: 'Message sent' });
}
function readBody(req: any) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', (chunk: any) => {
      body += chunk.toString();
    });
    req.on('end', () => {
      resolve(body);
    });
    req.on('error', (err: any) => {
      reject(err);
    });
  });
}

