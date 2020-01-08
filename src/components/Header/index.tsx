import React from 'react';
import { Layout, Menu } from 'antd';
import styled from 'styled-components';

const Header: React.FC = () => {
  const handleOnSelect = ({ key }): void => {
    console.log(key);
  };

  const Logo = styled.img`
    height: 50px;
    margin: 5px 50px 0 0;
    float: left;
  `;

  return (
    <Layout.Header>
      <div>
        <Logo src="https://static.wixstatic.com/media/c4eee6_bc636ab2bdf54adbb13d854015fd84b6~mv2.png/v1/fill/w_160,h_112,al_c,q_85,usm_0.66_1.00_0.01/FanFood%20Logo%20Full%20Res%20RGB%20Copy.webp" />
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['home']}
        style={{ lineHeight: '64px' }}
        onSelect={handleOnSelect}
      >
        <Menu.Item key="home">Home</Menu.Item>
        <Menu.Item key="venues">Venues</Menu.Item>
        <Menu.Item key="store">Stores</Menu.Item>
      </Menu>
    </Layout.Header>
  );
};

export default Header;
