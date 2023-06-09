import { ScrollView, View } from "react-native";

interface BoxProps {
  children?: any;
  style?: any;
  scroll?: boolean;
}

export function Box(props: BoxProps) {
  const { scroll = false, style, ...rest } = props;

  if (scroll) return <ScrollView contentContainerStyle={style} showsVerticalScrollIndicator={false} {...rest} />
  else return <View style={style} {...rest} />
}