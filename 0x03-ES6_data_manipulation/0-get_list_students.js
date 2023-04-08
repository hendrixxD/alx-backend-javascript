function getListStudents() {
  const arr = [{ id: 1, firstName: 'Guillaume', loaction: 'San Fransisco' },
    { id: 2, firstName: 'James', loaction: 'Columbia' },
    { id: 3, firstName: 'Serena', loaction: 'San Fransisco' }];

  console.log([...arr]);
}
