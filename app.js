const workers = [
  {
    id: 1,
    fullName: "Zahid Vahabzade",
    isMarry: true,
    salary: 7000,
    speciality: "Full Stack Dev",
  },
  {
    id: 2,
    fullName: "Fuad Mikayilzade",
    isMarry: false,
    salary: 5000,
    speciality: "DevOps",
  },
  {
    id: 3,
    fullName: "Orkhan Aliyev",
    isMarry: true,
    salary: 3000,
    speciality: "Backend Dev",
  },
];

// const richWorkers = workers.filter((item) => item.salary > 4000);
// console.log(richWorkers);

// const ogru = workers.find(worker => worker.id == 3)
// console.log(`Ogru: ${ogru.fullName}`);

// const totalSalaries = workers.reduce((acc,item)=> acc+item.salary ,0)
// console.log(totalSalaries);

// ishchilerden evli olanlari tapin ve onlarin console-a fullName ve maashlarini goster

const marriedWorkers = workers.filter(item => item.isMarry==true);
marriedWorkers.map(item=>console.log(
  `Worker name: ${item.fullName}\nWorker salary: ${item.salary}`
))




