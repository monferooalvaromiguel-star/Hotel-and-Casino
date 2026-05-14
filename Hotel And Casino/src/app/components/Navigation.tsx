import { Link, useLocation } from "react-router";
import { Hotel, Dice3, CalendarCheck, LogIn, UserPlus, LayoutDashboard } from "lucide-react";

export function Navigation() {
  const location = useLocation();
  const isLoggedIn = localStorage.getItem("user");

  const navLinks = [
    { to: "/", label: "Home", icon: Hotel },
    { to: "/booking", label: "Rooms", icon: CalendarCheck },
    { to: "/casino", label: "Casino", icon: Dice3 },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-yellow-600/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-lg flex items-center justify-center">
              <Hotel className="w-7 h-7 text-black" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-yellow-500">Royal Palace</span>
              <span className="text-xs text-yellow-600">Hotel & Casino</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ to, label, icon: Icon }) => (
              <Link
                key={to}
                to={to}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  location.pathname === to
                    ? "text-yellow-500 bg-yellow-500/10"
                    : "text-white hover:text-yellow-500"
                }`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {isLoggedIn ? (
              <Link
                to="/dashboard"
                className="px-6 py-2.5 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition-all flex items-center gap-2"
              >
                <LayoutDashboard className="w-4 h-4" />
                Dashboard
              </Link>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-6 py-2.5 text-white border border-yellow-600 rounded-lg hover:bg-yellow-600/10 transition-all flex items-center gap-2"
                >
                  <LogIn className="w-4 h-4" />
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-6 py-2.5 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition-all flex items-center gap-2"
                >
                  <UserPlus className="w-4 h-4" />
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
