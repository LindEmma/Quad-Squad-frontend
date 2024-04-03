# Quad Squad - project planner

## A group project by Emma Lind, Josefin Mikaelsson, Carl Fransson & Gustav Lind

### **Components:**

**ActiveProjectsEmployee.js** uses axios to collect data (projects and timereports connected to user) from server2. The code returns cards with info for each of the projects the user works on. On each card there is a collapse with the users old time reports for the project. The component imports ModalPopup.js which is used to make a new time report and save it to the database. An FetchUsername.js to showcase the users name.

**ActiveProjectsPM.js** uses axios to collect data from server2. The code returns cards with info for each of the projects the user is project manager for. On each card there is info on start- and end date, total planned hours, worked hours, and a progress bar to visually show the projects progress. The component imports ProjectProgressbar.js. The component contains a dropdown that filters through active, upcoming and done projects.

**ShowPersonnel.js** uses axios to collect data (people, projects and time reports) from server4. The code returns cards with info for each of the personnel and a collapse with their projects and time reports. If the personnel isn't connected to a project, the collapse button disables.

**AuthRedirectPage.js** This component catches code from the url and then checks if code is true, then sends it to the FetchAccessToken component. After that we get userData from localstorage and creating a switch case depending on which user role the user have it redirect that user to the right page

**FetchAccessToken.js** This component takes “code” from AuthRedirectPage component as a parameter, then inside a try catch state we create a fetch to check with the server if this user exists in the database. If the user exists then we store that user inside localstorage

**FetchUsername.js** In this component we check the username and userrole with fetch, and if response is ok we save that information inside setUserName. If no user is found we catch it and return a error to the console

**Login.js** The login form includes fields for employee ID and password. When the form is submitted, the LoginHandler function is called, which sends a POST request to a server endpoint "/submitFormToNotion" with the provided employee ID and password. If the login is successful (status code 200), it calls the GetUsernameAndRole function to fetch user data including their role from another server endpoint "/usernameAndRole". Depending on the user's role (Anställd, Chef, Projektledare), the component redirects the user to different routes using the useHistory hook. If the login fails, an error message is displayed.

**ModalPopUp.js** is a popup box accessed through project cards by clicking the 'report time' button. It allows users to log the day, hours worked on a project, and add a comment. ModalPop.js transmits this information, along with the project it was reported from and the logged-in user, utilizing axios to send the data to server3."

**Navbar.js**

**NotionLogin.js** In this component we create a variable with a link to notions Oauth login. In the return tags we create a simple button with a onclick function. 

**ProjectProgressBar.js** imports ProgressBar from react bootstrap and takes props for the variant and now (percent of the bar to be filled). If a project in _ActiveProjectsPM.js_ is more than 100% done, the progress bar will turn red.

### **Pages:**

**Employee.js** is the page shown when a user with the role of employee logs in. The page imports components _ActiveProjectsEmployee.js_ which shows the content of the page and _Navbar.js_ which shows the header.

**Manager.js** is the page shown when a user with the role of manager logs in. The page imports the components _ShowPersonnel.js_ which shows the content of the page and _Navbar.js_ which shows the header.

**ProjectManager.js** is the page shown when a user with the role of project manager logs in. The page imports the components _ActiveProjectsPM.js_ which shows the content of the page and _Navbar.js_ which shows the header.

---
