import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, FC, ReactNode } from 'react';
import classnames from 'classnames';

export type ButtonSize = 'lg' | 'sm';
export type ButtonType = 'primary' | 'default' | 'danger' | 'link';

export interface BaseButtonProps extends ButtonHTMLAttributes<HTMLElement> {
	/** 类名 */
	className?: string;
	/** 按钮失效状态 */
	disabled?: boolean;
	/** 设置按钮大小 */
	size?: ButtonSize;
	/** 设置按钮类型 */
	btnType?: ButtonType;
	children?: ReactNode;
	/** 点击跳转的地址，指定此属性 button 的行为和 a 链接一致 */
	href?: string;
}

type CommonButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLAnchorElement>;
export type ButtonProps = Partial<CommonButtonProps> & AnchorButtonProps;

/**
 * Button 按钮用于开始一个即时操作。
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
