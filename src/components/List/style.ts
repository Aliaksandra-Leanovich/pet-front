import styled from "@emotion/styled";

export const ContainerSC = styled.div`
  width: 100%;
  display: flex;
`;

const StyledBookList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;

  width: 100%;
  max-width: 960px;

  list-style: none;
  padding: 0;
  margin: 0 auto;
`;

export { StyledBookList };

export const SortConatinerSC = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const InputsContainerSC = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;
`;

export const InputSC = styled.input`
  font-size: 14px;
  overflow: hidden scroll;
  font-family: Poppins, sans-serif;
  max-height: 300px;
  min-height: 28px;
  border-radius: 4px;
  background-color: rgb(255, 255, 255);
  padding: 6px 14px;
  word-break: break-word;
  border: 1px solid rgb(226, 227, 229);
`;

export const SelectSC = styled.select`
  font-size: 14px;
  overflow: hidden scroll;
  font-family: Poppins, sans-serif;
  max-height: 300px;
  min-height: 28px;
  border-radius: 4px;
  background-color: rgb(255, 255, 255);
  resize: vertical;
  padding: 10px 14px;
  border: 1px solid rgb(226, 227, 229);
`;

export const SelectSCContainerSC = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items: center;
  column-gap: 10px;
`;
