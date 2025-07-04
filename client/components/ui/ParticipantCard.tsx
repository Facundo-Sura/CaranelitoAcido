const ParticipantCard = ({ name, role, bio, image }: Participant) => {
  return (
    <div className="flex gap-4 bg-gray-800 p-4 rounded">
      {image && (
        <img src={image} alt={name} className="w-16 h-16 rounded-full" />
      )}
      <div>
        <h4 className="font-semibold">{name}</h4>
        <p className="text-sm text-gray-400">{role}</p>
      </div>
      <div>
        <p>{bio}</p>
      </div>
    </div>
  );
};

export default ParticipantCard;