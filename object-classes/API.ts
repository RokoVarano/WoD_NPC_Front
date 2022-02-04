export default class API {
    static BASE_URL:string = 'http://localhost:8000/api/';
    static LOGIN = `${API.BASE_URL}login`;
    static CURRENT_USER = `${API.BASE_URL}users/me`;
}