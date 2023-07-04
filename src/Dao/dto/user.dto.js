export class CreateUserDto {
    constructor(user){}  
}

export class GetUserDto{
    constructor(userDB){
        this.name = userDB.first_name + ' ' + contactDB.last_name;
        this.email = userDB.email;
    }
}