import { User } from "../entities/User"

export interface UserRepository{
  findByEmail: (email: string) => Promise<UserRepository.Result>
  save(user: User): Promise<void>
}

export namespace UserRepository {
  export type Result = User
}
