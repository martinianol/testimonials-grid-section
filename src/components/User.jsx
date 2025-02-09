import styled from "styled-components";

const User = () => {
  return (
    <UserWrapper>
      <AvatarWrapper>
        <img alt="user avarar" />
      </AvatarWrapper>
      <div>
        <Name>Kira Whittle</Name>
        <Verified>Verified Graduated</Verified>
      </div>
    </UserWrapper>
  );
};

export default User;

const UserWrapper = styled.div`
  display: flex;
  gap: 17px;
`;

const Name = styled.p`
  font-size: 13px;
  line-height: 14px;
`;
const Verified = styled.p`
  font-size: 11px;
  line-height: 11px;
  letter-spacing: 0px;
  opacity: 0.5;
`;

const AvatarWrapper = styled.div`
  display: flex;
  /* justify-content: flex-end; */

  img {
    width: 28px;
    height: 28px;
    object-fit: contain;

    @media (min-width: 1200px) {
      width: 64px;
      height: 64px;
    }
  }
`;
