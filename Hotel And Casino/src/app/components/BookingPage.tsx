import { useState } from "react";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { Bed, Users, Calendar, DollarSign, Star, Wifi, Tv, Coffee, CheckCircle } from "lucide-react";

export function BookingPage() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);
  const [selectedRoom, setSelectedRoom] = useState<number | null>(null);

  const rooms = [
    {
      id: 1,
      name: "Deluxe Room",
      price: 199,
      image: "deluxe",
      features: ["King Bed", "City View", "Free WiFi", "Smart TV"],
      amenities: [Wifi, Tv, Coffee],
      maxGuests: 2,
    },
    {
      id: 2,
      name: "Executive Suite",
      price: 399,
      image: "executive",
      features: ["2 Bedrooms", "VIP Lounge Access", "Casino Credits", "Mini Bar"],
      amenities: [Wifi, Tv, Coffee],
      maxGuests: 4,
    },
    {
      id: 3,
      name: "Royal Penthouse",
      price: 799,
      image: "penthouse",
      features: ["Panoramic View", "Private Butler", "Jacuzzi", "Dining Room"],
      amenities: [Wifi, Tv, Coffee],
      maxGuests: 6,
    },
    {
      id: 4,
      name: "Premium Suite",
      price: 299,
      image: "premium",
      features: ["Ocean View", "Balcony", "Premium Bedding", "Work Desk"],
      amenities: [Wifi, Tv, Coffee],
      maxGuests: 3,
    },
    {
      id: 5,
      name: "Luxury Villa",
      price: 999,
      image: "villa",
      features: ["Private Pool", "Garden", "Chef Service", "3 Bedrooms"],
      amenities: [Wifi, Tv, Coffee],
      maxGuests: 8,
    },
    {
      id: 6,
      name: "Family Room",
      price: 249,
      image: "family",
      features: ["2 Queen Beds", "Kids Area", "Game Console", "Kitchenette"],
      amenities: [Wifi, Tv, Coffee],
      maxGuests: 5,
    },
  ];

  const calculateTotal = () => {
    if (!selectedRoom || !checkIn || !checkOut) return 0;
    const room = rooms.find((r) => r.id === selectedRoom);
    if (!room) return 0;

    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const nights = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));

    return nights > 0 ? room.price * nights : 0;
  };

  const handleReserve = (roomId: number) => {
    setSelectedRoom(roomId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-2">Book Your Stay</h1>
          <p className="text-gray-400 mb-8">Choose from our luxurious accommodations</p>

          {/* Booking Form */}
          <div className="bg-zinc-900 border border-yellow-600/20 rounded-2xl p-6 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm text-gray-300 mb-2">Check-in Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 bg-black/50 border border-yellow-600/30 rounded-lg text-white focus:outline-none focus:border-yellow-600/60 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-2">Check-out Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 bg-black/50 border border-yellow-600/30 rounded-lg text-white focus:outline-none focus:border-yellow-600/60 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-2">Guests</label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <select
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full pl-11 pr-4 py-3 bg-black/50 border border-yellow-600/30 rounded-lg text-white focus:outline-none focus:border-yellow-600/60 transition-colors appearance-none"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? "Guest" : "Guests"}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex items-end">
                <button className="w-full px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition-all">
                  Search Rooms
                </button>
              </div>
            </div>
          </div>

          {/* Payment Summary (if room selected) */}
          {selectedRoom && checkIn && checkOut && (
            <div className="bg-gradient-to-br from-yellow-600/20 to-zinc-900 border border-yellow-600/30 rounded-2xl p-6 mb-12">
              <h3 className="text-xl font-bold text-white mb-4">Booking Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-gray-300">
                  <span>Room:</span>
                  <span className="text-white font-bold">
                    {rooms.find((r) => r.id === selectedRoom)?.name}
                  </span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Check-in:</span>
                  <span className="text-white">{new Date(checkIn).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Check-out:</span>
                  <span className="text-white">{new Date(checkOut).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Guests:</span>
                  <span className="text-white">{guests}</span>
                </div>
                <div className="border-t border-yellow-600/30 pt-3 flex justify-between">
                  <span className="text-xl font-bold text-white">Total:</span>
                  <span className="text-2xl font-bold text-yellow-500">${calculateTotal()}</span>
                </div>
                <button className="w-full px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition-all flex items-center justify-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Confirm Booking
                </button>
              </div>
            </div>
          )}

          {/* Room Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <div
                key={room.id}
                className={`bg-zinc-900 border rounded-2xl overflow-hidden hover:border-yellow-600/40 transition-all ${
                  selectedRoom === room.id ? "border-yellow-600/60" : "border-yellow-600/20"
                }`}
              >
                <div className="h-48 bg-gradient-to-br from-yellow-600/20 to-zinc-800 flex items-center justify-center relative">
                  <Bed className="w-16 h-16 text-yellow-500/50" />
                  {selectedRoom === room.id && (
                    <div className="absolute top-3 right-3 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-black" />
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{room.name}</h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-2xl font-bold text-yellow-500">${room.price}</span>
                    <span className="text-gray-500">/ night</span>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <Users className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-400">Up to {room.maxGuests} guests</span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {room.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
                        <Star className="w-4 h-4 text-yellow-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-3 mb-4">
                    {room.amenities.map((Icon, i) => (
                      <div
                        key={i}
                        className="w-10 h-10 bg-yellow-600/10 rounded-lg flex items-center justify-center"
                      >
                        <Icon className="w-5 h-5 text-yellow-500" />
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => handleReserve(room.id)}
                    className={`w-full px-6 py-3 rounded-lg transition-all ${
                      selectedRoom === room.id
                        ? "bg-yellow-600 text-black"
                        : "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black hover:from-yellow-600 hover:to-yellow-700"
                    }`}
                  >
                    {selectedRoom === room.id ? "Selected" : "Reserve Now"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
