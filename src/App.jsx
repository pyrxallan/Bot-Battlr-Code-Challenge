import { useState, useEffect } from 'react';
import YourBotArmy from './components/YourBotArmy';
import BotCollection from './components/BotCollection';

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then(res => res.json())
      .then(data => {
        setBots(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching bots:', err);
        setLoading(false);
      });
  }, []);

  const enlistBot = (bot) => {
    // Bot can only be enlisted once
    if (!army.find(b => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const releaseBot = (botId) => {
    // Remove bot from army (bot stays in collection)
    setArmy(army.filter(bot => bot.id !== botId));
  };

  const dischargeBot = (botId) => {
    // Delete bot from backend and remove from both army and collection
    fetch(`http://localhost:8001/bots/${botId}`, {
      method: 'DELETE',
    })
      .then(() => {
        setBots(bots.filter(bot => bot.id !== botId));
        setArmy(army.filter(bot => bot.id !== botId));
      })
      .catch(err => console.error('Error deleting bot:', err));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-2xl">Loading Bot Battlr...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 shadow-lg">
        <h1 className="text-4xl font-bold text-center">Bot Battlr</h1>
        <p className="text-center mt-2 text-gray-200">Build Your Ultimate Bot Army</p>
      </header>

      <YourBotArmy
        army={army}
        onRelease={releaseBot}
        onDischarge={dischargeBot}
      />

      <BotCollection 
        bots={bots} 
        army={army}
        onEnlist={enlistBot}
      />
    </div>
  );
}

export default App;