import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps{
    nickname: string;
    isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({nickname, isBot}) =>{
    return(
        <User>
            <Avatar className={isBot ? 'bot' : ''}/>

            <strong>{nickname}</strong>

            {isBot && <span>Bot</span>}
        </User>
    );
}

const UserList: React.FC = () => {
    return (
        <Container>
            <Role>Disponível - 1</Role>
            <UserRow nickname = "Harry Potter"/>

            <Role>Offline - 19</Role>
            <UserRow nickname = "Hermione Granger" isBot/>
            <UserRow nickname = "Ronald Weasley"/>
            <UserRow nickname = "Draco Malfoy"/>
            <UserRow nickname = "Severus Snape"/>
            <UserRow nickname = "Lord Voldemort"/>
            <UserRow nickname = "Luna Lovegood"/>
            <UserRow nickname = "Minerva McGonagall"/>
            <UserRow nickname = "Sirius Black"/>
            <UserRow nickname = "Albus Dumbledore"/>
            <UserRow nickname = "Rúbeo Hagrid"/>
            <UserRow nickname = "Bellatrix Lestrange"/>
            <UserRow nickname = "Dobby"/>
            <UserRow nickname = "Neville Longbottom"/>
        </Container>
    );
};

export default UserList;