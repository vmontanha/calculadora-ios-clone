import React from 'react'
import {
          StyleSheet,
          Text,
          Dimensions,
          TouchableHighlight

} from 'react-native'

const Button = (props) => {

          const stylesButton = [styles.button]

          if (props.double) stylesButton.push(styles.buttonDouble)
          if (props.triple) stylesButton.push(styles.buttonTriple)
          if (props.operation) stylesButton.push(styles.operationButton)

          return (
                    <TouchableHighlight onPress={() => props.onClick(props.label)}>
                              <Text style={stylesButton}>{props.currentLabel}</Text>
                    </TouchableHighlight>
          )
}

const styles = StyleSheet.create({
          button: {
                    fontSize: 30,
                    height: Dimensions.get('window').width / 4,
                    width: Dimensions.get('window').width / 4,
                    padding: 20,
                    borderRadius: 0,
                    backgroundColor: '#f0f0f0f0',
                    textAlign: 'center',
                    borderWidth: 1,
                    borderRightColor: 'transparent',
                    borderColor: '#c5c6ca'
          },
          operationButton: {
                    color: '#fff',
                    backgroundColor: '#fa8231',
          },
          buttonDouble: {
                    width: (Dimensions.get('window').width / 4) * 2,
          },
          buttonTriple: {
                    width: (Dimensions.get('window').width / 4) * 3,
          }

})

export default Button