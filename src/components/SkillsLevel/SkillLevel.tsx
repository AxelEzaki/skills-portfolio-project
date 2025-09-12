import React from 'react';
import { Image, Text, View } from 'react-native';

import { styles, styleImages } from './SkillLevelStyles';
import TechnologiesLogo from './SkillLinkImageHelper';
import star from '../../../assets/Star.png';

interface SkillsLevelProps {
    technology: string,
    titleText: string,
    level: number
};

export function SkillsLevelComponent(props: SkillsLevelProps) {
    function createLevelUntilFiveStars(level: number, title: string){
        const retorno = [];

        for(let inicio = 0; inicio < level; inicio++){
            retorno.push(
                <Image key={ `${title}Level${inicio}` } source={ star } alt={`${level} Stars`} style={ styleImages.imageStar } resizeMode='contain'/>
            )
        }

        return (
            <View style={ styles.starContainer }>
                { retorno }
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={ { justifyContent: 'center', alignItems: 'center', height: 70, width: 70 } }>
                <Image style={ styleImages.imageLogo } source={ TechnologiesLogo[props.technology] } resizeMode='contain' alt={ `Logo of ${props.titleText} Technology` } />
                <Text style={ { fontSize: 12 } }>{ props.titleText }</Text>
            </View>

            <View style={ { minWidth: '60%', width: 'auto' } }>
                { createLevelUntilFiveStars(props.level, props.technology) }
            </View>
        </View>
    );
}