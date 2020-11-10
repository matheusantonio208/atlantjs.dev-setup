import Mail from '#lib/Mailman.js';

class WelcomeNewUser {
  get key() {
    return 'WelcomeNewUserMail';
  }

  async handle({ data }) {
    await Mail.sendEmail({
      to: `${data.first_name} <${data.email}>`,
      subject: `Bem vindo ${data.first_name}!`,
      template: 'WelcomeNewUser',
      context: {
        user_name: data.first_name,
      },
    });
  }
}

export default new WelcomeNewUser();
