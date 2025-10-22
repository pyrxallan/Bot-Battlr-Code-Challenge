import BotCard from './BotCard';

function YourBotArmy({ army, onRelease, onDischarge }) {
  if (army.length === 0) {
    return (
      <div className="max-w-7xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4 text-purple-400">Your Bot Army</h2>
        <div className="bg-gray-800 rounded-lg p-8 text-center text-gray-400">
          No bots enlisted yet. Click on a bot below to add them to your army!
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-purple-400">
        Your Bot Army ({army.length})
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
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