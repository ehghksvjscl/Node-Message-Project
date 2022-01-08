import React, {useState, useEffect} from 'react';
import PinkButton from '../../common/Buttons/PinkButton';
import styled from 'styled-components';
import {useHistory,useLocation} from 'react-router-dom'

const StyledTitle = styled.div`
    font-size: 18px;
    font-weight: bold;
    position: absolute;
    top: 120px;
    margin: 0 auto;
    text-align: center;
`
const StyledRedSpan = styled.span`
    color: red
`

function MessageSelectPage() {
    
    const location = useLocation();
    console.log("location", location.state);

    useEffect(()=>{
        setName(location.state)
    }, [location.state])

    const [name, setName] = useState("")
    
    return (
        <div className="app">
        <StyledTitle>
            <StyledRedSpan>{name}</StyledRedSpan>님에게 어울리는 캐릭터를 골라주세요.
        </StyledTitle> 
        <PinkButton name="다음으로"/>
        </div>
    )
}

export default MessageSelectPage
