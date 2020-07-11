import React, {useRef, useEffect} from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';
import ChannelMessage, { Mention } from '../ChannelMessage';

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;
    
        if (div) {
          div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef]);

    return (
        <Container>
            <Messages ref={messagesRef}>
                <ChannelMessage
                    author="Hermione Granger"
                    date="19/07/2020"
                    content={
                        <>
                            <Mention>@Harry Potter</Mention>, feliz aniversário!
                        </>
                    }
                    hasMention
                    isBot
                />
                <ChannelMessage
                    author="Ronald Weasley"
                    date="19/07/2020"
                    content={
                        <>
                            E aí bruxinho <Mention>@Harry Potter</Mention>. Mais um ano se passou, parabéns!
                        </>
                    }
                    hasMention
                />
                <ChannelMessage
                    author="Dobby"
                    date="19/07/2020"
                    content={
                        <>
                            <Mention>@Harry Potter</Mention>, comprei meias de presente pra você!
                        </>
                    }
                    hasMention
                />
                <ChannelMessage
                    author="Albus Dumbledore"
                    date="19/07/2020"
                    content={
                        <>
                            <Mention>@Harry Potter</Mention>, nesse dia só desejo a você muita magia e felicidades!!
                        </>
                    }
                    hasMention
                />
                <ChannelMessage
                    author="Draco Malfoy"
                    date="19/07/2020"
                    content={
                        <>
                            Está quase mais velho que o Dumbledore em <Mention>@Harry Potter</Mention>, brinks mas espero que você chegue lá.
                        </>
                    }
                    hasMention
                />
            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Conversar em #PedraFilosofal" />
                <InputIcon />
            </InputWrapper>
        </Container>
    );
};

export default ChannelData;