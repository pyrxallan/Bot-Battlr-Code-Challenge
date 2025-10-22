function BotCard({ bot, onBotClick, onDischarge, isInArmy }) {
  const { id, name, health, damage, armor, bot_class, catchphrase, avatar_url } = bot;

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


  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700 hover:border-purple-500 transition-all duration-300">
      {/* Bot Image */}
      <div className="relative">
        <img 
          src={avatar_url} 
          alt={name}
          className="w-full h-48 object-cover"
        />
        <div className={`absolute top-2 right-2 px-2 py-1 rounded-full text-sm font-bold ${getBotClassColor(bot_class)}`}>
          {bot_class}
        </div>
      </div>

      {/* Bot Info */}
      <div className="p-4">
        <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
        <p className="text-gray-400 text-sm italic mb-3">"{catchphrase}"</p>
        
        {/* Stats */}
        <div className="space-y-2 mb-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Health:</span>
            <div className="w-24 bg-gray-700 rounded-full h-2">
              <div 
                className="bg-green-500 h-2 rounded-full" 
                style={{ width: `${health}%` }}
              ></div>
            </div>
            <span className="text-white text-sm w-8 text-right">{health}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Damage:</span>
            <div className="w-24 bg-gray-700 rounded-full h-2">
              <div 
                className="bg-red-500 h-2 rounded-full" 
                style={{ width: `${damage}%` }}
              ></div>
            </div>
            <span className="text-white text-sm w-8 text-right">{damage}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Armor:</span>
            <div className="w-24 bg-gray-700 rounded-full h-2">
              <div 
                className="bg-blue-500 h-2 rounded-full" 
                style={{ width: `${armor}%` }}
              ></div>
            </div>
            <span className="text-white text-sm w-8 text-right">{armor}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2">
          {isInArmy ? (
            <>
              <button
                onClick={onBotClick}
                className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded transition"
              >
                Release
              </button>
              <button
                onClick={onDischarge}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded transition"
              >
                Discharge
              </button>
            </>
          ) : (
            <button
              onClick={onBotClick}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition"
            >
              Enlist
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default BotCard;