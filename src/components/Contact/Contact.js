import React from 'react'
import Footer from '../Footer/Footer.js'
import {ConTitle,ConactSection,Span,Form, TextArea,FormInput,FormInputDiv,FormInputEmail,FormInputSub,FormInputSubmit,FormInputText} from'./style.js'
function Contact() {
    return (
            <React.Fragment>
                <ConactSection>
            <div class="container">
                <ConTitle><Span>Drop </Span>Me A line</ConTitle>
                <Form action="">
                    <FormInputDiv>
                        <FormInputText type="text" placeholder="Your Name" />
                        <FormInputEmail type="email" placeholder="Your Email" />
                    </FormInputDiv>
                    <FormInputSub type="text" placeholder="Your Subject" />
                    <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
                    <FormInputSubmit type="submit" value="Send Message" />
                </Form>
            </div>
        </ConactSection>
        <Footer/>
            </React.Fragment>
        
    )
}

export default Contact
