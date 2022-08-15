import { TextInput, View, Button, StyleSheet, Modal, Image } from 'react-native'
import { useState } from 'react'

function GoalInput ({ goalInputHandler, onAddGoal, isModal, onCancel }) {
  const [enteredGoalText, setEnteredGoalText] = useState('')

  function goalInputHandler (text) {
    setEnteredGoalText(text)
  }

  function addClearText () {
    if (enteredGoalText != '') {
      onAddGoal(enteredGoalText)
      setEnteredGoalText('')
    }
  }

  return (
    <Modal visible={isModal} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/goal.png')}
        />
        <TextInput
          style={styles.textInput}
          placeholder='Your course goal!'
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Add Goal' onPress={addClearText} color='#b180f0' />
          </View>
          <View style={styles.button}>
            <Button title='Cancel' onPress={onCancel} color='#f31282' />
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default GoalInput

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b'
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    width: '100%',
    padding: 16,
    borderRadius: 6
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row'
  },
  button: {
    width: 100,
    marginHorizontal: 10
  }
})
