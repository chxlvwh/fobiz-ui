import React from 'react';
import Button from './components/Button/button';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';

function App() {
	return (
		<div className="App">
			<Menu defaultIndex="0" defaultOpenSubMenus={['3']}>
				<MenuItem>tab1</MenuItem>
				<MenuItem disabled>tab2</MenuItem>
				<MenuItem>tab3</MenuItem>
				<SubMenu title="dropdown">
					<MenuItem>dropdown1</MenuItem>
					<MenuItem>tab3</MenuItem>
				</SubMenu>
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
