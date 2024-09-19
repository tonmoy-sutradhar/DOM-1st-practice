// 1. Where to add
const placeList = document.getElementById("places-list");

// 2. What to be added
const li = document.createElement("li");
li.innerText = "Kuratoli, Dhaka";

// 3. add the child
placeList.appendChild(li);

// //////////////////////////////////////////

// 1. Where to add
const mainContainer = document.getElementById("main-contianer");
// console.log(mainContainer);

// 2. What to be added
const section = document.createElement("section");
const h1 = document.createElement("h1");
h1.innerText = "My Food List";
section.appendChild(h1);

const ul = document.createElement("ul");
const li1 = document.createElement("li");
li1.innerText = "Biriyani";
ul.appendChild(li1);

const li2 = document.createElement("li");
li2.innerText = "Kabab";
ul.appendChild(li2);

const li3 = document.createElement("li");
li3.innerText = "Salad";
ul.appendChild(li3);
// section er shathe add kora..
section.appendChild(ul);
// Main container shathe add kora
mainContainer.appendChild(section);

// --------------------------------------------->>
// Set InnerHTML directly
const sectionDress = document.createElement("section");
sectionDress.innerHTML = `
  <h1> My Dress Section </h1>
  <ul>
    <li>T-Shirt</li>
    <li>Pant</li>
    <li>Panjabi</li>
    <li>Shoes</li>
  </ul>
`;
mainContainer.appendChild(sectionDress);
