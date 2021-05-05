import React, { useState, FC } from 'react'
import classNames from 'classnames'
import { TabsItemProps } from './tabs-item'

type TabStyle = 'underline' | 'outline'

export interface TabProps {
  /**
   * 默认选中的tab
   */
  defaultIndex?: number
  /**
   * tab样式
   */
  styleType?: TabStyle
  onSelect?: (selectedIndx: number) => void
  className?: string
}

export const Tabs: FC<TabProps> = (props) => {
  const { className, defaultIndex, styleType, children, onSelect } = props
  const classes = classNames('tabs-nav', className, {
    'tabs-underline': styleType === 'underline',
    'tabs-outline': styleType === 'outline',
  })
  const [activeIndex, setActiveIndex] = useState(defaultIndex)
  function handleClick(index: number, disabled?: boolean): void {
    if (disabled) {
      return
    }
    setActiveIndex(index)
    if (typeof onSelect === 'function') {
      onSelect(index)
    }
  }
  return (
    <div>
      <nav className={classes}>
        <ul className="tabs-ul">
          {React.Children.map(children, (child, index) => {
            const childElement = child as React.FunctionComponentElement<TabsItemProps>
            const itemLabelClasses = classNames('tabs-label', {
              'tabs-label-active': activeIndex === index,
              'tabs-label-disaled': childElement.props.disabled,
            })
            return (
              <li
                key={index}
                className={itemLabelClasses}
                onClick={() => handleClick(index, childElement.props.disabled)}
              >
                {childElement.props.label}
              </li>
            )
          })}
        </ul>
      </nav>
      {React.Children.map(children, (child, index) => {
        const childElement = child as React.FunctionComponentElement<TabsItemProps>
        return React.cloneElement(childElement, {
          isActive: activeIndex === index,
        })
      })}
    </div>
  )
}

export default Tabs
