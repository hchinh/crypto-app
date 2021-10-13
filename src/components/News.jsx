import { Avatar, Card, Col, Row, Select, Typography } from 'antd';
import moment from 'moment';
import React, { useState } from 'react';
import { Loading } from '../components';
import { useGetCryptosQuery } from '../services/cryptoApi';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

const { Title, Text } = Typography;
const { Option } = Select;
const demoImage =
  'https://images.unsplash.com/photo-1609554496796-c345a5335ceb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y3J5cHRvY3VycmVuY3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
  const { data } = useGetCryptosQuery(100);
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory,
    count: simplified ? 6 : 12,
  });

  if (!cryptoNews?.value) return <Loading />;

  return (
    <>
      <Row gutter={[24, 24]}>
        {!simplified && (
          <Col span={24} style={{ textAlign: 'center' }}>
            <Select
              showSearch
              className="select-news"
              placeholder="Select a Crypto"
              optionFilterProp="children"
              onChange={(value) => setNewsCategory(value)}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="Cryptocurrency">Cryptocurrency</Option>
              {data?.data?.coins.map((coin) => (
                <Option value={coin.name}>{coin.name}</Option>
              ))}
            </Select>
          </Col>
        )}
        {cryptoNews.value.map((news, i) => (
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card hoverable className="news-card">
              <a href={news.url} target="_blank" rel="noreferrer">
                <div className="news-image-container">
                  <Title className="news-title" level={4}>
                    {news.name}
                  </Title>
                  <img
                    style={{ maxWidth: '200px', maxHeight: '100px', marginLeft: '10px' }}
                    src={news?.image?.thumbnail?.contentUrl || demoImage}
                    alt="news"
                  />
                </div>
                <p>{news.description}</p>
                <div className="provider-container">
                  <div>
                    <Avatar
                      src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage}
                      alt="news"
                      style={{ marginRight: '5px' }}
                    />
                    <Text>{news.provider[0]?.name}</Text>
                  </div>
                  <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                </div>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default News;
