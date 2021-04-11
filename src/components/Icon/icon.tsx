import React, { FC } from 'react'
import classNames from 'classnames'
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome'

export type ThemeProps =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark'

// 继承FontAwesomeIcon所有属性并添加自定义属性
export interface IconProps extends FontAwesomeIconProps {
  theme?: ThemeProps
}

/**
 * 图标
 * ```
 * import { Icon } from 'vikingship'
 * ```
 */
export const Icon: FC<IconProps> = (props) => {
  const { className, theme, ...restProps } = props
  const classes = classNames('viking-icon', className, {
    [`icon-${theme}`]: theme,
  })
  return <FontAwesomeIcon className={classes} {...restProps} />
}
export default Icon
