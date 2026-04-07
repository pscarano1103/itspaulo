// Smooth scroll para o botão "Ver projetos"
document.addEventListener("DOMContentLoaded", function () {
  const ctaButton = document.getElementById("cta-button");
  const projectsSection = document.getElementById("projetos");

  if (ctaButton && projectsSection) {
    ctaButton.addEventListener("click", function (e) {
      e.preventDefault();
      projectsSection.scrollIntoView({ behavior: "smooth" });
    });
  }
});
