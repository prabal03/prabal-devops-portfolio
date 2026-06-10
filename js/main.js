const projectGrid = document.getElementById("project-grid");
const howGrid = document.getElementById("how-grid");
const experienceTimeline = document.getElementById("experience-timeline");
const certsGrid = document.getElementById("certs-grid");
const skillsGrid = document.getElementById("skills-grid");
const modal = document.getElementById("project-modal");
const modalContent = document.getElementById("modal-content");
const yearEl = document.getElementById("year");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

yearEl.textContent = new Date().getFullYear();

function setupProfilePhoto() {
  const photo = document.getElementById("profile-photo");
  const fallback = document.getElementById("profile-fallback");
  if (!photo || !fallback) return;

  const showFallback = () => {
    photo.hidden = true;
    fallback.hidden = false;
  };

  const showPhoto = () => {
    photo.hidden = false;
    fallback.hidden = true;
  };

  photo.addEventListener("error", showFallback);
  photo.addEventListener("load", () => {
    if (photo.naturalWidth > 0) showPhoto();
  });

  if (photo.complete) {
    photo.naturalWidth > 0 ? showPhoto() : showFallback();
  } else {
    showFallback();
  }

  document.querySelectorAll(".about-photo").forEach((img) => {
    img.addEventListener("error", () => {
      img.closest(".about-photo-wrap")?.setAttribute("hidden", "");
    });
    img.addEventListener("load", () => {
      if (img.naturalWidth > 0) {
        img.closest(".about-photo-wrap")?.removeAttribute("hidden");
      }
    });
    if (img.complete && img.naturalWidth === 0) {
      img.closest(".about-photo-wrap")?.setAttribute("hidden", "");
    }
  });
}

function renderDiagram(rows) {
  return rows
    .map(
      (row) => `
      <div class="diagram-row">
        ${row
          .map((item) =>
            item === "→"
              ? `<span class="diagram-arrow">→</span>`
              : `<span class="diagram-node">${item}</span>`
          )
          .join("")}
      </div>`
    )
    .join("");
}

function renderProjects() {
  projectGrid.innerHTML = PROJECTS.map((project) => {
    const diagram = renderDiagram(project.diagram);
    const cardClass = project.featured ? "project-card featured reveal" : "project-card reveal";

    if (project.featured) {
      return `
        <button class="${cardClass}" data-project="${project.id}" type="button">
          <div>
            <div class="project-meta">
              ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
            </div>
            <h3>${project.title}</h3>
            <p>${project.summary}</p>
            <div class="project-impact">↗ ${project.impact}</div>
          </div>
          <div class="project-diagram">${diagram}</div>
        </button>
      `;
    }

    return `
      <button class="${cardClass}" data-project="${project.id}" type="button">
        <div class="project-meta">
          ${project.tags.slice(0, 4).map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>
        <h3>${project.title}</h3>
        <p>${project.summary}</p>
        <div class="project-diagram">${diagram}</div>
        <div class="project-impact">↗ ${project.impact}</div>
      </button>
    `;
  }).join("");
}

function renderHowIWork() {
  howGrid.innerHTML = HOW_I_WORK.map(
    (item) => `
      <article class="how-card reveal">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </article>
    `
  ).join("");
}

function renderExperience() {
  experienceTimeline.innerHTML = EXPERIENCE.map(
    (job) => `
      <article class="timeline-item reveal">
        <div class="timeline-marker" aria-hidden="true"></div>
        <div class="timeline-content">
          <div class="timeline-header">
            <div>
              <h3>${job.role}</h3>
              <p class="timeline-company">${job.company}</p>
            </div>
            <div class="timeline-meta">
              <span>${job.period}</span>
              <span>${job.location}</span>
            </div>
          </div>
          <ul>
            ${job.highlights.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </div>
      </article>
    `
  ).join("");
}

function certStatusClass(status) {
  if (status === "Active") return "cert-active";
  if (status === "In progress") return "cert-progress";
  return "cert-planned";
}

function renderCertifications() {
  certsGrid.innerHTML = CERTIFICATIONS.map(
    (cert) => `
      <article class="cert-card reveal">
        <div class="cert-badge">${cert.name}</div>
        <h3>${cert.fullName}</h3>
        <p class="cert-issuer">${cert.issuer}</p>
        <div class="cert-footer">
          <span class="cert-status ${certStatusClass(cert.status)}">${cert.status}</span>
          <span class="cert-year">${cert.year}</span>
        </div>
      </article>
    `
  ).join("");
}

function renderSkills() {
  skillsGrid.innerHTML = SKILLS.map(
    (group) => `
      <article class="skill-group reveal">
        <h3>${group.title}</h3>
        <ul>
          ${group.items.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </article>
    `
  ).join("");
}

function openProjectModal(projectId) {
  const project = PROJECTS.find((item) => item.id === projectId);
  if (!project) return;

  modalContent.innerHTML = `
    <p class="modal-company">${project.company}</p>
    <h3 id="modal-title">${project.title}</h3>
    <div class="project-meta">
      ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
    </div>

    <div class="modal-section">
      <h4>Problem</h4>
      <p>${project.problem}</p>
    </div>

    <div class="modal-section">
      <h4>What I built</h4>
      <ul>
        ${project.solution.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    </div>

    <div class="modal-section">
      <h4>My role</h4>
      <p>${project.role}</p>
    </div>

    <div class="modal-impact"><strong>Impact:</strong> ${project.impact}</div>
  `;

  modal.showModal();
  document.body.classList.add("modal-open");
}

function closeProjectModal() {
  modal.close();
  document.body.classList.remove("modal-open");
}

function setupRevealAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

setupProfilePhoto();

renderProjects();
renderHowIWork();
renderExperience();
renderCertifications();
renderSkills();
setupRevealAnimations();

projectGrid.addEventListener("click", (event) => {
  const card = event.target.closest("[data-project]");
  if (!card) return;
  openProjectModal(card.dataset.project);
});

modal.querySelector(".modal-close").addEventListener("click", closeProjectModal);
modal.addEventListener("click", (event) => {
  const rect = modal.querySelector(".modal-inner").getBoundingClientRect();
  const clickedOutside =
    event.clientX < rect.left ||
    event.clientX > rect.right ||
    event.clientY < rect.top ||
    event.clientY > rect.bottom;

  if (clickedOutside) closeProjectModal();
});

modal.addEventListener("close", () => {
  document.body.classList.remove("modal-open");
});

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});
