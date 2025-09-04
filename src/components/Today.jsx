import styled from 'styled-components';
import { H1, HabitContainer } from '../sharedStyles/stylesSetUp.js';

export default function Today() {
    return (
        <div>
            <H1>Segunda, 17/05</H1>

            <HabitContainer>
                <Description>
                    <h2>Ler 1 capítulo de livro</h2>
                    <p>Sequência atual: 3 dias</p>
                    <p>Seu recorde: 5 dias</p>
                </Description>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrSLox2ia0u9peaoS7Sy19T60CQ4tO8JT46Q&s" alt="" />
            </HabitContainer>

        </div>
    )
}

const Description = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 8px;
`