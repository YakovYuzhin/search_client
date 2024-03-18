import { useState } from "react";
//import style from "./App.module.scss";
import { CardTemplate } from "./components/Card/CardTemplate";
import { StatisticTemplate } from "./components/Statistic/StatisticTemplate";
import { SearchBarTemplate } from "./components/SearchBar/SearchBarTemplate";

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

  function deleteUser(users: any, id: number) {
    let newUsers = users.filter((a: any) => a.id !== id);
    setUsers(newUsers);
  }

  return (
    <>
      <SearchBarTemplate />
      <div className="main">
        {users.map((user) => (
          <CardTemplate
            users={users}
            key={user.id}
            name={user.name}
            mail={user.mail}
            id={user.id}
            deleteUser={deleteUser}
          />
        ))}
        <StatisticTemplate users={users} />
      </div>
    </>
  );
}

export default App;
