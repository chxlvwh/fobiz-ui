import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Button, { ButtonProps } from './button';

const defaultProps = {
	onClick: jest.fn(),
};

const testProps: ButtonProps = {
	btnType: 'primary',
	size: 'lg',
	className: 'test-class',
};

const disabledProps: ButtonProps = {
	disabled: true,
	onClick: jest.fn(),
};

describe('test Button component', () => {
	// it or test will be ok
	it('should render the correct default button', function () {
		const wrapper = render(<Button {...defaultProps}>CustomButton</Button>);
		const element = wrapper.getByText('CustomButton') as HTMLButtonElement;
		expect(element).toBeInTheDocument();
		expect(element.tagName).toBe('BUTTON');
		expect(element).toHaveClass('btn btn-default');
		expect(element.disabled).toBeFalsy();
		fireEvent.click(element);
		expect(defaultProps.onClick).toHaveBeenCalled();
	});
	it('should render the correct component on different props', function () {
		const wrapper = render(<Button {...testProps}>CustomButton</Button>);
		const element = wrapper.getByText('CustomButton');
		expect(element).toBeInTheDocument();
		expect(element.tagName).toBe('BUTTON');
		expect(element).toHaveClass('btn btn-primary btn-lg test-class');
	});
	it('should render a link when btnType equals link and href is provided', function () {
		const wrapper = render(
			<Button btnType="link" size="lg" href="http://www.baidu.com">
				Link
			</Button>,
		);
		const element = wrapper.getByText('Link');
		expect(element).toBeInTheDocument();
		expect(element.tagName).toBe('A');
		expect(element).toHaveClass('btn btn-link');
	});
	it('should render disabled button when disabled set to true', function () {
		const wrapper = render(<Button {...disabledProps}>CustomButton</Button>);
		const element = wrapper.getByText('CustomButton') as HTMLButtonElement;
		expect(element).toBeInTheDocument();
		expect(element.disabled).toBeTruthy();
		fireEvent.click(element);
		expect(disabledProps.onClick).not.toHaveBeenCalled();
	});
});
