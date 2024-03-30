import { useState } from "react";
import "./App.css";
import data from "./data.js";

function App() {
  const [contacts, setContacts] = useState(data);

  return (
    <>
      <div className="app-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contacts) => (
              <tr>
                <td>{contacts.id}</td>
                <td>{contacts.name}</td>
                <td>{contacts.username}</td>
                <td>{contacts.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
