import { TextInput } from "react-native";
import { css } from "styled-components";
import styled from "styled-components/native";

export const Container = styled(TextInput)`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    background-color: ${theme.COLORS.GRAY_700};

    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
  flex: 1;
  min-height: 56px;
  max-height: 56px;

  border-radius: 6px;
  padding: 16px;
`;
