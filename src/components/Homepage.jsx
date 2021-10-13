import {
  BarChartOutlined,
  CarryOutOutlined,
  DashboardOutlined,
  DollarCircleOutlined,
  GlobalOutlined,
} from '@ant-design/icons';
import { Col, Row, Typography } from 'antd';
import millify from 'millify';
import React from 'react';
import { Link } from 'react-router-dom';
import { BannerSlider, Cryptocurrencies, Loading, News } from '../components';
import { useGetCryptosQuery } from '../services/cryptoApi';

const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(12);
  const globalStats = data?.data?.stats;

  if (isFetching) return <Loading />;

  return (
    <>
      <BannerSlider />
      <Title level={2} className="heading">
        Crypto Global Stats
      </Title>
      <Row gutter={[15, 15]}>
        <Col span={6}>
          <div className="status-card">
            <div className="status-card__icon">
              <BarChartOutlined />
            </div>
            <div className="status-card__info">
              <h4>{globalStats.total}</h4>
              <span>Total Cryptocurrencies</span>
            </div>
          </div>
        </Col>
        <Col span={6}>
          <div className="status-card">
            <div className="status-card__icon">
              <CarryOutOutlined />
            </div>
            <div className="status-card__info">
              <h4>{millify(globalStats.totalExchanges)}</h4>
              <span>Total Exchanges</span>
            </div>
          </div>
        </Col>
        <Col span={6}>
          <div className="status-card">
            <div className="status-card__icon">
              <DollarCircleOutlined />
            </div>
            <div className="status-card__info">
              <h4>{millify(globalStats.totalMarketCap)}</h4>
              <span>Total Market Cap</span>
            </div>
          </div>
        </Col>
        <Col span={6}>
          <div className="status-card">
            <div className="status-card__icon">
              <DashboardOutlined />
            </div>
            <div className="status-card__info">
              <h4>{millify(globalStats.total24hVolume)}</h4>
              <span>Total 24h Volume</span>
            </div>
          </div>
        </Col>
        <Col span={6}>
          <div className="status-card">
            <div className="status-card__icon">
              <GlobalOutlined />
            </div>
            <div className="status-card__info">
              <h4>{millify(globalStats.totalMarkets)}</h4>
              <span>Total Markets</span>
            </div>
          </div>
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Cryptocurrencies in the world
        </Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies">Show more</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified={true} />
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Crypto News
        </Title>
        <Title level={3} className="show-more">
          <Link to="/news">Show more</Link>
        </Title>
      </div>
      <News simplified={true} />
    </>
  );
};

export default Homepage;
