import { useState } from "react";
import style from "./App.module.scss";
import { CardTemplate } from "./components/Card/CardTemplate";
import { StatisticTemplate } from "./components/Statistic/StatisticTemplate";
import { SearchBarTemplate } from "./components/SearchBar/SearchBarTemplate";

function App() {
  const realUsers = [
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
      mail: "mazk@mail.com",
      male: "m",
      age: 21,
    },
  ];

  const [searchQuery, SetSearchQuery] = useState("");
  const [users, setUsers] = useState(realUsers);

  function searchUsers(users: any, query: any) {
    console.log("До поиска", users);
    console.log("Запрос", query);
    const usersKeys = ["name", "mail", "male"];

    let filteredUsres = users.filter((user: any) =>
      usersKeys.some((userKey) =>
        user[`${userKey}`].toLowerCase().includes(query.toLowerCase())
      )
    );
    console.log("После поиска", filteredUsres);
    setUsers(filteredUsres);
  }

  function deleteUser(users: any, id: number) {
    let newUsers = users.filter((a: any) => a.id !== id);
    setUsers(newUsers);
  }

  return (
    <>
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => SetSearchQuery(e.target.value)}
        />
        <button onClick={() => searchUsers(users, searchQuery)}>
          Search Users
        </button>
        <button onClick={() => setUsers(realUsers)}>Refresh Users</button>
      </div>
      <div className={style.mainPage}>
        {/* <SearchBarTemplate /> */}

        <div className="users">
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
        </div>
          <StatisticTemplate users={users} />
      </div>
    </>
  );
}

export default App;
