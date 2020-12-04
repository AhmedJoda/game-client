import { useEffect, useState } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Screens from "./components/screen/screens";
import AddMatch from "./components/addMatch/addMatch";
import NotFound from "./components/notFound";
import Axios from "axios";

import "./App.css";

function App() {
  const [matches, setMatches] = useState([]);
  const url = "https://game-task-server.herokuapp.com/api/matches";

  useEffect(() => {
    async function getMatches() {
      const { data } = await Axios.get(url);
      setMatches(data);
    }
    getMatches();
  });

  const deleteMatch = async (id) => {
    await Axios.delete(`${url}/${id}`);
  };

  return (
    <Switch>
     
      <Route path="/match/:id" component={AddMatch} />

      <Route path="/not-found" component={NotFound} /> <Route
        path="/"
        render={(props) => (
          <Screens {...props} matches={matches} deleteMatch={deleteMatch} />
        )}
      />
    </Switch>
  );
}

export default App;
