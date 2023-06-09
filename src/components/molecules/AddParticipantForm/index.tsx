import { View } from 'react-native'
import { styles } from './styles'
import { Button, TextField } from '../../atoms'
import { useState } from 'react'

interface AddParticipantFormProps {
  handleAddParticipant: (name: string) => void
}

export function AddParticipantForm(props: AddParticipantFormProps) {
  const [name, setName] = useState('')

  const { handleAddParticipant } = props

  function handlePress() {
    handleAddParticipant(name)
    setName('')
  }

  return (
    <View style={styles.formContainer}>
      <TextField
        placeholder='Nome do participante'
        value={name}
        onChange={value => setName(value)}
      />

      <Button
        label='+'
        handlePress={handlePress}
      />
    </View>
  )
}