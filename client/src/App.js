// import React from 'react';


// function App() {
//   return (
//     <div className="App">

//     </div>
//   );
// }

// export default App;



import React from 'react';
// import './App.css';
import { Route } from 'react-router-dom';
import Callback from './Callback';
import Home from './Home';


function App() {

  return (
    <div className="App" >
      <Route exact path='/' component={Home} exact />
      <Route exact path='/callback' component={Callback} exact />
    </div>
  )
}

export default App;
