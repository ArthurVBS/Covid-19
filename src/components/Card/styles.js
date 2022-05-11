import styled from 'styled-components'

export const Container = styled.div`
  background-color: #EFEFEFEE;
  display: flex;
  flex-basis: 280px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  box-shadow: 6px 6px 2px #00000080;
  border-radius: 4px;
  border-left: 16px solid ${({ color }) => color || '#5d78ff'};
  padding: 16px;
`

export const Text = styled.h2`
  color: ${({ color }) => color || '#000'};
  text-align: center;
  letter-spacing: 1px;
`
