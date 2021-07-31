import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

//Components
import Header from "./Components/Header/Header";

//Pages
import Home from "./Pages/Home/Home";
import Character from "./Pages/Character/Character";
import NotFound from "./Pages/NotFound/NotFound";

const App = () =>(
  <Router>
     <Header/>
     <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/:characterId" element={<Character />}/>
        <Route path="/*" element={<NotFound />}/>
     </Routes>
  </Router>
)

export default App;
