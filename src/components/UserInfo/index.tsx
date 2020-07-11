import React from 'react';

import { Container, Profile, Avatar, UserData, Icons, MicIcon, HeadphoneIcon, SettingIcon } from './styles';
import Harry from '../../assets/Harry.svg';

const ServerName: React.FC = () => {
    return (
        <Container>
            <Profile>
                <Avatar>
                    <img src={Harry} alt="Harry" />
                </Avatar>
                <UserData>
                    <strong>Harry Potter</strong>
                    <span>#6449</span>
                </UserData>
            </Profile>

            <Icons>
                <MicIcon/>
                <HeadphoneIcon/>
                <SettingIcon/>
            </Icons>
        </Container>
    );
};

export default ServerName;