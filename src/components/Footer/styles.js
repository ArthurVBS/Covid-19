import styled from 'styled-components'

export const Container = styled.div`
  background-color: #00000080;
  color: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 1px;
  padding: 8px;
  border-top: 4px solid #00000060;
`

export const Text = styled.p`
  text-align: center;
`

export const Link = styled.a`
  color: lightblue;
  transition: all .3s;

  &:hover{
    color: royalblue;
  }
`
