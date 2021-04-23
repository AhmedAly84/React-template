import React, {useState,useEffect} from 'react'
import axios from 'axios'
import {ParentSpan, ProfileItem, ProfileList,ProfileSection,ProfileSkills,Profiletitle,Span,Skills,SkillsDesc,Skillstitle,SpanWeb,spanWidth, Bar, BarTitle, BarBerc, Barent} from './style.js'

function Profile() {
    const [SkillItem,setSkills]= useState([])
    useEffect(()=>{
        axios.get('js/data.json').then(
            res =>{setSkills(res.data.profile)}
        )
    },[])
    const SkillsList =SkillItem.map((Item)=>{
        return(
            <Bar key={Item.id}>
            <BarTitle>{Item.title}</BarTitle>
            <BarBerc>{Item.precentage}</BarBerc>
            <Barent>
                <ParentSpan Width={Item.id}></ParentSpan>
            </Barent>
        </Bar>
        )

    })
    return (
        <ProfileSkills>
            <div class="container">
                <ProfileSection>
                    <Profiletitle><Span>My </Span>Profile</Profiletitle>
                    <ProfileList>
                        <ProfileItem>
                            <Span>Name</Span>
                            Ahmed Ali
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Birthday</Span>
                            1/9/1984
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Address</Span>
                           Alexandria
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Phone</Span>
                            4444 5555 6666
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Email</Span>
                           ahmed.tcl.alx@gmail.com
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Website</Span>
                            <SpanWeb>www.google.com</SpanWeb>
                        </ProfileItem>
                    </ProfileList>
                </ProfileSection>
                
                <Skills>
                    <Skillstitle>Some <span>skills</span></Skillstitle>
                    <SkillsDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillsDesc>
                   {SkillsList}
                    
                 
                </Skills>
                
            </div>
        </ProfileSkills>
    )
}

export default Profile
