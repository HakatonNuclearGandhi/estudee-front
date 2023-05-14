import { RegisterResponse } from "@/lib/api/auth/dto/RegisterResponse";
import { Token } from "@/lib/api/auth/dto/Token";
import { client } from "@/lib/api/instance";

export class AuthAPI {
  static async loginUser(username: string, password: string): Promise<Token> {
    const { data } = await client.post("/Authenticate/login", {
      username,
      password,
    });
    return data;
  }

  static async registerUser(
    username: string,
    email: string,
    password: string
  ): Promise<RegisterResponse> {
    const { data } = await client.post("/Authenticate/register", {
      username,
      email,
      password,
    });
    return data;
  }
}
