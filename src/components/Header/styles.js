import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  background-color: #00000080;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border-bottom: 4px solid #00000060;
`

export const Title = styled.h1`
  text-align: center;
`

export const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 16px 32px;
`

export const Button = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background-color: transparent;
  color: white;
  cursor: pointer;
  font-size: 1.2em;
  border: none;
  transition: all .3s;

  &:hover{
    transform: rotateZ(-30deg);
  }
`

export const Select = styled.select`
  background-color: transparent;
  color: white;
  border: 2px solid white;
  border-radius: 4px;
  padding: 4px 32px;
`

export const Option = styled.option`
  color: black;
  font-size: 1.1em;
  line-height: 1.5em;
`
