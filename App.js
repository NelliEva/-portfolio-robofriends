import React, {Component} from 'react';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

class App extends Component {
	constructor() {
		super()
		this.state = {
		 robot:[],
	     searchfield: ''
	 }
	}
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> response.json())
		.then(users => this.setState({robot: users}));
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})
		

	}
	render() {
		const filteredRobot= this.state.robot.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		if (this.state.robot.length ===0) {
			return <h1>Loading</h1>
		} else {

	return (
		<div className='tc'>
		 <h1 className='f1' >RoboFriends</h1>
		 <Searchbox searchChange={this.onSearchChange}/>
		 <Scroll>
		   <ErrorBoundry>
		    <CardList robot={filteredRobot} />
		   </ErrorBoundry>
		 </Scroll>
		</div> 

		);
	}
	}
}
export default App;