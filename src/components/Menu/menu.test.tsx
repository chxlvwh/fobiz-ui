import * as React from 'react';
import { fireEvent, render, RenderResult, waitFor } from '@testing-library/react';
import { prettyDOM } from '@testing-library/dom';
import Menu, { IMenuProps } from './menu';
import MenuItem from './menuItem';
import SubMenu from './subMenu';

const testProps: IMenuProps = {
	defaultIndex: '0',
	onSelect: jest.fn(),
	className: 'test-class',
};
const testVerticalProps: IMenuProps = {
	mode: 'vertical',
	defaultIndex: '0',
	defaultOpenSubMenus: ['4'],
};
const logPrettyDom = (dom: Element, withCss?: boolean) => {
	console.log(
		'======[menu.test.tsx：logPrettyDom：]======',
		prettyDOM(dom, Infinity, { filterNode: () => !!withCss }),
	);
};
const genMenu = (props: IMenuProps) => {
	return (
		<Menu {...props}>
			<MenuItem>tab1</MenuItem>
			<MenuItem disabled>tab2</MenuItem>
			<SubMenu title="dropdown">
				<MenuItem>dropdown1</MenuItem>
				<MenuItem>dropdown2</MenuItem>
			</SubMenu>
			<MenuItem>tab3</MenuItem>
			<SubMenu title="dropdown-open">
				<MenuItem>dropdown-open1</MenuItem>
				<MenuItem>dropdown-open2</MenuItem>
			</SubMenu>
		</Menu>
	);
};

const createStyleFile = () => {
	const cssFileContent = `
		.fobiz-submenu {
			display: none;
		}
		.fobiz-submenu.menu-opened {
			display: block;
		}
	`;
	const styleFile = document.createElement('style');
	styleFile.innerHTML = cssFileContent;
	return styleFile;
};
let wrapper: RenderResult,
	wrapper2: RenderResult,
	menuElement: HTMLElement,
	tab1Element: HTMLElement,
	disabledElement: HTMLElement;
describe('test Menu component', () => {
	beforeEach(() => {
		wrapper = render(genMenu(testProps));
		wrapper.container.append(createStyleFile());
		menuElement = wrapper.container.getElementsByTagName('ul')[0];
		tab1Element = wrapper.getByText('tab1');
		disabledElement = wrapper.getByText('tab2');
	});
	it('should render correct Menu and MenuItem based on default props', function () {
		expect(menuElement).toBeInTheDocument();
		expect(menuElement).toHaveClass('fobiz-menu test-class');
		expect(menuElement.querySelectorAll(':scope>li').length).toBe(5);
		expect(tab1Element).toHaveClass('fobiz-menu-item is-active');
		expect(disabledElement).toHaveClass('fobiz-menu-item is-disabled');
	});
	it('should change active and call the right callback', function () {
		const tab3Element = wrapper.getByText('tab3');
		fireEvent.click(tab3Element);
		expect(tab3Element).toHaveClass('is-active');
		expect(tab1Element).not.toHaveClass('is-active');
		// toHaveBeenCalledWith中传的是testProps.onSelect的参数
		expect(testProps.onSelect).toHaveBeenCalledWith('3');
		fireEvent.click(disabledElement);
		expect(disabledElement).not.toHaveClass('is-active');
		expect(testProps.onSelect).not.toHaveBeenCalledWith('1');
	});
	it('should show dropdown items when hover on subMenu', async function () {
		const dropdownElement = wrapper.getByText('dropdown');
		const dropdownFirstElement = wrapper.getByText('dropdown1');
		expect(dropdownFirstElement).not.toBeVisible();
		fireEvent.mouseEnter(dropdownElement);
		await waitFor(() => {
			expect(wrapper.queryByText('dropdown1')).toBeVisible();
		});
		fireEvent.click(dropdownFirstElement);
		expect(testProps.onSelect).toHaveBeenCalledWith('2-0');
		fireEvent.mouseLeave(dropdownElement);
		await waitFor(() => {
			expect(wrapper.queryByText('dropdown1')).not.toBeVisible();
		});
	});
});
describe('test Menu and MenuItem component in vertical mode', () => {
	beforeEach(() => {
		wrapper2 = render(genMenu(testVerticalProps));
		wrapper2.container.append(createStyleFile());
	});
	it('should render vertical mode when mode is set to vertical', function () {
		menuElement = wrapper2.container.getElementsByTagName('ul')[0];
		expect(menuElement).toHaveClass('menu-vertical');
	});
	it('should show dropdown items when click on subMenu for vertical mode', () => {
		const dropDownItem = wrapper2.queryByText('dropdown1');
		expect(dropDownItem).not.toBeVisible();
		fireEvent.click(wrapper2.getByText('dropdown'));
		expect(dropDownItem).toBeVisible();
	});
	it('should show subMenu dropdown when defaultOpenSubMenus contains SubMenu index', () => {
		logPrettyDom(wrapper2.container, true);
		expect(wrapper2.queryByText('dropdown-open1')).toBeVisible();
	});
});
