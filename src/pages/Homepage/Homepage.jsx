import {
  AppstoreAddOutlined,
  DeploymentUnitOutlined,
  HomeOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import { Card, Layout, Space, Tooltip, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import DropProfile from '../../components/molecules/DropProfile/DropProfile';
import { useAuth } from '../../provider/authProvider';
import './Homepage.scss';

const { Header, Content } = Layout;

export const Homepage = () => {
  const pathname = window.location.pathname.split('/')[1];

  const [activeItem, setActiveItem] = useState(
    pathname ? pathname : 'dashboard',
  );

  useEffect(() => {
    setActiveItem(pathname);
  }, [pathname]);

  const navigate = useNavigate();
  const { t } = useTranslation();
  // const { token } = useAuth();

  // if (!token) {
  //   return <Navigate to="/login" />;
  // }

  const IMenu = [
    {
      key: 'man',
      icon: <HomeOutlined />,
      label: t('BREADCRUMB.MAN'),
    },
    {
      key: 'woman',
      icon: <HomeOutlined />,
      label: t('BREADCRUMB.WOMEN'),
    },
    {
      key: 'kids',
      icon: <HomeOutlined />,
      label: t('BREADCRUMB.KIDS'),
    },
  ];
  return (
    <Layout id="layout-container">
      <Header className="layout-header">
        <Typography className="logo-header" onClick={() => navigate('/')}>
          {t('SYSTEM.LOGO_NAME')}
        </Typography>
        <Space className="menu-list" direction="horizontal" size={36}>
          {IMenu.map((item, index) => {
            return (
              <Tooltip title={item.label} key={index} trigger="hover">
                <Space
                  key={index}
                  //   className={`w-100 item-menu ${
                  //     activeItem === item.key ? 'menu-item-active' : ''
                  //   }`}
                  direction="horizontal"
                  //   onClick={() => {
                  //     navigate(item.key), setActiveItem(item.key);
                  //   }}
                >
                  {/* {activeItem === item.key && ( */}
                  <Typography className="title-menu">
                    {item.label.toUpperCase()}
                  </Typography>
                  {/* )} */}
                </Space>
              </Tooltip>
            );
          })}
        </Space>
        <DropProfile />
      </Header>
    </Layout>
  );
};
