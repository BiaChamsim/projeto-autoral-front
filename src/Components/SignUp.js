import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import pig from "../Assets/images/pig.png";

export default function SignUp(){

    const [name, setName] = useState ("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState ("");
    const [passwordConfirmation, setPasswordConfirmation] = useState ("");
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate()

    function register(){

        setIsLoading(true);

        const body = {
            name,
            email,
            password,
            passwordConfirmation
        }

    
        const promise = axios.post('', body)
    
        promise.then(response => {
            navigate("/")
            setIsLoading(false);
        })
        promise.catch(error => {
            const erros = []
            if(error.response.data.details){
                error.response.data.details.map(erro => erros.push(erro))
            }else{
                erros.push(error.response.data.message)
            }
            const errorText = erros.join("\n")
            alert(errorText)
            setIsLoading(false);
        })

    }

    return(
        <Content>
            <h1>Reward Me</h1>
            <Input placeholder="nome"></Input>
            <Input placeholder="email"></Input>
            <Input placeholder="senha"></Input>
            <Input placeholder="confirmação de senha"></Input>
            <Button>Entrar</Button>
            <Cadastro to="/" style={{textDecoration: 'none'}}>Já tem uma conta? Faça login!</Cadastro>
        </Content>
    )
}


const Content = styled.div`
    min-height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${pig});
    background-size: cover;
    background-repeat: no-repeat;
    

    h1{
        font-family: 'Secular One';
        text-align: center;
        color: #FFFFFF;
        font-size: 60px;
        margin-bottom: 40px;
        text-shadow :#000 4px 4px 4px;   

    }

  @media screen and (max-width: 900px){
    h1{
      
    }
  }
`


const Input = styled.input `
    color: "#AFAFAF";
    background-color: "#FFFFFF";
    width: 50%;
    height: 44px;
    border: none;
    border-radius: 50px;
    margin: 6px;
    font-size: 18px;   
    padding-left: 14px;
`
    

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 44px;
    background: #f8bb00;
    border-radius: 50px;
    border: none;
    margin: 24px;
    font-size: 20px;
    color: #404040;
    font-family: 'Roboto';
`

const Cadastro = styled(Link)`
    font-family: 'Roboto';
    font-weight: 300;
    font-size: 16px;
    line-height: 18px;
    color: #FFFFFF;
`


