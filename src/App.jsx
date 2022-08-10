import './App.css'
import { CurrentUserInfo } from './CurrentUserInfo'
import { ResourceInfo } from './ResourceInfo';
import { UserInfo } from './UserInfo'
import { UserInfoWithUseDataSourceHook } from './UserInfoWithUseDataSourceHook';

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
      <hr/>
      <h1>Fetching User info with useDataSource custom hook</h1>
      <UserInfoWithUseDataSourceHook userId={userId} />
    </div>
    
  )
}

export default App
