import './App.css';
import Address from './component/Profile/Address';
import FullName from './component/Profile/FullName';
import ProfilePhoto from './component/Profile/ProfilePhoto';



function App() {
  return (
    < div className="App">
        <ProfilePhoto />
      <div>
      My name is <FullName />
      </div>  
      I live in <Address />
    </div>
  );
}

export default App;
