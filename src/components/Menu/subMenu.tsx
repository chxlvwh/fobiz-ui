import * as React from 'react';
import classnames from 'classnames';
import { FC, useContext } from 'react';
import { IMenuItemProps } from './menuItem';
import { MenuContext } from './menu';

export interface ISubMenuProps {
	index?: number;
	title: string;
	children?: React.ReactNode;
	className?: string;
}

const SubMenu: FC<ISubMenuProps> = (props) => {
	const { title, children, index, className } = props;
	const context = useContext(MenuContext);
	const classes = classnames('fobiz-menu-item fobiz-submenu-item', className, {
		'is-active': context.index === index,
	});
	const renderChildren = () => {
		const childrenElement = React.Children.map(children, (child) => {
			const childElement = child as React.FunctionComponentElement<IMenuItemProps>;
			const { name: tagName } = childElement.type;
			if (tagName === 'MenuItem') {
				return child;
			} else {
				console.error('Warning: SubMenu has a child which is not a MenuItem component');
			}
		});
		return <ul className="fobiz-submenu">{childrenElement}</ul>;
	};
	return (
		<li key={index} className={classes}>
			<div className="submenu-title">{title}</div>
			{renderChildren()}
		</li>
	);
};

export default SubMenu;
