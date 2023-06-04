import * as React from 'react';
import Sider from 'antd/es/layout/Sider';
import { Avatar, Menu } from 'antd';
import { useNavigate } from 'react-router';

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
    onClick={(item) => {handleMenuClick(item.key)}}
    style={{height: '100vh', fontWeight: 900, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#000000'}}
      theme="dark"
      mode="inline"
      defaultSelectedKeys={['4']}
    >
      {menuItems.map((item, index) => {
        return (
          <Menu.Item key={String(index + 1)}>
            <Avatar src={item.img} shape='square' style={{backgroundColor: '#ffffff', marginRight: 10}}/>
            {item.label}
          </Menu.Item>
        )
      })}
      {/* items={menuItems.map(
        (item, index) => ({
          key: String(index + 1),
          // icon: React.createElement(icon),
          label: item.label,
        }),
      )} */}
    </Menu>
  </Sider>
  );
}

export default MenuNavbar;