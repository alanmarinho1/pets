import type { NextPage } from 'next'
import List from '../ui/components/List/List'
import Title from '../ui/components/Title/Title'

const Home: NextPage = () => {
  return (
    <div>
      <Title title="" subtitle={
      <span>
        Com um pequeno valor mensal, você <br/>
        pode <strong>adotar um pet virtualmente</strong> 
      </span>
    } />
      <List 
        pets={[
          {
          id: 1,
          nome: 'Bidu',
          historia: 'Xablau ticaracatica auhsudhasud',
          foto: 'https://super.abril.com.br/wp-content/uploads/2018/05/filhotes-de-cachorro-alcanc3a7am-o-c3a1pice-de-fofura-com-8-semanas1.png'
          },
          {
            id: 2,
            nome: 'Otto',
            historia: 'Meu pirraia lindo',
            foto: 'https://static1.patasdacasa.com.br/articles/8/10/38/@/4864-o-cachorro-inteligente-mostra-essa-carac-articles_media_mobile-1.jpg'
            }
        ]}
      />
    </div>
  )
}

export default Home
