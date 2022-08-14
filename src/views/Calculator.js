// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, StatusBar } from 'react-native';
import React, { Component } from 'react';
import Button from '../components/Button/Button'
import Display from '../components/Display/Display';


const initialState = {
          displayValue: '0',
          clearDisplay: false,
          operation: null,
          values: [0, 0],
          current: 0,
}

export default class App extends Component {

          state = { ...initialState }

          addDigit = n => {
                    const clearDisplay = this.state.displayValue === '0'
                              || this.state.clearDisplay

                    if (n === '.' && !clearDisplay
                              && this.state.displayValue.includes('.')) {
                              return
                    }

                    const currentValue = clearDisplay ? '' : this.state.displayValue
                    const displayValue = currentValue + n
                    this.setState({ displayValue, clearDisplay: false })

                    if (n !== '.') {
                              const newValue = parseFloat(displayValue)
                              const values = [...this.state.values]
                              values[this.state.current] = newValue
                              this.setState({ values })
                    }
          }

          clear = () => {
                    this.setState({ ...initialState })
          }

          setOperation = operation => {
                    if (this.state.current === 0) {
                              this.setState({ operation, current: 1, clearDisplay: true })
                    } else {
                              const equals = operation === '='
                              const values = [...this.state.values]
                              try {
                                        values[0] =
                                                  eval(`${values[0]} ${this.state.operation} ${values[1]}`)
                              } catch (e) {
                                        values[0] = this.state.values[0]
                              }

                              values[1] = 0
                              this.setState({
                                        displayValue: `${values[0]}`,
                                        operation: equals ? null : operation,
                                        current: equals ? 0 : 1,
                                        //clearDisplay: !equals,
                                        clearDisplay: true,
                                        values,
                              })
                    }
          }


          render() {
                    return (
                              <>
                                        <View style={styles.container}>
                                                  <Display value={this.state.displayValue} />
                                                  <View style={styles.buttons}>
                                                            <Button currentLabel='Limpar' triple onClick={this.clear} />
                                                            <Button currentLabel='÷' label="/" operation onClick={this.setOperation} />
                                                            <Button label='7' currentLabel='7' onClick={this.addDigit} />
                                                            <Button label='8' currentLabel='8' onClick={this.addDigit} />
                                                            <Button label='9' currentLabel='9' onClick={this.addDigit} />
                                                            <Button currentLabel='x' label="*" operation onClick={this.setOperation} />
                                                            <Button label='4' currentLabel='4' onClick={this.addDigit} />
                                                            <Button label='5' currentLabel='5' onClick={this.addDigit} />
                                                            <Button label='6' currentLabel='6' onClick={this.addDigit} />
                                                            <Button label='-' currentLabel='-' operation onClick={this.setOperation} />
                                                            <Button label='1' currentLabel='1' onClick={this.addDigit} />
                                                            <Button label='2' currentLabel='2' onClick={this.addDigit} />
                                                            <Button label='3' currentLabel='3' onClick={this.addDigit} />
                                                            <Button label='+' currentLabel='+' operation onClick={this.setOperation} />
                                                            <Button label='0' currentLabel='0' double onClick={this.addDigit} />
                                                            <Button label='.' currentLabel='.' onClick={this.addDigit} />
                                                            <Button label='=' currentLabel='=' operation onClick={this.setOperation} />
                                                  </View>
                                        </View>
                              </>
                    );
          }
}

const styles = StyleSheet.create({
          container: {
                    flex: 1,
                    backgroundColor: '#fff',
          },

          buttons: {
                    flexDirection: 'row',
                    flexWrap: 'wrap',
          },

});
