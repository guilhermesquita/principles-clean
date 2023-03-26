import { User } from "../../entities/User";
import { UserRepository } from "../UserRepository";

export class PostgresUsersRepository implements UserRepository {
  private users: User[] = [];
  
  async findByEmail(email: string): Promise<User>{
    const user = this.users.find(user => user.email === email);
    return user;
  };

  async save(user: User): Promise<void> {
    this.users.push(user)
  }
}