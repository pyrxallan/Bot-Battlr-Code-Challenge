import BotCard from './BotCard';

function YourBotArmy({ army, onRelease, onDischarge }) {
  if (army.length === 0) {
    return (
      <div className="max-w-7xl mx-auto p-6">
        <h2 className="text-2xl font-orbitron text-cyber-purple mb-4">YOUR BOT ARMY</h2>
        <div className="bg-cyber-dark border-2 border-cyber-purple rounded-lg p-8 text-center">
          <p className="text-cyber-cyan text-lg mb-2">No bots enlisted yet</p>
          <p className="text-gray-400">Click on a bot in the collection to view details and enlist!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-orbitron text-cyber-purple mb-4">
        YOUR BOT ARMY ({army.length}/6)
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
        {army.map(bot => (
          <BotCard 
            key={bot.id}
            bot={bot}
            onBotClick={() => onRelease(bot.id)}
            onDischarge={() => onDischarge(bot.id)}
            isInArmy={true}
          />
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;