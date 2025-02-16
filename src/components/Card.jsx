import styled from "styled-components";
import User from "./User";
import PropTypes from "prop-types";

const CARD_STYLES = {
  magenta: {
    background: "#733FC8",
    title: "#FFF",
    testimonial: "#CFCFCF",
    gap: "40px",
  },
  dark: {
    background: "#19202D",
    title: "#ECF2F8",
    testimonial: "#FFFFFF",
  },
  grey: { background: "#48556A", title: "#FFF", testimonial: "#FFF" },
};

const Card = ({
  spanColumn,
  spanRow,
  order,
  title,
  user,
  testimonial,
  cardStyle,
  contentGap = 16,
}) => {
  return (
    <CardWrapper
      $spanColumn={spanColumn}
      $spanRow={spanRow}
      $order={order}
      $cardStyle={cardStyle}
    >
      <User user={user} />
      <Info $contentGap={contentGap} $cardStyle={cardStyle}>
        <Title $cardStyle={cardStyle}>{title}</Title>
        <Testimonial $cardStyle={cardStyle}>{testimonial}</Testimonial>
      </Info>
    </CardWrapper>
  );
};

Card.propTypes = {
  spanColumn: PropTypes.string,
  spanRow: PropTypes.string,
  order: PropTypes.number,
  title: PropTypes.string,
  user: PropTypes.object,
  testimonial: PropTypes.string,
  cardStyle: PropTypes.string,
  contentGap: PropTypes.number,
};
export default Card;

const CardWrapper = styled.section`
  background-color: ${({ $cardStyle }) =>
    CARD_STYLES[$cardStyle]?.background || "#FFF"};
  border-radius: 8px;
  padding: 26px 32px 32px;

  @media (min-width: 1024px) {
    ${({ $spanColumn, $spanRow, $order }) => `
      grid-column: ${$spanColumn > 0 ? `span ${$spanColumn}` : "auto"};
      grid-row: ${$spanRow > 0 ? `span ${$spanRow}` : "auto"};
      order:  ${$order || 0};
    `}
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ $cardStyle }) => CARD_STYLES[$cardStyle]?.gap || "16px"};

  @media (min-width: 1024px) {
    gap: ${({ $contentGap }) => $contentGap + "px"};
  }
`;

const Title = styled.p`
  font-size: 20px;
  line-height: 24px;
  color: ${({ $cardStyle }) => CARD_STYLES[$cardStyle]?.title || "#48556A"};
`;

const Testimonial = styled.p`
  color: ${({ $cardStyle }) =>
    CARD_STYLES[$cardStyle]?.testimonial || "#48556A"};
  opacity: 0.7;
  font-size: 13px;
  line-height: 18px;
`;
