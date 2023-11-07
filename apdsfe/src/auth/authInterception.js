import Login from '../components/login.js'
let token = "";
export default function getAuthToken()
{
    token = Login.token;
    return token;
}