const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8').trim();
    const records = data.split('\n').map((record) => record.split(',').map((field) => field.trim()));

    // remove empty records (if any)
    records.filter((record) => record.length > 1);

    // count number of students in each field
    const fields = records.map((record) => record[3]);
    const fieldCounts = {};
    fields.forEach((field) => {
      fieldCounts[field] = (fieldCounts[field] || 0) + 1;
    });

    // display results
    console.log(`Number of students: ${records.length}`);
    for (const field in fieldCounts) {
      const count = fieldCounts[field];
      const students = records.filter((record) => record[3] === field).map((record) => record[0]);
      console.log(`Number of students in ${field}: ${count}. List: ${students.join(', ')}`);
    }
  } catch (error) {
    console.log(`Cannot load the database: ${error.message}`);
  }
}

module.exports = countStudents;
