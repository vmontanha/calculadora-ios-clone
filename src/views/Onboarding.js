
import { Image } from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';

const Simple = ({ navigation }) => (
          <>
                    <Onboarding
                              onDone={() => navigation.navigate('Calculator')}
                              onSkip={() => navigation.navigate('Calculator')}
                              pages={[
                                        {
                                                  backgroundColor: '#d9d9d9',
                                                  image: <Image source={require('../../assets/splash.png')} style={{ width: 200, height: 200 }} />,
                                                  title: '',
                                                  subtitle: '',
                                        },
                                        {
                                                  backgroundColor: '#000',
                                                  image: <Image source={require('../../assets/icon.png')} style={{ width: 90, height: 90 }} />,
                                                  title: 'The Title',
                                                  subtitle: 'This is the subtitle that sumplements the title.',
                                        },
                                        {
                                                  backgroundColor: '#999',
                                                  image: <Image source={require('../../assets/splash.png')} style={{ width: 90, height: 90 }} />,
                                                  title: 'Triangle',
                                                  subtitle: "Beautiful, isn't it?",
                                        },
                              ]}
                    />
          </>
);

export default Simple;