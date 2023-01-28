import * as React from 'react';
import classnames from 'classnames';
import { createContext } from 'react';
import { IMenuItemProps } from './menuItem';

type MenuMode = 'vertical' | 'horizontal';
type SelectCallback = (selectedIndex: string) => void;
export interface IMenuProps {
	children?: React.ReactNode;
	defaultIndex?: string;
	className?: string;
	mode?: MenuMode;
	style?: React.CSSProperties;
	onSelect?: SelectCallback;
	defaultOpenSubMenus?: string[];
}

interface IMenuContext {
	index: string;
	onSelect?: SelectCallback;
	mode?: MenuMode;
	defaultOpenSubMenus?: string[];
}

export const MenuContext = createContext<IMenuContext>({ index: '0' });

const Menu: React.FC<IMenuProps> = (props) => {
	const { defaultIndex, className, mode, style, onSelect, children, defaultOpenSubMenus } = props;
	const [currentActiveIndex, setCurrentActiveIndex] = React.useState<string>(defaultIndex || '0');

	const classes = classnames('fobiz-menu', className, {
		'menu-vertical': mode === 'vertical',
		'menu-horizontal': mode !== 'vertical',
	});
	const handleSelect = (index: string) => {
		setCurrentActiveIndex(index);
		if (onSelect) {
			onSelect(index);
		}
	};
	const passedContext: IMenuContext = {
		index: currentActiveIndex ? currentActiveIndex : '0',
		onSelect: handleSelect,
		mode,
		defaultOpenSubMenus,
	};
	const renderChildren = () => {
		return React.Children.map(children, (child, index) => {
			const childElement = child as React.FunctionComponentElement<IMenuItemProps>;
			const { name: tagName } = childElement.type;
			if (tagName === 'MenuItem' || tagName === 'SubMenu') {
				return React.cloneElement(childElement, { index: index.toString() });
			} else {
				console.error('Warning: Menu has a child which is not a MenuItem component');
			}
		});
	};
	return (
		<ul className={classes} style={style}>
			<MenuContext.Provider value={passedContext}>{renderChildren()}</MenuContext.Provider>
		</ul>
	);
};

Menu.defaultProps = {
	defaultIndex: '0',
	mode: 'horizontal',
	defaultOpenSubMenus: [],
};

export default Menu;
