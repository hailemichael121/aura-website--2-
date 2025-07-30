import Link from "next/link"
import { Instagram, MessageCircle, Linkedin, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#00B089] to-[#3284FC] rounded-lg flex items-center justify-center">
                <div className="text-white font-bold text-lg">A</div>
              </div>
              <div>
                <div className="font-bold text-xl text-[#00B089]">AURA</div>
                <div className="text-sm text-gray-400">Alliance for Understanding Recovery & Awareness</div>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Mental wellness is a right, not a luxury. We foster open conversations and accessible support for all
              Ethiopians.
            </p>
            <div className="bg-gradient-to-r from-[#00B089] to-[#3284FC] p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Safe Space Pledge</h4>
              <p className="text-sm">
                We commit to zero judgment. Your voice matters here. This is a space for healing, growth, and authentic
                connection.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#00B089] transition-colors">
                  About AURA
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-gray-300 hover:text-[#00B089] transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-300 hover:text-[#00B089] transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/forum" className="text-gray-300 hover:text-[#00B089] transition-colors">
                  Community Forum
                </Link>
              </li>
              <li>
                <Link href="/get-involved" className="text-gray-300 hover:text-[#00B089] transition-colors">
                  Get Involved
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-[#00B089]" />
                <span className="text-gray-300 text-sm">Bole, Addis Ababa, Ethiopia</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#00B089]" />
                <span className="text-gray-300 text-sm">hello@auraethiopia.org</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-4 h-4 text-[#00B089]" />
                <span className="text-gray-300 text-sm">@AURA_MHP</span>
              </div>
            </div>

            {/* Team Contacts */}
            <div className="mt-6">
              <h4 className="font-medium mb-2">Team</h4>
              <div className="space-y-1 text-sm text-gray-300">
                <div>Rediet Feleke - @red8_fe</div>
                <div>Simret G. Dessie - @lunashine12</div>
                <div>Messeret Gossa - @mesigosa</div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a
              href="https://www.instagram.com/red8_fe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#00B089] transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://t.me/AURA_MHP"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#00B089] transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#00B089] transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} AURA - Alliance for Understanding Recovery & Awareness. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

// Named export for compatibility
export { Footer }
