import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 16,
    height: 50,
  },
  participantWrapper: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: '#1F1E25',
  },
  participantText: {
    color: '#FDFCFE',
    fontSize: 16,
  }
})