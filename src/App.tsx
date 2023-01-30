import React, { useState } from 'react';
import Button from './components/Button/button';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { CSSTransition } from 'react-transition-group';
import Input from './components/Input';

function App() {
	const [showMessage, setShowMessage] = useState(false);
	return (
		<div className="App">
			<CSSTransition in={showMessage} timeout={300} classNames="zoom-in-top" unmountOnExit>
				<div>123</div>
			</CSSTransition>
			<Input size="sm" icon={faCoffee} />
			<Input size="sm" append=".com" prepend="http://" />
			<Input size="sm" append=".com" prepend="http://" disabled />
			<Menu defaultIndex="0" defaultOpenSubMenus={['3']}>
				<MenuItem>tab1</MenuItem>
				<MenuItem disabled>tab2</MenuItem>
				<SubMenu title="dropdown">
					<MenuItem>dropdown1</MenuItem>
					<MenuItem>dropdown2</MenuItem>
				</SubMenu>
				<MenuItem>tab3</MenuItem>
			</Menu>
			<div style={{ padding: '20px' }}>
				<Menu defaultIndex="0" mode="vertical" defaultOpenSubMenus={['2']}>
					<MenuItem>tab1</MenuItem>
					<MenuItem disabled>tab2</MenuItem>
					<SubMenu title="dropdown">
						<MenuItem>dropdown1</MenuItem>
						<MenuItem>tab4</MenuItem>
					</SubMenu>
					<MenuItem>tab3</MenuItem>
				</Menu>
			</div>
			<header className="App-header">
				<Button onClick={() => setShowMessage(!showMessage)}>toggle</Button>
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
