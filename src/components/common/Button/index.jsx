import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.palette.main};
  color: ${({ theme }) => theme.palette.white};
  font-weight: 700;

  &:disabled {
    cursor: default;
    background-color: ${({ theme }) => theme.palette.mediumGray};
  }
`;

export const LargeButton = styled(Button)`
  min-width: 220px;
  height: 68px;
  padding: 0 66px;
  font-size: 24px;
`;

export const MediumButton = styled(Button)`
  min-width: 480px;
  height: 60px;
  font-size: 18px;
  background-color: ${({ dark, theme }) => dark && `${theme.palette.darkGray}`};

  &:disabled {
    background-color: ${({ dark, theme }) => dark ?? `${theme.palette.white}`};
    color: ${({ dark, theme }) => dark && `${theme.palette.darkGray}`};
  }
`;

export const SmallButton = styled(Button)`
  min-width: 168px;
  height: 54px;
  font-weight: 500;
  font-size: 16px;
  background-color: ${({ white, theme }) => white && `${theme.palette.white}`};
  color: ${({ white, theme }) => white && `${theme.palette.darkGray}`};

  &:hover {
    color: ${({ white, theme }) => white && `${theme.palette.black}`};
  }
`;

export const XSmallButton = styled(Button)`
  min-width: 80px;
  height: 40px;
  font-weight: 500;
  font-size: 16px;
`;

export const TabActivButton = styled(MediumButton)`
  min-width: 320px;
  background-color: ${({ theme }) => theme.palette.white};
  border-radius: 0;
  color: ${({ theme }) => theme.palette.darkGray};
  border-bottom: 6px solid ${({ theme }) => theme.palette.lightGray};

  &:active {
    color: ${({ theme }) => theme.palette.main};
    border-bottom: 6px solid ${({ theme }) => theme.palette.main};
  }
`;

export const TabMenuButton = styled(Button)`
  width: 250px;
  height: 50px;
  justify-content: space-between;
  margin-right: auto;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.palette.white};
  color: ${({ theme }) => theme.palette.black};

  &:hover {
    background-color: ${({ theme }) => theme.palette.sub};
    color: ${({ theme }) => theme.palette.black};
  }

  &:active {
    background-color: ${({ theme }) => theme.palette.main};
    color: ${({ theme }) => theme.palette.white};
  }
`;
