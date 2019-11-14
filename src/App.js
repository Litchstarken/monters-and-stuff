import React, {Component} from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';


class App extends Component{
   constructor() {
     super();
     this.state = {
       monsters: [],
       searchField: ''
     }
     this.inputChange = this.inputChange.bind(this);
   }
   
   componentDidMount() {
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(response => response.json())
     .then( users => this.setState({ monsters: users }) )
     .then(newResponse => console.log(newResponse))
   }
   inputChange (event) {
      this.setState({
        searchField: event.target.value
      })
   }
   

  render(){
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter( monster => 
        monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className="App">
      <input type="search" placeholder="look for any robot" onChange={this.inputChange}/> 
      <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
    

export default App;
