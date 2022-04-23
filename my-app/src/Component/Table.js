import React from 'react'
import "./Table.css"
const Table = (props) => {
    // console.log(props);
  return (
    <>
        {
          props.user.map((items) => {
              console.log(items);
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

    
    
    </>
  )
}

export default Table