import React from 'react';
import './App.css';
import AddStudent from './components/ca2/AddStudent';
import Fetchstudent2 from './components/ca2/fetchstudent2';
import Welcomer from './components/ca2/Welcomer';



const App: React.FC = () => {
  return (
  <div className="Container">
    <div className="Column1">
      <Welcomer />
    </div>

    <div className="Column2">
      <AddStudent />
    </div>

    <div className="Column3">
      <Fetchstudent2 />
    </div>
  
  </div>
  );
  }
  export default App;