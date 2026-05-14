import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router";
import { Hotel, LogOut, User, Calendar, Coins, Award, Settings, CreditCard } from "lucide-react";

export function DashboardPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (!userData) {
      navigate("/login");
    } else {
      setUser(JSON.parse(userData));
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  if (!user) return null;

  const bookingHistory = [
    { id: "BK-2024-001", room: "Deluxe Room", date: "May 20-22, 2026", status: "Upcoming", amount: "$398" },
    { id: "BK-2024-002", room: "Executive Suite", date: "Apr 15-18, 2026", status: "Completed", amount: "$1,197" },
    { id: "BK-2024-003", room: "Royal Penthouse", date: "Mar 10-12, 2026", status: "Completed", amount: "$1,598" },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 bottom-0 w-64 bg-zinc-900 border-r border-yellow-600/20 p-6">
        <Link to="/" className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-lg flex items-center justify-center">
            <Hotel className="w-6 h-6 text-black" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-yellow-500">Royal Palace</span>
            <span className="text-xs text-yellow-600">Dashboard</span>
          </div>
        </Link>

        <nav className="space-y-2">
          <a href="#" className="flex items-center gap-3 px-4 py-3 bg-yellow-600/10 text-yellow-500 rounded-lg">
            <User className="w-5 h-5" />
            Profile
          </a>
          <Link to="/booking" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
            <Calendar className="w-5 h-5" />
            Bookings
          </Link>
          <Link to="/casino" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
            <Coins className="w-5 h-5" />
            Casino
          </Link>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
            <Award className="w-5 h-5" />
            Rewards
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
            <Settings className="w-5 h-5" />
            Settings
          </a>
        </nav>

        <button
          onClick={handleLogout}
          className="absolute bottom-6 left-6 right-6 flex items-center justify-center gap-2 px-4 py-3 bg-red-600/10 text-red-500 border border-red-600/30 rounded-lg hover:bg-red-600/20 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="ml-64 p-8">
        <div className="max-w-6xl">
          <h1 className="text-3xl font-bold text-white mb-2">Welcome back, {user.name}!</h1>
          <p className="text-gray-400 mb-8">Here's your account overview</p>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-yellow-600/20 to-zinc-900 border border-yellow-600/30 rounded-2xl p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-yellow-600/20 rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Total Bookings</p>
                  <p className="text-2xl font-bold text-white">12</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-600/20 to-zinc-900 border border-yellow-600/30 rounded-2xl p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-yellow-600/20 rounded-xl flex items-center justify-center">
                  <Coins className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Casino Balance</p>
                  <p className="text-2xl font-bold text-white">$2,450</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-600/20 to-zinc-900 border border-yellow-600/30 rounded-2xl p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-yellow-600/20 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Reward Points</p>
                  <p className="text-2xl font-bold text-white">8,750</p>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Card */}
          <div className="bg-zinc-900 border border-yellow-600/20 rounded-2xl p-6 mb-8">
            <h2 className="text-xl font-bold text-white mb-4">Profile Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-400 mb-1">Full Name</p>
                <p className="text-white">{user.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Email</p>
                <p className="text-white">{user.email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Member Since</p>
                <p className="text-white">January 2026</p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">VIP Status</p>
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-600/20 text-yellow-500 rounded-full text-sm">
                  <Award className="w-4 h-4" />
                  Gold Member
                </span>
              </div>
            </div>
          </div>

          {/* Booking History */}
          <div className="bg-zinc-900 border border-yellow-600/20 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white">Booking History</h2>
              <Link to="/booking" className="text-yellow-500 hover:text-yellow-400">
                View All
              </Link>
            </div>
            <div className="space-y-4">
              {bookingHistory.map((booking) => (
                <div key={booking.id} className="bg-black/50 border border-yellow-600/20 rounded-xl p-4 hover:border-yellow-600/40 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-yellow-600/10 rounded-lg flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-yellow-500" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white">{booking.room}</h3>
                        <p className="text-sm text-gray-400">{booking.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-white">{booking.amount}</p>
                      <span className={`text-sm ${booking.status === 'Upcoming' ? 'text-yellow-500' : 'text-green-500'}`}>
                        {booking.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
