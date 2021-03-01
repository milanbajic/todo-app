import React from "react";

class AddTodo extends React.Component {
	state = {
		title: "",
	};

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.addTodo(this.state.title);
		this.setState({ title: "" });
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit} style={{ marginBottom: 10 }}>
				<input
					type="text"
					name="title"
					placeholder="Add ToDo..."
					value={this.state.title}
					style={{ marginRight: 5 }}
					onChange={this.handleChange}
				/>
				<input type="submit" value="Add" />
			</form>
		);
	}
}

export default AddTodo;
