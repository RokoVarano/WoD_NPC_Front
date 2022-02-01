import axios from 'axios';
import API from './API';

export default class User {
    id: number;
    name: string;
    jwt: string;
    constructor(id: number = -1, name: string = '', jwt:string = '') {
        this.id = id,
        this.name = name;
        this.jwt = jwt;
    }

    static login = async (username: string = '', password: string = '') => {
        
        let bodyFormData = new FormData();
        bodyFormData.append('username', username);
        bodyFormData.append('password', password);

        return await axios({
            method: "post",
            url: `${API.LOGIN}`,
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" },
          }).then(response => response)
            .catch(error => error)
    }
}

