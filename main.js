document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("tools-container");

  toolSections.forEach(section => {
    const sectionEl = document.createElement("div");

    // Title
    const title = document.createElement("h3");
    title.className = "mb-3 mt-5";
    title.textContent = section.title;
    sectionEl.appendChild(title);

    // Row of tools
    const row = document.createElement("div");
    row.className = "row g-3 mb-4";

    section.tools.forEach(tool => {
      const col = document.createElement("div");
      col.className = "col-md-4";

      col.innerHTML = `
        <a href="${tool.link}" target="_blank" class="text-decoration-none">
          <div class="card tool-card h-100">
            <div class="card-body d-flex align-items-center">
              <i class="tool-icon ${tool.icon}"></i>
              <div class="ms-3">
                <h5 class="card-title">${tool.name}</h5>
                <p class="card-text">${tool.description}</p>
              </div>
            </div>
          </div>
        </a>
      `;

      row.appendChild(col);
    });

    sectionEl.appendChild(row);
    container.appendChild(sectionEl);
  });
});