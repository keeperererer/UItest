import React from 'react'
import Button, { ButtonType, ButtonSize } from './components/Button/button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
