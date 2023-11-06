import styled from 'styled-components';

export const SecondaryContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
export const SecondaryHeader = styled.h2`
  font-size: 30px;
  font-weight: 700;
  text-transform: capitalize;
  text-shadow: 0 1px 1px #2d2020;
`;
export const Btn = styled.button`
  margin-bottom: 20px;
  border: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.04em;
  cursor: pointer;
  display: block;
  min-width: 169px;
  height: 40px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  color: white;
  background-color: #7c90f3;
  margin-left: auto;
  margin-right: auto;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
