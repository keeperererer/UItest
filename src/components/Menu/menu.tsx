import React, { FC, createContext, useState } from 'react'
import classNames from 'classnames'
import { MenuItemProps } from './menuItem'
type MenuMode = 'horizontal' | 'vertical'
type SelectCallback = (selectedIndex: number) => void
export interface MenuProps {
  defaultIndex?: number
  className?: string
  mode?: MenuMode
  style?: React.CSSProperties
  onSelect?: SelectCallback
}

interface IMenuContext {
  index: number
  onSelect?: SelectCallback
}

export const MenuContext = createContext<IMenuContext>({ index: 0 })
const Menu: FC<MenuProps> = (props) => {
  // 怎么在props里取到children的
  const { className, mode, style, children, defaultIndex, onSelect } = props
  const [currentActive, setActive] = useState(defaultIndex)
  const classes = classNames('viking-menu', className, {
    'menu-vertical': mode === 'vertical',
  })
  const handleClick = (index: number) => {
    setActive(index)
    onSelect && onSelect(index)
  }
  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : 0,
    onSelect: handleClick,
  }
  const renderChildren = () => {
    // React.children.map跟React.children.foreach都是react提供的用来循环遍历子元素的
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>
      const { displayName } = childElement.type
      if (displayName === 'MenuItem') {
        // 使用cloneElement复制一份index 就不用手动加index了
        return React.cloneElement(childElement, {
          index
        })
      } else {
        console.error(
          'warning: Menu has a child which is not a MenuItem component'
        )
      }
    })
  }
  return (
    <ul className={classes} style={style} data-testid="test-menu">
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  )
}
Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal',
}
export default Menu