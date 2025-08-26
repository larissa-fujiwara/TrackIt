import { Content, Input} from "../sharedStyles/stylesSetUp.js";
import { Emblem } from "../sharedStyles/imagesSetUp.js";
import emblem from "../assets/emblem.svg";

export default function LoginPage() {
    return (
        <Content>
            <Emblem src={emblem} alt="TrackIt Emblem" />
            <form>
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
                
                <button type="submit">Entrar</button>

            </form>
        </Content>
    )
}