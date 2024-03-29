//buttons
const mainMenuB = document.getElementById("main-menu-button");
const aboutB = document.getElementById("about-button");
const projectsB = document.getElementById("projects-button");
const linksB = document.getElementById("links-button");
const projectsListButton = document.getElementById("project-list-button");

//panels
const topbar = document.getElementById("topbar");
const viewer = document.getElementById("viewer");
const mainMenu = document.getElementById("main-menu");
const about = document.getElementById("about");
const projects = document.getElementById("projects-panel");
const links = document.getElementById("links");

//project panels
const container = document.querySelector(".container");
const projectsList = document.getElementById("projects-list");

//return to main menu
function returnToMainMenu() {
    container.classList.remove("enlarged");
    topbar.textContent = "Main Menu";
    viewer.classList.replace("justify-content-start", "justify-content-center");
    about.classList.replace("d-block", "d-none");
    projects.classList.replace("d-flex", "d-none");
    links.classList.replace("d-flex", "d-none");
    mainMenuB.classList.replace("d-block", "d-none");
    mainMenu.classList.replace("d-none", "d-flex");
};

//display the projects menu
projectsB.onclick = () => {
    container.classList.add("enlarged");
    topbar.textContent = "Projects Page";
    viewer.classList.replace("justify-content-center", "justify-content-start");
    mainMenu.classList.replace("d-flex", "d-none");
    projects.classList.replace("d-none", "d-flex");
};

//display the about
aboutB.onclick = () => {
    topbar.textContent = "About Page";
    mainMenu.classList.replace("d-flex", "d-none");
    about.classList.replace("d-none", "d-block");
    mainMenuB.classList.replace("d-none", "d-block");
};

//display the links
linksB.onclick = () => {
    topbar.textContent = "Links Page";
    mainMenu.classList.replace("d-flex", "d-none");
    links.classList.replace("d-none", "d-flex");
    mainMenuB.classList.replace("d-none", "d-block");
};
