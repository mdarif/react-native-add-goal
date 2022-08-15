import { StyleSheet, View, Text, Pressable } from 'react-native'
function GoalItem ({ text, onDeleteItem, id }) {
  // console.log('props', props)
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#210644', borderRadius: 6 }}
        onPress={() => onDeleteItem(id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  )
}

export default GoalItem

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e08cc'
  },
  pressedItem: {
    opacity: 0.5
  },
  goalText: {
    color: '#fff',
    padding: 8
  }
})
