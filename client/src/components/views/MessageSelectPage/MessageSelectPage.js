import React from 'react';
import PinkButton from '../../common/Buttons/PinkButton';
import styled from 'styled-components';

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
    return (
        <>
        <StyledTitle>
            <StyledRedSpan></StyledRedSpan>님에게 어울리는 캐릭터를 골라주세요.
        </StyledTitle> 
        <PinkButton></PinkButton>
        </>
    )
}

export default MessageSelectPage
