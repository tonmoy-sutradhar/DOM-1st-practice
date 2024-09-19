const sections = document.querySelectorAll("section");
// console.log(sections);
for (const section of sections) {
  // console.log(section);
  section.style.border = "2px solid steelblue";
  section.style.marginBottom = "5px";
  section.style.borderRadius = "15px";
  section.style.padding = "7px";
  section.style.backgroundColor = "lightgray";
}

const vegetable = document.getElementById("vegi-container");
vegetable.classList.add("text-center");
vegetable.classList.remove("larg-text");
