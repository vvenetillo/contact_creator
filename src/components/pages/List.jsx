/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavModel from "../material/NavModel";
import styled from 'styled-components';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import axios from 'axios';

const Container = styled.div`
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UserItem = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const SubmitButton = styled.button`
  border-radius: 5px;
  cursor: pointer;

`
const HR2 = styled.hr `
  width: 100%;
  color: black;
  border: 2px solid black;
`

const UserList = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate(); // Obtenha o objeto de histórico

  const navigateToRegister = () => {
    navigate('/register'); // Use o método push do histórico para navegar para '/register'
  };

  useEffect(() => {
    axios.get('http://localhost:3001/users')
      .then(response => {
        setUsers(response.data.users);
      })
      .catch(error => {
        console.error('Erro ao obter a lista de usuários:', error);
      });
  }, []);

  return (
    <>
    <NavModel />
    <Container>
      <h2>Lista de Usuários</h2>
      {users.map((user, index) => (
        <UserItem key={index}>
          <strong>Username:</strong> {user.username}<br />
          <strong>Email:</strong> {user.email}<br />
          <strong>Telefone:</strong> {user.telefone}
          <HR2 />
        </UserItem>
      ))}
      <SubmitButton onClick={navigateToRegister}>

      <ArrowBackIosOutlinedIcon />
      </SubmitButton>
    </Container>
    </>
  );
};

export default UserList;

