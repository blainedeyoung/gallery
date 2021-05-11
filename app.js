//buttons
const mainMenuB = document.getElementById("mainMenuButton");
const aboutB = document.getElementById("aboutButton");
const projectsB = document.getElementById("projectsButton");
const linksB = document.getElementById("linksButton");
const projectsListButton = document.getElementById("projectsListButton");
const bootstrapSitesButton = document.getElementById("bootstrapSitesButton");
const reactAppButton = document.getElementById("reactAppButton");

//panels
const topbar = document.getElementById("topbar");
const viewer = document.getElementById("viewer");
const mainMenu = document.getElementById("mainMenu");
const about = document.getElementById("about");
const projects = document.getElementById("projectsPanel");
const links = document.getElementById("links");

//project panels
const projectsList = document.getElementById("projectsList");
const bootstrapSitesList = document.getElementById("bootstrapSitesList");
const reactAppList = document.getElementById("reactAppList");

//return to main menu
function returnToMainMenu() {
    topbar.innerHTML = "Main Menu";
    viewer.style.display = "flex";
    about.style.display = "none";
    projects.style.display = "none";
    links.style.display = "none";
    mainMenuB.style.display = "none";
    mainMenu.style.display = "flex";
};

//display the projects menu
projectsB.onclick = () => {
    topbar.innerHTML = "Projects Page";
    viewer.style.display = "block";
    mainMenu.style.display = "none";
    projects.style.display = "flex";
    mainMenuB.style.display = "none";
};

//display the about
aboutB.onclick = () => {
    topbar.innerHTML = "About Page";
    mainMenu.style.display = "none";
    about.style.display = "block";
    mainMenuB.style.display = "block";
};

//display the links
linksB.onclick = () => {
    topbar.innerHTML = "Links Page";
    mainMenu.style.display = "none";
    links.style.display = "flex";
    mainMenuB.style.display = "block";
};

//display bootstrap sites list on projectsViewer
projectsListButton.onclick = () => {
  projectsList.style.display = "flex";
  bootstrapSitesList.style.display = "none";
  reactAppList.style.display = "none";
  projectsListButton.style.boxShadow = "0 0 20px gold";
  bootstrapSitesButton.style.boxShadow = "none";
  reactAppButton.style.boxShadow = "none";
}

//display bootstrap sites list on projectsViewer
bootstrapSitesButton.onclick = () => {
  projectsList.style.display = "none";
  bootstrapSitesList.style.display = "flex";
  reactAppList.style.display = "none";
  projectsListButton.style.boxShadow = "none";
  bootstrapSitesButton.style.boxShadow = "0 0 20px gold";
  reactAppButton.style.boxShadow = "none";
}

//display react app list on projectsViewer
reactAppButton.onclick = () => {
  projectsList.style.display = "none";
  bootstrapSitesList.style.display = "none";
  reactAppList.style.display = "flex";
  projectsListButton.style.boxShadow = "none";
  bootstrapSitesButton.style.boxShadow = "none";
  reactAppButton.style.boxShadow = "0 0 20px gold";
}
