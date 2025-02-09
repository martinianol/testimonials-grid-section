import styled from "styled-components";
import Card from "../components/Card";
import PageContainer from "../components/PageContainer";
import data from "../data/data.json";

const Testimonials = () => {
  const testimonials = data.items;
  console.log(testimonials);
  return (
    <PageContainer>
      <Cards>
        {/*  {testimonials.map((testimonial, index) => <Card key={testimonial.id} spanColumn={index===0 ? 2 : 0} spanRow={}{...testimonial}/>

        )} */}
        <Card spanColumn={2} {...testimonials[0]} />
        <Card {...testimonials[1]} />
        <Card spanRow={2} {...testimonials[2]} />
        <Card {...testimonials[3]} />
        <Card spanColumn={2} {...testimonials[4]} />
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
