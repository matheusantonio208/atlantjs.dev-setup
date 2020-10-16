import Mongoose from 'mongoose';

const schema = new Mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
},
  { timestamps: true },
);

export default Mongoose.model('test', schema);
