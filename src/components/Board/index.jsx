import Card from '../Card'
import { Container } from './styles.js'

const Board = ({ data }) => {
  const { cases, todayDeaths, recovered, deaths, todayCases } = data

  const getValue = (value) => value ? value : '-'

  return (
    <Container>
      <Card value={getValue(cases)} label="Cases" color="#5d78ff" />
      <Card value={getValue(todayDeaths)} label="Today Deaths" color="#F7B829" />
      <Card value={getValue(recovered)} label="Recovered" color="#67C887" />
      <Card value={getValue(deaths)} label="Deaths" color="#000" />
      <Card value={getValue(todayCases)} label="Today Cases" color="#E95078" />
    </Container>
  )
}

export default Board
