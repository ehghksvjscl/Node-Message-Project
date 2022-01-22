// eslint-disable-next-line
import React, { useEffect, useState } from 'react'
import Tiger from '../../common/Background/Tiger';
import Number from '../../common/Background/Number';
import styled from 'styled-components';
import GoldButton from '../../common/Buttons/GoldButton';
import { useSelector } from "react-redux";
import NavBar from '../NavBar/NavBar';
import { CLIENT_URL } from '../../Config';
import Axios from 'axios';
import ani01 from '../../../assets/icons/ani01.png'
import ani02 from '../../../assets/icons/ani02.png'
import ani03 from '../../../assets/icons/ani03.png'
import ani04 from '../../../assets/icons/ani04.png'
import ani05 from '../../../assets/icons/ani05.png'
import ani06 from '../../../assets/icons/ani06.png'
import arrow from '../../../assets/icons/arrowRight.png'


const StyledTitle = styled.div`
    font-size: 24px;
    font-weight: bold;
    position: absolute;
    top: 120px;
    margin: 0 auto;
`
const ButtonDiv = styled.div`
    margin-top: 30rem;
`
const StyledIconListContainer = styled.div`
    display: flex;
    flex-wrap: no-wrap;
    width: 350px;
    height: 250px;
    position: relative;
    top: 30%;
    margin: 0 auto;
    overflow: hidden;
`
const StyledIconListUl = styled.ul`
    display: flex;
    flex-wrap: wrap;
    width: 350px;
    height: 250px;
    padding-left: 0;
    flex-direction: column;
    position: absolute;
    top: 0%;
    left: 0;
    z-index: 9;
`
const StyledIconList = styled.li`
    list-style: none;
    width: 30%;
    margin: 0 1%;
`

const StyledButtonRight = styled.button`
    width: 10px;
    position: absolute;
    top: 30%;
    right: 20%;
    background-color: transparent;
    border: none;
`

const StyledButtonLeft= styled.button`
width: 10px;
position: absolute;
top: 30%;
left: 20%;
background-color: transparent;
border: none;
transform: rotate(-180deg);
`





function LandingPage(props) {

    const animals = [
        {id: 1, path : ani01},
        {id: 2, path : ani02},
        {id: 3, path : ani03},
        {id: 4, path : ani04},
        {id: 5, path : ani05},
        {id: 6, path : ani06},
        ]
    const user = useSelector(state => state.user)
    const [Messages, setMessages] = useState([])
    const [badges, setBadges] = useState([])
    const [clickCount, setClickCount] = useState(0)
    const [arrowMove, setArrowMove] = useState(0)

    const handleStartClick = () => {
        props.history.push('/login')
    }
    
    useEffect(() => {
        // 로그인 상태
        if (user.userData && user.userData.isAuth) {
            getMyMessages(user.userData._id)
        }
    }, [user.userData])


    const getMyMessages = (id) => {
        Axios.get(`http://localhost:5000/api/messages/list/${id}`)
        .then(response=> {
            const badgeArray = []
            const pathArray = []

            setMessages(response.data.messages)
            response.data.messages.map(meg => {
                badgeArray.push(meg.badge)
            })
            const findId = badgeArray.find((num, index) => {
                // num === animals[index].id
                animals.forEach(item => {
                    if(item.id === num){
                        pathArray.push(item.path)
                    }
                })
            })
            setBadges(pathArray)
        })
    }

    const copyToClipboard = (val) => {
        const t = document.createElement("textarea");
        document.body.appendChild(t);
        t.value = val;
        t.select();
        document.execCommand('copy');
        document.body.removeChild(t);
        alert("내 주소가 복사 되었습니다.")
        console.log(badges);
      }

    //   state 값 한번 유지 되는 버그 수정 필요
      const handleRightArrow=()=>{
                setClickCount(clickCount=> clickCount-1)
                return setArrowMove(clickCount * 350)
      }
      const handleLeftArrow=()=>{
        setClickCount(clickCount=> clickCount+1)
       return setArrowMove(clickCount * 350)
    }

    // 로그인 안했을 경우
    if (user.userData && !user.userData.isAuth) {
        return (
            <>
                <div className="app">
                    <NavBar />
                    <Number />
                    <StyledTitle>새해 복 많이 주세요.</StyledTitle>
                    <Tiger />
                    <StyledIconListContainer>
                        <StyledIconListUl>
                            {badges.map(iconNum => <StyledIconList><img src={iconNum}/></StyledIconList>)}
                        </StyledIconListUl>
                    </StyledIconListContainer>                   
                    <ButtonDiv>
                        <GoldButton name="시작하기" onClick={handleStartClick}/>
                    </ButtonDiv>
                </div>
            </>
        )
    } else {
        // 로그인 했을 경우
        return (
            <>
                <div className="app">
                    <NavBar />
                    <Number />
                    <StyledTitle>새해 복 많이 주세요.</StyledTitle>
                    {/* 본인 메시지 리스트 */}
                    <Tiger />
                    <StyledButtonLeft onClick={handleLeftArrow}>
                        <img src={arrow} />
                    </StyledButtonLeft>
                    <StyledIconListContainer>
                        <StyledIconListUl style={{left: `${arrowMove}px`}}>
                            {badges.map((iconNum, index) => <StyledIconList key={index}><img src={iconNum}/></StyledIconList>)}
                        </StyledIconListUl>
                    </StyledIconListContainer>
                    <StyledButtonRight onClick={handleRightArrow}>
                        <img src={arrow} />
                    </StyledButtonRight>
                    <ButtonDiv>
                        <GoldButton name="내 링크 복사" onClick={() => copyToClipboard(`${CLIENT_URL}/link/${user.userData._id}`)}/>
                    </ButtonDiv>
                </div>
            </>
        )
    }

}

export default LandingPage
