import './App.css';
import {Component} from "react";
import SupervisorForm from "./components/SupervisorForm";


export class App extends Component{
    render () {
      return (
          <div className="App">
              <SupervisorForm />
          </div>
      );
    }
}

export default App;
