import { StyleSheet, Text, View } from 'react-native';
import SVG, {Circle} from 'react-native-svg';
import Animated, {useAnimatedProps, useSharedValue, withTiming} from 'react-native-reanimated'
import { useEffect } from 'react';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

type RingProgressProps = {
    radius?: number;
    strokeWidth? : number;
    progress: number
}

const colour = "#EE0F55"

const RingProgress = ({radius = 100, strokeWidth = 35, progress}: RingProgressProps) => {
    const innerRadius = radius - strokeWidth / 2;
    const circumference = 2 * Math.PI * innerRadius

    const fill = useSharedValue(0);

    useEffect(() => {
        fill.value = withTiming(progress, {duration: 1500})
    }, [progress]);

    const animatedProps = useAnimatedProps(() => ({
        strokeDasharray : [circumference * fill.value, circumference]
    }))
    
    return (
        <View style={{width: radius * 2, height: radius * 2, alignSelf: 'center'}}>
            <SVG>

                {/* Background */}
                <Circle 
                cx={radius} 
                cy={radius} 
                r={innerRadius} 
                strokeWidth={strokeWidth}
                stroke={colour}
                opacity={0.2}
                />

                {/* Foreground */}
                <AnimatedCircle
                animatedProps={animatedProps}
                cx={radius} 
                cy={radius} 
                r={innerRadius} 
                strokeWidth={strokeWidth}
                stroke={colour}
                strokeLinecap='round'
                rotation="-90"
                originY={radius}
                originX={radius}
                />
            </SVG>  
        </View>
    )
}

export default RingProgress;