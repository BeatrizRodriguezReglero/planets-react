import { v4 } from "uuid"
import { StyledTabs, TabContainer } from "./tabs.styles"


const tabs = ['OVERVIEW', 'STRUCTURE', 'SURFACE']


const Tabs =({activeTab, setActiveTab, $color})=>{
 

    return<>
    <TabContainer>

        {tabs.map((tab, index)=>(
        <StyledTabs  key={v4()}  onClick={()=> TabClick(setActiveTab, index)} $color={$color} $isActive={activeTab === index} >{tab}</StyledTabs>
        
    ))}

    </TabContainer>
   
    
    </>
}
const TabClick = (setActiveTab, index)=>{
    setActiveTab(index);
}
export default Tabs