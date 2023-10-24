import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import './App.css';
import { useSelector } from "react-redux";

function App() {
  
  // const { user } = useSelector((state) => state.user);
  // console.log(user);

  return (
    <div className="app">
      <Header />


      <div className="app__body">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
};

export default App;
