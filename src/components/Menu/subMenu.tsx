import * as React from 'react';
import classnames from 'classnames';
import { FC, useContext, useRef, useState } from 'react';
import { IMenuItemProps } from './menuItem';
import { MenuContext } from './menu';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Icon from '../Icon/icon';
import Transition from '../Transition/transition';

export interface ISubMenuProps {
	index?: string;
	title: string;
	children?: React.ReactNode;
	className?: string;
	defaultOpenSubMenus?: [];
}

export const SubMenu: FC<ISubMenuProps> = (props) => {
	const { title, children, index, className } = props;
	const context = useContext(MenuContext);
	const openSubMenus = context.defaultOpenSubMenus as string[];
	const [isOpen, setIsOpen] = useState(index && context.mode === 'vertical' ? openSubMenus.includes(index) : false);
	const classes = classnames('fobiz-menu-item fobiz-submenu-item', className, {
		'is-active': context.activeIndex.startsWith(index || '0'),
		'is-vertical': context.mode === 'vertical',
		'is-opened': isOpen,
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
		const nodeRef = useRef(null);
		return (
			<Transition in={isOpen} timeout={300} animation="zoom-in-top" nodeRef={nodeRef}>
				<ul ref={nodeRef} className={subMenuClasses}>
					{childrenElement}
				</ul>
			</Transition>
		);
	};
	return (
		<li key={index} className={classes} {...hoverEvents}>
			<div className="submenu-title" {...clickEvents}>
				{title}
				<Icon icon={faAngleDown} className="arrow-icon" />
			</div>
			{renderChildren()}
		</li>
	);
};

export default SubMenu;
