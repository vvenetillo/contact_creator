/* eslint-disable react/prop-types */
import { useReducer } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

axios.create({
  baseURL: 'http://localhost:3001/'
})

import photo from "../../assets/photo.svg";

const Container = styled.div`
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: center; /* Centraliza horizontalmente */
  justify-content: center; /* Centraliza verticalmente */
`;

const Image = styled.img`
  width: 100%;
  max-height: 100px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 16px;
  margin-bottom: 8px;
  color: #333;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
`;

const SubmitButton = styled.button`
  padding: 12px;
  background-color: #03f40f;
  color: #fff;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const ErrorMessage = styled.p`
  color: #ff0000;
  margin-top: 10px;
`;

const initialState = {
  username: "",
  name: "",
  password: "",
  errorMessage: "",
  submittedData: [],
  showList: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USERNAME":
      return { ...state, username: action.payload };
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    case "SET_ERROR_MESSAGE":
      return { ...state, errorMessage: action.payload };
    case "SET_SUBMITTED_DATA":
      return { ...state, submittedData: action.payload };
    case "SET_SHOW_LIST":
      return { ...state, showList: action.payload };
    default:
      return state;
  }
};

const Login = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const { username, name, password } = state;

    if (!username || !name || !password) {
      dispatch({ type: "SET_ERROR_MESSAGE", payload: "Preencha corretamente os dados" });
    } else {
      const formData = [name, username, password];
      dispatch({ type: "SET_SUBMITTED_DATA", payload: formData });
      dispatch({ type: "SET_SHOW_LIST", payload: true });

      // Chama a função de retorno do componente pai
      console.log(formData)

      Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success",
      });

      // Navegar para outra página (opcional)
      navigate("/list");
    }
  };

  return (
    <Container>
      <Image src={photo} alt="ilustration" />
      <Form onSubmit={handleLogin}>
        <FormGroup>
          <Label>Nome Completo</Label>
          <Input
            type="text"
            name="name"
            id="fname"
            required
            value={state.name}
            onChange={(e) => dispatch({ type: "SET_NAME", payload: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input
            type="text"
            name="email"
            id="femail"
            required
            value={state.email}
            onChange={(e) => dispatch({ type: "SET_EMAIL", payload: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label>Telefone</Label>
          <Input
            type="text"
            name="telefone"
            id="ftelefone"
            required
            value={state.telefone}
            onChange={(e) => dispatch({ type: "SET_TELEFONE", payload: e.target.value })}
          />
        </FormGroup>
        <SubmitButton type="submit" onSubmit={handleLogin}>ENVIAR</SubmitButton>
        {state.errorMessage && <ErrorMessage>{state.errorMessage}</ErrorMessage>}
      </Form>
    </Container>
  );
};

export default Login;
