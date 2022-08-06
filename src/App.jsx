import './App.css'

import { printProps } from './printProps'
import { UserInfo } from './UserInfo'

const UserInfoWrapped = printProps(UserInfo);

function App() {
  const obj = {
    name: 'John Doe',
    age: 30,
    hairColor: 'brown',
    hobbies: ['running', 'reading', 'coding'],
  }

  return (
    <UserInfoWrapped a={"b"} b={1} c={[1, 2, 3]} d={obj} {...obj} />
  )
}

export default App
