function YourBotArmy({ army, onRelease, onDischarge }) {
  const botClasses = ["Support", "Medic", "Assault", "Defender", "Captain", "Witch"];
  
  const getBotForClass = (botClass) => {
    return army.find(bot => bot.bot_class === botClass);
  };

  const getEmptySlotClass = (botClass) => {
    switch (botClass) {
      case 'Assault': return 'border-cyber-red';
      case 'Defender': return 'border-cyber-blue';
      case 'Support': return 'border-cyber-green';
      case 'Medic': return 'border-cyber-cyan';
      case 'Witch': return 'border-cyber-purple';
      case 'Captain': return 'border-cyber-yellow';
      default: return 'border-cyber-blue';
    }
  };

  const getEmptySlotText = (botClass) => {
    switch (botClass) {
      case 'Assault': return 'text-cyber-red';
      case 'Defender': return 'text-cyber-blue';
      case 'Support': return 'text-cyber-green';
      case 'Medic': return 'text-cyber-cyan';
      case 'Witch': return 'text-cyber-purple';
      case 'Captain': return 'text-cyber-yellow';
      default: return 'text-cyber-cyan';
    }
  };

  const armyCount = army.length;
  const isArmyComplete = armyCount === 6;

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-orbitron mb-4 text-cyber-purple">
        {isArmyComplete ? (
          <span className="text-cyber-green">YOUR BOT ARMY IS COMPLETE!</span>
        ) : (
          `YOUR BOT ARMY (${armyCount}/6)`
        )}
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        {botClasses.map(botClass => {
          const bot = getBotForClass(botClass);
          const borderClass = getEmptySlotClass(botClass);
          const textClass = getEmptySlotText(botClass);
          
          return (
            <div key={botClass} className="min-h-[300px]">
              {bot ? (
                <div 
                  className="cursor-pointer"
                  onClick={() => onRelease(bot.id)}
                >
                  <BotCard 
                    bot={bot}
                    onBotClick={() => onRelease(bot.id)}
                    onDischarge={onDischarge}
                    isInArmy={true}
                  />
                </div>
              ) : (
                <div className={`bg-cyber-darker border-2 border-dashed ${borderClass} rounded-lg h-full min-h-[300px] flex flex-col items-center justify-center p-4 transition-all duration-300 hover:border-solid`}>
                  <div className={`text-4xl mb-2 ${textClass}`}>
                    {botClass === 'Assault' && '⚔️'}
                    {botClass === 'Defender' && '🛡️'}
                    {botClass === 'Support' && '🔧'}
                    {botClass === 'Medic' && '🏥'}
                    {botClass === 'Witch' && '🔮'}
                    {botClass === 'Captain' && '👑'}
                  </div>
                  <h3 className={`text-lg font-orbitron font-bold ${textClass} mb-1`}>
                    {botClass}
                  </h3>
                  <p className="text-gray-400 text-sm text-center">
                    {isArmyComplete ? 'Slot filled' : 'Empty slot'}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default YourBotArmy;