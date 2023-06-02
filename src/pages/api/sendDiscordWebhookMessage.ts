import { NextApiRequest, NextApiResponse } from 'next';
// import {isValidRequest} from '@sanity/webhook'
// I am trying to make an API endpoint that will send a message to a discord webhook
// I have a webhook setup with sanity and discord but I need to make an API endpoint that will send a message to the webhook
export default async function sendDiscordWebhookMessage(_req: NextApiRequest, res: NextApiResponse) {

  // check if the request is valid
//   const secret = process.env.NEXT_PUBLIC_MY_WEBHOOK_SECRET || '';
//   if (!isValidRequest(_req, secret)) {
//     return res.status(403).json({ message: 'Invalid request' });
//   }

  // get the body of the request
  // parse the body of the request
  const { title, _id } = JSON.parse(_req.body);

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
      content: 'Update to post: ' + title + ' ' + _id,
    }),
  }); 
  res.status(200).json({ message: 'Message sent' });
}

