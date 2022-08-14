import React from 'react'
import {
          StyleSheet,
          Text,
          View
} from 'react-native'


const Display = (props) => {
          return (
                    <View style={styles.display}>
                              <Text style={styles.displayValue}
                                        numberOfLines={1}>
                                        {props.value}
                              </Text>
                    </View>

          )
}

const styles = StyleSheet.create({
          display: {
                    flex: 1,
                    padding: 5,
                    justifyContent: 'flex-end',
                    backgroundColor: '#000',
                    alignItems: 'flex-end',
          },
          displayValue: {
                    fontSize: 80,
                    color: '#fff',
          }
})

export default Display