import React from 'react';
import HelloWorld from './components/HelloWorld';
import HelloWorld2 from './components/HelloWorld2';
import HelloWorld3 from './components/HelloWorld3';
import HelloWorld4 from './components/HelloWorld4';
import HelloWorld5 from './components/HelloWorld5';
import HelloWorld6 from './components/helloworld6/HelloWorld6';
import HelloWorld7 from './components/helloworld7/HelloWorld';
import HelloWorld8 from './components/HelloWorld8';
import './App.css'

const App: React.FC = () => {
  return (
    <div>
      <HelloWorld />
      <HelloWorld2 />
      <HelloWorld2 name = 'Wendy' />
      <HelloWorld3 name = 'Kambili'/>
      <HelloWorld4 />
      <HelloWorld5 />
      <HelloWorld6 />
      <HelloWorld7 />
      <HelloWorld8 />


    </div>
  );
}
export default App;
