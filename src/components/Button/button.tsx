import React from 'react';
import classnames from 'classnames';

export enum ButtonSize {
	Large = 'lg',
	Small = 'sm',
}

export enum ButtonType {
	Primary = 'primary',
	Default = 'default',
	Danger = 'danger',
	Link = 'link',
}

interface BaseButtonProps {
	className?: string;
	disabled?: boolean;
	size?: ButtonSize;
	btnType?: ButtonType;
	children?: React.ReactNode;
	href?: string;
}

type CommonButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>;
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;
export type ButtonProps = Partial<CommonButtonProps> & AnchorButtonProps;
const Button: React.FC<ButtonProps> = (props) => {
	const { className, disabled, size, btnType, children, href, ...restProps } = props;
	// btn, btn-lg, btn-primary
	const classes = classnames('btn', className, {
		[`btn-${btnType}`]: btnType,
		[`btn-${size}`]: size,
		disabled: btnType === ButtonType.Link && disabled,
	});
	if (btnType === ButtonType.Link && href) {
		return (
			<a href={href} className={classes} {...restProps}>
				{children}
			</a>
		);
	} else {
		return (
			<button className={classes} disabled={disabled} {...restProps}>
				{children}
			</button>
		);
	}
};

Button.defaultProps = {
	disabled: false,
	btnType: ButtonType.Default,
};

export default Button;
