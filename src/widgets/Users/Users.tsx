import { useQuery } from '@tanstack/react-query';
import ShowMoreUsersBtn from '../../features/Buttons/ShowMoreUsersBtn';
import UserCard from '../../shared/ui/InfoCards/UserCard/UserCard';
import './Users.css';
import { queryKeys } from '../../shared/lib/constants';

interface IUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  position: string;
  position_id: string;
  registration_timestamp: number;
  photo: string;
}

const Users = () => {
  const { data } = useQuery<{ users: IUser[] }>({
    queryKey: [queryKeys.users],
    queryFn: async () => {
      const usersResponse = await fetch(
        'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6'
      );
      return usersResponse.json();
    },
  });

  return (
    <section id="users" className="users-wrapper">
      <h2>Working with GET request</h2>
      <div className="users-layout">
        {data?.users.map((user, idx) => (
          <UserCard
            key={user.email + idx}
            img={user.photo}
            name={user.name}
            position={user.position}
            email={user.email}
            phoneNumber={user.phone}
          />
        ))}
      </div>
      <ShowMoreUsersBtn />
    </section>
  );
};

export default Users;
