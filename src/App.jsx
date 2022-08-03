// import './App.css'

import styled from 'styled-components'

import { SplitScreen } from './SplitScreen';

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

function App() {

  return (
    <SplitScreen
      leftWeight={1}
      rightWeight={3}>
        <LeftHandComponent name="Leffftttt..."/>
        <RightHandComponent color="Blueeee"/>
    </SplitScreen>
  )
}

export default App
