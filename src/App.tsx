import React from 'react';
import Button, { ButtonSize, ButtonType } from './components/Button/button';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Button>Hello</Button>
				<Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
					Hello
				</Button>
				<Button btnType={ButtonType.Link} href="https://www.baidu.com">
					Hello
				</Button>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
