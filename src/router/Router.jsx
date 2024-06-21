import { Route, Routes } from "react-router-dom"
import Container from "../components/container/Container"

const Router =()=>{
    return(
        <>
            <Routes>
                <Route path='/' element={<Container planet='mercury'$color='#419EBB' $width='111px' $position='290px'/>  }/>
                <Route path="/venus" element={<Container planet='venus' $color='#EDA249' $width='154px' $position='320px'/>}/>
                <Route path="/earth" element={<Container planet='earth' $color='#6D2ED5' $width='173px' $position='330px'/>}/>
                <Route path="/mars" element={<Container planet='mars' $color='#D14C32'$width='129px'$position='305px'/>}/>
                <Route path="/jupiter" element={<Container planet='jupiter' $color='#D14C32'$width='224px' $position='350px'/>}/>
                <Route path="/saturn" element={<Container planet='saturn' $color='#CD5120' $width='256px'$position='360px'/>}/>
                <Route path="/uranus" element={<Container planet='uranus' $color='#1EC1A2' $width='176px'$position='330px'/>}/>
                <Route path="/neptune" element={<Container planet='neptune' $color='#2D68F0' $width='173px'$position='325px'/>}/>

            </Routes>
        
        </>
    )
}
export default Router