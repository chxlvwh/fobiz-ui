import React from 'react';
import Button from './button';
import { ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';

export default {
	title: 'Components/Button',
	component: Button,
	argTypes: {
		disabled: { control: { type: 'boolean' }, defaultValue: false },
		href: { control: { type: 'text' }, defaultValue: '' },
	},
};

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Playground = Template.bind({});
Playground.args = {
	size: 'lg',
	children: 'Button',
};

// 👇 Each story then reuses that template
export const Default = () => <Button onClick={action('clicked')}> default button </Button>;

export const Sizes = () => (
	<>
		<Button size="lg"> large button </Button>
		<Button size="sm"> small button </Button>
	</>
);

export const Types = () => (
	<>
		<Button btnType="primary"> primary button </Button>
		<Button btnType="danger"> danger button </Button>
		<Button btnType="link" href="https://google.com">
			{' '}
			link button{' '}
		</Button>
	</>
);
