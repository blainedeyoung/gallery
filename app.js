//buttons
const mainMenuB = document.getElementById("mainMenuButton");
const aboutB = document.getElementById("aboutButton");
const projectsB = document.getElementById("projectsButton");
const linksB = document.getElementById("linksButton");

//panels
const topbar = document.getElementById("topbar");
const mainMenu = document.getElementById("mainMenu");
const about = document.getElementById("about");
const projects = document.getElementById("projects");
const links = document.getElementById("links");

//return to main menu
mainMenuB.onclick = () => {
    topbar.innerHTML = "Main Menu";
    about.style.display = "none";
    projects.style.display = "none";
    links.style.display = "none";
    mainMenuB.style.display = "none";
    mainMenu.style.display = "flex";
};

//display the about
aboutB.onclick = () => {
    topbar.innerHTML = "About Page";
    mainMenu.style.display = "none";
    about.style.display = "block";
    mainMenuB.style.display = "block";
};

//display the projects
projectsB.onclick = () => {
    topbar.innerHTML = "Projects Page";
    mainMenu.style.display = "none";
    projects.style.display = "flex";
    mainMenuB.style.display = "block";
    //might need this when we get more projects
    //document.getElementById("viewer").style.overflow = 'scroll';
};

//display the links
linksB.onclick = () => {
    topbar.innerHTML = "Links Page";
    mainMenu.style.display = "none";
    links.style.display = "flex";
    mainMenuB.style.display = "block";
};