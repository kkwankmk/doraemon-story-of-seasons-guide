import React from 'react';
import styled from 'styled-components';
import { Carousel, Card, Row, Col } from 'antd';

import { getAssetPrefix } from '../core/utils';

const { Meta } = Card;

const Wrapper = styled(Row)`
  margin: 25px 0;
`;

const StyledCarousel = styled(Carousel)`
  .slick-dots.slick-dots-bottom {
    bottom: -20px;

    .slick-active {
      button {
        background: #d92139;
      }
    }
    button {
      background: #253f58;
    }
  }
`;

const data = [
  {
    title: 'Guides',
    image: '/images/cards/guides.jpg',
    path: '/'
  },
  {
    title: 'Characters',
    image: '/images/cards/characters.jpg',
    path: '/characters'
  },
  {
    title: 'Festivals',
    image: '/images/cards/festivals.jpg',
    path: '/'
  },
  {
    title: 'Events',
    image: '/images/cards/events.jpg',
    path: '/'
  }
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }
  ]
};

export default () => {
  return (
    <Wrapper gutter={16}>
      <StyledCarousel {...settings}>
        {data.map(d => (
          <Col key={d.title} sm={8}>
            <a href={getAssetPrefix(d.path)} target="_blank">
              <Card
                hoverable
                cover={<img src={getAssetPrefix(d.image)} style={{ objectFit: 'cover' }} />}
              >
                <Meta title={d.title} />
              </Card>
            </a>
          </Col>
        ))}
      </StyledCarousel>
    </Wrapper>
  );
};
