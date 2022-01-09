import React, {useState, useEffect} from 'react';
import PinkButton from '../../common/Buttons/PinkButton';
import styled from 'styled-components';
import {useHistory,useLocation} from 'react-router-dom'
import PuppyIcon from '../../common/messageIcon/PuppyIcon';
import CatIcon from '../../common/messageIcon/CatIcon';
import HamsterIcon from '../../common/messageIcon/HamsterIcon';
import KoalaIcon from '../../common/messageIcon/KoalaIcon';
import MouseIcon from '../../common/messageIcon/MouseIcon';
import PandaIcon from '../../common/messageIcon/PandaIcon';

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

const StyledIconContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 305px;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
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
        <StyledIconContainer>
            <CatIcon />
            <PuppyIcon />
            <HamsterIcon />
            <KoalaIcon />
            <MouseIcon />
            <PandaIcon />
        </StyledIconContainer>
        <PinkButton name="다음으로"/>
        </div>
    )
}

export default MessageSelectPage


// 버튼 이미지 0,1,2,3 이런 식으로 해서 map으로 돌리는 게 나앗나 아니면 캐릭터 별로 버튼 만드는게 나은 걸까..? 
