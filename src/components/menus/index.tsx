import React from 'react'
import Router from 'next/router'
import { Menu } from 'antd'
import { TopMenus } from './DashboardMenus'
import jwt, { JwtPayload } from 'jsonwebtoken';

const Menus = ({ changeRoute }: any) => {
  const localToken = localStorage.getItem('_galileo_tkn');
  const decodedToken: any = jwt.decode(localToken!);
 
  return (
    <Menu defaultSelectedKeys={['/dashboard']} style={{ borderRight: 0 , minHeight: '100vh'}}>
      <Menu.ItemGroup
        className="mt-4"
        title={
          <span className="text-sm uppercase" style={{ paddingLeft: '1rem' }}>
            <i>Dashboard</i>
          </span>
        }>
        {TopMenus.map((menu) => {
          // Check if the user's role is allowed to access the menu item
          const isAllowed = menu.role.includes(decodedToken.role);

          // Render the menu item only if the user's role is allowed
          if (isAllowed) {
            return (
              <Menu.Item
                className={Router.pathname === menu.url ? 'ant-menu-item-selected' : ''}
                key={menu.defaultSelectedKey}
                onClick={() => changeRoute(`${menu.url}`)}
              >
                <span className="font-normal opacity-50 text-xs text-black">{menu.name}</span>
              </Menu.Item>
            );
          }

          return null; // Skip rendering if the user's role is not allowed
        })}
      </Menu.ItemGroup>
    </Menu>
  )
}

export default Menus