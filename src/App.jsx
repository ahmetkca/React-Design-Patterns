import './App.css'
import { CurrentUserLoader } from './CurrentUserLoader'
import { DataSource } from './DataSource'
import { ProductInfo } from './ProductInfo'
import { ResourceLoader } from './ResourceLoader'
import { UserInfo } from './UserInfo'
import { UserLoader } from './UserLoader'

const userIds = [1, 2, 3]

const getUserById = async (userId) => {
    const response = await fetch(`http://localhost:8080/users/${userId}`);
    const user = await response.json()
    return user
}

const getCurrentUser = async () => {
    const response = await fetch('http://localhost:8080/current-user');
    const user = await response.json()
    return user
}

const getProductById = async (productId) => {

    const response = await fetch(`http://localhost:8080/products/${productId}`);
    const product = await response.json()
    return product
}

const getLocalStorageData = (key) => {
    return localStorage.getItem(key)
}


const Text = ({ message }) => {
    return <div>{message}</div>
}

function App() {

  return (
    <div className="App">
      <DataSource getDataFunction={() => getLocalStorageData('message')} resourceName='message'>
        <Text />
      </DataSource>
      

      <DataSource getDataFunction={() => getUserById(1)} resourceName="user">
        <h2>Data Source User</h2>
        <UserInfo />
      </DataSource>
      <hr/>

      <DataSource getDataFunction={() => getCurrentUser()} resourceName="user">
        <h2>Data Source Current User</h2>
        <UserInfo />
      </DataSource>
      <hr/>

      <DataSource getDataFunction={() => getProductById(1)} resourceName="product">
        <h2>Data Source Product</h2>
        <ProductInfo />
      </DataSource>
      <hr/>

      <ResourceLoader resourceUrl="http://localhost:8080/users/2" resourceName="user">
          <h3>Resource Loader</h3>
          <UserInfo />
      </ResourceLoader>
      <hr/>
      <ResourceLoader resourceUrl="http://localhost:8080/products/1" resourceName="product">
          <h3>Resource Loader</h3>
          <ProductInfo />
      </ResourceLoader>
      <CurrentUserLoader>
        <UserInfo />
      </CurrentUserLoader>
      <hr/>
      <UserLoader userId={2}>
        <UserInfo />
      </UserLoader>
      <hr/>
      <UserLoader userId={3}>
        <UserInfo />
      </UserLoader>
      <hr/>
      {userIds.map(userId => (
        <UserLoader key={userId} userId={userId}>
          <UserInfo />
        </UserLoader>
      ))}
    </div>
  )
}

export default App
