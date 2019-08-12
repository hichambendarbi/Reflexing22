import styled, { keyframes, css } from "styled-components";

const SubmiteHovered = keyframes`
  from {margin-bottom: 5px;}
  to {margin-bottom: 50px;}
}
`;
const Rounded = css`
  font-family: Poppins-Medium;
  font-size: 16px;
  color: #fff;
  line-height: 1.2;
  text-transform: uppercase;
  padding: 0 20px;
  width: 100%;
  height: 50px;
  background-color: ${props => props.bgColor};
  border: 1px solid ${props => props.borderColor};
  border-radius: 25px;
  margin-bottom: 5px;

  &:hover {
  }
`;
export default styled.button`
  ${props => (props.rounded ? Rounded : null)}
`;
