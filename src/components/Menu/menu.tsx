import * as React from 'react';
import classnames from 'classnames';
import { createContext } from 'react';
import { IMenuItemProps } from './menuItem';

type MenuMode = 'vertical' | 'horizontal';
type SelectCallback = (selectedIndex: number) => void;
export interface IMenuProps {
	children?: React.ReactNode;
	defaultIndex?: number;
	classNames?: string;
	mode?: MenuMode;
	style?: React.CSSProperties;
	onSelect?: SelectCallback;
}

interface IMenuContext {
	index: number;
	onSelect?: SelectCallback;
}

export const MenuContext = createContext<IMenuContext>({ index: 0 });

const Menu: React.FC<IMenuProps> = (props) => {
	const { defaultIndex, classNames, mode, style, onSelect, children } = props;
	const [currentActiveIndex, setCurrentActiveIndex] = React.useState<number>(defaultIndex as number);

	const classes = classnames('fobiz-menu', classNames, {
		'menu-vertical': mode === 'vertical',
	});
	const handleSelect = (index: number) => {
		setCurrentActiveIndex(index);
		if (onSelect) {
			onSelect(index);
		}
	};
	const passedContext: IMenuContext = {
		index: currentActiveIndex,
		onSelect: handleSelect,
	};
	const renderChildren = () => {
		return React.Children.map(children, (child, index) => {
			const childElement = child as React.FunctionComponentElement<IMenuItemProps>;
			const { name: tagName } = childElement.type;
			if (tagName === 'MenuItem') {
				return React.cloneElement(childElement, { index });
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
	defaultIndex: 0,
	mode: 'horizontal',
};

export default Menu;
