document.addEventListener("DOMContentLoaded", () => {
  // 1. Sticky Navbar Logic
  let lastScroll = 0;
  const nav = document.getElementById("mainNav");

  if (nav) {
    window.addEventListener("scroll", () => {
      const current = window.scrollY;
      if (current > lastScroll && current > 150) {
        nav.style.transform = "translateY(-100%)";
      } else {
        nav.style.transform = "translateY(0)";
      }
      lastScroll = current;
    });
  }

  const themeButtons = document.querySelectorAll(".theme-toggle-btn");
  const themeIcons = document.querySelectorAll(".theme-toggle-icon");

  // 1. Helper function to sync visual UI states (Icons)
  const syncIcons = (isDark) => {
    themeIcons.forEach(icon => {
      if (isDark) {
        icon.classList.replace("bi-moon-stars", "bi-sun");
      } else {
        icon.classList.replace("bi-sun", "bi-moon-stars");
      }
    });
  };

  const isCurrentlyDark = document.documentElement.classList.contains("dark-mode");
  syncIcons(isCurrentlyDark);

  themeButtons.forEach(button => {
    button.addEventListener("click", () => {
      const isDark = document.documentElement.classList.toggle("dark-mode");
      
      localStorage.setItem("theme", isDark ? "dark" : "light");
      
      syncIcons(isDark);
    });
  });




  

  // 5. Section Title Hover Effect Logic
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
});