import UserContextProvider from "./context/UserContext";

import "./App.css";
import Profile from "./components/Profile";
import Login from "./components/Login";

function App() {
  return (
    <UserContextProvider>
      <h1>User Context</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
