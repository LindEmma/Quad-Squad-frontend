import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Manager from "./pages/Manager";
import Employee from "./pages/Employee";
import ProjectManager from "./pages/ProjectManager";
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';
import AuthRedirectPage from "./components/AuthRedirectPage";


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" Component={Login} />
          <Route path="/Employee" element={<Employee/>}/>
          <Route path="/Manager" element={<Manager/>}/>
          <Route path="/ProjectManager" element={<ProjectManager/>}/>
          <Route path="/AuthRedirectPage" element={<AuthRedirectPage />} />

        </Routes>
      </Router>
    </>
  );
};

export default App;
