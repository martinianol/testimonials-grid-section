import styled from "styled-components";
import Card from "../components/Card/Card";
import PageContainer from "../components/PageContainer";
import data from "../data/data.json";

const Testimonials = () => {
  const testimonials = data.items;
  return (
    <PageContainer>
      <Cards>
        {testimonials.map((testimonial, index) => {
          return (
            <Card
              key={testimonial.id}
              {...testimonial}
              gridArea={`card${testimonial.cardNumber}`}
              showQuote={index === 0}
            />
          );
        })}
      </Cards>
    </PageContainer>
  );
};

export default Testimonials;

const Cards = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px 30px;
  padding: 71px 24px;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 255px); /* Max width 255px */
    grid-template-areas:
      "card1 card1 card2 card3"
      "card4 card5 card5 card3"; /* Define named areas */
  }
`;
