import { View, Text, useState } from 'react-native'

const handleLogin = ({ userName, password }) => {
    const [sateLogin, setStateLogin] = useState(false);
    const [loginStatus, setLoginStatus] = useState("Chưa nhập thông tin !");
    const [login, setLogin] = useState({login : false, status : ''});

    const sampleDataUser = [
        user1 = {
            userName: 'nhatlinh',
            password: 'nhatlinh'
        },
        user2 = {
            userName: 'nhatlinh201',
            password: 'nhatlinh201'
        },
    ]

    const checkUser = ({sampleDataUser, userName, password}) => {
        sampleDataUser.array.forEach(element => {
            if(element.userName===userName) {
                if(element.password===password) {
                    setLoginSate
                }
            }
        });
    }

}

export default handleLogin