import React from 'react'
import {HomeSection,HomeBtn,HomeDesc,HomeDescSpan,HomeInfo,HomeInformation,HomeTitle} from'./style.js'
function Home() {
    return (
        <HomeSection>
            <div className="container">
                <HomeInformation>
                    <HomeTitle>Ahmed Ali</HomeTitle>
                    <HomeInfo>Creative Director</HomeInfo>
                    <HomeDesc>
                        Iam a professional <HomeDescSpan>UX Designer</HomeDescSpan> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                    </HomeDesc>
                    <HomeBtn className="home-btn">Let's Begin</HomeBtn>
                </HomeInformation>
            </div>
        </HomeSection>
    )
}

export default Home
