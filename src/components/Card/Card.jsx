import User from "../User";
import PropTypes from "prop-types";
import images from "../../assets";
import {
  CARD_STYLES,
  CardWrapper,
  Info,
  QuoteImg,
  Testimonial,
  Title,
} from "./Card.styles";

const Card = ({ gridArea, title, user, testimonial, cardStyle, showQuote }) => {
  return (
    <CardWrapper $cardStyle={cardStyle} $gridArea={gridArea}>
      {showQuote && <QuoteImg src={images.quote} alt="quote image styling"/>}
      <User user={user} borderColor={CARD_STYLES[cardStyle]?.borderColor} />
      <Info $cardStyle={cardStyle} $gridArea={gridArea}>
        <Title>{title}</Title>
        <Testimonial $cardStyle={cardStyle}>{testimonial}</Testimonial>
      </Info>
    </CardWrapper>
  );
};

export default Card;

Card.propTypes = {
  title: PropTypes.string,
  user: PropTypes.object,
  testimonial: PropTypes.string,
  cardStyle: PropTypes.string,
  contentGap: PropTypes.number,
  gridArea: PropTypes.string,
  showQuote: PropTypes.bool,
};
