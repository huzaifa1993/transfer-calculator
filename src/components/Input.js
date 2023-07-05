import { Container } from '@mui/material'

function Input({ value, onChange }) {
  return (
    <Container>
    <input type="number" style={{marginTop:"15px", fontSize:"20px"}} value={value} onChange={onChange} />
    </Container>
  )
}


export default Input