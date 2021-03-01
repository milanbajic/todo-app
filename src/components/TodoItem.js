import React from "react";

class TodoItem extends React.Component {
	getStyle = () => {
		if (this.props.todo.completed) {
			return {
				background: "#f4f4f4",
				textDecoration: this.props.todo.completed ? "line-through" : "none",
			};
		}
	};

	render() {
		const { id, title } = this.props.todo;
		return (
			<div style={this.getStyle()}>
				<p>
					<input
						type="checkbox"
						style={{ marginRight: 10 }}
						onChange={this.props.markComplete.bind(this, id)}
					/>
					{title}
					<button
						type="button"
						class="btn btn-danger btn-sm"
						style={{ marginLeft: 10, borderRadius: 10 }}
						onClick={this.props.deleteTodo.bind(this, id)}
					>
						Delete
					</button>
				</p>
			</div>
		);
	}
}

export default TodoItem;
