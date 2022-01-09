import React, {useState, useEffect} from 'react'
import styled from 'styled-components';

const StyledGoldButton = styled.button`
    border-radius: 30px;
    background-color: #DAB967;
    color: #fff;
    border none;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    line-height: 100%;
    /* position: absolute; */
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 9;
`

function GoldButton(props) {
    const [buttonTitle, setButtonTitle] = useState("")
    useEffect(()=>{
        setButtonTitle(props.name)
    }, [props.name])
    return (
        <>
            <StyledGoldButton type='submit'>
                <p style={{margin:0, padding: "1rem 1.3rem"}}>{buttonTitle}</p>
            </StyledGoldButton>
        </>
    )
}

export default GoldButton
