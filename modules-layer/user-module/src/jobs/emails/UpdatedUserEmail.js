import Mail from '#lib/Mailman.js';

class UpdatedUserEmail {
  get key() {
    return 'UpdatedUserEmailMail';
  }

  async handle({ user }) {
    await Mail.sendEmail({
      to: `${user.first_name} <${user.email}>`,
      subject: `${user.first_name} seu email foi atualizado!`,
      template: 'UpdatedUserEmail',
      context: {
        user_name: user.first_name,
      },
    });
  }
}

export default new UpdatedUserEmail();
