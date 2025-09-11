import { Content, FormArea, Input, Button, ActionLink } from "../sharedStyles/stylesSetUp.js";
import { Emblem } from "../sharedStyles/imagesSetUp.js";
import emblem from "../assets/emblem.svg";
import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import UserContext from "../contexts/UserContext.js";
import { ThreeDots } from "react-loader-spinner";

export default function LoginPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {setUserImg, setToken} = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    function logOn(e) {
        setLoading(true);
        e.preventDefault();

        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login';
        const body = {email, password};

        axios.post(URL, body)
            .then(res => {
                setLoading(false)
                setUserImg(res.data.image)
                setToken(res.data.token)
                localStorage.setItem('userImage', res.data.image)
                localStorage.setItem('token', res.data.token)
                navigate('/today') 
            })
            .catch(err => {
                alert(err.response.data.message)
                setLoading(false)
            })
    }

    return (
        <Content>
            <Emblem src={emblem} alt="TrackIt Emblem" />
            <FormArea onSubmit={logOn}>
                <Input
                    required
                    type="email"
                    placeholder="seuemail@email.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    disabled={loading} 
                />

                <Input
                    required
                    type="password"
                    placeholder="senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    disabled={loading} 
                />

                <Button type="submit" disabled={loading}>
                    {!loading ? 'Entrar' : <ThreeDots color="#FFFFFF" />}
                </Button>
            </FormArea>
            <ActionLink to='/sign-up'>Não tem conta? Cadastre-se!</ActionLink>
        </Content>
    )
}