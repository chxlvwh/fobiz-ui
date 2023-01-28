import * as React from 'react';
import classnames from 'classnames';
import { FC, useContext, useState } from 'react';
import { IMenuItemProps } from './menuItem';
import { MenuContext } from './menu';

export interface ISubMenuProps {
	index?: string;
	title: string;
	children?: React.ReactNode;
	className?: string;
}

const SubMenu: FC<ISubMenuProps> = (props) => {
	const { title, children, index, className } = props;
	const [isOpen, setIsOpen] = useState(false);
	const context = useContext(MenuContext);
	const classes = classnames('fobiz-menu-item fobiz-submenu-item', className, {
		'is-active': context.index === index,
	});
	const handleClick = (e: React.MouseEvent) => {
		e.preventDefault();
		setIsOpen(!isOpen);
	};

	let timer: NodeJS.Timeout;
	const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
		clearTimeout(timer);
		e.preventDefault();
		timer = setTimeout(() => {
			setIsOpen(toggle);
		}, 300);
	};
	const clickEvents =
		context.mode === 'vertical'
			? {
					onClick: handleClick,
			  }
			: {};
	const hoverEvents =
		context.mode !== 'vertical'
			? {
					onMouseEnter: (e: React.MouseEvent) => {
						handleMouse(e, true);
					},
					onMouseLeave: (e: React.MouseEvent) => {
						handleMouse(e, false);
					},
			  }
			: {};
	const renderChildren = () => {
		const subMenuClasses = classnames('fobiz-submenu', {
			'menu-opened': isOpen,
		});
		const childrenElement = React.Children.map(children, (child, i) => {
			const childElement = child as React.FunctionComponentElement<IMenuItemProps>;
			const { name: tagName } = childElement.type;
			if (tagName === 'MenuItem') {
				return React.cloneElement(childElement, {
					index: `${index}-${i}`,
				});
			} else {
				console.error('Warning: SubMenu has a child which is not a MenuItem component');
			}
		});
		return <ul className={subMenuClasses}>{childrenElement}</ul>;
	};
	return (
		<li key={index} className={classes} {...hoverEvents}>
			<div className="submenu-title" {...clickEvents}>
				{title}
			</div>
			{renderChildren()}
		</li>
	);
};

export default SubMenu;
