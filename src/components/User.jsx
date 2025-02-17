import PropTypes from "prop-types";
import styled from "styled-components";
import images from "../assets";

const User = ({ user, borderColor }) => {
  const { username, name, verified } = user;
  const verfiedText = verified
    ? "Verified Graduate"
    : "Non Verified Graduate";

  return (
    <UserWrapper>
      <AvatarWrapper $borderColor={borderColor}>
        <img src={images[username]} alt="user avatar" />
      </AvatarWrapper>
      <NameWrapper>
        <Name>{name}</Name>
        <Verified>{verfiedText}</Verified>
      </NameWrapper>
    </UserWrapper>
  );
};

User.propTypes = {
  user: {
    username: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    verified: PropTypes.bool.isRequired,
  },
  borderColor:  PropTypes.string
};

export default User;

const UserWrapper = styled.div`
  display: flex;
  gap: 17px;
  align-items: center;
`;

const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Name = styled.p`
  font-size: 13px;
  line-height: 13px;
`;

const Verified = styled.p`
  font-size: 11px;
  line-height: 11px;
  letter-spacing: 0px;
  opacity: 0.5;
`;

const AvatarWrapper = styled.div`
  display: flex;
  img {
    width: 28px;
    height: 28px;
    border: ${({ $borderColor }) => `2px solid ${$borderColor || "transparent"}`};
    border-radius: 50%;
    object-fit: contain;
  }
`;
