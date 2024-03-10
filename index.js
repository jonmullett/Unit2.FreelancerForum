/*const freelancersPrice = [
  { price: 30 },
  { price: 50 },
  { price: 25 },
  { price: 51 },
  { price: 43 },
  { price: 81 },
  { price: 43 },
  { price: 76 },
  { price: 47 },
  { price: 72 },
  { price: 70 },
];

const freelancersOccupation = [
  { occupation: "Writer" },
  { occupation: "Teacher" },
  { occupation: "Gardener" },
  { occupation: "Programmer" },
  { occupation: "Teacher" },
  { occupation: "Teacher" },
  { occupation: "Teacher" },
  { occupation: "Programmer" },
  { occupation: "teacher" },
  { occupation: "driver" },
  { occupation: "Programmer" },
];
const freelancersName = [
  { name: "Alice" },
  { name: "Bob" },
  { name: "Dr. Slice" },
  { name: "Dr. Pressure" },
  { name: "Prof Possibility" },
  { name: "Prof Prism" },
  { name: "Doc Impulse" },
  { name: "Mr Spark" },
  { name: "Dr. Wire" },
  { name: "Prof Goose" },
  { name: "Carol" },
]; */

const freelancers = [
  { name: "Alice", occupation: "Writer", price: 30 },
  { name: "Bob", occupation: "Teacher", price: 50 },
];

/*const freelancers = [
  { freelancersName:"" },
  { freelancersOccupation:"" },
  { freelancersPrice:"" },
];*/

const newFreelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
  { name: "Carol", price: 70, occupation: "programmer" },
];

const maxFreelancers = 10;

/*const addFreelancerIntervalId = setInterval(addNewFreelancer, 3000);*/

const addFreelancerIntervalId = setInterval(addNewFreelancer, 3000);

render();

function render() {
  const freelancersList = document.querySelector("#freelancersList");
  freelancersList.innerHTML = "";

  freelancers.forEach((freelancer) => {
    const freelancerDiv = document.createElement("div");
    freelancerDiv.classList.add("freelancer");
    freelancerDiv.innerHTML = `<p>Name: ${freelancer.name}</p>
                               <p>Occupation: ${freelancer.occupation}</p>
                               <p>Starting Price: $${freelancer.price}</p>`;
    freelancersList.appendChild(freelancerDiv);
  });
  calculateAveragePrice();
}

function calculateAveragePrice() {
  const totalPrices = freelancers.reduce(
    (sum, freelancer) => sum + freelancer.price,
    0
  );
  const averagePrice = totalPrices / freelancers.length;
  const averagePriceSpan = document.querySelector("#averagePrice");
  averagePriceSpan.textContent = `$${averagePrice.toFixed(2)}`;
}

function addNewFreelancer() {
  const freelancer =
    newFreelancers[Math.floor(Math.random() * newFreelancers.length)];

  /*const addFreelancersIntervalId = setInterval(addFreelancers, 3000);*/

  freelancers.push(freelancer);
  render();

  if (freelancers.length >= maxFreelancers) {
    clearInterval(addFreelancerIntervalId);
  }
}

/*const name = [
  "Alice",
  "Bob",
];

const price = [
  30, 50,
]

const occupation = ["Writer", "Teacher",] */

/*const newFreelancers = [
  { name: "Professor Doe", price: 10, occupation: "marketing" },
  { name: "YaDig", price: 30, occupation: "construction" },
  { name: "Mr Smores", price: 60, occupation: "campManager" },
  { name: "Jim Bob", price: 30, occupation: "projectManager" },
  { name: "Doc", price: 50, occupation: "vet" },
  { name: "Mr Yo", price: 30, occupation: "sales" },
  { name: "Gary", price: 70, occupation: "scientist" },
];*/

//render();
//const addFreelancersIntervalId = setInterval(addFreelancers, 1000);

// const freelancerElements = freelancer.map((freelancer) =>
//   element.classList.add(freelancer.name, freelancer.price, freelancer.occupation));

//function calculateAverage() {}

/*function render() {
  const freelancersList = document.querySelector("#freelancers");
  //freelancers.replaceChildren ();
  freelancers.forEach((freelancer) => {
    const freelancersDiv = document.createElement("div");
    freelancersDiv.innerHTML = `<p> name: ${freelancer.name} </p> 
    `;
    freelancersList.appendChild(freelancersDiv);
  });
}*/
