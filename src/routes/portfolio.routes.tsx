import { createStackNavigator } from '@react-navigation/stack';
import { PortfolioScreen } from '../screens/Portfolio/PortfolioScreen';
import { HomeScreen } from '../screens/Home/HomeScreen';

const { Navigator, Screen } = createStackNavigator();

export function PortfolioRoutes(){
    return (
        <Navigator>
            <Screen name='home' component={ HomeScreen } options={ { title: "Axel Ezaki", headerShown: false } }  />
            <Screen name='portfolio' component={ PortfolioScreen } options={ { title: "Axel Ezaki" } }  />
        </Navigator>
    );
}