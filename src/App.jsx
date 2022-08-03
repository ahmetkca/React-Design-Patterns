// import './App.css'

import styled from 'styled-components'
import { RegularList } from './RegularList';
import { NumberedList } from './NumberedList';

import { SmallPersonListItem, LargePersonListItem } from './people';
import { SmallProductListItem, LargeProductListItem } from './products';

import { SplitScreen } from './SplitScreen';
import { Modal } from './Modal';

const StyledH1 = styled.h1`
  background-color: #f00;
  color: #fff;
  padding: 10px;
  margin: 0;
  font-size: 1.5em;
  font-weight: bold;
  text-align: center;
`

const StyledP = styled.p`
  background-color: #0fff0f;
  color: #fff;
  padding: 10px;
  margin: 0;
  font-size: 1.5em;
  font-weight: bold;
  text-align: center;
`

const LeftHandComponent = ({ name }) => {
  return <StyledH1>Left! {name}</StyledH1>;
}

const RightHandComponent = ({ color }) => {
  return <StyledP>Right! {color}</StyledP>
}

const products = [
  {
    name: 'Product 1',
    price: '$100',
    description: 'This is a product',
    rating: 4.5
  },
  {
    name: 'Product 2',
    price: '$200',
    description: 'This is a product',
    rating: 3.5
  },
  {
    name: 'Product 3',
    price: '$300',
    description: 'This is a product',
    rating: 2.75
  }

]

const people = [
  {
    name: 'John',
    age: 30,
    hairColor: 'brown',
    hobbies: ['running', 'reading', 'coding'],
  },
  {
    name: 'Jane',
    age: 25,
    hairColor: 'blonde',
    hobbies: ['playing guitar', 'reading', 'coding'],
  },
  {
    name: 'Bob',
    age: 20,
    hairColor: 'black',
    hobbies: ['running', 'swimming', 'coding'],
  }
];

function App() {

  return (
    <>
      <Modal>
        <SplitScreen>
          <RegularList items={people} resourceName="person" itemComponent={SmallPersonListItem} />
          <RegularList items={products} resourceName="product" itemComponent={SmallProductListItem} />  
        </SplitScreen>
      </Modal>
      <SplitScreen
        leftWeight={1}
        rightWeight={3}>
          <LeftHandComponent name="Leffftttt..."/>
          <RightHandComponent color="Blueeee"/>
      </SplitScreen>
      <SplitScreen>
        <RegularList items={people} resourceName="person" itemComponent={SmallPersonListItem} />
        <RegularList items={people} resourceName="person" itemComponent={LargePersonListItem} />
      </SplitScreen>
      <hr/>
      <SplitScreen>
        <NumberedList items={products} resourceName="product" itemComponent={SmallProductListItem} />
        <RegularList items={products} resourceName="product" itemComponent={LargeProductListItem} />
      </SplitScreen>
    </>
  )
}

export default App
