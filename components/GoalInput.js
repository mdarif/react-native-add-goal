import { TextInput, View, Button, StyleSheet, Modal } from 'react-native'
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
        <TextInput
          style={styles.textInput}
          placeholder='Your course goal!'
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Add Goal' onPress={addClearText} />
          </View>
          <View style={styles.button}>
            <Button title='Cancel' onPress={onCancel} />
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
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 16
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '100%',
    padding: 8
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
