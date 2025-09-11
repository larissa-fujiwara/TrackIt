import styled from 'styled-components';
import { Button, FormArea, H1, HabitContainer, Input } from '../sharedStyles/stylesSetUp.js';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useState } from 'react';


export default function Habits() {

    const [showForm, setShowForm] = useState(false);
    const [isEmpty, setIsEmpty] = useState(true);
    const days = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

    function alertar(e){
        e.preventDefault();
        console.log('oii');
        setShowForm(false);
        
    }

    return (
        <div>
            <Title>
                <H1>Meus Hábitos</H1>
                <AddBoxIcon onClick={() => setShowForm(true)} sx={{ fontSize: 40 }} style={{ color: '#52B6FF' }} />
            </Title>

            {showForm && (
                <HabitContainer $habits={true}>
                    <FormArea onSubmit={alertar} $habits={true}>
                        <Input type="text" />
                        <Weekdays>
                            {days.map((day, i) => <button type='button' key={i}>{day}</button>)}
                        </Weekdays>
                    <div>
                    <Button type='button' onClick={() => setShowForm(false)}>Cancel</Button>
                    <Button type='submit'>Ok</Button>
                    </div>
                    </FormArea>
                    
                </HabitContainer>)}

            {isEmpty && (<p style={{ color: '#666666' }}>
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
const Weekdays = styled.div`
    width: 100%;
    display: flex;
    column-gap: 4px;
    button{
        width:100%;
    }
`