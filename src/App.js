import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";
import { Container, Jumbotron } from "react-bootstrap";

class App extends React.Component {
	state = {
		todos: [],
	};

	componentDidMount() {
		axios
			.get("https://jsonplaceholder.typicode.com/todos?_limit=5")
			.then((res) => this.setState({ todos: res.data }));
	}

	markComplete = (id) => {
		this.setState({
			todos: this.state.todos.map((todo) => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			}),
		});
	};

	// Delete ToDo

	deleteTodo = (id) => {
		axios
			.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
			.then((res) =>
				this.setState({
					todos: [...this.state.todos.filter((todo) => todo.id !== id)],
				})
			);
	};

	// Add ToDo

	addTodo = (title) => {
		axios
			.post("https://jsonplaceholder.typicode.com/todos", {
				title: title,
				completed: false,
			})
			.then((res) => this.setState({ todos: [...this.state.todos, res.data] }));
	};

	render() {
		return (
			<Router>
				<div>
					<Header />
					<Route
						exact
						path="/"
						render={(props) => (
							<React.Fragment>
								<Container style={{ marginTop: 70 }}>
									<AddTodo addTodo={this.addTodo} />{" "}
									<Jumbotron class="jumbotron jumbotron-fluid">
										<Todos
											todos={this.state.todos}
											markComplete={this.markComplete}
											deleteTodo={this.deleteTodo}
										/>
									</Jumbotron>
								</Container>
							</React.Fragment>
						)}
					/>
					<Route exact path="/about" component={About} />
				</div>
			</Router>
		);
	}
}

export default App;
