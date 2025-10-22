function SortBar({ sortBy, onSortChange, filters, onFiltersChange }) {
  const sortOptions = [
    { value: 'health', label: 'Health' },
    { value: 'damage', label: 'Damage' },
    { value: 'armor', label: 'Armor' }
  ];

  const botClasses = ["Support", "Medic", "Assault", "Defender", "Captain", "Witch"];

  const toggleFilter = (botClass) => {
    if (filters.includes(botClass)) {
      onFiltersChange(filters.filter(f => f !== botClass));
    } else {
      onFiltersChange([...filters, botClass]);
    }
  };

  const clearFilters = () => {
    onFiltersChange([]);
  };

  const getActiveClassColor = (botClass) => {
    switch (botClass) {
      case 'Assault': return 'bg-cyber-red text-white border-cyber-red';
      case 'Defender': return 'bg-cyber-blue text-white border-cyber-blue';
      case 'Support': return 'bg-cyber-green text-cyber-dark border-cyber-green';
      case 'Medic': return 'bg-cyber-cyan text-cyber-dark border-cyber-cyan';
      case 'Witch': return 'bg-cyber-purple text-white border-cyber-purple';
      case 'Captain': return 'bg-cyber-yellow text-cyber-dark border-cyber-yellow';
      default: return 'bg-gray-600 text-white border-gray-600';
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sort Section */}
        <div className="bg-cyber-dark border-2 border-cyber-blue rounded-lg p-4">
          <h3 className="text-cyber-cyan font-orbitron text-lg mb-3">SORT BOTS</h3>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => onSortChange('')}
              className={`px-4 py-2 rounded font-orbitron text-sm transition-all ${
                !sortBy 
                  ? 'bg-cyber-green text-cyber-dark' 
                  : 'bg-cyber-darker text-cyber-cyan border border-cyber-blue hover:bg-cyber-blue'
              }`}
            >
              Default
            </button>
            {sortOptions.map(option => (
              <button
                key={option.value}
                onClick={() => onSortChange(option.value)}
                className={`px-4 py-2 rounded font-orbitron text-sm transition-all ${
                  sortBy === option.value
                    ? 'bg-cyber-green text-cyber-dark'
                    : 'bg-cyber-darker text-cyber-cyan border border-cyber-blue hover:bg-cyber-blue'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Filter Section */}
        <div className="bg-cyber-dark border-2 border-cyber-blue rounded-lg p-4">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-cyber-cyan font-orbitron text-lg">FILTER BY CLASS</h3>
            {filters.length > 0 && (
              <button
                onClick={clearFilters}
                className="text-cyber-red hover:text-cyber-yellow text-sm font-orbitron"
              >
                Clear All
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {botClasses.map(botClass => (
              <button
                key={botClass}
                onClick={() => toggleFilter(botClass)}
                className={`px-3 py-2 rounded text-sm font-orbitron transition-all border ${
                  filters.includes(botClass)
                    ? getActiveClassColor(botClass)
                    : 'bg-cyber-darker text-cyber-cyan border-cyber-blue hover:bg-cyber-blue'
                }`}
              >
                {botClass}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SortBar;