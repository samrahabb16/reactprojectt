import React from 'react'
import Header from './component/header/header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";


function App() {
return (
  <BrowserRouter>
  <Router>
    <Route path="/" element={<Header />} />
    </Router>
</BrowserRouter>
)
}
 export default App;

    