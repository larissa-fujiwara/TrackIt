import { CheckBox } from "@mui/icons-material"
import axios from "axios";
import { useContext, useState } from "react"
import styled from "styled-components"
import UserContext from "../contexts/UserContext";

export default function TodayList({ idHabit, name, done, currentSequence, highestSequence }) {

    const [isChecked, setIsChecked] = useState(done);
    const { token } = useContext(UserContext);
    const [addSequence, setAddSequence] = useState(currentSequence);
    const [updateRecord, setUpdateRecord] = useState(highestSequence);

    function updateHabit() {

        let toggleRoute;

        if (!isChecked) {
            toggleRoute = true;
            setIsChecked(toggleRoute);
            setAddSequence(addSequence + 1);
            setUpdateRecord(updateRecord + 1);

        } else {
            toggleRoute = false;
            setIsChecked(toggleRoute);
            setAddSequence(addSequence - 1);
            setUpdateRecord(updateRecord - 1);
        }

        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${idHabit}/${toggleRoute ? 'check' : 'uncheck'}`;

        const body = {};

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        console.log(URL);

        axios.post(URL, body, config)
            .then(res => console.log(res.data))
            .catch(err => console.log(err.response.data))
    }

    return (
        <TodayListCard>
            <CardInfo>
                <CardTitle>{name}</CardTitle>
                <Progress>
                    <p>Sequência atual: {addSequence}</p>
                    <p>Seu Recorde: {updateRecord}</p>
                </Progress>
            </CardInfo>
            <CheckBox onClick={updateHabit} sx={{ fontSize: 68, color: isChecked ? '#8FC549' : '#E7E7E7' }} />
        </TodayListCard>
    )
}

const TodayListCard = styled.div`
    padding:8px;
    margin-top: 16px;
    display: flex;
    align-items: center;
    background-color: #FFFFFF;
`

const CardInfo = styled.div`
    width: 100%;
    color:#666666;
`
const CardTitle = styled.p`
    font-size: 1.25rem;
    margin-bottom: 12px;
`
const Progress = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 4px;
    font-size: 1rem;
`
