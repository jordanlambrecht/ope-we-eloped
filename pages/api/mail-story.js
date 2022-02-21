import mail from '@sendgrid/mail'

mail.setApiKey(process.env.SENDGRID_API_KEY)

export default async function sendOnboarding(req, res) {
  const body = JSON.parse(req.body)
  console.log('Sendgrid API: ', body.email)
  const message = `
  <p>A new story has been submitted. Here it is:</p>
  <ul>
  <li><strong>Story Title: </strong>${body.title}</li>
  <li><strong>Author:</strong> ${body.author}</li>
  </ul>
  <p><strong>story:</strong></p>
  <p>${body.story}</p>
  `

  await mail.send({
    to: [`jordan@pixelbakery.com`, `bergenjohnston@gmail.com`],
    from: {
      email: 'hello@opeweeloped.us',
      name: 'Ope We Eloped',
    },
    subject: `Story Time: ${body.title}`,

    text: message,
    html: message.replace(/\r\n/g, '<br>'),
  })

  console.log(res.status(200).json({ status: 'Ok' }))
}
