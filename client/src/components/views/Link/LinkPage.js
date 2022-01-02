import React,{ useEffect, useState } from 'react'
import Tiger from '../../common/Background/Tiger';
import Number from '../../common/Background/Number';
import PinkButton from '../../common/Buttons/PinkButton';
import styled from 'styled-components';
import Axios from 'axios';

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
                return
                console.log("res", response.data.messages[0].user_id.name)
                setName(response.data.messages[0].user_id.name)
                setMsgNum(response.data.messages.length)
            })
    }, [match.params.id])

    const [name, setName] = useState("")
    const [msgNum, setMsgNum] = useState(0)


    return (
        <div className="app">
            <Number />
                <StyledTitle>
                   <p><StyledRedSpan>{name}</StyledRedSpan>님의 복주머니에 <StyledRedSpan>{msgNum}</StyledRedSpan>개의 복주머니가 있습니다. </p>
                    <p>확인은 <StyledRedSpan>설날(2/1)</StyledRedSpan>에 가능합니다.</p>
                </StyledTitle>
            <Tiger />
            <PinkButton />
        </div>
    )
}

export default LinkPage
