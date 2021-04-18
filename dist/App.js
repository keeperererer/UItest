import React, { useState } from 'react';
import Button from './components/Button/button';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Icon from './components/Icon/icon';
import Transition from './components/Transition/transition';
import AutoComplete from './components/AutoComplete/index';
library.add(fas);
function App() {
    var _a = useState(false), show = _a[0], setShow = _a[1];
    var lakers = [
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
    ];
    var lakersWithNumber = [
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
    ];
    // const handleFetch = (query: string) => {
    //   return lakers.filter(name => name.includes(query)).map(name => ({value: name}))
    // }
    var handleFetch = function (query) {
        return lakersWithNumber.filter(function (player) { return player.value.includes(query); });
    };
    return (React.createElement("div", { className: "App" },
        React.createElement("header", { className: "App-header" },
            React.createElement(Icon, { icon: "coffee", theme: "danger" }),
            React.createElement(Menu, { defaultIndex: '0', onSelect: function (index) {
                    alert(index);
                }, 
                // mode="vertical"
                defaultOpenSubMenus: ['2'] },
                React.createElement(MenuItem, null, "cool link0"),
                React.createElement(MenuItem, { disabled: true }, "cool link1"),
                React.createElement(SubMenu, { title: "dropdown" },
                    React.createElement(MenuItem, null, "cool link2"),
                    React.createElement(MenuItem, null, "cool link12"))),
            React.createElement(Button, { size: "lg", onClick: function () {
                    setShow(!show);
                } }, "Toggle"),
            React.createElement(Transition, { in: show, timeout: 300, animation: "zoom-in-top" },
                React.createElement("p", null, "jjjj")),
            React.createElement(AutoComplete, { fetchSuggestions: handleFetch }))));
}
export default App;
