import './App.css';
import Landing from './Components/Landing'
import Main from './Components/Main'
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {

  return (
    <div className="container">
    <BrowserRouter>
    <Switch>
     <Route exact path="/" component={Landing} />
     <Route path="/Main" component={Main} />
   </Switch>
   </BrowserRouter>
   </div>
  );
}

export default App;
