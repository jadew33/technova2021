import "./styles/app.scss";
import Home from "./components/home";
import PersonalitySelection from "./components/onboarding";
import AccountCreation from "./components/onboarding1";
import Dashboard from "./components/dashboard";
import Profile from "./components/profile";
import Bookmarks from "./components/bookmarks";
import Login from "./components/login";
import BookSession from "./components/book";
import { Switch, Route } from "react-router-dom";
import Meeting from "./components/meeting";
import dogs from "./fakedatabase/dogs.js";
import Nav from "./components/nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/login" render={() => <Login />} />
        <Route
          exact
          path="/account-creation"
          render={() => <AccountCreation />}
        />
        <Route
          exact
          path="/personality-selection"
          render={() => <PersonalitySelection />}
        />
        <Route
          exact
          path="/dashboard"
          render={() => <Dashboard dogs={dogs} />}
        />
        <Route exact path="/profile/:id" component={Page} />
        <Route exact path="/bookmarks" render={() => <Bookmarks />} />
        <Route
          exact
          path="/select-meeting-time"
          render={() => <BookSession />}
        />
        <Route exact path="/confirm-meeting" render={() => <Meeting />} />
      </Switch>
    </div>
  );
}

function Page({ match }) {
  let params = match.params;
  let currentDog = dogs.find((dog) => dog.id === params.id);
  return <Profile dog={currentDog} />;
}

export default App;
