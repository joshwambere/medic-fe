import React from 'react'
import Router from 'next/router'
import { Menu } from 'antd'
import { TopMenus } from './DashboardMenus'

const Menus = ({ changeRoute }: any) => {
  return (
    <Menu defaultSelectedKeys={['/dashboard']} style={{ borderRight: 0 , minHeight: '100vh'}}>
      <Menu.ItemGroup
        className="mt-4"
        title={
          <span className="text-sm uppercase" style={{ paddingLeft: '1rem' }}>
            <i>Dashboard</i>
          </span>
        }>
        {TopMenus.map((menu) => (
          <Menu.Item
            className={Router.pathname === menu.url ? 'ant-menu-item-selected' : ''}
            key={menu.defaultSelectedKey}
            onClick={() => changeRoute(`${menu.url}`)}>
            <span className="font-normal opacity-50 text-xs text-black">{menu.name}</span>
          </Menu.Item>
        ))}
      </Menu.ItemGroup>
    </Menu>
  )
}

export default Menus