import React from 'react'
import styled from 'styled-components';

const StyledPinkButton = styled.button`
    width: 213px;
    height: 43px;
    border-radius: 30px;
    background-color: #F974C4;
    color: #fff;
    border none;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    line-height: 43px;
    position: absolute;
    bottom: 5%;
    margin: 0 auto;
    z-index: 9;
`

function PinkButton() {
    return (
        <>
        <StyledPinkButton>
            <p>복 넣어주기</p>
        </StyledPinkButton>   
        </>
    )
}

export default PinkButton
