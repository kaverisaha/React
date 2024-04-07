import User from "./components/User";

import Profile from "../components/Profile";
import "./App.css";

function App() {
  return (
    <userContextProvider>
      <User />
      <Profile />
    </userContextProvider>
  );
}

export default App;
