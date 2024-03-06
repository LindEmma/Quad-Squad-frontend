import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from "./Login";
import Employee from "../pages/Employee";
import Manager from "../pages/Manager";
import ProjectManager from "../pages/ProjectManager";


const LoginNavigation = () => {
    const [userRole, setUserRole] = useState('');

    return (
        <Router>
          <Switch>
            <Route path="/login" exact>
              <Login setUserRole={setUserRole} />
            </Route>
            <Route path="/employee" exact>
              {userRole === 'Anställd' ? <Employee /> : <Redirect to="/login" />}
            </Route>
            <Route path="/manager" exact>
              {userRole === 'Chef' ? <Manager /> : <Redirect to="/login" />}
            </Route>
            <Route path="/ProjectManager" exact>
              {userRole === 'Projektledare' ? <ProjectManager /> : <Redirect to="/login" />}
            </Route>
            <Route path="/">
              <Redirect to="/login" />
            </Route>
          </Switch>
        </Router>
      );
    };

export default LoginNavigation
