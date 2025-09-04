import { Content, Form, Input, Button, ActionLink} from "../sharedStyles/stylesSetUp.js";
import { Emblem } from "../sharedStyles/imagesSetUp.js";
import emblem from "../assets/emblem.svg";

export default function LoginPage() {
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
                
                <Button type="submit">Entrar</Button>
            </Form>
            <ActionLink>Não tem conta? Cadastre-se!</ActionLink>
        </Content>
    )
}