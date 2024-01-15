import styled from "@emotion/styled";

export const StyledFormSC = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  width: 100%;
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
  width: 400px;
  border-radius: 4px;
  background-color: rgb(255, 255, 255);
  padding: 6px 14px;
  word-break: break-word;
  border: 1px solid rgb(226, 227, 229);
`;

export const TextareaSC = styled.textarea`
  font-size: 14px;
  overflow: hidden scroll;
  font-family: Poppins, sans-serif;
  max-height: 500px;
  width: 400px;
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

export const ButtonSC = styled.button`
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  align-self: center;
  padding: 14px 0;
  width: 100%;
  text-transform: uppercase;
  background-color: black;
  color: white;
  border-radius: 4px;
  max-width: 200px;

  transition:
    background-color 0.5s ease-out,
    color 0.5s ease-out;

  &:hover {
    background-color: white;
    color: black;
  }
`;

export const TitleSC = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin: 0;
  line-height: 44px;
  letter-spacing: 0em;
  text-align: left;
`;

export const ButtonsContainerSC = styled.div`
  display: flex;
  align-self: center;
  column-gap: 30px;

  button {
    width: 200px;
  }
`;

export const ButtonSecondarySC = styled.button`
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  align-self: center;
  padding: 14px 0;
  width: 100%;
  text-transform: uppercase;
  background-color: white;
  color: black;
  border-radius: 4px;
  max-width: 200px;

  transition:
    background-color 0.5s ease-out,
    color 0.5s ease-out;

  &:hover {
    background-color: black;
    color: white;
  }
`;
