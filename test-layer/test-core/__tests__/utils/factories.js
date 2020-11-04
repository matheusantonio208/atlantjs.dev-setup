import { factory } from 'factory-girl';
import faker from 'faker';

import SchemaExample from '#schemas/SchemaExample.js';

factory.define('example', SchemaExample, {
  name: faker.name.findName(),
});

export default factory;
