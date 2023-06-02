import { NextApiRequest, NextApiResponse } from 'next';

// I am trying to make an API endpoint that will send a message to a discord webhook
// I have a webhook setup with sanity and discord but I need to make an API endpoint that will send a message to the webhook
export default function sendDiscordWebhookMessage(_req: NextApiRequest, res: NextApiResponse) {
  
  const webhookUrl = process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL || '';
  // make a post request to the webhook url
  fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content: 'Hello, World!',
    }),
  }); 
  res.status(200).json({ message: 'Message sent' });
}
