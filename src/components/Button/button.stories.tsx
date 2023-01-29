import React from 'react';
import Button from './button';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

const defaultButton = () => <Button onClick={action('clicked')}>Default Button</Button>;
const buttonWithSize = () => (
	<>
		<Button size="lg">Large Button</Button>
		<Button size="sm">Small Button</Button>
	</>
);
const buttonWithType = () => (
	<>
		<Button btnType="primary">Primary Button</Button>
		<Button btnType="danger">Danger Button</Button>
		<Button btnType="link" href="javascript:;">
			Link Button
		</Button>
	</>
);
const disabledButton = () => (
	<>
		<Button btnType="default" disabled>
			default Button
		</Button>
		<Button btnType="primary" disabled>
			primary Button
		</Button>
		<Button btnType="danger" disabled>
			Danger Button
		</Button>
		<Button btnType="link" disabled>
			Link Button
		</Button>
	</>
);
storiesOf('Button Component', module)
	.add('Default', defaultButton)
	.add('Sizes', buttonWithSize)
	.add('Types', buttonWithType)
	.add('Disabled', disabledButton);
