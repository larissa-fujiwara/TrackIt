import { Content, Form, Input, Button, ActionLink} from "../sharedStyles/stylesSetUp.js";
import { Emblem } from "../sharedStyles/imagesSetUp.js";
import emblem from "../assets/emblem.svg";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";


export default function SignUpPage(){
    
    const [email, setEmail] = useState('');
    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function createAccount(e){
        e.preventDefault();
        
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up';
        const body = {email, name, image, password};
        
        axios.post(URL, body)
            .then(() => navigate('/'))
            .catch(err => alert(err.response.data.message))
        
    }
    
    return (
        <Content>
            <Emblem src={emblem} alt="TrackIt Emblem" />
            <Form onSubmit={createAccount}>
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

                <Input
                    required 
                    type="text"
                    placeholder="nome" 
                    value={name}
                    onChange={e => setName(e.target.value)} 
                />

                <Input
                    required 
                    type="url"
                    placeholder="foto"
                    value={image}
                    onChange={e => setImage(e.target.value)}  
                />
                
                <Button type="submit">Cadastrar</Button>
            </Form>
            <ActionLink to='/'>Já tem uma conta? Faça login!</ActionLink>
        </Content>
    )
}