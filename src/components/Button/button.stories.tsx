import React from 'react';
import Button from './button';
import { action } from '@storybook/addon-actions';
import { ComponentStory } from '@storybook/react';

export default {
	title: 'Components/Button',
	component: Button,
};

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Playground = Template.bind({});
Playground.args = {
	children: 'Button',
	onClick: action('clicked'),
};
/**
 * Field	Description
 * name							The name of the property.
 * 								argTypes: { label: { name: 'Something' } }
 *
 * type.name					Sets a type for the property.
 * 								argTypes: { label: { type: { name: 'number' } } }
 *
 * type.required				Sets the property as optional or required.
 * 								argTypes: { label: { type: { required: true } }
 *
 * description					Sets a Markdown description for the property.
 * 								argTypes: { label: { description: 'Something' } }
 *
 * table.type.summary			Provide a short version of the type.
 * 								argTypes: { label: { table: { type: { summary: 'a short summary' } }}}
 *
 * table.type.detail			Provides an extended version of the type.
 * 								argTypes: { label: { table: { type: { detail: 'something' } }}}
 *
 * table.defaultValue.summary	Provide a short version of the default value.
 * 								argTypes: { label: { table: { defaultValue: { summary: 'Hello World' } }}}
 *
 * table.defaultValue.detail	Provides a longer version of the default value.
 * 								argTypes: { label: { table: { defaultValue: { detail: 'Something' } }}}
 *
 * control						Associates a control for the property.
 * 								argTypes: { label: { control: { type: 'text'} } }
 * 								Read the Essentials documentation to learn more about controls.
 */
Playground.argTypes = {
	size: {
		control: {
			type: 'select',
			options: [null, 'lg', 'sm'],
		},
		description: 'Setting button size',
		defaultValue: null,
		table: {
			type: {
				summary: `'lg'/'sm'`,
			},
			category: 'Props',
		},
	},
	btnType: {
		control: {
			type: 'select',
			options: ['primary', 'default', 'danger', 'link'],
		},
		description: 'Setting button type',
		defaultValue: 'default',
		table: {
			type: {
				summary: `'primary'/'default'/'danger'/'link'`,
			},
			defaultValue: { summary: 'default' },
			category: 'Props',
		},
	},
	disabled: {
		control: 'boolean',
		defaultValue: false,
		description: 'Button disable status',
		table: {
			type: {
				summary: 'boolean',
			},
			defaultValue: { summary: false },
			category: 'Props',
		},
	},
	href: {
		control: 'text',
		description:
			'Click on the jump address, and specify that the behavior of this attribute button is consistent with that of a link',
		table: {
			type: {
				summary: 'string',
			},
			category: 'Props',
		},
	},
	onClick: {
		description: 'Callback when the button is clicked',
		table: {
			type: {
				summary: 'function',
			},
			category: 'Events',
			defaultValue: {
				summary: '(event) => void',
			},
		},
	},
};

//👇 Each story then reuses that template
export const DefaultButton = Template.bind({});
DefaultButton.args = {
	btnType: 'default',
	children: 'Button',
};
export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
	btnType: 'primary',
	children: 'Button',
};
export const DangerButton = Template.bind({});
DangerButton.args = {
	btnType: 'danger',
	children: 'Button',
};
export const LinkButton = Template.bind({});
LinkButton.args = {
	btnType: 'link',
	children: 'To Link',
	href: 'url',
};
export const SmallButton = Template.bind({});
SmallButton.args = {
	btnType: 'primary',
	children: 'Small',
	size: 'sm',
};
export const LargeButton = Template.bind({});
LargeButton.args = {
	btnType: 'primary',
	children: 'Large',
	size: 'lg',
};

export const DisabledButton = Template.bind({});
DisabledButton.args = {
	btnType: 'primary',
	children: 'Disabled',
	disabled: true,
};
