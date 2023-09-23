const mongoose =require('mongoose');
// studentmodel
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




// teachermodel

const teacherSchema = new mongoose.Schema({
    name: String,
    qualification: String,
    class: Number,
    subject: String
})
const Teacher = mongoose.model('teachers', teacherSchema);

// export model
module.exports = { Teacher,Student};


