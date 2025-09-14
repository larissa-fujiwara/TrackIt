import styled from 'styled-components';
import { Button, H1, HabitContainer, Input } from '../sharedStyles/stylesSetUp.js';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useContext, useState } from 'react';
import Weekday from '../components/Weekday.jsx';
import axios from 'axios';
import UserContext from "../contexts/UserContext";
import { ThreeDots } from 'react-loader-spinner';
import HabitList from '../components/HabitsList.jsx';


export default function Habits() {

    const [showForm, setShowForm] = useState(false);
    const [name, setName] = useState('');
    const [days, setDays] = useState([]);
    const [loading, setLoading] = useState(false);
    const { token } = useContext(UserContext);
    const weekdays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']; //array que determinará os dias em números
    const isHabit = true; //se está na página de hábito, muda o estilo do CSS

    function formVisible() {
        if (!showForm) {
            setShowForm(true);
        }
    }

    function addHabit(e) {
        e.preventDefault();

        if (days.length === 0) {
            alert('Selecione um ou mais dias para acompanhar!');
        } else {
            const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`;
            const body = { name, days };
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            };

            setLoading(true);

            axios.post(URL, body, config)
                .then(res => {
                    setLoading(false);
                    setName('');
                    setDays([]);
                    setShowForm(false);
                })
        }

    }

    return (
        <div>
            <Title>
                <H1>Meus Hábitos</H1>
                <AddBoxIcon onClick={formVisible} sx={{ fontSize: 40 }} style={{ color: '#52B6FF' }} />
            </Title>

            {showForm && (
                <HabitContainer $isHabit={isHabit}>
                    <HabitForm onSubmit={addHabit}>
                        <Input
                            required
                            type="text"
                            placeholder='nome do hábito'
                            value={name}
                            onChange={e => setName(e.target.value)}
                            disabled={loading}

                            $isHabit={true}
                        />
                        <Weekdays>
                            {weekdays.map((day, i) => <Weekday
                                key={i}
                                day={day}
                                dayNum={i}
                                days={days}
                                setDays={setDays}
                                loading={loading}
                            />)}
                        </Weekdays>
                        <Wrapper>
                            <Button type='button'
                                disabled={loading}
                                onClick={() => setShowForm(false)}
                                $cancel={true}
                                $isHabit={isHabit}
                            >
                                Cancel
                            </Button>
                            <Button type='submit' disabled={loading} $isHabit={isHabit}>
                                {!loading ? 'Ok' : <ThreeDots height='1rem' color="#FFFFFF" />}
                            </Button>
                        </Wrapper>
                    </HabitForm>

                </HabitContainer>)}


            <HabitList />




        </div>
    )
}

const Title = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Weekdays = styled.div`
    width: 100%;
    display: flex;
    column-gap: 4px;
`

const HabitForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 8px;
    row-gap: 8px;
`

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    column-gap: 4px;
`