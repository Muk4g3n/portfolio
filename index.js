const links = document.querySelectorAll(".menu ul li");
const link1 = document.querySelector("#link1");
const link2 = document.querySelector("#link2");
const link3 = document.querySelector("#link3");
const active_Link = document.querySelector(".active");
const about = document.querySelector(".about-content");
const projects = document.querySelector(".projects-content");
const resume = document.querySelector(".resume-content");
// nav transition
const setActive = (activeAnchor) => {
  const coords = activeAnchor.getBoundingClientRect();
  active_Link.style.setProperty("top", `${coords.top - 95}px`);
  active_Link.style.setProperty("left", `${coords.left - 225}px`);
  active_Link.style.setProperty("height", `${coords.height}px`);
  active_Link.style.setProperty("width", `${coords.width}px`);
};

setActive(link1);
link1.addEventListener("click", () => {
  // links.forEach((link) => removeActive(link));
  // link1.classList.add("active");
  setActive(link1);
  projects.style.setProperty("opacity", "0");
  resume.style.setProperty("opacity", "0");
  about.style.setProperty("opacity", "1");
});
link2.addEventListener("click", () => {
  // links.forEach((link) => removeActive(link));
  // link2.classList.add("active");
  setActive(link2);
  projects.style.setProperty("opacity", "0");
  about.style.setProperty("opacity", "0");
  resume.style.setProperty("opacity", "1");
});
link3.addEventListener("click", () => {
  // links.forEach((link) => removeActive(link));
  // link3.classList.add("active");
  setActive(link3);
  about.style.setProperty("opacity", "0");
  resume.style.setProperty("opacity", "0");
  projects.style.setProperty("opacity", "1");
});
