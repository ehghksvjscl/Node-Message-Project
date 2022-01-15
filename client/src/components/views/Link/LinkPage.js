import React,{ useEffect, useState } from 'react'
import Tiger from '../../common/Background/Tiger';
import Number from '../../common/Background/Number';
import PinkButton from '../../common/Buttons/PinkButton';
import styled from 'styled-components';
import Axios from 'axios';
import {useHistory} from "react-router";

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

function LinkPage({match}) {
    useEffect(() => {
        Axios.get(`http://localhost:5000/api/messages/list/${match.params.id}`)
        .then(response=> {
            console.log(response.data)
            setMsgNum(response.data.messages.length)
        })


    Axios.get(`http://localhost:5000/api/messages/getname/${match.params.id}`)
        .then(response=> {
            console.log(response.data)
            setName(response.data.user)
            window.localStorage.setItem("userName", response.data.user)
        })
    }, [match.params.id])

    const [name, setName] = useState("")
    const [msgNum, setMsgNum] = useState(0)

    const history = useHistory();

    const handleNextButton = (e) =>{
        e.preventDefault()
        history.push({
            pathname: "/messageselect",
            name: name
        })
    }


    return (
        <div className="app">
            <Number />
                <StyledTitle>
                   <p><StyledRedSpan>{name}</StyledRedSpan>님의 복주머니에 <StyledRedSpan>{msgNum}</StyledRedSpan>개의 복주머니가 있습니다.</p>
                    <p>확인은 <StyledRedSpan>설날(2/1)</StyledRedSpan>에 가능합니다.</p>
                </StyledTitle>
            <Tiger />
            <footer onClick={handleNextButton} match={match.params.id} style={{width: "100%"}}>
                <PinkButton name="복을 넣어주세요"/>
            </footer>
        </div>
    )
}

export default LinkPage
