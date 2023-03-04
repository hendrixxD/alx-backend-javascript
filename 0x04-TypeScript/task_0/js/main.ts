// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  // Create two students and add them to an array
  const studentsList: Student[] = [
    {
      firstName: 'John',
      lastName: 'Doe',
      age: 25,
      location: 'New York',
    },
    {
      firstName: 'Jane',
      lastName: 'Smith',
      age: 30,
      location: 'San Francisco',
    },
  ];
  
  // Render a table with the students data
  const table = document.createElement('table');
  
  // Create the table header row
  const headerRow = document.createElement('tr');
  const headerFirstName = document.createElement('th');
  headerFirstName.innerText = 'First Name';
  headerRow.appendChild(headerFirstName);
  
  const headerLocation = document.createElement('th');
  headerLocation.innerText = 'Location';
  headerRow.appendChild(headerLocation);
  
  table.appendChild(headerRow);
  
  // Create a row for each student
  studentsList.forEach((student) => {
    const row = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    firstNameCell.innerText = student.firstName;
    row.appendChild(firstNameCell);
  
    const locationCell = document.createElement('td');
    locationCell.innerText = student.location;
    row.appendChild(locationCell);
  
    table.appendChild(row);
  });
  
  // Append the table to the document body
  document.body.appendChild(table);
  