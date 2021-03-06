import styled from "styled-components";
import { primary } from "../../../assets/colors";

export const StyledHeader = styled.header`
    margin-bottom: 40px;
    padding: 20px 0;
    background-color: ${primary['800']};
    color: white;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
`;