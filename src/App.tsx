import React, { useState } from 'react'
import Button, { ButtonType, ButtonSize } from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Icon from './components/Icon/icon'
import Transition from './components/Transition/transition'
import AutoComplete from './components/AutoComplete/index'
library.add(fas)
function App() {
  const [show, setShow] = useState(false)
  const lakers = [
    'bradley',
    'pope',
    'caruso',
    'cook',
    'cousins',
    'james',
    'AD',
    'green',
    'howard',
    'kuzma',
    'McGee',
    'rando',
  ]
  const lakersWithNumber = [
    { value: 'bradley', number: 11 },
    { value: 'pope', number: 1 },
    { value: 'caruso', number: 4 },
    { value: 'cook', number: 2 },
    { value: 'cousins', number: 15 },
    { value: 'james', number: 23 },
    { value: 'AD', number: 3 },
    { value: 'green', number: 14 },
    { value: 'howard', number: 39 },
    { value: 'kuzma', number: 0 },
  ]
  // const handleFetch = (query: string) => {
  //   return lakers.filter(name => name.includes(query)).map(name => ({value: name}))
  // }
  const handleFetch = (query: string) => {
    return lakersWithNumber.filter((player) => player.value.includes(query))
  }
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

        <AutoComplete
          fetchSuggestions={handleFetch}
          //renderOption={renderOption}
        />

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
