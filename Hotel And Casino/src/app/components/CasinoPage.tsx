import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { Dice3, Dice4, Dice5, Spade, Heart, Crown, Zap } from "lucide-react";

export function CasinoPage() {

  const slotGames = [
    { name: "Lucky 777", minBet: 5, jackpot: 10000 },
    { name: "Diamond Rush", minBet: 10, jackpot: 25000 },
    { name: "Gold Fortune", minBet: 5, jackpot: 15000 },
    { name: "Royal Spin", minBet: 20, jackpot: 50000 },
    { name: "Mega Jackpot", minBet: 25, jackpot: 100000 },
    { name: "Wild Safari", minBet: 5, jackpot: 12000 },
  ];

  const tableGames = [
    { name: "Texas Hold'em", minBet: 25, players: "2-9" },
    { name: "Blackjack", minBet: 10, players: "1-7" },
    { name: "Roulette", minBet: 5, players: "Any" },
    { name: "Baccarat", minBet: 50, players: "1-14" },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                Casino Floor
              </span>
            </h1>
            <p className="text-xl text-gray-400">Experience world-class gaming entertainment</p>
          </div>

          {/* VIP Promo Banner */}
          <div className="bg-gradient-to-br from-purple-900/50 to-zinc-900 border border-purple-500/30 rounded-2xl p-8 mb-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyMTYsIDE4MCwgMjU0LCAwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>
            <div className="relative z-10 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Crown className="w-6 h-6 text-purple-400" />
                  <span className="text-purple-400 font-bold">VIP EXCLUSIVE</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Join the VIP Club</h3>
                <p className="text-gray-300">Unlock exclusive games, higher limits, and premium rewards</p>
              </div>
              <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all">
                Upgrade Now
              </button>
            </div>
          </div>

          {/* Slot Machines */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Zap className="w-6 h-6 text-yellow-500" />
              <h2 className="text-3xl font-bold text-white">Slot Machines</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {slotGames.map((game, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-b from-zinc-900 to-black border border-yellow-600/20 rounded-2xl p-6 hover:border-yellow-600/40 transition-all group"
                >
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Dice3 className="w-8 h-8 text-yellow-500 group-hover:rotate-12 transition-transform" />
                    <Dice4 className="w-8 h-8 text-yellow-500 group-hover:rotate-12 transition-transform delay-75" />
                    <Dice5 className="w-8 h-8 text-yellow-500 group-hover:rotate-12 transition-transform delay-150" />
                  </div>
                  <h3 className="text-xl font-bold text-white text-center mb-2">{game.name}</h3>
                  <div className="bg-yellow-600/10 rounded-lg p-3 mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Jackpot:</span>
                      <span className="text-yellow-500 font-bold">${game.jackpot.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Min Bet:</span>
                      <span className="text-white">${game.minBet}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Table Games */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Spade className="w-6 h-6 text-yellow-500" />
              <h2 className="text-3xl font-bold text-white">Table Games</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tableGames.map((game, idx) => (
                <div
                  key={idx}
                  className="bg-zinc-900 border border-yellow-600/20 rounded-2xl p-6 hover:border-yellow-600/40 transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{game.name}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span>Min Bet: ${game.minBet}</span>
                        <span>Players: {game.players}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-10 h-14 bg-gradient-to-b from-red-600 to-red-700 rounded-lg flex items-center justify-center">
                        <Heart className="w-5 h-5 text-white" />
                      </div>
                      <div className="w-10 h-14 bg-gradient-to-b from-gray-800 to-black rounded-lg flex items-center justify-center border border-white/20">
                        <Spade className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
