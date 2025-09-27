import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  HomeIcon, 
  UserGroupIcon, 
  CogIcon, 
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline'
import { 
  HomeIcon as HomeIconSolid, 
  UserGroupIcon as UserGroupIconSolid, 
  CogIcon as CogIconSolid, 
  ChatBubbleLeftRightIcon as ChatBubbleLeftRightIconSolid
} from '@heroicons/react/24/solid'

export default function MobileBottomNav() {
  const location = useLocation()

  const navItems = [
    {
      name: 'Home',
      href: '/',
      icon: HomeIcon,
      activeIcon: HomeIconSolid,
      current: location.pathname === '/'
    },
    {
      name: 'About',
      href: '/about',
      icon: UserGroupIcon,
      activeIcon: UserGroupIconSolid,
      current: location.pathname === '/about'
    },
    {
      name: 'Services',
      href: '/services',
      icon: CogIcon,
      activeIcon: CogIconSolid,
      current: location.pathname === '/services'
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: ChatBubbleLeftRightIcon,
      activeIcon: ChatBubbleLeftRightIconSolid,
      current: location.pathname === '/contact'
    }
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden mobile-bottom-nav">
      <div className="bg-black/95 backdrop-blur-md border-t border-white/10 shadow-lg">
        <div className="grid grid-cols-4 h-16">
          {navItems.map((item) => {
            const Icon = item.current ? item.activeIcon : item.icon
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`mobile-nav-item flex flex-col items-center justify-center space-y-1 relative transition-all duration-200 ${
                  item.current 
                    ? 'active text-yellow-400' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Icon className={`h-5 w-5 transition-all duration-200 ${
                  item.current ? 'scale-110' : 'scale-100'
                }`} />
                <span className={`text-xs font-medium transition-all duration-200 ${
                  item.current ? 'text-yellow-400' : 'text-gray-400'
                }`}>{item.name}</span>
                {item.current && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-yellow-400 rounded-full" />
                )}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
