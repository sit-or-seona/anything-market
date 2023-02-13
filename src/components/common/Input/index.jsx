import styled from "styled-components";

export const Input = styled.input`
  padding: 19px 0;
  line-height: 20px;
  font-size: 16px;
  color: ${({ theme }) => theme.palette.black};
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.palette.mediumGray};
  outline: none;

  &:focus {
    border-bottom: 1px solid ${({ theme }) => theme.palette.main};
  }

  &::placeholder {
    color: ${({ theme }) => theme.palette.darkGray};
  }
`;

export const Label = styled.label`
  display: block;
  font-size: 16px;
  color: ${({ theme }) => theme.palette.darkGray};
`;

export const InputBox = styled(Input)`
  height: auto;
  margin: 10px 0;
  padding: 16px 16px;
  border: 1px solid ${({ theme }) => theme.palette.mediumGray};
  border-radius: 5px;
  color: ${({ theme }) => theme.palette.black};

  &:focus {
    border: 1px solid ${({ theme }) => theme.palette.main};
  }
`;
