
import { useState, useEffect } from 'react';
import './App.css';
import Form from './Component/Form';
import Nav from './Component/Nav';
import Table from "./Component/Table"
import { Routes, Route } from "react-router-dom"


function App() {
  const [user, SetUser] = useState([]);
  //  console.log(user);

  const UserDetails = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    SetUser(await response.json());
  }

  useEffect(() => {
    UserDetails();
  }, [])

  return (
    <>
      <Nav/>
     <Routes>
<Route path='/' element={<Table user={user}/>           }>
  
</Route>
     </Routes>

       {/* <Form/> */}
     
      <Routes>
        <Route path='/Form' element={<Form />} />
      </Routes>




{/* 
      <div className="map">

        {
          user.map((items) => {
            return (
              <div>

                <div className="table-main">


                  <table able class="content-table">

                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Username</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{items.id}</td>
                        <td>{items.name}</td>
                        <td>{items.email}</td>
                        <td>{items.username}</td>
                      </tr>
                      <tr class="active-row">
                        <td>{items.id}</td>
                        <td>{items.name}</td>
                        <td>{items.email}</td>
                        <td>{items.username}</td>
                      </tr>
                      <tr>
                        <td>{items.id}</td>
                        <td>{items.name}</td>
                        <td>{items.email}</td>
                        <td>{items.username}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>


              </div>

            )
          })

        }

      </div> */}

    </>

  );
}

export default App;
