import { useState } from "react";
import style from "./App.module.scss";

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Ana",
      mail: "ana@mail.com",
      male: "w",
      age: 13,
    },
    {
      id: 2,
      name: "Raze",
      mail: "raze@mail.com",
      male: "w",
      age: 51,
    },
    {
      id: 3,
      name: "Mark",
      mail: "mark@mail.com",
      male: "m",
      age: 21,
    },
  ]);

  type usersType = (typeof users)[0];

  function calcGenderAmount(arr: Array<usersType>): any {
    let amount = {
      w: 0,
      m: 0,
    };
    for (let a of arr) {
      a.male === "w" ? amount.w++ : amount.m++;
    }
    return amount;
  }

  function calcusersAgeGroups(arr: Array<usersType>): any {
    let groups = {
      "20+": 0,
      "20-": 0,
    };
    for (let a of arr) {
      a.age >= 20 ? groups["20+"]++ : groups["20-"]++;
    }
    return groups;
  }

  function deleteUser(id: number) {
    let newUsers = users.filter((a) => a.id !== id);
    setUsers(newUsers);
  }

  function UserCard(props: any) {
    return (
      <div className="userCard">
        <p className="name">{props.name}</p>
        <p className="mail">{props.mail}</p>
        <button onClick={() => deleteUser(props.id)}>Delete</button>
      </div>
    );
  }

  return (
    <>
      <div className="searchBar">
        <input type="text" placeholder="Search" />
        <button>Refresh Users</button>
      </div>
      <div className="main">
        <div className="users">
          {users.map((user) => (
            <UserCard key={user.id} name={user.name} mail={user.mail} id={user.id} />
          ))}
        </div>
        <div className="statistics">
          <div className="usersAmount">{`All users: ${users.length}`}</div>
          <div className="usersAgeGroups">{`Old: ${
            calcusersAgeGroups(users)["20+"]
          } --- Yung: ${calcusersAgeGroups(users)["20-"]}`}</div>
          <div className="usersGenderGroups">{`Woman: ${
            calcGenderAmount(users).w
          } --- Man: ${calcGenderAmount(users).m}`}</div>
        </div>
      </div>
    </>
  );
}

export default App;
