import {
  AuthorizedUserDTO,
  PositionsDTO,
  TokenDTO,
  UsersDTO,
} from '../dto/user-response.dto';

//@ts-expect-error vite env
const API = import.meta.env.VITE_API;

export class UserAuthController {
  async signUp(
    signUpData: FormData,
    token: string
  ): Promise<AuthorizedUserDTO> {
    return await fetch(`${API}/users`, {
      method: 'POST',
      body: signUpData,
      headers: {
        Token: token,
      },
    }).then((res) => res.json());
  }

  async getToken(): Promise<TokenDTO> {
    return await fetch(`${API}/token`).then((response) => response.json());
  }
  async getPositions(): Promise<PositionsDTO> {
    return await fetch(`${API}/positions`).then((response) => response.json());
  }

  async getUsers(page = 1): Promise<UsersDTO> {
    return await fetch(`${API}/users?page=${page}&count=6`).then((response) =>
      response.json()
    );
  }
}

export const userAuthController = new UserAuthController();
