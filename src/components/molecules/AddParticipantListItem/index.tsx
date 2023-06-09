import { styles } from './styles'
import { Box, Button, Typography } from '../../atoms'

interface AddParticipantListItemProps {
  id: string;
  name: string;
  onRemove: (id: string) => void;
}

export function AddParticipantListItem(props: AddParticipantListItemProps) {

  const { id, name, onRemove } = props

  return (
    <Box style={styles.container}>
      <Box style={styles.participantWrapper}>
        <Typography style={styles.participantText}>{name}</Typography>
      </Box>
      <Button
        label='-'
        handlePress={() => onRemove(id)}
        containerStyles={{ backgroundColor: '#E23C44' }}
      />
    </Box>
  )
}