import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addReminder } from "../actions/index";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
		}
	}

	addReminder() {
		this.props.addReminder(this.state.text);
	}

	renderReminder() {
		const { reminders } = this.props;
		return (
			<ul>
				{
					reminders.map(reminder => {
						return(
							<li
								key={reminder.id}
							>
								{reminder.text}
							</li>
						)
					})
				}
			</ul>
		)
	}

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
							onChange={event=> this.setState({text:event.target.value})}
						/>
					</div>
					<div className="App__form-btn">
						<button
							type="button"
							className="App__form-btn--success"
							onClick={() => this.addReminder()}
						>
							Add Events
						</button>
					</div>
					<div className="App_show-list-area">
						{ this.renderReminder() }
					</div>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		reminders: state,
	}
}

export default connect(mapStateToProps, { addReminder })(App);