import { 
    ListStyled,
    ListItem,
    Photo,
    Informations,
    Name,
    Description
  } from "./List.style";
  import { Button } from "@mui/material";
  import { Pet } from "../../../data/@types/Pet"
  import { TextService } from '../../../data/services/TextService'
 
  interface ListProps{
      pets: Pet[];
      onSelect: (pet: Pet) => void;
  }

  export default function List(props: ListProps){
      const tamanhoMaximoTexto = 200;
      return(
          <ListStyled>
              {props.pets.map(pet => (
              <ListItem key={pet.id}>
                  <Photo src={pet.foto} alt={pet.nome}/>
                  <Informations>
                      <Name>{pet.nome} </Name>
                      <Description>{TextService.limitarTexto(pet.historia, tamanhoMaximoTexto)}</Description>
                      <Button 
                        variant={'contained'} 
                        fullWidth
                        onClick={() => props.onSelect(pet)}
                        >Adotar {pet.nome}
                        
                        </Button>
                  </Informations>
              </ListItem>
            ))}  
          </ListStyled>
      )
  }