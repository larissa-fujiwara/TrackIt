import styled from 'styled-components';
import { Button, FormArea, H1, HabitContainer, Input } from '../sharedStyles/stylesSetUp.js';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useState } from 'react';
import Weekday from '../components/Weekday.jsx';


export default function Habits() {

    const [showForm, setShowForm] = useState(false);
    const [name, setName] = useState('');
    const [days, setDays] = useState([]);
    const [loading, setLoading] = useState(false);
    const weekdays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']; //array que determinará os dias em números
    const isHabit = true; //se está na página de hábito, muda o estilo do CSS

    console.log('componente Habits', days);

    function addHabit(e) {
        e.preventDefault();
        setLoading(true);

        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`;
        const body = { name, days };



        setShowForm(false);

    }

    return (
        <div>
            <Title>
                <H1>Meus Hábitos</H1>
                <AddBoxIcon onClick={() => setShowForm(true)} sx={{ fontSize: 40 }} style={{ color: '#52B6FF' }} />
            </Title>

            {showForm && (
                <HabitContainer $isHabit={isHabit}>
                    <FormArea onSubmit={addHabit} $isHabit={isHabit}>
                        <Input
                            required
                            type="text"
                            placeholder='nome do hábito'
                            value={name}
                            onChange={e => setName(e.target.value)}

                            $isHabit={true}
                        />
                        <Weekdays>
                            {weekdays.map((day, i) => <Weekday
                                key={i} 
                                day={day} 
                                dayNum={i}
                                days={days}
                                setDays={setDays} 
                                />)}
                        </Weekdays>
                        <Wrapper>
                            <Button type='button' $cancel={true} $isHabit={isHabit} onClick={() => setShowForm(false)}>Cancel</Button>
                            <Button type='submit' $isHabit={isHabit}>Ok</Button>
                        </Wrapper>
                    </FormArea>

                </HabitContainer>)}

            {/* {isEmpty && (<p style={{ color: '#666666' }}>
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
            </p>)} */}

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
const Wrapper = styled.div`
    display: flex;
    justify-content: end;
    column-gap: 4px;
`