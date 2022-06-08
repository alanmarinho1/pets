import { AxiosError } from 'axios';
import { useState, useEffect } from 'react';
import { Pet } from '../../@types/Pet'
import { ApiService } from '../../services/ApiService';


export function useIndex(){
    const [listaPets, setListaPets] = useState<Pet[]>([]),
        [petSelecionado, setPetSelecionado] = useState<Pet | null>(null),
        [email, setEmail] = useState(''),
        [valor, setValor] = useState(''),
        [mensagem, setMensagem] = useState('');

    useEffect(() => {
        ApiService.get('/pets')
            .then((resposta)=> {
                setListaPets(resposta.data)
            })
    }, [])

    useEffect(() => {
        if(petSelecionado === null){
            limparFormulario();
        }
    })

    function adotar(){
        console.log(petSelecionado?.id, email, valor);
        if(petSelecionado !== null){
            if(validarDadosAdocao()){
                ApiService.post('/adocoes', {
                    pets_id: petSelecionado.id,
                    email,
                    valor
                }).then(() => {
                    setPetSelecionado(null);
                    setMensagem('Adoção confirmada com sucesso!');
                    limparFormulario();
                    }).catch((error: AxiosError) => {
                        setMensagem(error.response?.data.message);
                    })
            } else {
                setMensagem('Preencha todos os campos corretamente!')
            }
        }
    }

    function limparFormulario(){
        setEmail('');
        setValor('');
    }
    function validarDadosAdocao(){
        return email.length > 0 && valor.length > 0;
    }

    return {
        listaPets,
        petSelecionado,
        setPetSelecionado,
        email,
        setEmail,
        valor,
        setValor,
        mensagem,
        setMensagem,
        adotar

    };
}