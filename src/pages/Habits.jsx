import styled from 'styled-components';
import { H1, HabitContainer } from '../sharedStyles/stylesSetUp.js';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useState } from 'react';

export default function Habits() {

    const [showForm, setShowForm] = useState(false);
    const [isEmpty, setIsEmpty] = useState(true);

    return (
        <div>
            <Title>
            <H1>Meus Hábitos</H1>
            <AddBoxIcon onClick={() => setShowForm(true)} sx={{ fontSize: 40 }} style={{ color: '#52B6FF' }} />
            </Title>

            {showForm && (<HabitContainer>
                <button onClick={() => setShowForm(false)}>Cancel</button>
            </HabitContainer>)}

            {isEmpty && (<p style={{color: '#666666'}}>
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
            </p>)}

        </div>
    )
}

const Title = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const NewHabit = styled.div`
    background-color: #52B6FF;
    width: 40px;
    height: 36px;
    border-radius: 8px;
`