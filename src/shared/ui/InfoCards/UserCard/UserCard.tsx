//@ts-expect-error Importing a static asset will return the resolved public URL when it is served
import avatarPlaceholder from '../../../../assets/photo-cover.svg';
import './UserCard.css';

interface IProps {
  img: string;
  name: string;
  position: string;
  email: string;
  phoneNumber: string;
}

const UserCard = ({ img, name, position, email, phoneNumber }: IProps) => {
  return (
    <div className="card-wrapper">
      <img src={img || avatarPlaceholder} alt="avatar" className="avatar" />
      <p>{name}</p>
      <div className="card-info">
        <p>{position}</p>
        <p>{email}</p>
        <p>{phoneNumber}</p>
      </div>
    </div>
  );
};

export default UserCard;
