import './App.css'
import { CurrentUserInfo } from './CurrentUserInfo'
import { ResourceInfo } from './ResourceInfo';
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
      <hr/>
      <ResourceInfo resourceUrl={`http://localhost:8080/products/1`} />
    </div>
    
  )
}

export default App
