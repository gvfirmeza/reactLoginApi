import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://loginapi-kappa.vercel.app/users')
      .then(response => {
        const firmamentoUsers = response.data['Firmamento:'];
        setUsers(firmamentoUsers);
      })
      .catch(error => {
        console.error('Erro ao obter usuários:', error);
      });
  }, []);

  return (
    <div>
      <h1>Lista de Usuários</h1>
      <ul>
        {users && users.map((username, index) => (
          <li key={index}>
            {username}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
