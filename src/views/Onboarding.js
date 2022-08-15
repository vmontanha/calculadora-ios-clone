
import { Image } from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import { StatusBar } from 'expo-status-bar';
const Simple = ({ navigation }) => (
          <>
                    <StatusBar style='auto' />
                    <Onboarding
                              onDone={() => navigation.navigate('Calculator')}
                              onSkip={() => navigation.navigate('Calculator')}
                              pages={[
                                        {
                                                  backgroundColor: '#01b6bd',
                                                  image: <Image source={require('../../assets/1.png')} style={{ width: 200, height: 200 }} />,
                                                  title: 'Calculadora IOS 7',
                                                  subtitle: 'Seja bem vindo a mais um desenvolvimento.',
                                        },
                                        {
                                                  backgroundColor: '#1a1f25',
                                                  image: <Image source={require('../../assets/2.png')} style={{ width: 200, height: 200 }} />,
                                                  title: 'Aprendizado',
                                                  subtitle: 'Este estudo tem apenas como finalidade criar e distribuir das novas versões de publicações e desenvolvimento, boas práticas e novas tecnologias.',
                                        },
                                        {
                                                  backgroundColor: '#fff',
                                                  image: <Image source={require('../../assets/3.png')} style={{ width: 200, height: 200 }} />,
                                                  title: 'Bem vindo (a)',
                                                  subtitle: 'Corre sempre para novas atualizações',
                                        },
                              ]}
                    />
          </>
);

export default Simple;