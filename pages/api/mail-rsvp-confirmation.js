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
    templateId: 'd-ff3d22ab87354da9955ae431307cbe60',
  })

  console.log(res.status(200).json({ status: 'Ok' }))
}
