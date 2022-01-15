import React from 'react'
import styled from 'styled-components';
import PinkButton from '../../common/Buttons/PinkButton';
import MessageInput from '..//../../assets/messageInput.png';
import {useHistory,useLocation} from 'react-router-dom'



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

function MessageInputPage() {
    const location = useLocation();

    return (
        <div className='app'>
            <StyledMessageInput>
                <StyledTo>To.</StyledTo>
                <StyledTextArea placeholder='메세지를 입력해주세요...'/>
                <StyledFrom>From.</StyledFrom>
            </StyledMessageInput>
            <PinkButton name="다음으로"/>
        </div>
    )
}

export default MessageInputPage
