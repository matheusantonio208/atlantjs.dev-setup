import SchemaExample from '#schemas/schema-example';

class ExampleRepository extends Error {
  async getExample(idExample) {
    const example = await SchemaExample.findOne({id: idExample})

    if(example) {
      return example;
    }

    throw new Error(`Error to get ${idExample}`);
  }

/* ===================================== *
 * async setExample (data) {...}         *
 * async updateExample (data, id) {...}  *
 * async deleteExample (id) {...}        *
 * async getAllExample () {...}          *
 * ===================================== */  
}

export default new ExampleRepository();