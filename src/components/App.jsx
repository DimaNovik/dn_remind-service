import React, {Component} from 'react';

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="App__title">
					Reminder Service. Beta
				</div>
				<div className="App__form">
					<div className="App__form-input">
						<input
							type="text"
							placeholder="I have to ..."
						/>
					</div>
					<div className="App__form-btn">
						<button>Add Events</button>
					</div>
				</div>
			</div>
		)
	}
}

export default App;