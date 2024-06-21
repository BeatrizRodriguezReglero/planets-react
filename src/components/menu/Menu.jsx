import { Link } from "react-router-dom"
import { StyledHeader, StyledLi, StyledMenu } from "./menu.styles"

const Menu =({$visibleNav, NavSwitch})=>{
    return(
        <>
            
                <StyledHeader>
                    <h2>THE PLANETS</h2>
                    <div>
                        <img onClick={(NavSwitch)} src="./images/icon-hamburger.svg" alt="" /> 
                    </div>
                     
                </StyledHeader>
               
                <StyledMenu onClick={NavSwitch} $visibleNav={$visibleNav}>
                    <ul>
                        <StyledLi $color="#DEF4FC"><Link to="/">MERCURY</Link><img src="./images/icon-chevron.svg"  /></StyledLi>
          
                        <StyledLi $color="#F7CC7F"><Link to="/venus">VENUS</Link><img src="./images/icon-chevron.svg"  /></StyledLi>
            
                        <StyledLi $color="#545BFE"><Link to="/earth">EARTH</Link><img src="./images/icon-chevron.svg"  /></StyledLi>
            
                        <StyledLi $color="#FF6A45"><Link to="/mars">MARS</Link><img src="./images/icon-chevron.svg"  /></StyledLi>
            
                        <StyledLi $color="#ECAD7A"><Link to="/jupiter">JUPITER</Link><img src="./images/icon-chevron.svg"  /></StyledLi>
            
                        <StyledLi $color="#FCCB6B"><Link to="/saturn">SATURN</Link><img src="./images/icon-chevron.svg"  /></StyledLi>
            
                        <StyledLi $color="#65F0D5"><Link to="/uranus">URANUS</Link><img src="./images/icon-chevron.svg"  /></StyledLi>
            
                        <StyledLi $color="#497EFA"><Link to="/neptune">NEPTUNE</Link><img src="./images/icon-chevron.svg"  /></StyledLi>
          
                    </ul>
            </StyledMenu>
        </>
    )
}
export default Menu