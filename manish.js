const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const WorksnapsTimeEntrySchema = new Schema({
  student: {
    type: Schema.Types.ObjectId,
    ref: 'Student'
  },
  timeEntries: {
    type: Object
  }
});

const StudentSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    default: ''
  },
  lastName: {
    type: String,
    trim: true,
    default: ''
  },
  displayName: {
    type: String,
    trim: true
  },
  municipality: {
    type: String
  }
});


const WorksnapsTimeEntry = mongoose.model('WorksnapsTimeEntry', WorksnapsTimeEntrySchema);
const Student = mongoose.model('Student', StudentSchema);


Student.find({}, (err, students) => {
  if (err) {
    console.error('Error retrieving students:', err);
    return;
  }

  students.forEach((student) => {
    WorksnapsTimeEntry.find({ student: student._id }, (err, timeEntries) => {
      if (err) {
        console.error(`Error retrieving time entries for student ${student._id}:`, err);
        return;
      }

      console.log(`Time entries for student ${student._id}:`, timeEntries);
    });
  });
});
