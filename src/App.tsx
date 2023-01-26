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
				<Button btnType={ButtonType.Primary} size={ButtonSize.Small}>
					Hello
				</Button>
				<Button btnType={ButtonType.Danger} size={ButtonSize.Small}>
					Hello
				</Button>
				<Button btnType={ButtonType.Danger} size={ButtonSize.Small}>
					Hello
				</Button>
				<Button btnType={ButtonType.Danger} size={ButtonSize.Small} disabled>
					disabled button
				</Button>
				<Button btnType={ButtonType.Link} href="https://www.baidu.com">
					Hello
				</Button>
				<Button btnType={ButtonType.Link} href="https://www.baidu.com" disabled>
					Hello
				</Button>
			</header>
		</div>
	);
}

export default App;
