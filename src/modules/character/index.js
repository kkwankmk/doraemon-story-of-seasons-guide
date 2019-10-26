import React from 'react';
import { Row, Col, Card, Collapse } from 'antd';
import styled from 'styled-components';

import PageContent from '../core/components/pageContent';
import { getAssetPrefix } from '../core/utils';

const { Panel } = Collapse;

const StyledCol = styled(Col)`
  margin-bottom: 8px;
`;

const StyledName = styled.div`
  font-size: 1.2rem;
  color: ${props => props.theme.colors.primary3};
  margin-bottom: 5px;
`;

const StyledDescription = styled.div`
  font-size: 0.9rem;
`;

const StyledCard = styled(Card)`
  box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.1);
`;

const StyledHeader = styled.span`
  color: ${props => props.theme.colors.primary2};
  line-height: 2rem;
  font-size: 1.3rem;
`;

const data = [
  {
    group: 'Main Characters',
    characters: [
      {
        image: '/images/characters/noby.jpg',
        name: 'Noby',
        description: 'Description'
      },
      {
        image: '/images/characters/doraemon.jpg',
        name: 'Doraemon',
        description: 'Robotic Cat',
        item: 'Dorayaki / Sunflower'
      },
      {
        image: '/images/characters/sue.jpg',
        name: 'Sue',
        description: 'Sue is a character in Doraemon: Story of Seasons.',
        item: 'Baked Sweet Potato / P. Daisy / Sweet Potato'
      },
      {
        image: '/images/characters/big_g.jpg',
        name: 'Big G',
        description: 'Big G is a character in Doraemon: Story of Seasons.',
        item: 'Curry / Normal Wood'
      },
      {
        image: '/images/characters/sneech.jpg',
        name: 'Sneech',
        description: 'Sneech is a character in Doraemon: Story of Seasons.',
        item: 'Truffled Egg / Marlin Steak / Melon / Diamond'
      },
      {
        image: '/images/characters/ryam.jpg',
        name: 'Ryam',
        description: 'Mayor',
        item: 'Sashimi Boat / Daikon / Matsutake'
      },
      {
        image: '/images/characters/vera.jpg',
        name: 'Vera',
        description: 'Goddess',
        item: 'Cabbage / Compote / Yogurt'
      }
    ]
  },
  {
    group: 'West Natura Villagers',
    characters: [
      {
        image: '/images/characters/harmon.jpg',
        name: 'Harmon',
        description: 'First Villager to Meet',
        item: 'Tempura / Potato / Sunflower / Fodder'
      },
      {
        image: '/images/characters/ravi.jpg',
        name: 'Ravi',
        description: 'Grandmother of Harmon',
        item: 'Namasu / Fertilizer / Burdock'
      },
      {
        image: '/images/characters/helen.jpg',
        name: 'Helen',
        description: 'Mother of Cooper. Cuckoo House Chicken Owner.',
        item: 'Walnut Bread / Strawberry / Goldfish / Egg'
      },
      {
        image: '/images/characters/henson.jpg',
        name: 'Henson',
        description: 'Father of Cooper. Cuckoo House Chicken Owner.',
        item: 'Fritter / Gratin'
      },
      {
        image: '/images/characters/cooper.jpg',
        name: 'Cooper',
        description: 'Son of Helen and Henson. Cuckoo House Chicken Owner',
        item: 'Mantis / Horned Atlas / Mayonnaise / Honeybee'
      },
      {
        image: '/images/characters/taurus.jpg',
        name: 'Taurus',
        description: 'Grandfather of Rem. Gouter Mawk Livestock Owner',
        item: 'Plum / Milk'
      },
      {
        image: '/images/characters/aries.jpg',
        name: 'Aries',
        description: 'Grandmother of Rem. Gouter Mawk Livestock Owner',
        item: 'Boiled Carp / Peas / Iris'
      },
      {
        image: '/images/characters/rem.jpg',
        name: 'Rem',
        description: 'Granddaughter of Aries and Taurus. Gouter Mawk Livestock Owner',
        item: 'Pudding / Dandelion / Morning Glory'
      }
    ]
  },
  {
    group: 'East Natura Villagers',
    characters: [
      {
        image: '/images/characters/smitty.jpg',
        name: 'Smitty',
        description: 'Father of Blake. Anvil - Blacksmith Owner',
        item: 'Lightly Roasted Bonito / Copper Ore'
      },
      {
        image: '/images/characters/blake.jpg',
        name: 'Blake',
        description: 'Son of Smitty. Anvil - Blacksmith Owner',
        item: 'Ajillo / Iron Ore / Cucumber'
      },
      {
        image: '/images/characters/gennie.jpg',
        name: 'Gennie',
        description: 'Mother of Jemma, Wife of Mark. Knick Knacks General Store Owner',
        item: 'Carpaccio / Wheat / Carnation'
      },
      {
        image: '/images/characters/mark.jpg',
        name: 'Mark',
        description: 'Father of Jemma, Husband of Gennie. Knick Knacks General Store Owner',
        item: 'Gratin / Pot-au-feu / Cauliflower / Ant'
      },
      {
        image: '/images/characters/jemma.jpg',
        name: 'Jemma',
        description: 'Daughter of Gennie and Mark. Knick Knacks General Store Owner',
        item: 'Apple Tart / Carrots / P. Daisy'
      },
      {
        image: '/images/characters/regis.jpg',
        name: 'Regis',
        description: "Doctor of Town's Clinic",
        item: 'Stir-fry / Strange Food / Spices'
      },
      {
        image: '/images/characters/serena.jpg',
        name: 'Serena',
        description: "Nurse of Town's Clinic",
        item: 'Terine / Shortcake / Shepherd’s purse / Aloe'
      },
      {
        image: '/images/characters/cafet.jpg',
        name: 'Cafet',
        description: 'Chef Cook. Cafe Delish Owner',
        item: 'Sandwich / Bean Paste / Apple'
      },
      {
        image: '/images/characters/eria.jpg',
        name: 'Eria',
        description: 'Wife of Cafet. Cafe Delish Owner',
        item: 'Spring Salad / Sauteed / Salad / Lily / Wheat Flour / Melon'
      }
    ]
  },
  {
    group: 'Other Characters',
    characters: [
      {
        image: '/images/characters/pent.jpg',
        name: 'Pent',
        description: 'Carpenter Shop Owner',
        item: 'Udon / Royal Fern / Hard Wood'
      },
      {
        image: '/images/characters/sandy.jpg',
        name: 'Sandy',
        description: 'Tackle Shop Owner',
        item: 'Marlin / Ground Bait / Firewood / Squid'
      }
    ]
  }
];

export default () => {
  return (
    <PageContent>
      <Collapse bordered={false} defaultActiveKey={['0', '1', '2', '3']}>
        {data.map((d, index) => (
          <Panel header={<StyledHeader>{d.group}</StyledHeader>} key={index}>
            <Row gutter={16} type="flex">
              {d.characters.map(character => (
                <StyledCol xs={24} md={12} key={character.name}>
                  <StyledCard>
                    <Row gutter={16}>
                      <Col span={8}>
                        <img src={getAssetPrefix(character.image)} width="100%" />
                      </Col>

                      <Col span={16}>
                        <StyledName>{character.name}</StyledName>
                        <StyledDescription>{character.description}</StyledDescription>
                      </Col>
                    </Row>
                    <div>Gift: {character.item || '-'}</div>
                  </StyledCard>
                </StyledCol>
              ))}
            </Row>
          </Panel>
        ))}
      </Collapse>
    </PageContent>
  );
};
