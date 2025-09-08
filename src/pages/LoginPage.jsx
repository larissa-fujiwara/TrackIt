import { Content, Form, Input, Button, ActionLink } from "../sharedStyles/stylesSetUp.js";
import { Emblem } from "../sharedStyles/imagesSetUp.js";
import emblem from "../assets/emblem.svg";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

export default function LoginPage({setToken}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function logOn(e) {
        e.preventDefault();

        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login';
        const body = {email, password};

        axios.post(URL, body)
            .then(res => {
                setToken(res.data.token)
                localStorage.setItem('token', res.data.token)
                navigate('/today') 
            })
            .catch(err => alert(err.response.data.message))
    }

    return (
        <Content>
            <Emblem src={emblem} alt="TrackIt Emblem" />
            <Form onSubmit={logOn}>
                <Input
                    required
                    type="email"
                    placeholder="seuemail@email.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input
                    required
                    type="password"
                    placeholder="senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />

                <Button type="submit">Entrar</Button>
            </Form>
            <ActionLink to='/sign-up'>Não tem conta? Cadastre-se!</ActionLink>
        </Content>
    )
}