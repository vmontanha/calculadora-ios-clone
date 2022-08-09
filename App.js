// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

import Button from './src/components/Button/Button';
import Display from './src/components/Display/Display';

export default function App() {

          const [displayValue, setDisplayValue] = useState('0');

          return (
                    <View style={styles.container}>
                              <Display value={displayValue} />
                              <View style={styles.buttons}>
                                        <Button label='Clear' triple />
                                        <Button label='÷' operation />
                                        <Button label='7' />
                                        <Button label='8' />
                                        <Button label='9' />
                                        <Button label='x' operation />
                                        <Button label='4' />
                                        <Button label='5' />
                                        <Button label='6' />
                                        <Button label='-' operation />
                                        <Button label='1' />
                                        <Button label='2' />
                                        <Button label='3' />
                                        <Button label='+' operation />
                                        <Button label='0' double />
                                        <Button label='.' />
                                        <Button label='=' operation />
                              </View>
                    </View>
          );
}

const styles = StyleSheet.create({
          container: {
                    flex: 1,
                    backgroundColor: '#000',
          },

          buttons: {
                    flexDirection: 'row',
                    flexWrap: 'wrap',
          }
});
