import './App.css'

import { printProps } from './printProps'
import { withUser } from './withUser';
import { UserInfo } from './UserInfo'

const UserInfoWrapped = printProps(UserInfo);

const UserInfoWithTitle = ({ user }) => {
    return (
        <div>
            <h1>User Info</h1>
            <UserInfo user={user} />
        </div>
    );
}

const UserInfoWithUser = withUser(UserInfoWithTitle, 1);

const TempComponent = ({ customUser }) => {
    return (
      <><h2>TempComponent</h2>{JSON.stringify(customUser)}</>
    )
}

const TempComponentWithUser = withUser(TempComponent, 1, "customUser");

function App() {
  const obj = {
    name: 'John Doe',
    age: 30,
    hairColor: 'brown',
    hobbies: ['running', 'reading', 'coding'],
  }

  return (
    <div className="App">
      <UserInfoWrapped a={"b"} b={1} c={[1, 2, 3]} d={obj} {...obj} />
      <hr />
      <UserInfoWithUser />

      <hr />
      <TempComponentWithUser />
    </div>
  )
}

export default App
