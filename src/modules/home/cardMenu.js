import React from 'react';
import styled from 'styled-components';
import { Carousel, Card, Row, Col } from 'antd';

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
    image: '/images/cards/guides.jpg'
  },
  {
    title: 'Characters',
    image: '/images/cards/characters.jpg'
  },
  {
    title: 'Festivals',
    image: '/images/cards/festivals.jpg'
  },
  {
    title: 'Events',
    image: '/images/cards/events.jpg'
  }
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true
};

export default () => {
  return (
    <Wrapper gutter={16}>
      <StyledCarousel {...settings}>
        {data.map(d => (
          <Col key={d.title} sm={8}>
            <Card hoverable cover={<img src={d.image} height="150px" />}>
              <Meta title={d.title} />
            </Card>
          </Col>
        ))}
      </StyledCarousel>
    </Wrapper>
  );
};
