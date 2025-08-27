import { Content, Form, Input, Button, NavLink} from "../sharedStyles/stylesSetUp.js";
import { Emblem } from "../sharedStyles/imagesSetUp.js";
import emblem from "../assets/emblem.svg";

export default function SignUpPage(){
    return (
        <Content>
            <Emblem src={emblem} alt="TrackIt Emblem" />
            <Form>
                <Input
                    required 
                    type="email"
                    placeholder="seuemail@email.com"     
                />

                <Input
                    required 
                    type="password"
                    placeholder="senha"  
                />

                <Input
                    required 
                    type="text"
                    placeholder="nome"  
                />

                <Input
                    required 
                    type="url"
                    placeholder="foto"  
                />
                
                <Button type="submit">Entrar</Button>
            </Form>
            <NavLink>Já tem uma conta? Faça login!</NavLink>
        </Content>
    )
}