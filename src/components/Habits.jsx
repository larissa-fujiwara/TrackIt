import styled from 'styled-components';
import { H1, HabitContainer } from '../sharedStyles/stylesSetUp.js';

export default function Habits() {
    return (
        <div>
            <Div>
            <H1>Meus Hábitos</H1>
            <button>+</button>
            </Div>

            <HabitContainer>
                Bloco aqui
            </HabitContainer>

        </div>
    )
}

const Div = styled.div`
    display: flex;
    justify-content: space-between;
`