import * as React from 'react';
import Sider from 'antd/es/layout/Sider';
import { Avatar, Menu } from 'antd';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';

const MenuNavbar = () => {

  const navigate = useNavigate()

  const menuItems = [
    {label: 'MAIN', path: '/', img: 'https://cdn-icons-png.flaticon.com/128/4555/4555440.png'},
    {label: 'PROJECTS', path: '/projects', img: 'https://cdn-icons-png.flaticon.com/128/5956/5956592.png'},
    {label: 'CONTACTS', path: '/contacts', img: 'https://cdn-icons-png.flaticon.com/128/2343/2343694.png'},
  ]

  const handleMenuClick = (key: String) => {
    navigate(`${menuItems[+key - 1].path}`)
  }

  return (
    <Sider
    style={{backgroundColor: '#000000'}}
    breakpoint="lg"
    collapsedWidth="0"
    onBreakpoint={(broken) => {
      console.log(broken);
    }}
    onCollapse={(collapsed, type) => {
      console.log(collapsed, type);
    }}
  >
    <Menu
    defaultSelectedKeys={['1']}
    onClick={(item) => {handleMenuClick(item.key)}}
    style={{height: '100vh', fontWeight: 900, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#000000'}}
      theme="dark"
      mode="inline"
    >
      {menuItems.map((item, index) => {
        return (
          <Menu.Item key={String(index + 1)}>
            <NavLink to={item.path}><Avatar src={item.img} shape='square' style={{backgroundColor: '#ffffff', marginRight: 10}}/> {item.label}</NavLink>
          </Menu.Item>
        )
      })}
    </Menu>
  </Sider>
  );
}

export default MenuNavbar;