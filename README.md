# Quad Squad - project planner

## A group project by Emma Lind, Josefin Mikaelsson, Carl Fransson & Gustav Lind

### **Components:**

**ActiveProjectsEmployee.js** uses axios to collect data (projects and timereports connected to user) from server2. The code returns cards with info for each of the projects the user works on. On each card there is a collapse with the users old time reports for the project. The component imports ModalPopup.js which is used to make a new time report and save it to the database. An FetchUsername.js to showcase the users name.

**ActiveProjectsPM.js** uses axios to collect data from server2. The code returns cards with info for each of the projects the user is project manager for. On each card there is info on start- and end date, total planned hours, worked hours, and a progress bar to visually show the projects progress. The component imports ProjectProgressbar.js. The component contains a dropdown that filters through active, upcoming and done projects.

**ShowPersonnel.js** uses axios to collect data (people, projects and time reports) from server4. The code returns cards with info for each of the personnel and a collapse with their projects and time reports. If the personnel isn't connected to a project, the collapse button disables.

**AuthRedirectPage.js**

**FetchAccessToken.js**

**FetchUsername.js**

**Login.js**

**ModalPopUp.js**

**Navbar.js**

**NotionLogin.js**

**ProjectProgressBar.js** imports ProgressBar from react bootstrap and takes props for the variant and now (percent of the bar to be filled). If a project in _ActiveProjectsPM.js_ is more than 100% done, the progress bar will turn red.

### **Pages:**

**Employee.js** is the page shown when a user with the role of employee logs in. The page imports components _ActiveProjectsEmployee.js_ which shows the content of the page and _Navbar.js_ which shows the header.

**Manager.js** is the page shown when a user with the role of manager logs in. The page imports the components _ShowPersonnel.js_ which shows the content of the page and _Navbar.js_ which shows the header.

**ProjectManager.js** is the page shown when a user with the role of project manager logs in. The page imports the components _ActiveProjectsPM.js_ which shows the content of the page and _Navbar.js_ which shows the header.

---
