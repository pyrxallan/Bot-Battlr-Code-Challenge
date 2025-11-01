import BotCard from './BotCard';

function BotCollection({ bots, army, selectedBot, onBotSelect, onEnlist }) {
  
  // Bot Specs View (integrated directly)
  const renderBotSpecs = () => {
    if (!selectedBot) return null;

    const { name, health, damage, armor, bot_class, catchphrase, avatar_url } = selectedBot;

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

    const handleEnlist = () => {
      onEnlist(selectedBot);
      onBotSelect(null); 
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50">
        <div className="bg-cyber-dark border-2 border-cyber-blue rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="bg-cyber-darker p-4 border-b-2 border-cyber-blue flex justify-between items-center">
            <h2 className="text-2xl font-orbitron text-cyber-green">BOT SPECIFICATIONS</h2>
            <button
              onClick={() => onBotSelect(null)}
              className="bg-cyber-red hover:bg-red-600 text-white px-4 py-2 rounded transition-all duration-200 font-orbitron"
            >
              CLOSE
            </button>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="relative">
                <img 
                  src={avatar_url} 
                  alt={name}
                  className="w-full h-96 object-cover rounded-lg border-2 border-cyber-blue"
                />
                <div className={`absolute top-4 right-4 px-4 py-2 rounded-full text-lg font-bold font-orbitron ${getBotClassColor(bot_class)}`}>
                  {bot_class}
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-4xl font-bold font-orbitron text-cyber-green mb-2">{name}</h3>
                  <p className="text-cyber-cyan text-lg italic">"{catchphrase}"</p>
                </div>

                <div className="space-y-4">
                  <div className="bg-cyber-darker p-4 rounded-lg border border-cyber-blue">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-cyber-cyan font-orbitron">HEALTH</span>
                      <span className="text-cyber-green font-bold">{health}</span>
                    </div>
                    <div className="w-full bg-cyber-dark rounded-full h-3">
                      <div 
                        className="bg-cyber-green h-3 rounded-full transition-all duration-500" 
                        style={{ width: `${health}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="bg-cyber-darker p-4 rounded-lg border border-cyber-blue">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-cyber-cyan font-orbitron">DAMAGE</span>
                      <span className="text-cyber-red font-bold">{damage}</span>
                    </div>
                    <div className="w-full bg-cyber-dark rounded-full h-3">
                      <div 
                        className="bg-cyber-red h-3 rounded-full transition-all duration-500" 
                        style={{ width: `${damage}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="bg-cyber-darker p-4 rounded-lg border border-cyber-blue">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-cyber-cyan font-orbitron">ARMOR</span>
                      <span className="text-cyber-blue font-bold">{armor}</span>
                    </div>
                    <div className="w-full bg-cyber-dark rounded-full h-3">
                      <div 
                        className="bg-cyber-blue h-3 rounded-full transition-all duration-500" 
                        style={{ width: `${armor}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleEnlist}
                  className="w-full bg-cyber-green hover:bg-cyber-cyan text-cyber-dark font-orbitron text-xl text-stone-900 py-4 px-6 rounded-lg transition-all duration-200 border-2 border-cyber-green hover:border-cyber-cyan shadow-cyber"
                >
                  ENLIST TO ARMY
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (bots.length === 0) {
    return (
      <div className="max-w-7xl mx-auto p-6">
        <h2 className="text-2xl font-orbitron text-cyber-green mb-4">BOT COLLECTION</h2>
        <div className="bg-cyber-dark border-2 border-cyber-blue rounded-lg p-12 text-center">
          <p className="text-cyber-cyan text-xl mb-4">No bots available in collection</p>
          <p className="text-gray-400">All bots have been enlisted to armies!</p>
        </div>
        {renderBotSpecs()}
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-orbitron text-cyber-green mb-4">
        BOT COLLECTION ({bots.length})
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {bots.map(bot => (
          <BotCard 
            key={bot.id}
            bot={bot}
            onBotClick={() => onBotSelect(bot)}
            isInArmy={army.some(b => b.id === bot.id)}
            showDetails={true}
          />
        ))}
      </div>
      
      {renderBotSpecs()}
    </div>
  );
}

export default BotCollection;