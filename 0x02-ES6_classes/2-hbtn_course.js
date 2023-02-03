// Implement a class named HolbertonCourse:
//	name /String
//	length /Number
//	students /array of strings
//
//	Implement a getter and setter for each attribute.

class HolbertonCours {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._Students = students;
  }

  // getter for name
  get name_() {
    return this._name;
  }

  // getter for length_
  get length_() {
    return this._length;
  }

  // getter for students
  get students_() {
    return this._students_;
  }
}
