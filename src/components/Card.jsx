import styled from "styled-components";
import User from "./User";
import PropTypes from "prop-types";
import images from "../assets";

const CARD_STYLES = {
  magenta: {
    background: "#733FC8",
    title: "#FFF",
    testimonial: "#CFCFCF",
    gap: "40px",
    paddingRight: "16px",
    borderColor: "#A775F1",
  },
  dark: {
    background: "#19202D",
    title: "#ECF2F8",
    testimonial: "#FFFFFF",
    borderColor: "#733FC8",
  },
  grey: { background: "#48556A", title: "#FFF", testimonial: "#FFF" },
};

const CARD_RULES = {
  card1: { gap: "16px", paddingBottom: "32px" },
  card2: { gap: "16px", paddingBottom: "32px" },
  card3: { gap: "24px", paddingBottom: "26px" },
  card4: { gap: "24px", paddingBottom: "26px" },
  card5: { gap: "24px", paddingBottom: "26px" },
};

const Card = ({ gridArea, title, user, testimonial, cardStyle, showQuote }) => {
  return (
    <CardWrapper $cardStyle={cardStyle} $gridArea={gridArea}>
      {showQuote && <QuoteImg src={images.quote} />}
      <User user={user} borderColor={CARD_STYLES[cardStyle]?.borderColor} />
      <Info $cardStyle={cardStyle} $gridArea={gridArea}>
        <Title>{title}</Title>
        <Testimonial $cardStyle={cardStyle}>{testimonial}</Testimonial>
      </Info>
    </CardWrapper>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  user: PropTypes.object,
  testimonial: PropTypes.string,
  cardStyle: PropTypes.string,
  contentGap: PropTypes.number,
  gridArea: PropTypes.string,
  showQuote: PropTypes.bool,
};
export default Card;

const CardWrapper = styled.section`
  position: relative;
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
    padding-bottom: ${({ $gridArea }) =>
      CARD_RULES[$gridArea].paddingBottom || "32px"};
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ $cardStyle }) => CARD_STYLES[$cardStyle]?.gap || "18px"};
  z-index: 10;

  @media (min-width: 1024px) {
    gap: ${({ $gridArea }) => CARD_RULES[$gridArea].gap || "16px"};
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
  padding-right: ${({ $cardStyle }) =>
    CARD_STYLES[$cardStyle]?.paddingRight || "unset"};
`;

const QuoteImg = styled.img`
  position: absolute;
  top: 0px;
  right: 24px;
  width: 104px;
  height: 102px;
  @media (min-width: 1024px) {
    right: 80px;
  }
`;
