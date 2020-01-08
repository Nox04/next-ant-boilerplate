import React from 'react';
import Header from '../../components/Header';
import { Layout } from 'antd';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const MainContent = styled.div`
  padding-top: 20px;
  height: calc(100vh - 134px);
`;

const MainLayout: React.FC<Props> = (props: Props) => (
  <div>
    <Header />
    <MainContent>
      <Layout.Content>{props.children}</Layout.Content>
    </MainContent>
    <Layout.Footer style={{ textAlign: 'center' }}>FanFood ©2020</Layout.Footer>
  </div>
);

export default MainLayout;
