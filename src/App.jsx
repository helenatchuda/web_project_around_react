import{useState} from "react"
import Header from "./Components/header";
import Profile from "./Components/Profile";
import Cards from "./Components/Cards";
import Popup from "./Components/popup";


function App() {
  const [isOpen, setIsOpen]= useState(true)
  return (
    <>
      <Header 
       />
      <Profile />
      <Popup isOpen={isOpen} />
        <ul className="cards">
          <Cards/>
    </ul>
    </>
  );
}

export default App;
