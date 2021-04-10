import React, { useState } from 'react'
import Button, { ButtonType, ButtonSize } from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Icon from './components/Icon/icon'
import Transition from './components/Transition/transition'
library.add(fas)
function App() {
  const [show, setShow] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
        <Icon icon="coffee" theme="danger" />
        <Menu
          defaultIndex={'0'}
          onSelect={(index) => {
            alert(index)
          }}
          // mode="vertical"
          defaultOpenSubMenus={['2']}
        >
          <MenuItem>cool link0</MenuItem>
          <MenuItem disabled>cool link1</MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>cool link2</MenuItem>
            <MenuItem>cool link12</MenuItem>
          </SubMenu>
        </Menu>
        <Button
          size="lg"
          onClick={() => {
            setShow(!show)
          }}
        >
          Toggle
        </Button>
        <Transition in={show} timeout={300} animation="zoom-in-top">
          <p>jjjj</p>
        </Transition>

        {/* <Button autoFocus>hello world</Button>
        <Button disabled>hello world</Button>
        <Button>hello world</Button>
        <Button btnType="primary" size="lg">
          hello world
        </Button>
        <Button btnType="link" href="wht.im">
          万花筒
        </Button> */}
      </header>
    </div>
  )
}

export default App
