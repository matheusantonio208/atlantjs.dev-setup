import SchemaExample from '#schemas/schema-example.js';

class ExampleRepository extends Error {
  async getOneExample({_id}) {
    const example = await SchemaExample.findOne({_id});

    if(example) {
      return example;
    }

    throw new Error(`Error to get ${_id}`);
  }

/* ===================================== *
 * async getAllExample () {...}          *
 * async setExample (data) {...}         *
 * async updateExample (data, id) {...}  *
 * async deleteExample (id) {...}        *
 * ===================================== */  
}

export default new ExampleRepository();   