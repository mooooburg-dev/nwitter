import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Profile from "../routes/Profile";
import Navigation from "components/Navigation";

const AppRouter = ({ refreshUser, isLoggedIn, userObj }) => {
  return (
    <Router>
      {isLoggedIn && <Navigation userObj={userObj} />}
      <Switch>
        {isLoggedIn ? (
          <div
            style={{
              maxWidth: 890,
              width: "100%",
              margin: "0 auto",
              marginTop: 80,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Route exact path="/">
              <Home userObj={userObj}></Home>
            </Route>
            <Route exact path="/profile">
              <Profile userObj={userObj} refreshUser={refreshUser}></Profile>
            </Route>
          </div>
        ) : (
          <>
            <Route exact path="/">
              <Auth></Auth>
            </Route>
            <Redirect from="*" to="/" />
          </>
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;
