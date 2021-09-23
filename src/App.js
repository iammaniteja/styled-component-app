import styled from 'styled-components';

const Button = styled.button `
color: white;
border-radius: 5px;
margin: 5px;
background-color: black;
`

const Input = styled.input `
border: 2px solid;
border-radius: 3px;
margin: 5px;
padding: 5px;
`

function App() {
  return (
    <div className="App">
      <h1>Simple Form</h1>
      <Input placeholder = "Name"/>
      <Input placeholder = "Password" type = "password"/>
      <Button>Login</Button>
    </div>
  );
}

export default App;
