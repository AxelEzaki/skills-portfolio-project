import React from 'react';
import { View, Linking, Alert, Pressable, Image, Text } from 'react-native';

import { styles } from './ButtonLinkStyles';
import ImagesSocialMedia from './LinksHelper';

interface ButtonLinkProps{
    nickname: string,
    url: string,
    socialMedia: string,
    color: string
}

export function ButtonLinkComponent(props: ButtonLinkProps) {
    async function handleTryingOpenUrl(url: string){
        const isSupported = await Linking.canOpenURL(url);

        if(isSupported){
            await Linking.openURL(url);
        } else {
            Alert.alert(`Can't open this URL: ${url}`, "Oops!");
        }
    }

    return (
        <View style={styles.container}>
            <Pressable onPress={ () => handleTryingOpenUrl(props.url) } style={ [ styles.pressableContainer, { backgroundColor: props.color }] } >
                <Image source={ ImagesSocialMedia[props.socialMedia] } style={ styles.imagemLogo } resizeMode='contain' />
                <Text style={ styles.labelNickname }>|</Text>
                <Text style={ styles.labelNickname }>{ props.nickname }</Text>
            </Pressable>
        </View>
    );
}