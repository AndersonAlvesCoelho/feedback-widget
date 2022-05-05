import nodemailer from "nodemailer"
import { MailAdapter, SendMailData } from "../mail-adapter";


const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "37eb4f4e6971ab",
    pass: "32e97b0d53c911"
  }
});


export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {

    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: 'Anderson Alves <a0a0coelho@gmail.com>',
      subject,
      html: body
    })
  }
}