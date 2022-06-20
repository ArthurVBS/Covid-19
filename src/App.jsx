import { useState, useCallback, useEffect } from 'react'

import GlobalStyles from './styles/globalStyles'
import Api from './api'

import Header from './components/Header'
import Board from './components/Board'
import Footer from './components/Footer'

const App = () => {
  const [data, setData] = useState({})
  const [country, setCountry] = useState('Germany')
  const updateAt = new Date().toLocaleString()

  const getCovidData = useCallback((country) => {
    Api.getCountry(country)
      .then(data => setData(data))
  }, [])

  useEffect(() => {
    getCovidData(country)
  }, [getCovidData, country])

  const handleChange = ({ target }) => {
    const country = target.value
    setCountry(country)
  }

  return (
    <>
      <GlobalStyles />
      <Header
        data={data}
        updateAt={updateAt}
        onChange={handleChange}
        country={country}
      />
      <Board data={data} />
      <Footer />
    </>
  )
}

export default App
