import React, { useState , useEffect} from 'react'
import axios from 'axios'

import {Span , Social , SocialMedia , Socialp ,Spaninfo ,Icon} from './style.js'
const Socialmedia=()=> {
    const [SocialList,setSocialList] = useState([])
    useEffect(()=>{
        axios.get('js/data.json').then(
            res =>{setSocialList(res.data.social)}
        )
    },[]) 
    const SocialMap = SocialList.map((socialItem)=>{
        return(
            <Social item ={socialItem.id} key={socialItem.id}>
                <Icon className={socialItem.icon}></Icon>
                <Socialp>
                    <Span>{socialItem.title}</Span>
                    <Spaninfo>{socialItem.body}</Spaninfo>
                </Socialp>
            </Social>
        )
    })
    return (
        <SocialMedia>
          
            {SocialMap}
            
         
        </SocialMedia>
    )
    
    
    
    
}

export default Socialmedia
