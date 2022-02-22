
export class Usuario {

    constructor(
        public username: string,
        public email: string,
        public password: string,
        public role_id?: number,
        public image?: string,
        public google?: number,
        public id?: number
    ) { }

}


