const { Router }  = require('express')
const  nodemailer = require('nodemailer')
const router = Router()

router.post('/send-email', async (req, res) => {
    const { nombre, email, phone} = req.body

    contentHTML = `
       <h1>Informacion de usuario</h1>
       <ul>
          <li>Nombre de usuario: ${nombre}</li>
          <li>Email: ${email}</li>
          <li>Teléfono: ${phone}</li>
       </ul>
    `
    const trnasporter =  nodemailer.createTransport({
       host: 'mail.belihebe.com',
       port: 587,
       secure: false,
       auth: {
          user: 'test@belihebe.com',
          pass: 'belihebe2020'
       },
       tls: {
         rejectUnauthorized: false
       }
    })


   const info = await  trnasporter.sendMail({
       from: "'WebEmail'  <test@belihebe.com>",
       to: 'perfldev@gmail.com',
       subject: 'Formulario de contacto Email-web',
       html: contentHTML
    })

    console.log('Message sent', info.messageId)

   res.redirect('/enviado.html')
})

module.exports = router
