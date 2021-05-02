import React, { FC, useState } from 'react'
import classnames from 'classnames'
import { Icon, ThemeProps } from '../Icon/icon'
import Transition from '../Transition/transition'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
export type AlertType = 'primary' | 'danger' | 'success' | 'warning'
export interface BaseAlertProps {
  title?: string
  closable?: boolean
  customClose?: string
  onClose?: () => void
  children?: React.ReactChild
  type: AlertType
  tipIcon?: IconProp
  tipTheme?: ThemeProps
}

export const Alert: FC<BaseAlertProps> = (props) => {
  const {
    title,
    closable,
    customClose,
    onClose,
    children,
    type,
    tipIcon,
    tipTheme,
  } = props
  const classes = classnames('alert', {
    [`alert-${type}`]: type,
  })
  const customCloseP = customClose || (
    <Icon icon="times" className="window-close" size="lg" />
  )
  const handleClick = () => {
    setVisible(false)
    if (onClose) {
      onClose()
    }
  }

  const [visible, setVisible] = useState(true)

  return (
    <Transition
      in={visible}
      animation="zoom-in-left"
      timeout={300}
      wrapper={true}
    >
      <div className={classes}>
        {title ? (
          <h4 className="alert-title">
            {tipIcon && (
              <Icon
                icon={tipIcon}
                theme={tipTheme}
                style={{ marginRight: 8 }}
              />
            )}
            {title}
          </h4>
        ) : null}
        <p className="alert-message">{children}</p>
        {closable ? <i onClick={handleClick}>{customCloseP}</i> : null}
      </div>
    </Transition>
  )
}

Alert.defaultProps = {
  type: 'success',
  tipIcon: 'question-circle',
}

export default Alert
