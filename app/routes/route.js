import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import HomePage from '../screens/Home';
import VerMaisPage from '../screens/VerMais';
import LoginPage from '../screens/Login';
import LoginOrRegister from '../screens/LoginOrRegister';
import Admin from '../screens/Admin';
import TelaDeResultados from '../screens/TelaDeResultaodos';
const Stack = createStackNavigator();

export default function AppRoutes(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name='Home' component={HomePage} options={{ headerShown: false }}/>
                <Stack.Screen
                    name='VerMais'
                    component={VerMaisPage}
                    options={({ navigation }) => ({
                        headerLeft: () => (
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Ionicons name='arrow-back' size={24} color='#000' style={{ marginLeft: 10 }} />
                            </TouchableOpacity>
                        ),
                        headerRight: () => (
                            <View style={{ flexDirection: 'row', marginRight: 10 }}>
                                <TouchableOpacity style={{ marginRight: 12 }} onPress={() => console.log('Compartilhar')}>
                                    <Ionicons name='share-social' size={24} color='#000' />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => console.log('Favoritar')}>
                                    <Ionicons name='heart-outline' size={26}/>
                                </TouchableOpacity>
                            </View>
                        ),
                    })}
                />
                <Stack.Screen name='Login' component={LoginPage} />
                <Stack.Screen name='Login-Registrer' component={LoginOrRegister} />
                <Stack.Screen name='Admin' component={Admin} />
                <Stack.Screen name='TelaDeResultados' component={TelaDeResultados} options={{ headerShown: false }} />


            </Stack.Navigator>
        </NavigationContainer>
    );
}
