import styled, { css } from "styled-components";

const Material = css`
  font-family: Poppins-SemiBold;
  font-size: 18px;
  color: #555555;
  line-height: 1.2;
  display: block;
  width: 100%;
  height: 52px;
  background: transparent;
  padding: 0 5px;
  outline: none;
  border: none;
`;

const Elegant = css`
  font-size: 16px;
  line-height: 1.5;
  position: relative;
  display: block;
  width: 100%;
  height: 48px;
  margin: 0;
  padding: 8px 10px;
  -webkit-transition: color 0.08s ease-in, -webkit-box-shadow 0.08s ease-in;
  transition: color 0.08s ease-in, -webkit-box-shadow 0.08s ease-in;
  transition: box-shadow 0.08s ease-in, color 0.08s ease-in;
  transition: box-shadow 0.08s ease-in, color 0.08s ease-in,
    -webkit-box-shadow 0.08s ease-in;
  color: #303030;
  border: 0;
  border-radius: 6px;
  background: #fff;
  -webkit-box-shadow: 0 0 0 1px rgba(50, 50, 93, 0.1),
    0 2px 5px 0 rgba(50, 50, 93, 0.05), 0 1px 1px 0 rgba(0, 0, 0, 0.05);
  box-shadow: 0 0 0 1px rgba(50, 50, 93, 0.1),
    0 2px 5px 0 rgba(50, 50, 93, 0.05), 0 1px 1px 0 rgba(0, 0, 0, 0.05);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

export default styled.input`
  ${props => (props.material ? Material : null)}
  ${props => (props.elegant ? Elegant : null)}
`;
