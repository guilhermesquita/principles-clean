import { User } from "../../entities/User";
import { MailProvider } from "../../providers/MailProvider";
import { UserRepository } from "../../repositories/UserRepository";
import { CreateUserRequestDTO } from "./createUserDto";

export class CreateUserUseCase{
  constructor(
    private userRepository: UserRepository,
    private mailProvider: MailProvider
  ){}

  async execute(data: CreateUserRequestDTO){
    const userAlreadyExists = await this.userRepository.findByEmail(data.email)

    if(userAlreadyExists){
      throw new Error('User already exists.')
    }

    const user = new User(data)
    
    await this.userRepository.save(user)
    
    this.mailProvider.sendMail({
      to:{
        name: user.name,
        email: user.email
      },
      from: {
        name: 'Equipe do App',
        email: 'myapp@email.com'
      },
      subject: `Seja bem vindo, ${user.name} ao nosso APP!`,
      body: "<p>lorem ipsum dolor siet ameta dhad eoka uitawasmbw asoku.</p>"
    })
  }
}