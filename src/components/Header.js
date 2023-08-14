import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {

  const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <Container>
      <a>
        <img src="/images/logo.svg" />
      </a>

      <Menu>
        <a href="#">Model S</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a>
        <a href="#">Model 3</a>
      </Menu>

      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>

        <CustomMenu onClick={() => setBurgerStatus(true)} />

        <BurgerNav show={burgerStatus}>

          <CloseWrapper>

            <CustomClose onClick={() => setBurgerStatus(false)} />

          </CloseWrapper>
          <li><a href="#">Model S</a></li>
          <li><a href="#">Model 3</a></li>
          <li><a href="#">Model X</a></li>
          <li><a href="#">Model Y</a></li>
          <li><a href="#">Cybertruck</a></li>
          <li><a href="#">Roadster</a></li>
          <li><a href="#">Existing inventory</a></li>
          <li><a href="#">Used inventory</a></li>
          <li><a href="#">Trade-in</a></li>
          <li><a href="#">Semi</a></li>
          <li><a href="#">Charging stations</a></li>
          <li><a href="#">Utilities</a></li>
          <li><a href="#">Test Drive</a></li>

        </BurgerNav>


      </RightMenu>
    </Container>
  )
}

const Container = styled.div`
  min-height : 60px;
  position : fixed;
  justify-content : space-between;
  display : flex;
  align-items : center;
  padding : 0 20px;
  top :0;
  left : 0;
  right : 0;
  z-index : 1;
`
const Menu = styled.div`
display : flex;
align-items : center;
flex : 1;
justify-content : center;

a{
  font-weight : 600;
  text-transform : uppercase;
  padding : 0 20px;
  flex-wrap : nowrap;
  font-size :1.2rem;
}

a::after {
  content: '';
  width: 0px;
  height: 2.5px;
  background: #ffffff;
  display: block;
  margin-top: auto;
  transition: 0.5s;
}

a:hover::after {
  width: 100%;
}

@media(max-width : 768px){
  display : none;
}
`

const RightMenu = styled.div`
display : flex;
align-items : center;

a{
  font-weight : 600;
  text-transform : uppercase;
  margin-right : 20px;
  flex-wrap : nowrap;
  font-size :1.1rem;
}
`

const CustomMenu = styled(MenuIcon)`
  cursor : pointer;
`

const BurgerNav = styled.div`
  position : fixed;
  top : 0;
  bottom : 0;
  right : 0;
  width : 300px;
  background-color : white;
  z-index : 2;
  list-style : none;
  padding : 20px;
  display : flex;
  flex-direction : column;
  text-align : start;
  transform : ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition : transform 0.4s ease-in;

  li{
    padding : 15px 0;
    border-bottom : 1px solid rgba(0,0,0,0.2);

    a{
      font-weight : 600;
    }

    a:hover{
      color: rgb(171, 169, 169);
    }

    li:hover{
      background-color: rgb(220, 215, 215);
    }
  }

`

const CustomClose = styled(CloseIcon)`
  cursor : pointer;
`

const CloseWrapper = styled.div`
  display : flex;
  justify-content : flex-end;
`

export default Header