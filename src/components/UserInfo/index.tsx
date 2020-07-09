import React from 'react';

import { Container, Profile, Avatar, UserData, Icons, MicIcon, HeadphoneIcon, SettingIcon } from './styles';

const ServerName: React.FC = () => {
    return (
        <Container>
            <Profile>
                <Avatar/>
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