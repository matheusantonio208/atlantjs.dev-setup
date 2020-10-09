import Mongoose from 'mongoose';

const schema = new Mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

export default Mongoose.model('test', schema);
