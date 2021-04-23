import React from 'react'
import {Creative,Creativeinfo,Infotitle,Infodesc,Infodir,Span} from './style'
function About() {
    return (
        <div class="creative">
        <Creative>
        <Creativeinfo>
                <Infotitle><Span>This is</Span> Me</Infotitle>
                <Infodir>Creative Director</Infodir>
                <Infodesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <a href="#">explicabo</a> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                </Infodesc>
                <Infodesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                </Infodesc>
            </Creativeinfo>
        </Creative>
    </div>
    )
}

export default About
