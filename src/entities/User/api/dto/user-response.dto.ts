export class AuthorizedUserDTO {
  success!: boolean;
  user_id!: number;
  message!: string;
}
export class TokenDTO {
  success!: boolean;
  token!: string;
}
export class PositionsDTO {
  success!: boolean;
  positions!: { id: number; name: string }[];
}
export class UsersDTO {
  success!: true;
  page!: number;
  total_pages!: number;
  total_users!: number;
  count!: number;
  links!: {
    next_url: string;
    prev_url: null;
  };
  users!: [
    {
      id: number;
      name: string;
      email: string;
      phone: string;
      position: string;
      position_id: number;
      registration_timestamp: number;
      photo: string;
    }
  ];
}
