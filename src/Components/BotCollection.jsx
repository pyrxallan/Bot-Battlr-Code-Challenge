import BotCard from './BotCard';

function BotCollection({ bots, army, onEnlist }) {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-blue-400">Bot Collection</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {bots.map(bot => (
          <BotCard 
            key={bot.id}
            bot={bot}
            onBotClick={() => onEnlist(bot)}
            isInArmy={army.some(b => b.id === bot.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;