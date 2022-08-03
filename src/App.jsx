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

const LeftHandComponent = () => {
  return <StyledH1>Left!</StyledH1>;
}

const RightHandComponent = () => {
  return <StyledP>Right!</StyledP>
}

function App() {

  return (
    <SplitScreen
      left={LeftHandComponent}
      right={RightHandComponent}
      leftWeight={1}
      rightWeight={3} />
  )
}

export default App
