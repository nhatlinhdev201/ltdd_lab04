import { useState } from 'react';

const handleLogin = ({ sampleDataUser, userName, password }) => {
    const [loginStatus, setLoginStatus] = useState("Chưa nhập thông tin !");
    const [login, setLogin] = useState({ login: false, status: "Chưa nhập thông tin !" });

    sampleDataUser.array.forEach(element => {
        if (element.userName === userName) {
            if (element.password === password) {
                setLogin({login:true, status: 'Login success'})
            } else {
                setLogin({login: false, status : 'Password is not true !'})
            }
        } else {
            setLogin({login: false, status : 'Username is not true !'})
        }
    });
    alert(login.status);
}

export default handleLogin