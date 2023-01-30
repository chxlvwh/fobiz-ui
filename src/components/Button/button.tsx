import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, FC, ReactNode } from 'react';
import classnames from 'classnames';

export type ButtonSize = 'lg' | 'sm';
export type ButtonType = 'primary' | 'default' | 'danger' | 'link';

export interface BaseButtonProps extends ButtonHTMLAttributes<HTMLElement> {
	/** 类名 */
	className?: string;
	/** 类名 */
	disabled?: boolean;
	/** 类名 */
	size?: ButtonSize;
	/** 类名 */
	btnType?: ButtonType;
	/** 类名 */
	children?: ReactNode;
	/** 类名 */
	href?: string;
}

type CommonButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLAnchorElement>;
export type ButtonProps = Partial<CommonButtonProps> & AnchorButtonProps;

/**
 * Button 组件。
 *
 * ~~~js
 * // 这样引用
 * import { Button } from 'fobiz-ui'
 * ~~~
 * 支持 HTMLButton 的所有基本属性
 */
export const Button: FC<ButtonProps> = (props) => {
	const { className, disabled, size, btnType, children, href, ...restProps } = props;
	// btn, btn-lg, btn-primary
	const classes = classnames('btn', className, {
		[`btn-${btnType}`]: btnType,
		[`btn-${size}`]: size,
		disabled: btnType === 'link' && disabled,
	});
	if (btnType === 'link' && href) {
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
	btnType: 'default',
};

export default Button;
