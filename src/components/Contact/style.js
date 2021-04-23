import styled from "styled-components";

export const ConactSection = styled.div `
  padding: 50px 0;
  text-align: center;
`

export const ConTitle = styled.h2 `
  font-size: 60px;
  margin-bottom: 30px;
`

export const Span = styled.span `
  font-weight: normal;
`

export const Form = styled.form `
  width: 70%;
  margin: auto;
`

export const Input = styled.input `
  box-sizing: border-box;
  outline: 0;
  padding: 5px;
  margin-bottom: 10px;
`

export const FormInputDiv = styled.div `
  overflow: hidden;
`

export const FormInput = styled(Input)`
  width: 49%;
`

export const FormInputText = styled(Input)`
  float: left;
  width: 49%;
`

export const FormInputEmail = styled(Input)`
  float: right;
  width: 49%;
`

export const FormInputSub = styled(Input)`
  width: 100%;
`

export const TextArea = styled.textarea`
  width: 100%;
  outline: 0;
  background: #ccc;
`

export const FormInputSubmit = styled(Input)`
  width: 60%;
  background: #fff;
  border: 1px solid #ccc;
  color: #888;
  cursor: pointer;
`
