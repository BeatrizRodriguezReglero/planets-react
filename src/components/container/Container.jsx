import { useState } from "react";
import Menu from "../menu/Menu"
import Tabs from "../tabs/Tabs";

import { PLANETS } from "../../constants/planets";
import { StyledExtraContainer, StyledExtraInfo, StyledExtraTitle, StyledImage, StyledImageSurface, StyledImageWiki, StyledImgContainer, StyledInfo, StyledInfoContainer, StyledLink, StyledPlanet, StyledPlanetContainer, StyledWikiContainer } from "./container.styles";

const Container=({planet, $color, $width, $position})=>{
    const [activeTab, setActiveTab]= useState(0);
    const [visibleNav, setVisibleNav]=useState(false);
    if (!planet ) return
    
   
  

    return(
        <>
            <div>
                <Menu $visibleNav={visibleNav} navSwitch={()=>navSwitch(setVisibleNav)}/>
                <Tabs activeTab={activeTab} setActiveTab={setActiveTab} $color={$color}/>
                <div>
                    <StyledImgContainer>
                       <StyledImage src={PLANETS[planet][Object.keys(PLANETS[planet])[activeTab]].img} alt="" $width={$width} />
                    {activeTab === 2 && ( 
                        <StyledImageSurface src={PLANETS[planet].surface.geology} alt="Geology" $position={$position}/>
                    )}
 
                    </StyledImgContainer>
                    <StyledInfoContainer>
                        <StyledPlanetContainer>
                            <StyledPlanet>{PLANETS[planet][Object.keys(PLANETS[planet])[activeTab]].name}</StyledPlanet>
                            <StyledInfo>{PLANETS[planet][Object.keys(PLANETS[planet])[activeTab]].description}</StyledInfo>
                        </StyledPlanetContainer>
                        <StyledWikiContainer>
                            <StyledLink>Source : <a href="https://es.wikipedia.org/wiki/Mercurio_(planeta)" target="blank"> Wikipedia</a></StyledLink>
                            <StyledImageWiki src="./images/square-up-right-solid.svg" alt="" />
                        </StyledWikiContainer>
                        
                            <StyledExtraContainer>
                                <StyledExtraTitle>ROTATION TIME</StyledExtraTitle>
                                <StyledExtraInfo>{PLANETS[planet].overview.rotationtime}</StyledExtraInfo>
                            </StyledExtraContainer>
                            <StyledExtraContainer>
                                <StyledExtraTitle>REVOLUTION TIME</StyledExtraTitle>
                                <StyledExtraInfo>{PLANETS[planet].overview.revolutiontime}</StyledExtraInfo>
                            </StyledExtraContainer>
                            <StyledExtraContainer>
                                <StyledExtraTitle>RADIUS</StyledExtraTitle>
                                <StyledExtraInfo>{PLANETS[planet].overview.radius}</StyledExtraInfo>
                            </StyledExtraContainer>
                            <StyledExtraContainer>
                                <StyledExtraTitle>AVERAGE TEMP </StyledExtraTitle>
                                <StyledExtraInfo>{PLANETS[planet].overview.averagetemp}</StyledExtraInfo>
                            </StyledExtraContainer>  
                        
                    </StyledInfoContainer>
                </div>
            </div>
           
        </>
    )
}

const navSwitch =(setVisibleNav)=>{
    setVisibleNav(prevPosition => !prevPosition);
} 
export default Container