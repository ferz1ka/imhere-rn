import { useState } from "react";

import { Box } from "../../atoms";
import { AddParticipantForm, AddParticipantHeader, AddParticipantList, AddParticipantListItem } from "../../molecules";

import { styles } from "./styles";

interface Participant {
  id: string;
  name: string;
}

export function AddParticipant() {

  const [participants, setParticipants] = useState<Participant[]>([])

  function handleAddParticipant(name: string) {
    const id = String(participants?.length + 1)
    const newParticipant = { id, name }
    setParticipants(prevState => ([newParticipant, ...prevState]))
  }

  function handleRemoveParticipant(id: string) {
    const newParticipants = participants.filter(participant => participant.id != id)
    setParticipants(newParticipants)
  }

  return (
    <Box style={styles.container}>
      <Box style={styles.headerContainer}>
        <AddParticipantHeader
          title='Nome do evento'
          subtitle='Seg, 4 de abril de 2022'
        />
      </Box>

      <Box style={styles.formContainer}>
        <AddParticipantForm
          handleAddParticipant={handleAddParticipant}
        />
      </Box>

      <Box style={styles.listContainer}>
        <AddParticipantList
          participants={participants}
          handleRemoveParticipant={handleRemoveParticipant}
        />
      </Box>
    </Box>
  )
}