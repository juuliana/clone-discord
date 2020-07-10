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
                {Array.from(Array(15).keys()).map((n) => (  
                    <ChannelMessage
                        author="Harry Potter"
                        date="19/07/2020"
                        content="Hoje é meu aniversário!"
                    />
                ))}
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
                    author="Harry Potter"
                    date="19/07/2020"
                    content="Hoje é meu aniversário!"
                />
                <ChannelMessage
                    author="Harry Potter"
                    date="19/07/2020"
                    content="Hoje é meu aniversário!"
                />
                <ChannelMessage
                    author="Harry Potter"
                    date="19/07/2020"
                    content="Hoje é meu aniversário!"
                />
                <ChannelMessage
                    author="Harry Potter"
                    date="19/07/2020"
                    content="Hoje é meu aniversário!"
                />
                <ChannelMessage
                    author="Harry Potter"
                    date="19/07/2020"
                    content="Hoje é meu aniversário!"
                />
                <ChannelMessage
                    author="Harry Potter"
                    date="19/07/2020"
                    content="Hoje é meu aniversário!"
                />
                <ChannelMessage
                    author="Harry Potter"
                    date="19/07/2020"
                    content="Hoje é meu aniversário!"
                />
                <ChannelMessage
                    author="Harry Potter"
                    date="19/07/2020"
                    content="Hoje é meu aniversário!"
                />
                <ChannelMessage
                    author="Harry Potter"
                    date="19/07/2020"
                    content="Hoje é meu aniversário!"
                />
                <ChannelMessage
                    author="Harry Potter"
                    date="19/07/2020"
                    content="Hoje é meu aniversário!"
                />
                <ChannelMessage
                    author="Harry Potter"
                    date="19/07/2020"
                    content="Hoje é meu aniversário!"
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