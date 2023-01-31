import * as React from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

export type ThemeType = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';
export interface IIconProps extends FontAwesomeIconProps {
	theme?: ThemeType;
}

const Icon: React.FC<IIconProps> = (props) => {
	const { theme, className, ...restProps } = props;
	const classes = classnames('fobiz-icon', className, {
		[`fobiz-icon-${theme}`]: theme,
	});

	return <FontAwesomeIcon className={classes} {...restProps} />;
};

export default Icon;
