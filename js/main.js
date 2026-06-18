document.addEventListener("DOMContentLoaded", () => {

  const projects = [
    {
      icon: "bi-robot",
      title: "AI Real Estate Assistant",
      description: "Telegram-based AI assistant that converts voice messages into structured property listings and generates marketing content automatically.",
      tag: "AI Automation"
    },
    {
      icon: "bi-calendar-check",
      title: "Clinic Appointment Agent",
      description: "AI-powered booking assistant integrated with Google Calendar to schedule appointments and collect customer information.",
      tag: "Node.js"
    },
    {
      icon: "bi-diagram-3",
      title: "Business Process Automation",
      description: "Automated lead collection, notifications, reporting, and data synchronization between multiple business systems.",
      tag: "Automation"
    },
    {
      icon: "bi-cart",
      title: "E-Commerce Chat Assistant",
      description: "Conversational shopping assistant capable of answering product questions, recommending items, and guiding purchases.",
      tag: "AI Commerce"
    },
    {
      icon: "bi-code-square",
      title: "Full Stack Web Applications",
      description: "Modern web applications built using React, TypeScript, Node.js, Express, and MySQL.",
      tag: "Full Stack"
    },
    {
      icon: "bi-plug",
      title: "API Integration Platform",
      description: "Custom integrations connecting CRMs, calendars, messaging systems, and third-party APIs.",
      tag: "Integrations"
    }
  ];

  const projectsGrid = document.getElementById("projectsGrid");

  if (projectsGrid) {
    projectsGrid.innerHTML = projects.map(project => `
      <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="500">
        <div class="card project-card h-100">
          <div class="card-body p-4 d-flex flex-column">
            <div class="project-icon mb-3">
              <i class="bi ${project.icon}"></i>
            </div>
            <h3 class="h5 card-title fw-bold">${project.title}</h3>
            <p class="card-description flex-grow-1">${project.description}</p>
            <div class="mt-auto">
              <span class="project-tag">${project.tag}</span>
            </div>
          </div>
        </div>
      </div>
    `).join("");
  }


  //  Section Title Hover Effect Logic
  const sectionTitles = document.querySelectorAll(".section-title");

  sectionTitles.forEach(title => {
    const text = title.textContent.trim();
    title.innerHTML = "";

    [...text].forEach(char => {
      const span = document.createElement("span");

      if (char === " ") {
        span.className = "hover-space";
        span.innerHTML = "&nbsp;";
      } else {
        span.className = "hover-char";
        span.textContent = char;
      }

      title.appendChild(span);
    });
  });


  const statNumbers = document.querySelectorAll(".stat-number");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const el = entry.target;
      const target = Number(el.dataset.target);

      let current = 0;

      const update = () => {
        current += target / 60;

        if (current >= target) {
          el.textContent = `${target}+`;
          return;
        }

        el.textContent = `${Math.floor(current)}+`;
        requestAnimationFrame(update);
      };

      update();
      observer.unobserve(el);
    });
  });

  statNumbers.forEach(el => observer.observe(el));
});