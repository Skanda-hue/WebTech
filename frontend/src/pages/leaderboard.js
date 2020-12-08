import React, { useEffect, useState } from "react";
import Leaderboard from "react-leaderboard";
import ReactDOM from "react-dom";
import Axios from "axios";
import "./leaderboard.css";

function LdbApp() {
  const [usersListOptions, setUsersListOptions] = useState({
    users: [
      {
        email: "b@b.com",
        name: "b",
        score: 0,
        __v: 0,
        _id: "5fcced168ea8fc0750c98382",
      },
    ],
    paginate: 1,
  });

  useEffect(() => {
    getUserList();
  }, []);

  async function getUserList() {
    await Axios.get("http://localhost:3001/server/register").then((res) => {
      const userList = res.data.users;
      userList.sort((a, b) => b.score - a.score);
      setUsersListOptions({
        users: userList,
        paginate: res.data.users.length,
      });
    });
  }

  function createTableEntry(user, index) {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{user.name}</td>
        <td>{user.score}</td>
      </tr>
    );
  }

  return (
    <div className="string">
      <h1 style={{ textAlign: "center" }}>Leader Board</h1>
      {/* <Leaderboard
        users={usersListOptions.users}
        paginate={usersListOptions.paginate}
      /> */}
      <table className="styled-table" style={{ color: "white" }}>
        <tbody>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Score</th>
          </tr>
          {usersListOptions.users.map(createTableEntry)}
        </tbody>
      </table>
      <button onClick={getUserList}>Update</button>
    </div>
  );
}

// class LdbApp extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       users: [
//         {
//           email: "b@b.com",
//           name: "b",
//           score: 0,
//           __v: 0,
//           _id: "5fcced168ea8fc0750c98382",
//         },
//       ],
//       paginate: 1,
//     };
//   }

//   componentDidMount() {
//     this.getUserList();
//   }

//   async getUserList() {
//     await Axios.get("http://localhost:3001/server/register").then((res) => {
//       console.log(res.data.users);
//       this.setState({
//         users: res.data.users,
//         paginate: res.data.users.length,
//       });
//     });
//   }
//   render() {
//     return (
//       <div className="string">
//         <Leaderboard users={this.state.users} paginate={this.state.paginate} />
//       </div>
//     );
//   }
// }

//ReactDOM.render(<LdbApp />, document.getElementById("root"));

export default LdbApp;
