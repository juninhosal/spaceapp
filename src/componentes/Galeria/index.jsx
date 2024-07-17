import {styled} from "styled-components"
import { Titulo } from "../Titulo"
import { Populares } from "./Populares"
import { Tags } from "./Tags"
import { Imagem } from "./Imagem"

const GaleriaContainer = styled.div`
    display: flex;
`;
const SecaoFluida = styled.section`
    flex-grow: 1;
`;
const ImagensContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
`;
export const Galeria = ({ fotos = [], aoFotoSelecionada, aoAlterarFavorito, setTag }) => {
    return (
        <>
            <Tags setTag={setTag} />
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>
                        Navegue pela galeria
                    </Titulo>
                    <ImagensContainer>
                        {fotos.map(foto => <Imagem 
                            aoZomSolciitado={aoFotoSelecionada}
                            key={foto.id} 
                            foto={foto} 
                            aoAlterarFavorito={aoAlterarFavorito}
                            />)
                        }
                    </ImagensContainer>
                </SecaoFluida>
                <Populares/>
            </GaleriaContainer>
        </>
    )
}