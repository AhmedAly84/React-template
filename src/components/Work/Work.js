import axios from 'axios'
import {WorkSection,Part,PartDesc,PartTitle,Line,WorkTitle,Span,Icon} from'./style.js'
import React, { Component } from 'react'

export class Work extends Component {
   
    
      state = {
             works : []
        }
    
    componentDidMount(){
        axios.get('js/data.json').then(
            res =>{this.setState({works : res.data.works})}
        )
      
    }
    
    render() {
        
        const {works} = this.state
        const workList = works.map((item)=>{
            return(
                <Part first={item.id} key={item.id}>
                <Icon className={item.icon_name}></Icon>
                <PartTitle>{item.title}</PartTitle>
                <Line/>
                <PartDesc>
                    {item.body}
                </PartDesc>
            </Part>
            )
        })
      
        return (
            <WorkSection>
            <div className="container">
                <WorkTitle><Span>My</Span> Work</WorkTitle>
               
               {workList} 
            </div>
        </WorkSection>
        )
    }
}

export default Work
