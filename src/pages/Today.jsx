import styled from 'styled-components';
import { H1, HabitContainer } from '../sharedStyles/stylesSetUp.js';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import UserContext from '../contexts/UserContext.js';

export default function Today() {

    const [todayList, setTodayList] = useState(null);
    const {token} = useContext(UserContext);

    useEffect(() => {
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today';

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        
        axios.get(URL, config)
            .then(res => setTodayList(res.data))
            .catch(err => console.log(err.response.data))
    },[])

    if (todayList === null){
        return (
            <>Carregando!</>
        )
    }else if(todayList.length === 0){
        return (
            <>Nenhum hábito cadastrado!</>
        )
    }

    return (
        <>
            <H1>Segunda, 17/05</H1>
            
            <HabitContainer>
                <Description>
                    <h2>Ler 1 capítulo de livro</h2>
                    <p>Sequência atual: 3 dias</p>
                    <p>Seu recorde: 5 dias</p>
                </Description>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrSLox2ia0u9peaoS7Sy19T60CQ4tO8JT46Q&s" alt="" />
            </HabitContainer>

        </>
    )
}

const Description = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 8px;
`