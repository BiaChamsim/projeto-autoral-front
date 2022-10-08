import { Link } from "react-router-dom";
//import { CircularProgressbar , buildStyles } from 'react-circular-progressbar';
//import 'react-circular-progressbar/dist/styles.css';
import styled from "styled-components";
import { useContext } from "react";
import { useState } from "react";
import ContextToken from "../Context/ContextToken";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineCalendar } from "react-icons/ai";
import { GiPayMoney } from "react-icons/gi";
import { GiReceiveMoney } from "react-icons/gi";
import Modal from "react-modal";

//Modal.setAppElement('#root');
Modal.setAppElement(document.getElementById('root'));

export default function Menu(){

  const [isModalOpen, setIsModalOpen] = useState(false);
    //const {percentage} = useContext(ContextToken);

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

    function openModal() {
      setIsModalOpen(true);
    }
  
    function closeModal() {
      setIsModalOpen(false);
    }

    return (
        <Content>
            <PlusCircle onClick={openModal}/>
            {isModalOpen?(
              <Dialog isOpen={isModalOpen}>
                <Input placeholder="nome do hábito"></Input>
                <p>{selectedDay.map((day, index) => {return <BoxDayButton onClick={() => selectDay(day.id)} selected={day.isSelected} key={index}>{day.name}</BoxDayButton>})}</p>
                <Payment>
                  <h4>Reward per day</h4>
                  <div>
                      <button>$ 2</button>
                      <button>$ 5</button>
                      <button>$ 10</button>
                  </div>
                </Payment>
              </Dialog>
            ):<></>}
            <Calendar/>
            <Deposit/>
            <Withdraw/>
        </Content>
    )
}

const Content = styled.div`
    position: fixed;
    width: 100vw;
    height: 8vh;
    left: 0;
    bottom: 0;
    background-color: #dda15e;
    display: flex;
    align-items: center;
    justify-content: space-around;

`

const PlusCircle = styled(AiOutlinePlusCircle)`
  width: 6%;
  height: 34%;
  color: #4F4F4F;
  cursor: pointer;
  //position: absolute;
  //right: 15px;
  //top: 10px;
  //background-color: red;
`;

const Deposit = styled(GiPayMoney)`
  width: 6%;
  height: 34%;
  color: #4F4F4F;
  cursor: pointer;
  //position: absolute;
  //right: 15px;
  //top: 10px;
`;

const Calendar = styled(AiOutlineCalendar)`
  width: 6%;
  height: 34%;
  color: #4F4F4F;
  cursor: pointer;
  //position: absolute;
  //right: 15px;
  //top: 10px;
`;

const Withdraw = styled(GiReceiveMoney)`
  width: 6%;
  height: 34%;
  color: #4F4F4F;
  cursor: pointer;
  //position: absolute;
  //right: 15px;
  //top: 10px;
`;

const Dialog = styled(Modal)`
  height: 30%;
  background-color: #9ab4b3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  box-shadow: #D2B48C 2px 2px px;
  max-width: 50%;
  margin: 20% auto;
  //padding: 2%;
  border-radius: 30px;
  background: -webkit-linear-gradient(#E3FF86, #66793B);
  //border: 2px solid #66793B;

  p{
    //background-color: green;
    width: 90%;
    height: 16%;
    display: flex;
    justify-content: space-between;
  }

`;

const Input = styled.input`
  width: 90%;
  min-height: 16%;
  border-radius: 5px;
  border: none;
  box-shadow: #4F4F4F 1px 1px 4px;
    
`

const BoxDayButton = styled.button`
  min-width: 8%;
  max-width: 12%;
  max-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.selected ? "#363636" : "#fefae0"};
  background-color: ${props => props.selected ? "#bc6c25" : "#606c38"};
  border: 1px solid ;
  border-radius: 3px;
  transition: all .2s ease-in-out;
  :hover {top:-4px;box-shadow: 2px 2px 6px #999};
  cursor: pointer;
  box-shadow: #4F4F4F 2px 2px 4px;
  //margin: 6% 0 16%;
  border: none;
  
`

const Payment = styled.div`
  font-family: 'Secular One';
  width: 90%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #4F4F4F;
  flex-wrap: wrap;
  //background-color: red;
  
  h4{ 
      color: #283618;
      margin-right: 4%;
  }
  
  div{
    width: 100%;
    display: flex;
    justify-content: space-between
    //background-color: red;
  }

  button{
      width: 16%;
      border-radius: 50px;
      border: none;
      color: #283618;
      background-color: #E1FF81;
      box-shadow: #4F4F4F 2px 2px 6px;
  }
`
