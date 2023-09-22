const mongoose =require('mongoose');
// schema
const studentSchema = new mongoose.Schema({
   rollNumber: {
    type:Number,
    required: true
  },
   name: String,
   
   section: {
    type: String,
  }
},
{
    timestamps:true
}
);
// make model out of shhcema 
const Student = mongoose.model('students', studentSchema);

// export model
module.exports = Student;


