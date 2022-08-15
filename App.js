import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Onboarding from './src/views/Onboarding'
import Calculator from './src/views/Calculator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LottieView from 'lottie-react-native';

const AppStack = createNativeStackNavigator();

export default function App() {
          const [loaded, setLoaded] = useState(false);
          if (loaded == false) {
                    return (
                              <LottieView
                                        source={require('./assets/g-logo.json')}
                                        autoPlay
                                        loop={false}
                                        resizeMode='contain'
                                        onAnimationFinish={() => {
                                                  setLoaded(true);
                                        }}
                              />

                    );
          } else {
                    return (

                              <NavigationContainer>
                                        <AppStack.Navigator initialRouteName='SplashScreen'>
                                                  <AppStack.Screen name="Onboarding"
                                                            options={{ headerShown: false }}
                                                            component={Onboarding} />
                                                  {/* <AppStack.Screen name="SplashScreen"
                                                            options={{ headerShown: false }}
                                                            component={SplashScreen} /> */}

                                                  <AppStack.Screen name="Calculator"
                                                            options={{
                                                                      headerBackVisible: false,
                                                                      title: '',
                                                                      headerShown: false,
                                                                      headerStyle: {
                                                                                backgroundColor: '#000',
                                                                      },
                                                                      headerTintColor: '#fff',
                                                                      headerTitleStyle: {
                                                                                fontWeight: 'bold',
                                                                      },
                                                            }}
                                                            component={Calculator} />
                                        </AppStack.Navigator>
                              </NavigationContainer>
                    );
          }
}