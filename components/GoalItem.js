import { StyleSheet, View, Text, Pressable } from 'react-native'
function GoalItem ({ text, deleteGoalHandler, id }) {
  // console.log('props', props)
  return (
    <Pressable onPress={() => deleteGoalHandler(id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{text}</Text>
      </View>
    </Pressable>
  )
}

export default GoalItem

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e08cc',
    padding: 8
  },
  goalText: {
    color: '#fff'
  }
})
