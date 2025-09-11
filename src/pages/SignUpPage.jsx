import { Content, FormArea, Input, Button, ActionLink} from "../sharedStyles/stylesSetUp.js";
import { Emblem } from "../sharedStyles/imagesSetUp.js";
import emblem from "../assets/emblem.svg";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { ThreeDots } from "react-loader-spinner";


export default function SignUpPage(){
    
    const [email, setEmail] = useState('');
    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    function createAccount(e){
        e.preventDefault();
        setLoading(true);
        
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up';
        const body = {email, name, image, password};
        
        axios.post(URL, body)
            .then(() => {
                setLoading(false)
                navigate('/')
            })
            .catch(err => {
                alert(err.response.data.message)
                setLoading(false)
            })
        
    }
    
    return (
        <Content>
            <Emblem src={emblem} alt="TrackIt Emblem" />
            <FormArea onSubmit={createAccount}>
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

                <Input
                    required 
                    type="text"
                    placeholder="nome" 
                    value={name}
                    onChange={e => setName(e.target.value)} 
                    disabled={loading}
                />

                <Input
                    required 
                    type="url"
                    placeholder="foto"
                    value={image}
                    onChange={e => setImage(e.target.value)}  
                    disabled={loading}
                />
                
                <Button type="submit" disabled={loading}>
                    {!loading ? 'Cadastrar' : <ThreeDots color="#FFFFFF" />}
                </Button>
            </FormArea>
            <ActionLink to='/'>Já tem uma conta? Faça login!</ActionLink>
        </Content>
    )
}