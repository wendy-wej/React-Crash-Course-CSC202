import React from 'react';
import HelloWorld from './components/HelloWorld';
import HelloWorld2 from './components/HelloWorld2';
import HelloWorld3 from "./components/HelloWorld3";
const App = () => {
  return (
    <div>
      <HelloWorld />
      <HelloWorld2 />
      <HelloWorld2 name = 'Wendy'/>
      <HelloWorld3 name = "Kambili"/>
    </div>
);
}
export default App;
