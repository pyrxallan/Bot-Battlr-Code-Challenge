function BotCard({ bot, onBotClick, onDischarge, isInArmy, showDetails = false }) {
  const { name, health, damage, armor, bot_class, catchphrase, avatar_url } = bot;

  const getBotClassColor = (botClass) => {
    switch (botClass) {
      case 'Assault': return 'bg-cyber-red';
      case 'Defender': return 'bg-cyber-blue';
      case 'Support': return 'bg-cyber-green';
      case 'Medic': return 'bg-cyber-cyan text-cyber-dark';
      case 'Witch': return 'bg-cyber-purple';
      case 'Captain': return 'bg-cyber-yellow text-cyber-dark';
      default: return 'bg-gray-600';
    }
  };

  const handleDischarge = (e) => {
    e.stopPropagation(); // Prevent triggering the card click
    if (window.confirm(`Are you sure you want to discharge ${name} forever?`)) {
      onDischarge(bot.id);
    }
  };

  // Handle card click - different behavior based on context
  const handleCardClick = () => {
    if (onBotClick) {
      onBotClick();
    }
  };

  return (
    <div 
      className="bg-cyber-dark rounded-lg overflow-hidden shadow-cyber border-2 border-cyber-blue hover:border-cyber-cyan transition-all duration-300 hover:transform hover:scale-105 relative cursor-pointer"
      onClick={handleCardClick}
    >
      {/* Discharge Button (only in army) */}
      {isInArmy && !showDetails && (
        <button
          onClick={handleDischarge}
          className="absolute top-2 left-2 bg-cyber-red hover:bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold z-10 transition-all duration-200 shadow-lg"
          title="Discharge Bot Forever"
        >
          ×
        </button>
      )}

      {/* Bot Image */}
      <div className="relative">
        <img 
          src={avatar_url} 
          alt={name}
          className="w-full h-48 object-cover"
        />
        <div className={`absolute top-2 right-2 px-3 py-1 rounded-full text-sm font-bold font-orbitron ${getBotClassColor(bot_class)}`}>
          {bot_class}
        </div>
        {isInArmy && !showDetails && (
          <div className="mt-4 text-center">
            <span className="text-cyber-cyan text-sm font-orbitron">Click to release</span>
          </div>
        )}
      </div>

      {/* Bot Info */}
      <div className="p-4">
        <h3 className="text-xl font-orbitron text-cyber-green mb-1">{name}</h3>
        <p className="text-cyber-cyan text-sm italic mb-3 truncate">"{catchphrase}"</p>
        
        {/* Stats */}
        <div className="space-y-2">
          <div className="flex justify-between items-center text-sm">
            <span className="text-cyber-cyan">Health:</span>
            <span className="text-cyber-green font-bold">{health}</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-cyber-cyan">Damage:</span>
            <span className="text-cyber-red font-bold">{damage}</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-cyber-cyan">Armor:</span>
            <span className="text-cyber-blue font-bold">{armor}</span>
          </div>
        </div>

        {/* Click to view details (only in collection) */}
        {showDetails && (
          <div className="mt-4 text-center">
            <span className="text-cyber-cyan text-sm font-orbitron">Click to view details</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default BotCard;