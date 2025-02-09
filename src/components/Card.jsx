import styled from "styled-components";
import User from "./User";
// import { shouldForwardProp } from "styled-system"; // Prevents passing props to DOM

const Card = ({ spanColumn, spanRow, title, user, verified, testimonial }) => {
  return (
    <CardWrapper spanColumn={spanColumn} spanRow={spanRow}>
      <User />
      <Title>{title}</Title>
      <Testimonial>{testimonial}</Testimonial>
    </CardWrapper>
  );
};

export default Card;

const CardWrapper = styled.section.withConfig({
  shouldForwardProp: (prop) => !["spanColumn", "spanRow"].includes(prop),
})`
  background-color: #fff;
  border-radius: 8px;
  padding: 26px 32px 32px;

  @media (min-width: 1024px) {
    ${({ spanColumn, spanRow }) => `
      grid-column: ${spanColumn > 0 ? `span ${spanColumn}` : "auto"};
      grid-row: ${spanRow > 0 ? `span ${spanRow}` : "auto"};
    `}
  }
`;

const Title = styled.p``;

const Testimonial = styled.p``;
