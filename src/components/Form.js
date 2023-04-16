import React, { useState } from 'react';
import styled from 'styled-components';


const FormComponent = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [country, setCountry] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log({ name, age, country, email });
    };

    return (
        <FormContainer>
        <FormHeader>Get new Releases <br/> to your mail</FormHeader>
      <FormWrapper>
        <Form onSubmit={handleSubmit}>
            <h1>Sign up</h1>
          <FormField>
            <Label>Name:</Label>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label>Age:</Label>
            <Input
              type="text"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label>Country:</Label>
            <Input
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label>Email:</Label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormField>
          <Button type="submit">Submit</Button>
        </Form>
      </FormWrapper>
      </FormContainer>
    );
  };

  export default FormComponent;

  const FormContainer = styled.div`
  background-color: orange;
  `

  const FormHeader = styled.h1`
  padding-top: 20vh;
  color: black;
  font-weight: 900;
  align-self: center;
  text-align: center;
  `

  const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f7f7f7;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20vh;

  @media screen and (min-width: 690px) {
    width: 40vw;
  }
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  border: 2px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  width: 100%;
`;

const Button = styled.button`
  background-color: black;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
`;
