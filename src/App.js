//import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import {CardList} from './components/card-list/card-list.components'
import {SearchBox} from './components/search-box/searchBox.components'
class App extends Component{
  constructor(){
    super()
    this.state = {
    monsters : [],
    searchField : ''
  }
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users=> this.setState({monsters : users}))
  }
  handleChange = (e)=>{
    this.setState({searchField : e.target.value})
  }
  render(){
    const {monsters,searchField} = this.state
    const filtredMonsters = monsters.filter(monster =>monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder="search monsters" handleChange={this.handleChange}></SearchBox>
        <CardList monsters = {filtredMonsters}></CardList>
    </div>
    )
  }
}

export default App;
