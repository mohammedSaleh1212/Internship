const keys = [
  "7", "8", "9", "/",
  "4", "5", "6", "*",
  "1", "2", "3", "-",
  "0", ".", "=", "+",
  "C"
];

const container = document.getElementById("calculator-buttons");

keys.forEach(key => {
  container.insertAdjacentHTML(
    "beforeend",
    `
      <div class="col-3">
        <button
          class="btn btn-outline-modern w-100 calc-btn"
          data-value="${key}">
          ${key}
        </button>
      </div>
    `
  );
});

const display = document.getElementById("display");

document.addEventListener("click", e => {

  const btn = e.target.closest(".calc-btn");

  if (!btn) return;

  const value = btn.dataset.value;

  if (value === "C") {
    display.value = "0";
    return;
  }

  if (value === "=") {
    try {
      display.value = eval(display.value);
    } catch {
      display.value = "Error";
    }
    return;
  }

  if (display.value === "0" || display.value === "Error") {
    display.value = value;
  } else {
    display.value += value;
  }

});