import { View, Text } from 'react-native'
import { styles } from './styles'

interface AddParticipantHeaderProps {
  title: string;
  subtitle: string;
}

export function AddParticipantHeader(props: AddParticipantHeaderProps) {

  const { title, subtitle } = props

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  )
}