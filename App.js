import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Onboarding from './src/views/Onboarding'
import Calculator from './src/views/Calculator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AppStack = createNativeStackNavigator();

export default function App() {
          return (
                    <>
                              <NavigationContainer>
                                        <AppStack.Navigator initialRouteName='Onboarding'>
                                                  <AppStack.Screen name="Onboarding"
                                                            options={{
                                                                      title: 'Bem-vindo(a)',
                                                                      headerStyle: {
                                                                                backgroundColor: '#000',
                                                                      },
                                                                      headerTintColor: '#fff',
                                                                      headerTitleStyle: {
                                                                                fontWeight: 'bold',
                                                                      },
                                                            }}
                                                            component={Onboarding} />

                                                  <AppStack.Screen name="Calculator"
                                                            options={{
                                                                      headerBackVisible: false,
                                                                      title: '',
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
                    </>
          );
}