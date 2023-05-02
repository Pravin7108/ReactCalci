import React,{Component} from 'react';
// import Form from "./crud/form";
// import ReactCalci from './components/Calci/reactCalci';
import Calci from './components/Calci/calci';

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
    }
  }

  render() {
    return (
      <div>
      <Calci />
      </div>
    )
  }
}

export default App;