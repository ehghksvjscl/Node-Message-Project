
import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components';
import PinkButton from '../../common/Buttons/PinkButton';
import MessageInput from '..//../../assets/messageInput.png';
import {useHistory,useLocation} from 'react-router-dom'
import ani01 from '../../../assets/icons/ani01.png'
import ani02 from '../../../assets/icons/ani02.png'
import ani03 from '../../../assets/icons/ani03.png'
import ani04 from '../../../assets/icons/ani04.png'
import ani05 from '../../../assets/icons/ani05.png'
import ani06 from '../../../assets/icons/ani06.png'



const StyledMessageInput = styled.div`
    width: 100%;
    height: 393px;
    background-image: url(${MessageInput});
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    
`
const StyledTo = styled.p`
    font-size: 24px;
    color: #000;
    position: absolute;
    top: 15%;
    left: 10%;
`
const StyledFrom = styled.p`
    font-size: 24px;
    color: #000;
    position: absolute;
    Bottom: 10%;
    left: 13%;
`

const StyledTextArea = styled.textarea`
    width: 80%;
    height: 185px;
    position: absolute;
    top: 25%;
    left: 10%;
    resize: none;
    border: none;
    font-size: 24px;
`

const StyledIcon = styled.img`
    position: absolute;
    top:-8%;
    left: 35%;
`

const StyledSenderInput = styled.input`
    width: 70%;
    border: none;
`

function GetMessageInput() {
    const location = useLocation();
    const history = useHistory()
    const [ recepient, setRecepient ] = useState("")
    const [ sender, setSender ] = useState("")
    const [content, setContent] = useState("")
    const [icon, setIcon] = useState(1)
    const animals = [
        {num: 1, path : ani01},
        {num: 2, path : ani02},
        {num: 3, path : ani03},
        {num: 4, path : ani04},
        {num: 5, path : ani05},
        {num: 6, path : ani06},
        ]
 

    useEffect(()=>{
        const {thisMsg} = location.state
        console.log("this", thisMsg);
        setSender(thisMsg.fromUserName)
        setIcon(thisMsg.badge)
        setContent(thisMsg.content)
    }, [])

   
    const handleHomeButton=()=>{
        history.push("/")
    }

    return (
        <div className='app'>
            <StyledMessageInput>
                <StyledTo>To.{recepient}</StyledTo>
                <StyledIcon src={icon} />
                    <p>{content}</p>
                <StyledFrom>From.{sender}</StyledFrom>
            </StyledMessageInput>
            <footer onClick={handleHomeButton} style={{width: "100%"}}>
            <PinkButton name="Home으로"/>
            </footer>
        </div>
    )
}

export default GetMessageInput
