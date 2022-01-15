import React, {useState, useEffect} from 'react';
import PinkButton from '../../common/Buttons/PinkButton';
import styled from 'styled-components';
import {useHistory,useLocation} from 'react-router-dom'
import ani01 from '../../../assets/icons/ani01.png'
import ani02 from '../../../assets/icons/ani02.png'
import ani03 from '../../../assets/icons/ani03.png'
import ani04 from '../../../assets/icons/ani04.png'
import ani05 from '../../../assets/icons/ani05.png'
import ani06 from '../../../assets/icons/ani06.png'


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

const StyledButton = styled.button`
    background-color: transparent;
    border-color: transparent;
`

function MessageSelectPage() {
    const history = useHistory();
    const location = useLocation();

    useEffect(()=>{
        setName(window.localStorage.getItem("userName"))
    }, [])

    const [name, setName] = useState("")
    const animals = [
        {id: 1, path : ani01},
        {id: 2, path : ani02},
        {id: 3, path : ani03},
        {id: 4, path : ani04},
        {id: 5, path : ani05},
        {id: 6, path : ani06},
        ]
    
    const handleClickedIcon=(id)=>{
        console.log("id", id)
        
    }
    
    return (
        <div className="app">
        <StyledTitle>
            <StyledRedSpan>{name}</StyledRedSpan>님에게 어울리는 캐릭터를 골라주세요.
        </StyledTitle> 
        <StyledIconContainer>    
                {animals.map(icon=><StyledButton key={icon.id} onClick={()=>handleClickedIcon(icon.id)}><img src={`${icon.path}`} /> </StyledButton>)}            
        </StyledIconContainer>
        <PinkButton name="다음으로"/>
        </div>
    )
}

export default MessageSelectPage


// 버튼 이미지 0,1,2,3 이런 식으로 해서 map으로 돌리는 게 나앗나 아니면 캐릭터 별로 버튼 만드는게 나은 걸까..? 
