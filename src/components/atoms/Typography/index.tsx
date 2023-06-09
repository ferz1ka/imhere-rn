import { Text } from 'react-native'

interface TypographyProps {
  children?: any;
  style?: any;
}

export function Typography(props: TypographyProps) {
  return <Text {...props} />
}