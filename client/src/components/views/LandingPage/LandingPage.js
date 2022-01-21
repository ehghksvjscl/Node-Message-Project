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

    // 로그인 안했을 경우
    if (user.userData && !user.userData.isAuth) {
        return (
            <>
                <div className="app">
                    <NavBar />
                    <Number />
                    <StyledTitle>새해 복 많이 주세요.</StyledTitle>
                    <Tiger />
                    <div>
                        <ul>
                            {badges.map(iconNum => <li><img src={iconNum}/></li>)}
                        </ul>
                    </div>
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
                    {badges && <p>123</p>}
                    <div>
                        <ul>
                            {badges.map(iconNum => <li><img src={iconNum}/></li>)}
                        </ul>
                    </div>
                    <ButtonDiv>
                        <GoldButton name="내 링크 복사" onClick={() => copyToClipboard(`${CLIENT_URL}/link/${user.userData._id}`)}/>
                    </ButtonDiv>
                </div>
            </>
        )
    }

}

export default LandingPage
