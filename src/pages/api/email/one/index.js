import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const handler = (req, res) => {
  if (req.method !== 'POST') {
    return res.status(400).json({ error: 'Method not allowed' })
  }

  /// .toLocaleString('mx')

  const space = '%20'

  let dataSend = {}
  let templateEmail = ''

  if (!req.body.message) {
    const { details } = req.body.serviceDetail
    const servicio = req.body.serviceDetail.title.replace(' ', space)
    const messageWhats = `Más%20detalles%20sobre%20su%20servicio%20de%20--${servicio}--,%20por%20favor...`

    dataSend = {
      service: req.body.serviceDetail.title,
      price: req.body.serviceDetail.price.toLocaleString(),
      details: {
        one: details[0],
        two: details[1],
        three: details[2],
      },
      whatsapp: `https://wa.me/5212226768956?text=${messageWhats}`,
      url: 'http://mariachiangelopolis.com',
      subjectDina: `Información de servicio de ${req.body.serviceDetail.title}`,
    }
    templateEmail = 'd-6c9182902c3e4c38a470fe5f9ac590f6'
  } else {
    const messageWhats = `Más%20detalles%20sobre%20sus%20servicios,%20por%20favor...`

    dataSend = {
      email: req.body.email,
      message: req.body.message,
      whatsapp: `https://wa.me/5212226768956?text=${messageWhats}`,
      url: 'http://mariachiangelopolis.com',
      subjectDina: `Usted  escribio un mensaje solicitando informes de nuestros servicios.`,
    }

    templateEmail = 'd-cc7c06a45e854ba99872c2d39d797992'
  }

  if (req.method === 'POST') {
    const msg = {
      to: ['mariachiangelopolisdepuebla@gmail.com', req.body.email], // Change to your recipient
      from: 'Mariachi Angelopolis - informes <informes@mariachiangelopolis.com>', // Change to your verified sender
      subject: dataSend.subjectDina,
      html: 'hola',
      templateId: templateEmail,
      dynamic_template_data: dataSend,
    }

    sgMail
      .sendMultiple(msg)
      .then((dat) =>
        res.status(200).json({
          message: `La información ha sido enviada al correo indicado <${req.body.email}> de forma exitoza, gracias...`,
          dat,
        })
      )
      .catch((error) => res.status(400).json(error))
  }
}

export default handler
