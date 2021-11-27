import styled from "@emotion/styled";
// .filter_overlay {
//   border-style: outset;
// }
// .filter_label {
//   font-weight: 500;
// }

// .filter_input {
//   width: calc(100% / 2);
//   border: 2px solid #ccc;
//   border-radius: 4px;
//   font-size: 16px;
//   margin-left: 20px;
// }

export const FilterContainer = styled.div`
  max-width: 400px;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  color: white;
  border-radius: 15px 50px;
  border-bottom-left-radius: 70px;
  border-top-right-radius: 70px;
  background: #191815d1;
`;

export const FilterInput = styled.input`
  max-width: 150px;
  padding: 0 35px 0 35px;
  background: #fff;
  border-radius: 20px;
  font-size: 18px;
  font-weight: 700;
  border: 1px solid #8f8fa1;
  outline: none;
  color: #8f8fa1;
  line-height: 1.2;

  &:focus {
    box-shadow: 0px 0px 1px 1px red;
  }
`;
