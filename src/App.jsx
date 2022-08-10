import './App.css'
import { CurrentUserInfo } from './CurrentUserInfo'
import { UserInfo } from './UserInfo'

const userId = 2;

function App() {

  return (
    <div>
      <h1>Current User Info</h1>
      <CurrentUserInfo />
      <hr/>
      <h1>User Info for User#{userId}</h1>
      <UserInfo userId={userId} />
      <UserInfo userId={3} />
    </div>
    
  )
}

export default App
