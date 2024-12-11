import React from 'react'
import Header from '../components/Header/header'
import Footer from '../components/Footer/footer'
import users from '../Users'
const Personal_account = () => {
  return (
    <div>
    <Header/>
      <div className='customization'>

      </div>
      <div className='data'>
          {users.length > 0 ?
          (users.map((user, index) => (
            <div key={index} className='user1'>
              <img></img>
              <p>{user.name}</p>
              <p>{user.age}</p>
              <p>{user.surname}</p>
            </div>
          ))
        ):(
          <p>No users</p>
          )}
        </div>
    <Footer/>
    </div>
  )
}

export default Personal_account
