import React from "react";
import "./App.css";

function App() {
	return (
		<div className="App">
			<div className="container">
				<h1>To Do List</h1>
				<div className="top">
					<input
						type="text"
						placeHolder="Digite sua tarefa aqui"/>
				</div>
			</div>

			<div>
				{/* <Item /> */}
			</div>

		</div>
	);
}

export default App;
