import { Container, Text } from './styles.js'

const Card = ({ value, label, color }) => {
  return (
    <Container color={color}>
      <Text color={color}>{label}</Text>
      <Text>{value}</Text>
    </Container>
  )
}

export default Card
