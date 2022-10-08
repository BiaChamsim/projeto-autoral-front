import styled from "styled-components";
import ContextToken from './../Context/ContextToken';
import { useContext } from 'react';

export default function Header(){

    //const {image} = useContext(ContextToken);

    return(
        <Top>
            <h1>Reward <span>Me</span></h1>
            <Image>imagem aqui</Image>
        </Top>
    )
}


const Top = styled.div`
    position: fixed;
    width: 100vw;
    left: 0;
    top: 0;
    height: 70px;
    background-color: #606c38;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    z-index: 1;
    padding-left: 2%;

    h1{
        font-family: 'Secular One';
        font-size: 30px;
        color: #FFFFFF;
        font-weight: 400;
    }

    span{
        color: #E5CD83;
    }
`

const Image = styled.div`

width: 52px;
height: 52px;
border-radius: 98.5px;
margin-right: 2%;

`