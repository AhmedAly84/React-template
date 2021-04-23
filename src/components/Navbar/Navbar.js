import React from 'react'
import {Link} from 'react-router-dom'
import{NavbarSection,NavbarLogo,LogoText,ListItem,List,Anchore} from '../Navbar/style'

function Navbar() {
    return (
      
        <NavbarSection>
            
            <div className="container">
                
                <NavbarLogo>
                    <LogoText>Ultra Profile</LogoText>
                </NavbarLogo>
                
               
                
                <List>
                    <ListItem ><Link className='Link-style' to="/">Home</Link></ListItem>
                    <ListItem><Anchore href="#">Work</Anchore></ListItem>
                    <ListItem ><Anchore href="#">Portfolio</Anchore></ListItem>
                    <ListItem><Anchore href="#">Resume</Anchore></ListItem>
                    <ListItem ><Anchore href="#">About</Anchore></ListItem>
                    <ListItem><Link  className='Link-style' to="/contact">Contact</Link></ListItem>
                </List>
                
            </div>
            
        </NavbarSection>
  
    )
}

export default Navbar
