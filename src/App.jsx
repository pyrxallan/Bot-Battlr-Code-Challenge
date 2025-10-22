import { useState, useEffect } from 'react';
import YourBotArmy from './components/YourBotArmy';
import BotCollection from './components/BotCollection';
import SortBar from './components/SortBar';

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBot, setSelectedBot] = useState(null);
  const [sortBy, setSortBy] = useState('');
  const [filters, setFilters] = useState([]);

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

  // Filter and sort bots
  const getFilteredAndSortedBots = () => {
    let filteredBots = bots;
    
    if (filters.length > 0) {
      filteredBots = filteredBots.filter(bot => filters.includes(bot.bot_class));
    }
    
    if (sortBy) {
      filteredBots = [...filteredBots].sort((a, b) => b[sortBy] - a[sortBy]);
    }
    
    return filteredBots;
  };

  const enlistBot = (bot) => {
    const classExists = army.some(b => b.bot_class === bot.bot_class);
    if (classExists) {
      alert(`You already have a ${bot.bot_class} in your army! Only one bot per class allowed.`);
      return;
    }
    
    if (!army.find(b => b.id === bot.id)) {
      setArmy([...army, bot]);
      setBots(bots.filter(b => b.id !== bot.id));
      setSelectedBot(null);
    }
  };

  const releaseBot = (botId) => {
    const botToRelease = army.find(bot => bot.id === botId);
    setArmy(army.filter(bot => bot.id !== botId));
    if (botToRelease) {
      setBots([...bots, botToRelease]);
    }
  };

  const dischargeBot = (botId) => {
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
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-cyber-green text-2xl font-orbitron">Initializing Bot Battlr...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-cyber-white font-roboto-mono">
      <header className="bg-cyber-dark border-b-2 border-cyber-blue p-6 shadow-cyber">
        <h1 className="text-5xl font-bold text-center font-orbitron text-cyber-green mb-2">
          BOT BATTLR
        </h1>
        <p className="text-center text-cyber-cyan text-lg">
          Build Your Ultimate Cybernetic Army
        </p>
      </header>

      <YourBotArmy
        army={army}
        onRelease={releaseBot}
        onDischarge={dischargeBot}
      />

      <SortBar 
        sortBy={sortBy}
        onSortChange={setSortBy}
        filters={filters}
        onFiltersChange={setFilters}
      />
      
      <BotCollection 
        bots={getFilteredAndSortedBots()} 
        army={army}
        selectedBot={selectedBot}
        onBotSelect={setSelectedBot}
        onEnlist={enlistBot}
      />
    </div>
  );
}

export default App;