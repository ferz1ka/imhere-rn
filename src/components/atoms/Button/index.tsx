import { Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { Typography } from '../Typography';

interface ButtonProps {
  label?: string;
  handlePress?: () => void;
  containerStyles?: any;
  typographyStyles?: any;
}

export function Button({ label, handlePress, containerStyles, typographyStyles }: ButtonProps) {
  return (
    <TouchableOpacity
      style={{ ...styles.button, ...containerStyles }}
      onPress={handlePress}
    >
      <Typography style={{ ...styles.buttonLabel, ...typographyStyles }}>
        {label}
      </Typography>
    </TouchableOpacity>
  )
}