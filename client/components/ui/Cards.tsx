import react from "react";
import ParticipantCard from "./ParticipantCard";

interface Paticipant {
  name: string;
  role: string;
  bio: string;
  image: string;
}

interface CardsProps {
  participants: Participant[];
}

const Cards: React.FC<CardsProps> = ({ participants }) => {
  return (
    <div>
      {participants.map((participant) => (
        <ParticipantCard key={participant.name} {...participant} />
      ))}
    </div>
  )
};

export default Cards;