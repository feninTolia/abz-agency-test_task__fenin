import {
  AuthorizedUserDTO,
  PositionsDTO,
  TokenDTO,
} from '../dto/user-response.dto';

export class UserAuthController {
  async signUp(
    signUpData: FormData,
    token: string
  ): Promise<AuthorizedUserDTO> {
    return await fetch(
      'https://frontend-test-assignment-api.abz.agency/api/v1/users',
      {
        method: 'POST',
        body: signUpData,
        headers: {
          Token: token,
        },
      }
    ).then((res) => res.json());
  }

  async getToken(): Promise<TokenDTO> {
    return await fetch(
      'https://frontend-test-assignment-api.abz.agency/api/v1/token'
    ).then((response) => response.json());
  }
  async getPositions(): Promise<PositionsDTO> {
    return await fetch(
      'https://frontend-test-assignment-api.abz.agency/api/v1/positions'
    ).then((response) => response.json());
  }
}

export const userAuthController = new UserAuthController();
