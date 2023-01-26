import * as React from 'react';
import classnames from 'classnames';
import { MenuContext } from './menu';
import { useContext } from 'react';

interface IMenuItemProps {
	index: number;
	children?: React.ReactNode;
	classNames?: string;
	style?: React.CSSProperties;
	disabled?: boolean;
}

const MenuItem: React.FC<IMenuItemProps> = (props) => {
	const { index, children, classNames, style, disabled } = props;
	const context = useContext(MenuContext);
	const classes = classnames('fobiz-menu-item', classNames, {
		'is-disabled': disabled,
		'is-active': index === context.index,
	});
	const handleClick = () => {
		if (context.onSelect && !disabled) {
			context.onSelect(index);
		}
	};
	return (
		<li className={classes} style={style} onClick={handleClick}>
			{children}
		</li>
	);
};

MenuItem.defaultProps = {
	index: 0,
	disabled: false,
};

export default MenuItem;
