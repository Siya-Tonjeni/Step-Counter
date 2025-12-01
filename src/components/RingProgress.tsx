import { StyleSheet, Text, View } from 'react-native';
import SVG, {Circle} from 'react-native-svg';

type RingProgressProps = {
    radius?: number;
    strokeWidth? : number;
    progress: number
}

const colour = "#EE0F55"

const RingProgress = ({radius = 100, strokeWidth = 35, progress}: RingProgressProps) => {
    const innerRadius = radius - strokeWidth / 2;
    const circumference = 2 * Math.PI * innerRadius
    
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
                <Circle 
                cx={radius} 
                cy={radius} 
                r={innerRadius} 
                strokeWidth={strokeWidth}
                stroke={colour}
                strokeDasharray={[circumference * progress, circumference]}
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