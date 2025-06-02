import { projects } from './data.js';

  const projectsContainer = document.getElementById("projectsContainer");

  projects.slice(0, 3).forEach(project => {
    const card = document.createElement("div");
    card.className = "bg-gray-800 rounded-2xl overflow-hidden shadow-lg shine-effect relative";

    card.innerHTML = `
      <span class="absolute top-2 left-2 bg-blue-500 text-xs font-bold text-black px-2 py-1 rounded-full shadow">
        ${project.date}
      </span>

      <span class="absolute top-2 right-2 ${project.statusColor} text-xs font-bold text-black px-2 py-1 rounded-full shadow">
        ${project.status}
      </span>

      <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover" />

      <div class="p-4">
        <h4 class="text-xl font-semibold">${project.title}</h4>
        <p class="text-gray-400 mt-2">${project.description}</p>

        <div class="mt-4 flex justify-between items-center">
          <a href="projects.html" class="text-blue-400 hover:underline">Voir</a>
          <button class="text-green-400 hover:underline">Partager</button>
        </div>
      </div>
    `;

    projectsContainer.appendChild(card);
  });
