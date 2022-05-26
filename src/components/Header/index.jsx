import COUNTRIES from '../../constants/countries'

import { Box, Button, Container, Option, Select, Title } from './styles'

const Header = ({ updateAt, onChange, data, country }) => {
  const { cases, todayDeaths, recovered, deaths, todayCases } = data

  const navigatorHasShare = navigator.share

  const renderShareButton = () => {
    return (
      <Button onClick={shareInfo}><i className="fas fa-share"></i></Button>
    )
  }

  const renderCopyButton = () => {
    return (
      <Button onClick={copyInfo}><i className="far fa-copy"></i></Button>
    )
  }

  const textCovid19 = `
    Country: ${country} -
    Cases: ${cases},
    Today Deaths: ${todayDeaths},
    Recovered: ${recovered},
    Deaths: ${deaths},
    Today Cases: ${todayCases}.
  `

  const copyInfo = () => {
    navigator.clipboard.writeText(textCovid19)
  }

  const shareInfo = () => {
    navigator.share({
      title: `Covid19 - ${country}`,
      text: textCovid19,
      url: 'https://arthurvbs.github.io/Covid-19/'
    })
  }

  const renderCountries = (country, index) => {
    return (
      <Option key={`country-${index}`} value={country}>
        {country}
      </Option>
    )
  }

  return (
    <Container>
      <Title>Covid-19</Title>
      <Box>
        <Select onChange={onChange} value={country}>
          {COUNTRIES.map(renderCountries)}
        </Select>
        <p>Updated: {updateAt}</p>
      </Box>
      {navigatorHasShare ? renderShareButton() : renderCopyButton()}
    </Container>
  )
}

export default Header
