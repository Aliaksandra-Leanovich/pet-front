import styled from "@emotion/styled";

export const StyledInputSC = styled.input`
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  padding: 12px 0;
  width: 100%;
  border: none;
  border-bottom: 1px solid #d8d8d8;

  &:focus {
    outline: none;
  }
`;

export const ContainerSC = styled.div`
  flex-direction: column;
  row-gap: 16px;
`;

export const ErrorMessageSC = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  margin-top: 10px;

  svg {
    margin: 0 6px;
    width: 14px;
  }
`;

export const WarningTextSC = styled.p`
  font-size: 20px;
  line-height: 32px;
`;
