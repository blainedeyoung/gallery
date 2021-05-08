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
    //might have to add this if I change the viewer to overflow for projects
    //document.getElementById("viewer").style.overflow = 'hidden';
    about.setAttribute('class', 'hidden');
    projects.setAttribute('class', 'hidden');
    links.setAttribute('class', 'hidden');
    mainMenuB.setAttribute('class', 'hidden');
    mainMenu.setAttribute('class', 'visible');
};

//display the about
aboutB.onclick = () => {
    topbar.innerHTML = "Displaying About page";
    mainMenu.setAttribute('class', 'hidden');
    about.setAttribute('class', 'visible');
    mainMenuB.setAttribute('class', 'visible');
};

//display the projects
projectsB.onclick = () => {
    topbar.innerHTML = "Displaying Projects page";
    mainMenu.setAttribute('class', 'hidden');
    projects.setAttribute('class', 'visible');
    mainMenuB.setAttribute('class', 'visible');
    //might need this when we get more projects
    //document.getElementById("viewer").style.overflow = 'scroll';
};

//display the links
linksB.onclick = () => {
    topbar.innerHTML = "Displaying Links page";
    mainMenu.setAttribute('class', 'hidden');
    links.setAttribute('class', 'visible');
    mainMenuB.setAttribute('class', 'visible');
};