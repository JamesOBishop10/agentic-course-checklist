document.addEventListener("DOMContentLoaded", function () {
  const badgeNvidia = document.getElementById("badge-nvidia");
  const badgeLangchain = document.getElementById("badge-langchain");
  const checkNvidia = document.getElementById("nvidia");
  const checkLangchain = document.getElementById("langchain");

  checkNvidia.addEventListener("change", () => {
    badgeNvidia.classList.toggle("hidden", !checkNvidia.checked);
  });

  checkLangchain.addEventListener("change", () => {
    badgeLangchain.classList.toggle("hidden", !checkLangchain.checked);
  });

  document.querySelectorAll("input[type=checkbox]").forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      checkbox.parentElement.style.textDecoration = checkbox.checked ? "line-through" : "";
      checkbox.parentElement.style.color = checkbox.checked ? "#aaa" : "#000";
    });
  });
});
