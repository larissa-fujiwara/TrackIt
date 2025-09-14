import { useEffect, useState, useContext } from "react"
import { MagnifyingGlass } from "react-loader-spinner";
import styled from "styled-components";
import Habit from "./Habit";
import UserContext from '../contexts/UserContext.js';
import axios from "axios";

export default function HabitList() {

    const [habitList, setHabitList] = useState(null);
    const [loading, setLoading] = useState(false);
    const {token} = useContext(UserContext);

    useEffect(() => {
        setLoading(true)

        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits';

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        axios.get(URL, config)
            .then(res => {
                setHabitList(res.data)
                setLoading(false)
            })
            .catch(err => console.log(err.response.data))
    }, [habitList])


    return (
        <>
            {loading &&
                <ListContainer $loading={loading}>
                    <MagnifyingGlass color="#52B6FF" />
                </ListContainer>
            }

            {
                !loading
                && habitList
                && habitList.length === 0
                &&
                <ListContainer>
                    <Information>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Information>
                </ListContainer>
            }

            {
                !loading
                && habitList
                && habitList.length > 0
                && habitList.map(({ id, name, days }) => <Habit key={id} name={name} arrayDays={days} />)
            }

        </>
    )
}

const ListContainer = styled.div`
    width: 100%;
    ${({ $loading }) => $loading && 'height: 22.5rem'};
    margin-top: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Information = styled.p`
    color: #666666;
`