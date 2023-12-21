import styled from "@emotion/styled";

export const ButtonSC = styled.button`
  font-size: 16px;
  font-weight: 700;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: center;
  padding: 18px 0;
  width: 100%;
  text-transform: uppercase;
  background-color: black;
  color: white;
  border-radius: 4px;

  transition:
    background-color 0.5s ease-out,
    color 0.5s ease-out;

  &:hover {
    background-color: white;
    color: black;
  }
`;
