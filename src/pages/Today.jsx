import styled from 'styled-components';
import { H1 } from '../sharedStyles/stylesSetUp.js';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import UserContext from '../contexts/UserContext.js';
import { Oval } from 'react-loader-spinner';
import TodayList from '../components/TodayList.jsx';
import dayjs from 'dayjs';
import "dayjs/locale/pt-br";
import updateLocale from "dayjs/plugin/updateLocale";

export default function Today() {

    const [todayList, setTodayList] = useState(null);
    const [loading, setLoading] = useState(false);
    const { token } = useContext(UserContext);

    dayjs.extend(updateLocale);
    dayjs.locale("pt-br");
    dayjs.updateLocale("pt-br", {
        weekdays: [
            "Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"
        ]
    });

    useEffect(() => {
        setLoading(true);

        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today';
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        axios.get(URL, config)
            .then(res => {
                setTodayList(res.data)
                setLoading(false)
            })

    }, []);

    return (
        <div>
            <H1>{dayjs().format("dddd, DD/MM")}</H1>

            {loading &&
                <TodayListContainer $loading={loading}>
                    <Oval color="#52B6FF" secondaryColor="#666666" />
                </TodayListContainer>
            }

            {
                !loading
                && todayList
                && todayList.length === 0
                &&
                <TodayListContainer>
                    <p>Seus hábitos aparecerão aqui</p>
                </TodayListContainer>
            }

            {
                !loading
                && todayList
                && todayList.length > 0
                && todayList.map(({ id, name, done, currentSequence, highestSequence }) =>
                    <TodayList key={id} idHabit={id} name={name} done={done} currentSequence={currentSequence} highestSequence={highestSequence} />
                )
            }


        </div>
    )
}

const TodayListContainer = styled.div`
    width: 100%;
    ${({ $loading }) => $loading && 'height: 22.5rem'};
    margin-top: 16px;
    display: flex;
    ${({ $loading }) => $loading && 'justify-content:center'};
    align-items: center;
    p{
        color:#666666;
    }
`