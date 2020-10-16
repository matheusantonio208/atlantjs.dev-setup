class JobExample {
  get key() {
    return 'KeyUniqueJob';
  }

  async handle({ data }) {
    return data;
  }
}

export default new JobExample();