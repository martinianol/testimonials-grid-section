import styled from "styled-components";

export const CARD_STYLES = {
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

export const CARD_RULES = {
  card1: { gap: "16px", paddingBottom: "32px" },
  card2: { gap: "16px", paddingBottom: "32px" },
  card3: { gap: "24px", paddingBottom: "26px" },
  card4: { gap: "24px", paddingBottom: "26px" },
  card5: { gap: "24px", paddingBottom: "26px" },
};

export const CardWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 18px;
  background-color: ${({ $cardStyle }) =>
    CARD_STYLES[$cardStyle]?.background || "#FFF"};
  border-radius: 8px;
  padding: 26px 32px 32px;
  color: ${({ $cardStyle }) => CARD_STYLES[$cardStyle]?.title || "#48556A"};
  box-shadow: 78px 46px 109px 0px rgba(0, 0, 0, 0.4);

  @media (min-width: 1024px) {
    grid-area: ${({ $gridArea }) => $gridArea || "auto"};
    padding-bottom: ${({ $gridArea }) =>
      CARD_RULES[$gridArea].paddingBottom || "32px"};
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ $cardStyle }) => CARD_STYLES[$cardStyle]?.gap || "18px"};
  z-index: 10;

  @media (min-width: 1024px) {
    gap: ${({ $gridArea }) => CARD_RULES[$gridArea].gap || "16px"};
  }
`;

export const Title = styled.p`
  font-size: 20px;
  line-height: 24px;
`;

export const Testimonial = styled.p`
  opacity: 0.7;
  font-size: 13px;
  line-height: 18px;
  padding-right: ${({ $cardStyle }) =>
    CARD_STYLES[$cardStyle]?.paddingRight || "unset"};
`;

export const QuoteImg = styled.img`
  position: absolute;
  top: 0px;
  right: 24px;
  width: 104px;
  height: 102px;
  @media (min-width: 1024px) {
    right: 80px;
  }
`;
