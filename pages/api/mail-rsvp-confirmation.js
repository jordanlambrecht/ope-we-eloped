import mail from '@sendgrid/mail'

mail.setApiKey(process.env.SENDGRID_API_KEY)

export default async function sendOnboarding(req, res) {
  const body = JSON.parse(req.body)
  // const msg = {
  //   to: 'jordan@pixelbakery.com',
  //   from: 'sender@example.org',
  //   templateId: 'd-f43daeeaef504760851f727007e0b5d0',
  //   dynamicTemplateData: {
  //     subject: 'Testing Templates',
  //     name: 'Some One',
  //     city: 'Denver',
  //   },
  // }

  await mail.send({
    to: `${body.firstguest_email}`,
    from: { email: 'bergen@opeweeloped.us', name: 'Bergen Johnston' },
    replyTo: {
      email: 'bergenjohnston@gmail.com',
      name: 'Bergen Johnston',
    },
    templateId: 'd-9ad09a97fbeb4e1ebff3cd143fd5c552',
  })

  console.log(res.status(200).json({ status: 'Ok' }))
}
