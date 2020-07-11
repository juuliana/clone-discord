import React from 'react';

import { 
    Container, 
    HashtagIcon, 
    Title, 
    Separator, 
    Description 
} from './styles';

const ChannelInfo: React.FC = () => {
    return (
        <Container>
            <HashtagIcon/>

            <Title>PedraFilosofal</Title>

            <Separator/>

            <Description>Canal aberto para conversas *Magia não é permitida*</Description>
        </Container>
    );
};

export default ChannelInfo;