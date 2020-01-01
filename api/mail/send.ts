import { NowRequest, NowResponse } from '@now/node'
import fetch from 'node-fetch'

export default async (req: NowRequest, res: NowResponse) => {
  if (req.method !== 'POST') return
  const { text } = JSON.parse(req.body)
  try {
    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [
              {
                email: 'chris.yang@jsconfkorea.com',
              },
              {
                email: 'contact@jsconfkorea.com',
              },
            ],
          },
        ],
        from: {
          email: 'anonymous_report@jsconfkorea.com',
        },
        subject: 'JSConf Korea 익명 신고',
        content: [
          {
            type: 'text/plain',
            value: text,
          },
        ],
      }),
    })
    return res.status(response.status).json({
      status: response.status,
    })
  } catch (e) {
    throw new Error(e)
  }
}
