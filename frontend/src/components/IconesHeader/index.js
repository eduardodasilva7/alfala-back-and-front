
import perfil from '../../img/perfil.svg'
import sacola from '../../img/sacola.svg'
import styled from 'styled-components'

const Icone = styled.ul`
margin-right: 40px;
width: 25px;
`

const Icones = styled.li`
display: flex;
align-items: center;
`

const icones = [perfil, sacola]

function IconesHeader() {
  return (
    <Icones>
      {icones.map((icone) => (
        <Icone><img src={icone} alt='icones'></img></Icone>
      ))}
    </Icones>
  )
}

export default IconesHeader