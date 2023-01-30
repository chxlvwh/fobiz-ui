import React, { useState } from 'react';
import { ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Input } from './input';

export default {
	title: 'Components/Input',
	component: Input,
	argTypes: {
		disabled: { control: { type: 'boolean' }, defaultValue: false },
		prepend: { control: { type: 'text' } },
		append: { control: { type: 'text' } },
		icon: { control: { type: 'text' }, defaultValue: 'search' },
	},
};

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Playground = Template.bind({});
Playground.args = {
	style: { width: '300px' },
};

const ControlledInput = () => {
	const [value, setValue] = useState('');
	return (
		<Input
			value={value}
			defaultValue={value}
			onChange={(e) => {
				setValue(e.target.value);
			}}
		/>
	);
};
const defaultInput = () => (
	<>
		<Input style={{ width: '300px' }} placeholder="placeholder" onChange={action('changed')} />
		<ControlledInput />
	</>
);
const disabledInput = () => <Input style={{ width: '300px' }} placeholder="disabled input" disabled />;

const iconInput = () => <Input style={{ width: '300px' }} placeholder="input with icon" icon="search" />;

const sizeInput = () => (
	<>
		<Input style={{ width: '300px' }} defaultValue="large size" size="lg" />
		<Input style={{ width: '300px' }} placeholder="small size" size="sm" />
	</>
);

const pandInput = () => (
	<>
		<Input style={{ width: '300px' }} defaultValue="prepend text" prepend="https://" />
		<Input style={{ width: '300px' }} defaultValue="google" append=".com" />
	</>
);

export const Default = defaultInput;
export const DisabledInput = disabledInput;
export const IconInput = iconInput;
export const Sizes = sizeInput;
export const PrefixSuffixInput = pandInput;
