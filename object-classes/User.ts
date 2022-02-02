import axios from 'axios';
import API from './API';

export default class User {

    static login = async (username: string = '', password: string = '') => {
        
        let bodyFormData = new FormData();
        bodyFormData.append('username', username);
        bodyFormData.append('password', password);

        return await axios({
            method: "post",
            url: `${API.LOGIN}`,
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" },
          })
    }
}

