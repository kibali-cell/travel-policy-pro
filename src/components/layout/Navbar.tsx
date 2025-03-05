
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { ChevronDown, Bell, Search, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const mainNavItems = [
  { name: 'Dashboard', href: '/' },
  { 
    name: 'Book Trip', 
    href: '/book-trip',
    submenu: [
      { name: 'Flights', href: '/book-trip/flights' },
      { name: 'Hotels', href: '/book-trip/hotels' },
      { name: 'Cars', href: '/book-trip/cars' }
    ]
  },
  { name: 'Trips & Expenses', href: '/trips-expenses' },
  { name: 'Analytics', href: '/analytics' },
  { name: 'Company', href: '/company' }
];

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/90 border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="font-semibold text-xl">TravelPolicyPro</Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {mainNavItems.map((item) => {
              const active = isActive(item.href);
              
              if (item.submenu) {
                return (
                  <DropdownMenu key={item.name}>
                    <DropdownMenuTrigger asChild>
                      <Button 
                        variant="ghost" 
                        className={cn(
                          "nav-link flex items-center gap-1", 
                          active && "nav-link-active"
                        )}
                      >
                        {item.name}
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="bg-card w-48">
                      <DropdownMenuLabel>{item.name}</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      {item.submenu.map((subItem) => (
                        <DropdownMenuItem key={subItem.name} asChild>
                          <Link 
                            to={subItem.href} 
                            className={cn(
                              "w-full cursor-pointer",
                              isActive(subItem.href) && "font-medium"
                            )}
                          >
                            {subItem.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }
              
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "nav-link",
                    active && "nav-link-active"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
        
        {/* Right side nav items */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-[1.2rem] w-[1.2rem]" />
          </Button>
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Bell className="h-[1.2rem] w-[1.2rem]" />
          </Button>
          
          {/* User menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-9 w-9">
                  <AvatarImage src="" alt="User" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">John Doe</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    john.doe@example.com
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          {/* Mobile menu toggle */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden p-4 pb-6 border-b">
          <nav className="grid gap-2">
            {mainNavItems.map((item) => {
              const active = isActive(item.href);
              
              return (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className={cn(
                      "flex items-center py-2 text-base font-medium",
                      active && "text-primary"
                    )}
                    onClick={() => {
                      if (!item.submenu) setIsMobileMenuOpen(false);
                    }}
                  >
                    {item.name}
                  </Link>
                  
                  {item.submenu && (
                    <div className="grid gap-1 pl-4 mt-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className={cn(
                            "py-1 text-sm",
                            isActive(subItem.href) ? "font-medium text-primary" : "text-muted-foreground"
                          )}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
