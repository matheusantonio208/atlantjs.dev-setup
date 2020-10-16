import Mail from '../../../lib/Mail';

class UpdatedUser {
  get key() {
    return 'UpdatedUserMail';
  }

  async handle({ data }) {
    const { user, message_operation } = data;

    await Mail.sendEmail({
      to: `${user.first_name} <${user.email}`,
      subject: `${user.first_name} sua senha foi alterada`,
      template: 'UpdatedUser',
      context: {
        user_name: user.first_name,
        message_operation,
      },
    });
  }
}

export default new UpdatedUser();
