import React from 'react';

import { Container, Role, User, Avatar } from './styles';

import avatar from '../../assets/avatar.svg';

interface UserProps{
    nickname: string;
    isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({nickname, isBot}) =>{
    return(
        <User>
            <Avatar className={isBot ? 'bot' : ''}>
                <img src={avatar} alt="avatar"/>
            </Avatar>

            <strong>{nickname}</strong>

            {isBot && <span>Bot</span>}
        </User>
    );
}

const UserList: React.FC = () => {
    return (
        <Container>
            <Role>Disponível - 5</Role>
            <UserRow nickname = "Hermione Granger" isBot/>
            <UserRow nickname = "Ronald Weasley"/>
            <UserRow nickname = "Draco Malfoy"/>
            <UserRow nickname = "Albus Dumbledore"/>
            <UserRow nickname = "Dobby"/>

            <Role>Offline - 8</Role>
            
            <UserRow nickname = "Severus Snape"/>
            <UserRow nickname = "Lord Voldemort"/>
            <UserRow nickname = "Luna Lovegood"/>
            <UserRow nickname = "Minerva McGonagall"/>
            <UserRow nickname = "Sirius Black"/>
            <UserRow nickname = "Rúbeo Hagrid"/>
            <UserRow nickname = "Bellatrix Lestrange"/>
            <UserRow nickname = "Neville Longbottom"/>
        </Container>
    );
};

export default UserList;