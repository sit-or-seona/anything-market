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

export const InputBox = styled.div`
  input {
    margin: 10px 0;
    padding: 16px 16px;
    border: 1px solid ${({ theme }) => theme.palette.mediumGray};
    border-radius: 5px;
    color: ${({ theme }) => theme.palette.black};
    line-height: 20px;
    font-size: 16px;
    outline: none;

    &:focus {
      border: 1px solid ${({ theme }) => theme.palette.main};
    }
  }

  label {
    display: block;
    font-size: 16px;
    color: ${({ theme }) => theme.palette.darkGray};
  }
`;

export const InputCheckbox = styled.input.attrs({
  type: "checkbox",
})``;

export const Checkbox = styled.div`
  input {
    width: 16px;
    height: 16px;
    font-size: 16px;
    line-height: 20px;
    vertical-align: bottom;
  }

  label {
    font-size: 16px;
    color: ${({ theme }) => theme.palette.darkGray};
    vertical-align: text-top;
  }
`;
