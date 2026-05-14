import { Hotel, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black to-zinc-900 border-t border-yellow-600/20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-lg flex items-center justify-center">
                <Hotel className="w-6 h-6 text-black" />
              </div>
              <div>
                <div className="font-bold text-yellow-500">Royal Palace</div>
                <div className="text-xs text-yellow-600">Hotel & Casino</div>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Experience luxury and entertainment at its finest.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-yellow-500 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/" className="hover:text-yellow-500 transition-colors">Home</a></li>
              <li><a href="/booking" className="hover:text-yellow-500 transition-colors">Rooms</a></li>
              <li><a href="/casino" className="hover:text-yellow-500 transition-colors">Casino</a></li>
              <li><a href="/dashboard" className="hover:text-yellow-500 transition-colors">My Account</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-yellow-500 mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-yellow-600 mt-0.5" />
                <span>1234 Casino Blvd, Las Vegas, NV 89109</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-yellow-600" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-yellow-600" />
                <span>info@royalpalace.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-yellow-500 mb-4">Follow Us</h3>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-yellow-600/10 hover:bg-yellow-600/20 rounded-lg flex items-center justify-center transition-all">
                <Facebook className="w-5 h-5 text-yellow-500" />
              </a>
              <a href="#" className="w-10 h-10 bg-yellow-600/10 hover:bg-yellow-600/20 rounded-lg flex items-center justify-center transition-all">
                <Twitter className="w-5 h-5 text-yellow-500" />
              </a>
              <a href="#" className="w-10 h-10 bg-yellow-600/10 hover:bg-yellow-600/20 rounded-lg flex items-center justify-center transition-all">
                <Instagram className="w-5 h-5 text-yellow-500" />
              </a>
              <a href="#" className="w-10 h-10 bg-yellow-600/10 hover:bg-yellow-600/20 rounded-lg flex items-center justify-center transition-all">
                <Youtube className="w-5 h-5 text-yellow-500" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-yellow-600/20 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>&copy; 2026 Royal Palace Hotel & Casino. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
