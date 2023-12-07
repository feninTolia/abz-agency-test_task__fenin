import ShowMoreUsersBtn from '../../features/Buttons/ShowMoreUsersBtn';
import UserCard from '../../shared/ui/InfoCards/UserCard/UserCard';
import './Users.css';

const mockUsers = [
  {
    img: '',
    name: 'Anatolii Anatolii',
    position: 'Junior Frontend Developer (Junior Frontend Developer)',
    email: 'test@gmail.com',
    phoneNumber: '+38 (098) 278 44 24',
  },
  {
    img: '',
    name: 'Anatolii Anatolii',
    position: 'Junior Frontend Developer (Junior Frontend Developer)',
    email: 'test@gmail.com',
    phoneNumber: '+38 (098) 278 44 24',
  },
  {
    img: '',
    name: 'Anatolii Anatolii',
    position: 'Junior Frontend Developer (Junior Frontend Developer)',
    email: 'test@gmail.com',
    phoneNumber: '+38 (098) 278 44 24',
  },
  {
    img: '',
    name: 'Anatolii Anatolii',
    position: 'Junior Frontend Developer (Junior Frontend Developer)',
    email: 'test@gmail.com',
    phoneNumber: '+38 (098) 278 44 24',
  },
  {
    img: '',
    name: 'Anatolii Anatolii',
    position: 'Junior Frontend Developer (Junior Frontend Developer)',
    email: 'test@gmail.com',
    phoneNumber: '+38 (098) 278 44 24',
  },
];

const Users = () => {
  return (
    <section id="users" className="users-wrapper">
      <h2>Working with GET request</h2>
      <div className="users-layout">
        {mockUsers.map((user) => (
          <UserCard
            key={user.email}
            img={user.img}
            name={user.name}
            position={user.position}
            email={user.email}
            phoneNumber={user.phoneNumber}
          />
        ))}
      </div>
      <ShowMoreUsersBtn />
    </section>
  );
};

export default Users;
