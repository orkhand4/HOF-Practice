const workers = [
  {
  fullName: 'Zahid Vahabzade',
  isMarry: true,
  salary: 7000,
  speciality: 'Full Stack Dev'
  },
  {
  fullName: 'Fuad Mikayilzade',
  isMarry: false,
  salary: 5000,
  speciality:  'DevOps'
  },
  {
  fullName: 'Zahid Vahabzade',
  isMarry: true,
  salary: 3000,
  speciality: 'Backend Dev'
  }
];

const richWorkers = workers.filter(item=>item.salary>4000)
console.log(richWorkers);


