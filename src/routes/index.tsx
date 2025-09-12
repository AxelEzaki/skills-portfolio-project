import { NavigationContainer } from '@react-navigation/native';
import { PortfolioRoutes } from './portfolio.routes';

export function Routes(){
    return (
        <NavigationContainer>
            <PortfolioRoutes />
        </NavigationContainer>
    )
}