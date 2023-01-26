import React from 'react';
import Button from './components/Button/button';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Button onClick={() => alert(1)}>Hello</Button>
				<Button btnType="primary" className="test-btn">
					Hello
				</Button>
				<Button btnType="danger">Hello</Button>
				<Button btnType="primary" size="lg">
					Hello
				</Button>
				<Button btnType="primary" size="sm">
					Hello
				</Button>
				<Button btnType="danger" size="lg">
					Hello
				</Button>
				<Button btnType="danger" size="sm">
					Hello
				</Button>
				<Button btnType="danger" size="sm" disabled>
					disabled button
				</Button>
				<Button btnType="link" href="https://www.baidu.com" target="_blank">
					Hello
				</Button>
				<Button btnType="link" href="https://www.baidu.com" disabled>
					Hello
				</Button>
			</header>
		</div>
	);
}

export default App;
