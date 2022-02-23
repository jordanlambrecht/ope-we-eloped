import mail from '@sendgrid/mail'

mail.setApiKey(process.env.SENDGRID_API_KEY)

export default async function sendOnboarding(req, res) {
  const body = JSON.parse(req.body)
  console.log('Sendgrid API: ', body.email)
  const message = `
  <h2>Primary Guest</h2>
  <ul>
  <li><strong>Name: </strong>${body.firstguest_name}</li>
  <li><strong>Author:</strong> ${body.firstguest_address}</li>
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
    subject: `RSVP: ${body.firstguest_name}`,

    text: message,
    html: message.replace(/\r\n/g, '<br>'),
  })

  console.log(res.status(200).json({ status: 'Ok' }))
}
