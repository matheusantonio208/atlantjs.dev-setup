import Mail from '#lib/Mailman.js';

class DeletedUser {
  get key() {
    return 'DeletedUserMail';
  }

  async handle({ data }) {
    await Mail.sendEmail({
      to: `${data.first_name} <${data.email}>`,
      subject: `${data.first_name} sua conta foi deletada!`,
      template: 'DeletedUser',
      context: {
        user_name: data.first_name,
      },
    });
  }
}

export default new DeletedUser();
