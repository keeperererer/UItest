import React from 'react'
import Button, { ButtonType, ButtonSize } from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu
          defaultIndex={0}
          onSelect={(index) => {
            alert(index)
          }}
        >
          <MenuItem>cool link0</MenuItem>
          <MenuItem disabled>cool link1</MenuItem>
          <MenuItem>cool link2</MenuItem>
        </Menu>

        <Button autoFocus>hello world</Button>
        <Button disabled>hello world</Button>
        <Button>hello world</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
          hello world
        </Button>
        <Button btnType={ButtonType.Link} href="wht.im">
          万花筒
        </Button>
      </header>
    </div>
  )
}

export default App
