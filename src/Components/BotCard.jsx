function BotCard({ bot, onBotClick, onDischarge, isInArmy }) {
  const getBotClassColor = (botClass) => {
    const colors = {
      'Support': 'text-green-400',
      'Medic': 'text-pink-400',
      'Assault': 'text-red-400',
      'Defender': 'text-blue-400',
      'Captain': 'text-yellow-400',
      'Witch': 'text-purple-400'
    };
    return colors[botClass] || 'text-gray-400';
  };

  const getBotClassIcon = (botClass) => {
    const icons = {
      'Support': '🛠️',
      'Medic': '🏥',
      'Assault': '⚔️',
      'Defender': '🛡️',
      'Captain': '⭐',
      'Witch': '🔮'
    };
    return icons[botClass] || '🤖';
  };

  return (
    <div 
      className={`bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer border-2 ${
        isInArmy ? 'border-purple-500' : 'border-gray-700 hover:border-blue-500'
      }`}
    >
      <div className="relative" onClick={onBotClick}>
        <img 
          src={bot.avatar_url} 
          alt={bot.name}
          className="w-full h-48 object-cover"
        />
        {isInArmy && (
          <div className="absolute top-2 right-2 bg-purple-600 text-white px-2 py-1 rounded text-xs font-bold">
            ENLISTED
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{bot.name}</h3>
        <p className={`text-sm mb-3 font-semibold ${getBotClassColor(bot.bot_class)}`}>
          {getBotClassIcon(bot.bot_class)} {bot.bot_class}
        </p>
        
        <div className="space-y-2 mb-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-sm">Health:</span>
            <span className="font-bold">{bot.health}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-sm">Damage:</span>
            <span className="font-bold">{bot.damage}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-sm">Armor:</span>
            <span className="font-bold">{bot.armor}</span>
          </div>
        </div>
        
        <p className="text-xs text-gray-500 italic mb-3 truncate">
          "{bot.catchphrase}"
        </p>
        
        {onDischarge && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDischarge();
            }}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors"
          >
            ✕ Discharge Forever
          </button>
        )}
      </div>
    </div>
  );
}

export default BotCard;