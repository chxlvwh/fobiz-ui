import * as React from 'react';
import classnames from 'classnames';
import { MenuContext } from './menu';
import { useContext } from 'react';

export interface IMenuItemProps {
	index?: string;
	children?: React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
	disabled?: boolean;
}

const MenuItem: React.FC<IMenuItemProps> = (props) => {
	const { index, children, className, style, disabled } = props;
	const context = useContext(MenuContext);
	const classes = classnames('fobiz-menu-item', className, {
		'is-disabled': disabled,
		'is-active': index === context.index,
	});
	const handleClick = () => {
		if (context.onSelect && !disabled && typeof index === 'string') {
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
	index: '0',
	disabled: false,
};

export default MenuItem;
