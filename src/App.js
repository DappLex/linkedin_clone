import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import './App.css';
import { useSelector } from "react-redux";
import Login from "./Login";

function App() {

  const { user } = useSelector((state) => state.user);

  return (
    <div className="app">
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
        </div>
      )}
    </div>
  );
};

export default App;
