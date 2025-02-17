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

const GAP_RULES = {
  card1: "16px",
  card2: "16px",
  card3: "40px",
  card4: "24px",
  card5: "24px",
};

const Card = ({ gridArea, title, user, testimonial, cardStyle }) => {
  return (
    <CardWrapper $cardStyle={cardStyle} $gridArea={gridArea}>
      <User user={user} />
      <Info $cardStyle={cardStyle} $gridArea={gridArea}>
        <Title>{title}</Title>
        <Testimonial>{testimonial}</Testimonial>
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
  gridArea: PropTypes.string,
};
export default Card;

const CardWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 18px;
  background-color: ${({ $cardStyle }) =>
    CARD_STYLES[$cardStyle]?.background || "#FFF"};
  border-radius: 8px;
  padding: 26px 32px 32px;
  color: ${({ $cardStyle }) => CARD_STYLES[$cardStyle]?.title || "#48556A"};

  @media (min-width: 1024px) {
    grid-area: ${({ $gridArea }) => $gridArea || "auto"};
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ $cardStyle }) => CARD_STYLES[$cardStyle]?.gap || "16px"};

  @media (min-width: 1024px) {
    gap: ${({ $gridArea }) => GAP_RULES[$gridArea] || "16px"};
  }
`;

const Title = styled.p`
  font-size: 20px;
  line-height: 24px;
`;

const Testimonial = styled.p`
  opacity: 0.7;
  font-size: 13px;
  line-height: 18px;
`;
