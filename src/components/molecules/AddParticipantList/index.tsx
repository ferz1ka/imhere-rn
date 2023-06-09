import { Box, Typography } from '../../atoms'
import { AddParticipantListItem } from '../AddParticipantListItem';

import { styles } from './styles'

interface AddParticipantListItemProps {
  participants: {
    id: string;
    name: string;
  }[];
  handleRemoveParticipant: (id: string) => void;
}

export function AddParticipantList(props: AddParticipantListItemProps) {

  const { participants, handleRemoveParticipant } = props

  const participantsCount = participants?.length

  return (
    <Box scroll style={styles.container}>
      <Typography style={styles.title}>{participantsCount} Participante{participantsCount != 1 ? 's' : ''}</Typography>
      {participants.map((participant) => (
        <AddParticipantListItem key={participant.id} id={participant.id} name={participant.name} onRemove={handleRemoveParticipant} />
      ))}
    </Box>
  )
}