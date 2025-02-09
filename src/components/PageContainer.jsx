import styled from "styled-components";

const PageContainer = ({ children }) => {
  return <PageWrapper>{children}</PageWrapper>;
};

export default PageContainer;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* ✅ Ensures page takes full height */
  place-items: center;
  background-color: #ecf2f8;
  color: #48556A;
`;
