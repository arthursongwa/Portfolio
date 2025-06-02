
import { projects } from './data.js';

const sidebar = document.getElementById("projectSidebar");
const detailTitle = document.getElementById("detailTitle");
const detailDesc = document.getElementById("detailDesc");
const detailTech = document.getElementById("detailTech");
const detailImages = document.getElementById("detailImages");
const detailLinks = document.getElementById("detailLinks");

let isSidebarExpanded = true;
let selectedProjectIndex = null;

// Création du bouton toggle une fois
const toggleBtn = document.getElementById("toggleSidebar");

toggleBtn.addEventListener("click", () => {
  isSidebarExpanded = !isSidebarExpanded;

  // Toggle class to collapse/expand
  sidebar.classList.toggle("collapsed", !isSidebarExpanded);

  // Change button icon
  if(isSidebarExpanded){
    toggleBtn.innerHTML =  `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="white"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg> `;
  }else{
    toggleBtn.innerHTML =  `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="white"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg> `;
  }

  // Only render if visible
  if (isSidebarExpanded) {
    renderProjectButtons();
  } else {
    [...sidebar.querySelectorAll(".project-btn")].forEach(btn => btn.remove());
  }
});

function renderProjectButtons() {
// Supprime tous les boutons sauf le toggle
[...sidebar.querySelectorAll(".project-btn")].forEach(btn => btn.remove());

projects.forEach((p, index) => {
    const item = document.createElement("div");
    item.className = "project-btn p-2";

    // Contenu selon sidebar
    item.textContent = isSidebarExpanded ? p.title : p.title.charAt(0);

    // Garde la sélection
    if (selectedProjectIndex === index) {
    item.classList.add("selected");
    }

    item.dataset.index = index;

    item.addEventListener("click", () => {
    // Mise à jour sélection visuelle
    const prevSelected = sidebar.querySelector(".project-btn.selected");
    if (prevSelected) prevSelected.classList.remove("selected");
    item.classList.add("selected");
    selectedProjectIndex = index;

    showProjectDetail(p);
    });

    sidebar.appendChild(item);
});
}

function showProjectDetail(project) {
detailTitle.textContent = project.title;
detailDesc.textContent = project.description;

detailTech.innerHTML = "";
project.tech.forEach(t => {
    const span = document.createElement("span");
    span.textContent = t;
    span.className = "bg-gray-700 px-3 py-1 rounded text-sm mr-2 mb-2 inline-block";
    detailTech.appendChild(span);
});

detailImages.innerHTML = "";
project.images.forEach(img => {
    const image = document.createElement("img");
    image.src = img;
    image.className = "w-48 h-auto rounded-lg border-2 border-gray-700";
    detailImages.appendChild(image);
});

detailLinks.innerHTML = "";
project.links.forEach(link => {
    const a = document.createElement("a");
    a.href = link.url;
    a.target = "_blank";
    a.textContent = link.name;
    a.className = "bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded text-sm";
    detailLinks.appendChild(a);
});
}


// Initialisation
sidebar.classList.remove("collapsed");
renderProjectButtons();