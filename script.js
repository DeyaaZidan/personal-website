// Language switcher removed. The website is English-only.

// CV link: uses the final CV already stored in the repository.
document.addEventListener("DOMContentLoaded", () => {
  const cvSection = document.querySelector("#cv");
  if (!cvSection) return;

  const description = cvSection.querySelector("p");
  const status = cvSection.querySelector(".coming");
  if (description) {
    description.textContent = "View or download my latest CV.";
  }
  if (status) {
    const link = document.createElement("a");
    link.className = "coming";
    link.href = "cv/Deyaa_Zidan_CV_IT_Refined.docx";
    link.target = "_blank";
    link.rel = "noopener";
    link.textContent = "View CV ↗";
    status.replaceWith(link);
  }
});
