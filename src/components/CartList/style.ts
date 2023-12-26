import styled from "@emotion/styled";

export const StyledListCart = styled.ul`
  display: grid;
  row-gap: 20px;
  list-style: none;
  align-items: flex-start;
  justify-content: left;
`;

export const StyledTotal = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const StyledSubtotal = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  column-gap: 20px;
  margin-bottom: 40px;
`;

export const TitleTotal = styled.p`
  font-size: 26px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: left;
`;

export const SubtitleTotal = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;
  text-transform: uppercase;
`;

export const TotalPrice = styled.p`
  font-size: 16px;
  font-weight: 700;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
`;

export const ContainerSC = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 2fr 1fr;
`;

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
