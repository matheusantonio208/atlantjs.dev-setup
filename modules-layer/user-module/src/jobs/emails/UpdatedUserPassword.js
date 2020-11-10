import Mail from '#lib/Mailman.js';

class UpdatedUserPassword {
  get key() {
    return 'UpdatedUserPasswordMail';
  }

  async handle({ user }) {
    await Mail.sendEmail({
      to: `${user.first_name} <${user.email}>`,
      subject: `${user.first_name} sua senha foi atualizada!`,
      template: 'UpdatedUserPassword',
      context: {
        user_name: user.first_name,
      },
    });
  }
}

export default new UpdatedUserPassword();
