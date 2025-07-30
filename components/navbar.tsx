"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Menu,
  ChevronDown,
  Home,
  Users,
  BookOpen,
  MessageSquare,
  Calendar,
  Phone,
  UserPlus,
} from "lucide-react";
import { ThemeSwitcher } from "./theme-switcher";
import { LanguageSwitcher } from "./language-switcher";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  {
    name: "About",
    href: "/about",
    icon: Users,
    dropdown: [
      { name: "Our Story", href: "/about" },
      { name: "Team", href: "/about#team" },
      { name: "Founders", href: "/founders" },
    ],
  },
  {
    name: "Get Help",
    href: "/get-help",
    icon: BookOpen,
    dropdown: [
      { name: "Self-Help Tools", href: "/get-help" },
      { name: "Resources", href: "/resources" },
      { name: "Crisis Support", href: "/get-help#crisis" },
    ],
  },
  {
    name: "Community",
    href: "/forum",
    icon: MessageSquare,
    dropdown: [
      { name: "Forum", href: "/forum" },
      { name: "Stories", href: "/stories" },
      { name: "Confessions", href: "/confessions" },
    ],
  },
  {
    name: "Programs",
    href: "/programs",
    icon: Calendar,
    dropdown: [
      { name: "All Programs", href: "/programs" },
      { name: "Register", href: "/programs/register" },
      { name: "Family Time", href: "/programs/family-time" },
    ],
  },
  { name: "Contact", href: "/contact", icon: Phone },
  { name: "Get Involved", href: "/get-involved", icon: UserPlus },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/images/aura-logo.jpg"
                alt="AURA Logo"
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <span className="font-bold text-xl text-gray-900 dark:text-white transition-colors duration-300">
              AURA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 ${
                          isActive(item.href)
                            ? "text-[#00B089] dark:text-[#4ADE80] bg-[#00B089]/10 dark:bg-[#4ADE80]/10"
                            : "text-gray-700 dark:text-gray-300"
                        }`}
                      >
                        <item.icon className="w-4 h-4" />
                        <span className="font-medium">{item.name}</span>
                        <ChevronDown className="w-4 h-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                      {item.dropdown.map((subItem) => (
                        <DropdownMenuItem key={subItem.name} asChild>
                          <Link
                            href={subItem.href}
                            className="flex items-center px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                          >
                            {subItem.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link href={item.href}>
                    <Button
                      variant="ghost"
                      className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 ${
                        isActive(item.href)
                          ? "text-[#00B089] dark:text-[#4ADE80] bg-[#00B089]/10 dark:bg-[#4ADE80]/10"
                          : "text-gray-700 dark:text-gray-300"
                      }`}
                    >
                      <item.icon className="w-4 h-4" />
                      <span className="font-medium">{item.name}</span>
                    </Button>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Theme and Language Switchers */}
          <div className="hidden lg:flex items-center space-x-2">
            <ThemeSwitcher />
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-700 dark:text-gray-300"
                >
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-80 bg-white dark:bg-gray-900"
              >
                <div className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      <Link href={item.href}>
                        <Button
                          variant="ghost"
                          className={`w-full justify-start space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                            isActive(item.href)
                              ? "text-[#00B089] dark:text-[#4ADE80] bg-[#00B089]/10 dark:bg-[#4ADE80]/10"
                              : "text-gray-700 dark:text-gray-300"
                          }`}
                        >
                          <item.icon className="w-5 h-5" />
                          <span className="font-medium">{item.name}</span>
                        </Button>
                      </Link>
                      {item.dropdown && (
                        <div className="ml-8 mt-2 space-y-1">
                          {item.dropdown.map((subItem) => (
                            <Link key={subItem.name} href={subItem.href}>
                              <Button
                                variant="ghost"
                                className="w-full justify-start px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-[#00B089] dark:hover:text-[#4ADE80]"
                              >
                                {subItem.name}
                              </Button>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  <div className="flex items-center space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <ThemeSwitcher />
                    <LanguageSwitcher />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
