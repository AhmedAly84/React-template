import React ,{useState,useEffect} from 'react'
import axios from 'axios'
import {PortfolioSection,PortfolioItem,PortfolioList,PortfolioTitle,Span,Box,BoxImg,BoxOverlay,BoxOverlaySpan} from './style.js'
function Portfolio() {
    const [Images,setImages] =  useState([])
    useEffect(()=>{
        axios.get('js/data.json').then(
            res =>{setImages(res.data.portfolio)}
        )
    },[])
    const PortfolioImages = Images.map((imageItem)=>{
        return(
            <Box key={imageItem.id} >
            <BoxImg src={imageItem.image} alt=""/>
            <BoxOverlay>
                <BoxOverlaySpan>
                    Show Image
                </BoxOverlaySpan>
            </BoxOverlay>
        </Box>
        )

    })
    return (
        <PortfolioSection>
            <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>
            <PortfolioList>
                <PortfolioItem active>All</PortfolioItem>
                <PortfolioItem>HTML</PortfolioItem>
                <PortfolioItem>Photoshop</PortfolioItem>
                <PortfolioItem>Wordpress</PortfolioItem>
                <PortfolioItem>Mobile</PortfolioItem>
            </PortfolioList>
            
            <div className="box">
                
               {PortfolioImages}
                
                    
            </div>
            
        </PortfolioSection>
        
       
    )
}

export default Portfolio
