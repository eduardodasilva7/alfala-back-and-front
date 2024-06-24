import Logo from "../Logo";
import OptionsHeader from "../OptionsHeader"
import IconesHeader from "../IconesHeader"
import styled from 'styled-components';
import { Link} from "react-router-dom"

const HeaderContainer = styled.header`
  background-color: #FFF;
  display: flex;
  justify-content: center;
`

function Header(){
    return (
        <HeaderContainer>
        <Link to="/"> 
          <Logo />
        </Link>
        <OptionsHeader />
        <IconesHeader />
      </HeaderContainer>
    )
}

export default Header