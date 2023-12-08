import { useQuery } from '@tanstack/react-query';
import ShowMoreUsersBtn from '../../features/Buttons/ShowMoreUsersBtn';
import UserCard from '../../shared/ui/InfoCards/UserCard/UserCard';
import './Users.css';
import { queryKeys } from '../../shared/lib/constants';
import { useState } from 'react';
import { userAuthController } from '../../entities/User/api/controller/user-auth.controller';
import { UsersDTO } from '../../entities/User/api/dto/user-response.dto';

const Users = () => {
  const [page, setPage] = useState(1);

  const { data, refetch } = useQuery<UsersDTO>({
    queryKey: [queryKeys.users, page],
    queryFn: async () => {
      return userAuthController.getUsers(page);
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
      <ShowMoreUsersBtn
        onClick={() => {
          setPage((old) => old + 1);
          refetch();
        }}
        disabled={data?.total_pages === page}
      />
    </section>
  );
};

export default Users;
