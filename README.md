## README.md

# BOT BATTLR

<div align="center">

![Cyberpunk Theme](https://img.shields.io/badge/Theme-Cyberpunk-00ff41?style=for-the-badge&logo=react&logoColor=white)
![React](https://img.shields.io/badge/React-18.2.0-00d8ff?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-4.4.5-646cff?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-3.3.0-38b2ac?style=for-the-badge&logo=tailwind-css&logoColor=white)

**Build Your Ultimate Cybernetic Army**

*A React-based robotic recruitment simulator where you assemble the perfect bot squad for epic battles*

[![Live Demo](https://img.shields.io/badge/Build_Your_Army-8a2be2?style=for-the-badge)](https://pyrxallan.github.io/Bot-Battlr-Code-Challenge)

*"Click the button above to build your army"*

</div>


## Features

### Core Functionality
- **Bot Collection** - Browse through a diverse roster of specialized bots
- **Army Building** - Enlist bots to form your ultimate combat team
- **Detailed Specs** - View comprehensive bot statistics and abilities
- **Class-Based Strategy** - One bot per class for balanced team composition

### Advanced Features
- **Smart Filtering** - Filter bots by class (Support, Medic, Assault, Defender, Captain, Witch)
- **Performance Sorting** - Sort bots by Health, Damage, or Armor ratings
- **Interactive Preview** - Click any bot to view detailed specifications
- **Management Tools** - Release or permanently discharge bots from your army

### User Experience
- **Cyberpunk Theme** - Immersive dark interface with neon accents
- **Responsive Design** - Optimized for desktop and mobile devices
- **Real-time Updates** - Instant feedback on all interactions
- **Intuitive Controls** - Simple click-based bot management

## Installation & Setup

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager
- JSON server for backend data

### Local Development
```bash
# Clone the repository
git clone https://github.com/your-username/bot-battlr.git

# Navigate to project directory
cd bot-battlr

# Install dependencies
npm install

# Start the JSON server (in a separate terminal)
npm run server

# Start the development server
npm run dev
```

## Bot Classes

| Class | Role | Specialty | Color Theme |
|-------|------|-----------|-------------|
| **Assault** | Frontline Fighter | High Damage | 🔴 Red |
| **Defender** | Tank | Maximum Armor | 🔵 Blue |
| **Support** | Technician | Team Buffs | 🟢 Green |
| **Medic** | Healer | Health Recovery | 🔷 Cyan |
| **Witch** | Specialist | Special Abilities | 🟣 Purple |
| **Captain** | Leader | Balanced Stats | 🟡 Yellow |


## echnology Stack

### Frontend
- **React 18** - Modern component-based UI framework
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Custom Cyberpunk Theme** - Neon color scheme and futuristic design

### Backend
- **JSON Server** - Mock REST API for development
- **RESTful Architecture** - Clean API design

### Development Tools
- **ES6+ JavaScript** - Modern JavaScript features
- **Git** - Version control
- **GitHub Pages** - Deployment platform

## Component Overview

### BotCard
- Displays individual bot information
- Handles click interactions for details and releases
- Shows bot class, stats, and avatar

### BotCollection
- Renders the complete roster of available bots
- Integrates bot specs modal view
- Handles bot selection for detailed viewing

### YourBotArmy
- Manages the user's selected bot team
- Provides release and discharge functionality
- Tracks army completion status

### SortBar
- Combined sorting and filtering interface
- Enables class-based filtering
- Supports stat-based sorting


## Core Features Implementation

### State Management
```javascript
{
  bots: [],        
  army: [],        
  selectedBot: null,
  sortBy: '',      
  filters: []      
}
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.


## Acknowledgments

- **React Team** - For the amazing framework
- **Vite Team** - For the fast build tool
- **Tailwind CSS** - For the utility-first CSS approach
- **JSON Server** - For the easy backend mock solution
- **Cyberpunk Inspiration** - For the awesome thematic direction


<div align="center">

### **Ready to build your ultimate bot army?**

Deployed with github pages at : [![Get Started](https://img.shields.io/badge/🚀-Get_Started-00ff41?style=for-the-badge&logo=rocket&logoColor=white)](https://pyrxallan.github.io/bot-battlr)

*"The future of warfare is here. Command your bots wisely."*

</div>
