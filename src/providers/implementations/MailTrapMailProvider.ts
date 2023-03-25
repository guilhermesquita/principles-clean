import { MailProvider, Message } from "../MailProvider";
import nodemailer from 'nodemailer'
import Mail from "nodemailer/lib/mailer";

export class MailTrapMailProvider implements MailProvider{
  private transporter: Mail;
  
  constructor(){
    this.transporter = nodemailer.createTransport({
      host: 'sandbox.smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: 'eb92957c1e1e43',
        pass: '16d841010f6f89'
      }
    })
  }

  async sendMail(message: Message): Promise<void> {
    await this.transporter.sendMail({
      to:{
        name: message.to.name,
        address: message.to.email
      },
      from: {
        name: message.to.name,
        address: message.to.email
      },
      subject: message.subject,
      html: message.body
    })
  }
}