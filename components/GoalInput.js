import { TextInput, View, Button, StyleSheet } from 'react-native'
import { useState } from 'react'

function GoalInput ({ goalInputHandler, addGoalHandler }) {
  const [enteredGoalText, setEnteredGoalText] = useState('')

  function goalInputHandler (text) {
    setEnteredGoalText(text)
  }

  function addClearText () {
    if (enteredGoalText != '') {
      addGoalHandler(enteredGoalText)
      setEnteredGoalText('')
    }
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder='Your course goal!'
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <Button title='Add Goal' onPress={addClearText} />
    </View>
  )
}

export default GoalInput

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  }
})
