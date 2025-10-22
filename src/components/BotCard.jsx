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

  return (
    <div 
      className="bg-cyber-dark rounded-lg overflow-hidden shadow-cyber border-2 border-cyber-blue hover:border-cyber-cyan transition-all duration-300 hover:transform hover:scale-105 relative"
      onClick={showDetails ? onBotClick : undefined}
    >
      {/* Discharge Button (only in army) */}
      {isInArmy && !showDetails && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDischarge(bot.id);
          }}
          className="absolute top-2 left-2 bg-cyber-red hover:bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold z-10 transition-all duration-200"
          title="Discharge Bot"
        >
          ×
        </button>
      )}

      {/* Bot Image */}
      <div className="relative cursor-pointer">
        <img 
          src={avatar_url} 
          alt={name}
          className="w-full h-48 object-cover"
        />
        <div className={`absolute top-2 right-2 px-3 py-1 rounded-full text-sm font-bold font-orbitron ${getBotClassColor(bot_class)}`}>
          {bot_class}
        </div>
      </div>

      {/* Bot Info */}
      <div className="p-4">
        <h3 className="text-xl font-orbitron text-cyber-green mb-1">{name}</h3>
        <p className="text-cyber-cyan text-sm italic mb-3 truncate">"{catchphrase}"</p>
        
        {/* Stats */}
        <div className="space-y-2">
          <div className="flex justify-between items-center text-sm">
            <span className="text-cyber-cyan">HP:</span>
            <span className="text-cyber-green font-bold">{health}</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-cyber-cyan">DMG:</span>
            <span className="text-cyber-red font-bold">{damage}</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-cyber-cyan">ARM:</span>
            <span className="text-cyber-blue font-bold">{armor}</span>
          </div>
        </div>

        {showDetails && (
          <div className="mt-4 text-center">
            <span className="text-cyber-cyan text-sm font-orbitron">Click to view Bot Specs</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default BotCard;