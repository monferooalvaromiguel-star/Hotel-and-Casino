import { Link } from "react-router";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { Sparkles, Bed, Dice3, Star, ArrowRight, Award, Clock, Shield } from "lucide-react";

export function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTEsIDE5MSwgMzYsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-600/10 border border-yellow-600/30 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-yellow-500" />
            <span className="text-sm text-yellow-500">Welcome to Luxury</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Royal Palace
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              Hotel & Casino
            </span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience unparalleled luxury and world-class entertainment in the heart of the city
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition-all flex items-center justify-center gap-2 group"
            >
              Book Your Stay
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/casino"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-yellow-600/30 rounded-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2"
            >
              <Dice3 className="w-5 h-5" />
              Explore Casino
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Award, title: "5-Star Service", desc: "Premium hospitality experience" },
              { icon: Clock, title: "24/7 Support", desc: "Always here to assist you" },
              { icon: Shield, title: "Secure Gaming", desc: "Licensed and regulated casino" },
            ].map((feature, idx) => (
              <div key={idx} className="bg-black/50 border border-yellow-600/20 rounded-2xl p-8 hover:border-yellow-600/40 transition-all">
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Luxurious Accommodations</h2>
            <p className="text-gray-400">Choose from our selection of premium rooms and suites</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Deluxe Room", price: 199, features: ["King Bed", "City View", "Free WiFi"] },
              { name: "Executive Suite", price: 399, features: ["2 Bedrooms", "VIP Lounge", "Casino Credits"] },
              { name: "Royal Penthouse", price: 799, features: ["Panoramic View", "Private Butler", "Jacuzzi"] },
            ].map((room, idx) => (
              <div key={idx} className="bg-gradient-to-b from-zinc-900 to-black border border-yellow-600/20 rounded-2xl overflow-hidden group hover:border-yellow-600/40 transition-all">
                <div className="h-48 bg-gradient-to-br from-yellow-600/20 to-zinc-800 flex items-center justify-center">
                  <Bed className="w-16 h-16 text-yellow-500/50" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{room.name}</h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl font-bold text-yellow-500">${room.price}</span>
                    <span className="text-gray-500">/ night</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {room.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-400">
                        <Star className="w-4 h-4 text-yellow-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/booking"
                    className="w-full px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition-all flex items-center justify-center gap-2"
                  >
                    Reserve Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Casino Preview */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Casino Entertainment</h2>
            <p className="text-gray-400">Try your luck at our world-class gaming floor</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Slots", "Poker", "Roulette"].map((game, idx) => (
              <div key={idx} className="relative h-64 bg-gradient-to-br from-yellow-600/10 to-black border border-yellow-600/30 rounded-2xl overflow-hidden group hover:border-yellow-600/60 transition-all">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Dice3 className="w-20 h-20 text-yellow-500/30 group-hover:scale-110 transition-transform" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                  <h3 className="text-2xl font-bold text-white mb-2">{game}</h3>
                  <Link to="/casino" className="text-yellow-500 hover:text-yellow-400 flex items-center gap-2">
                    Play Now <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Guest Reviews</h2>
            <p className="text-gray-400">See what our guests have to say</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Johnson", rating: 5, review: "Absolutely stunning! The service was impeccable and the casino was so much fun." },
              { name: "Michael Chen", rating: 5, review: "Best hotel experience ever. The rooms are gorgeous and the staff is amazing." },
              { name: "Emma Davis", rating: 5, review: "A perfect blend of luxury and entertainment. Will definitely come back!" },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-zinc-900 border border-yellow-600/20 rounded-2xl p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.review}"</p>
                <p className="text-yellow-500 font-bold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
