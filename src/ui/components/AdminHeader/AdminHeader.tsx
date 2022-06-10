import { 
    ContainerHeader, 
    Logo, 
    LinksContainer} from "../AdminHeader/AdminHeader.style"

export default function AdminHeader(){
    return (
        <ContainerHeader>
            <div>
                <Logo src={"/imagens/logo.svg"} alt={'Adote um pet'}/>
                <LinksContainer>
                    <span>Cadastrar Pet</span>
                    <span>Relatório de Adoção</span>
                </LinksContainer>
            </div>
        </ContainerHeader>
    )
}