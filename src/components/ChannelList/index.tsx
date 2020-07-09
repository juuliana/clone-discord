import React from 'react';

import ChannelButton from '../ChannelButton';
import { Container, Category, AddCategoryIcon} from './styles';

const ChannelList: React.FC = () => {
    return (
        <Container>
            <Category>
                <span>Canais de texto</span>
                <AddCategoryIcon/>
            </Category>

            <ChannelButton channelName="PedraFilosofal"/>
            <ChannelButton channelName="CâmaraSecreta"/>
            <ChannelButton channelName="PrisioneiroAzkaban"/>
            <ChannelButton channelName="CáliceFogo"/>
            <ChannelButton channelName="OrdemFênix"/>
            <ChannelButton channelName="EnigmaPríncipe"/>
            <ChannelButton channelName="RelíquiasMorte"/>
        </Container>
    );
};

export default ChannelList;