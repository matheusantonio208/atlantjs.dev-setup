import Mongoose, { model } from 'mongoose';

const schema = new Mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
},
  { timestamps: true },
);

export default model('test', schema);
