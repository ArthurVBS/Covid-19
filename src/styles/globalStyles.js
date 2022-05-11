import { createGlobalStyle } from 'styled-components'
import CovidWallpaper from '../assets/images/covid.jpg'

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: none;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
  }

  body{
    background: url(${CovidWallpaper});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    font-family: 'Quicksand', sans-serif;
    min-height: 100vh;
  }

  #root{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
  }

  blockquote, q{
    quotes: none;
  }
  blockquote:before, blockquote:after, q:before, q:after{
    content: '';
    content: none;
  }
  table{
    border-collapse: collapse;
    border-spacing: 0;
  }
`
