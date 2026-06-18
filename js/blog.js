document.addEventListener("click", e => {
  if (!e.target.closest(".read-more-btn")) return;

  const toast = new bootstrap.Toast(
    document.getElementById("blogToast")
  );

  toast.show();
});
const posts = [
  {
    title: "Building AI Automations",
    date: "June 10, 2026",
    excerpt:
      "Lessons learned while creating AI-powered workflows and agents."
  },
  {
    title: "Learning Bootstrap 5",
    date: "June 5, 2026",
    excerpt:
      "A practical guide to building responsive layouts quickly."
  },
  {
    title: "Responsive Web Design",
    date: "May 29, 2026",
    excerpt:
      "Techniques for creating layouts that work across all devices."
  },
  {
    title: "JavaScript Event Handling",
    date: "May 20, 2026",
    excerpt:
      "Understanding events, listeners, and user interactions."
  }
];

const container = document.getElementById("blog-posts");

posts.forEach(post => {
  container.insertAdjacentHTML(
    "beforeend",
    `
      <div class="col-md-6 col-lg-3">
        <div class="card h-100">
          <div class="card-body d-flex flex-column">

            <small class="text-muted mb-2">
              <i class="bi bi-calendar3"></i>
              ${post.date}
            </small>

            <h5 class="card-title">
              ${post.title}
            </h5>

            <p class="card-description flex-grow-1">
              ${post.excerpt}
            </p>

            <button class="btn btn-primary-modern read-more-btn">
              Read More
            </button>

          </div>
        </div>
      </div>
    `
  );
});