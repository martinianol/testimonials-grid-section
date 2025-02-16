import styled from "styled-components";
import Card from "../components/Card";
import PageContainer from "../components/PageContainer";
import data from "../data/data.json";

const Testimonials = () => {
  const testimonials = data.items;
  return (
    <PageContainer>
      <Cards>
        {/*  {testimonials.map((testimonial, index) => <Card key={testimonial.id} spanColumn={index===0 ? 2 : 0} spanRow={}{...testimonial}/>

        )} */}
        <Card
          {...testimonials[0]}
          spanColumn={2}
          cardStyle="magenta"
          order={1}
        />
        <Card {...testimonials[1]} cardStyle="grey" order={2} />
        <Card {...testimonials[2]} contentGap={24} order={3} />
        <Card
          {...testimonials[3]}
          contentGap={24}
          cardStyle="dark"
          order={4}
          spanColumn={2}
        />
        <Card {...testimonials[4]} contentGap={40} order={2} spanRow={2} />
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
  }
`;
