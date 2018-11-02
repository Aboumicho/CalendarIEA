import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import "fullcalendar-reactwrapper/dist/css/fullcalendar.min.css";
import Fullcalendar from "fullcalendar-reactwrapper";

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			events: [
				{
                    title: 'All Day Event',
                    start: '2018-11-02T16:00:00'
				},
				{
                    title: 'All Day Event',
                    start: '2018-11-02T14:30:00'
				},
				{
                    title: 'All Day Event',
                    start: '2018-11-02T17:00'
                },
			]
		}
	}

  render() {
    return (
      <div className="App">
		<div>
			<p>Set up meeting: </p>

		</div>
		<Fullcalendar
		events = {this.state.events}
		navLinks= {true}
		editable= {false}
		eventLimit= {true}
		header = {{
            left: 'prev,next today myCustomButton',
            center: 'title',
            right: 'month,basicWeek,basicDay'
        }}
		/>
      </div>
    );
  }
}

export default App;
