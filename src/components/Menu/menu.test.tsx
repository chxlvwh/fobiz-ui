import * as React from 'react';
import { fireEvent, render, RenderResult } from '@testing-library/react';
import Menu, { IMenuProps } from './menu';
import MenuItem from './menuItem';

const testProps: IMenuProps = {
	defaultIndex: '0',
	onSelect: jest.fn(),
	className: 'test-class',
};
const testVerticalProps: IMenuProps = {
	mode: 'vertical',
	defaultIndex: '0',
};
const genMenu = (props: IMenuProps) => {
	return (
		<Menu {...props}>
			<MenuItem>tab1</MenuItem>
			<MenuItem disabled>tab2</MenuItem>
			<MenuItem>tab3</MenuItem>
		</Menu>
	);
};

let wrapper: RenderResult, menuElement: HTMLElement, tab1Element: HTMLElement, disabledElement: HTMLElement;
describe('test Menu component', () => {
	beforeEach(() => {
		wrapper = render(genMenu(testProps));
		menuElement = wrapper.container.getElementsByTagName('ul')[0];
		tab1Element = wrapper.getByText('tab1');
		disabledElement = wrapper.getByText('tab2');
	});
	it('should render correct Menu and MenuItem based on default props', function () {
		expect(menuElement).toBeInTheDocument();
		expect(menuElement).toHaveClass('fobiz-menu test-class');
		expect(menuElement.getElementsByTagName('li').length).toBe(3);
		expect(tab1Element).toHaveClass('fobiz-menu-item is-active');
		expect(disabledElement).toHaveClass('fobiz-menu-item is-disabled');
	});
	it('should change active and call the right callback', function () {
		const tab3Element = wrapper.getByText('tab3');
		fireEvent.click(tab3Element);
		expect(tab3Element).toHaveClass('is-active');
		expect(tab1Element).not.toHaveClass('is-active');
		// toHaveBeenCalledWith中传的是testProps.onSelect的参数
		expect(testProps.onSelect).toHaveBeenCalledWith('2');
		fireEvent.click(disabledElement);
		expect(disabledElement).not.toHaveClass('is-active');
		expect(testProps.onSelect).not.toHaveBeenCalledWith('1');
	});
	it('should render vertical mode when mode is set to vertical', function () {
		wrapper = render(genMenu(testVerticalProps));
		menuElement = wrapper.container.getElementsByTagName('ul')[0];
		expect(menuElement).toHaveClass('menu-vertical');
	});
});
