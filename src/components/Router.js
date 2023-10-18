import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Navigation from "components/Navigation";
import Profile from "routes/Profile";

const AppRouter = ({ refreshUser, isLoggedIn, userObj }) => {
  return (
    <Router>
      <Switch>
        <>
          {isLoggedIn ? (
            <div
              style={{
                maxWidth: 890,
                width: "100%",
                margin: "0px auto",

                display: "flex",
                justifyContent: "center",
              }}
            >
              {isLoggedIn && <Navigation userObj={userObj} />}
              <Route exact path="/">
                <Home userObj={userObj} />
              </Route>
              <Route exact path="/profile">
                <Profile userObj={userObj} refreshUser={refreshUser} />
              </Route>
            </div>
          ) : (
            <>
              <Route exact path="/">
                <Auth />
              </Route>
            </>
          )}
        </>
      </Switch>
    </Router>
  );
};
export default AppRouter;
