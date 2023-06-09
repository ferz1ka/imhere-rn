import { TextInput } from 'react-native'
import { styles } from './styles'

interface TextFieldProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

export function TextField(props: TextFieldProps) {

  const { placeholder, value, onChange } = props

  return (
    <TextInput
      value={value}
      onChangeText={onChange}
      placeholder={placeholder}
      placeholderTextColor='#6B6B6B'
      style={styles.input}
    />
  )
}