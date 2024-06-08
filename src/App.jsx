import { useState, useEffect } from "react";
import UserHome from "./screens/Home/UserHome";
import GuestHome from "./screens/Home/GuestHome";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
    }
  }, []);

  return user === null ? <GuestHome /> : <UserHome user={user} />;
};

export default App;
