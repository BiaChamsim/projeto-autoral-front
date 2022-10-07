import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import pig from "../Assets/images/pig.png";


export default function Login(){




    return(
        <Content>
            <h1>Reward Me</h1>
            <Input placeholder="email"/>
            <Input placeholder="senha"/>
            <Button>Entrar</Button>
            <Cadastro to="/signup" style={{textDecoration: 'none'}}>Não tem uma conta? Cadastre-se!</Cadastro>
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
    //padding-bottom: 100px;
    

    h1{
        font-family: 'Secular One';
        text-align: center;
        color: #FFFFFF;
        font-size: 60px;
        margin-bottom: 40px;
        text-shadow :#000 4px 4px 4px;        
    }
`


const Input = styled.input `
    color: "#AFAFAF";
    background-color: "#FFFFFF";
    width: 40%;
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
    width: 40%;
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
