import React from 'react';
import { action } from '@storybook/addon-actions';
import Menu from './menu';
import MenuItem from './menuItem';
import SubMenu from './subMenu';
import { ComponentStory } from '@storybook/react';

const Template: ComponentStory<typeof Menu> = (args) => (
	<Menu {...args}>
		<MenuItem>cool link</MenuItem>
		<MenuItem disabled>disabled</MenuItem>
		<MenuItem>cool link 2</MenuItem>
	</Menu>
);

export const Playground = Template.bind({});
Playground.args = {
	defaultIndex: '0',
	onSelect: (index) => {
		action(`clicked ${index} item`);
	},
};

export default {
	title: 'Components/Menu',
	// excludeStories: ['defaultMenu'],
	component: Menu,
	subcomponents: { MenuItem, SubMenu },
};
