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
