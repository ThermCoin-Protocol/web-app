import { NextApiRequest, NextApiResponse } from 'next';
import {isValidSignature, SIGNATURE_HEADER_NAME} from '@sanity/webhook'
// I am trying to make an API endpoint that will send a message to a discord webhook
// I have a webhook setup with sanity and discord but I need to make an API endpoint that will send a message to the webhook
export default async function sendDiscordWebhookMessage(_req: NextApiRequest, res: NextApiResponse) {

  // check if the request is valid
  const secret = process.env.NEXT_PUBLIC_MY_WEBHOOK_SECRET || '';
  const signature = _req.headers[SIGNATURE_HEADER_NAME] as string;
  console.log('signature', signature);
  const body = await readBody(_req) // Read the body into a string
  if (!isValidSignature(body, signature, secret)) {
    res.status(401).json({success: false, message: 'Invalid signature'})
    return
  }

  // get the webhook url from the environment variables
  const webhookUrl = process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL || '';

  // make a post request to the webhook url
  fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: 'Sanity Bot',
      content: `A new update to post ${_req.body.title} has been made!`,
    }),
  }); 
  res.status(200).json({ message: 'Message sent' });
}

export const config = {
  api: {
    bodyParser: false,
  },
}

async function readBody(readable: NextApiRequest) {
  const chunks = []
  for await (const chunk of readable) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk)
  }
  return Buffer.concat(chunks).toString('utf8')
}

