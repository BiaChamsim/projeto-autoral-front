import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

import Header from '../Components/Header.js';
import Menu from '../Components/Menu.js';
import { useState, useEffect, useContext } from "react";
import axios from "axios";


export default function Home(){
    const [day, setDay] = useState([]);

    const weekdays = [
        {id: 0, name:"D", isSelected: false}, 
        {id: 1, name:"S", isSelected: false}, 
        {id: 2, name:"T", isSelected: false}, 
        {id: 3, name:"Q", isSelected: false}, 
        {id: 4, name:"Q", isSelected: false}, 
        {id: 5, name:"S", isSelected: false}, 
        {id: 6, name:"S", isSelected: false}
    ];

    const [selectedDay, setSelectedDay] = useState(weekdays);

    function selectDay(id){
        console.log("entrei na fun")
        const selectedDays = selectedDay.map((day) => {
            if(day.id === id){
                day.isSelected = !day.isSelected
            } 
            return day
        })

        setSelectedDay([...selectedDays])

        const daysTrue = selectedDay.filter((day) => day.isSelected === true);
        const daysId = daysTrue.map((day) => day.id);

        setDay([...daysId])

        console.log(daysId)
        console.log(day)
    }


    return(
        <>
            <Header/>
            <Container>
            <Days>
                {selectedDay.map((day, index) => {return <DayButton onClick={() => selectDay(day.id)} selected={day.isSelected} key={index}>{day.name}</DayButton>})}
            </Days>
            <Today>
                <h1>Today, October 5, 2022</h1>
            </Today>
            </Container>  
            <Menu/>      
        </>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    font-size: 18px;
    background-color: 	#FFFAFA;
    //background-color: #f3c7c6;
`

const Days = styled.div`
    width: 100%;
    height: 34px;
    display: flex;  
    align-items: center;
    justify-content: space-around;
    
    //margin-bottom: 20px;
    //align-self: start;
    //background-color: green;
    margin-top: 70px;
    padding-top: 16px;
    
`

const DayButton = styled.button`
    //border: none;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.selected ? "#4F4F4F" : "#363636"};
    background-color: ${props => props.selected ? "#cc8f88" : "#9ab4b3"};
    border: 1px solid ;
    border-radius: 50px;
    transition: all .2s ease-in-out;
    :hover {top:-4px;box-shadow: 2px 2px 6px #999};
    cursor: pointer;
    box-shadow: #4F4F4F 1px 1px 6px;
    
    //background-color: red;
`

const Today = styled.div`
    //background-color: red;
    margin-top: 4%;
    height: 6%;
    display: flex;
    align-items: center;
    color: #4F4F4F;
    margin-left: 2%;

    h1{
        font-family: 'Secular One';
        font-size: 22px;
    }

    p{
        margin-top: 8px;
    }

`

const BoxDayButton = styled.button`
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.selected ? "#363636" : "#4F4F4F"};
    background-color: ${props => props.selected ? "#cc8f88" : "#f3c7c6"};
    border: 1px solid ;
    border-radius: 3px;
    transition: all .2s ease-in-out;
    :hover {top:-4px;box-shadow: 2px 2px 6px #999};
    cursor: pointer;
    box-shadow: #4F4F4F 2px 2px 6px;
    margin: 3% 0 6%;
    border: none;
    
`

const Payment = styled.div`
    font-family: 'Secular One';
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #4F4F4F;
    
    h4{ 
        //text-shadow: #4F4F4F 1px 1px 1px;
    }
    
    div{
        width: 50%;
        display: flex;
        justify-content: space-between;
    }

    button{
        width: 40px;
        height: 40px;
        border-radius: 50px;
        border: none;
        box-shadow: #4F4F4F 2px 2px 6px;
    }
`
