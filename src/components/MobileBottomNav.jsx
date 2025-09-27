import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  HomeIcon, 
  UserGroupIcon, 
  CogIcon, 
  ChatBubbleLeftRightIcon,
  Bars3Icon
} from '@heroicons/react/24/outline'
import { 
  HomeIcon as HomeIconSolid, 
  UserGroupIcon as UserGroupIconSolid, 
  CogIcon as CogIconSolid, 
  ChatBubbleLeftRightIcon as ChatBubbleLeftRightIconSolid
} from '@heroicons/react/24/solid'

export default function MobileBottomNav() {
  const location = useLocation()

  const scrollToSection = (sectionId) => {
    if (location.pathname === '/') {
      // If we're on the home page, scroll to the section
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // If we're on a different page, navigate to home and then scroll
      window.location.href = `/#${sectionId}`
    }
  }

  const handleNavClick = (e, sectionId) => {
    e.preventDefault()
    scrollToSection(sectionId)
  }

  const navItems = [
    {
      name: 'Home',
      href: '/',
      icon: HomeIcon,
      activeIcon: HomeIconSolid,
      current: location.pathname === '/',
      isLink: true
    },
    {
      name: 'About',
      href: '#about',
      icon: UserGroupIcon,
      activeIcon: UserGroupIconSolid,
      current: location.pathname === '/' && window.location.hash === '#about',
      isLink: false,
      sectionId: 'about'
    },
    {
      name: 'Services',
      href: '#services',
      icon: CogIcon,
      activeIcon: CogIconSolid,
      current: location.pathname === '/' && window.location.hash === '#services',
      isLink: false,
      sectionId: 'services'
    },
    {
      name: 'Contact',
      href: '#contact',
      icon: ChatBubbleLeftRightIcon,
      activeIcon: ChatBubbleLeftRightIconSolid,
      current: location.pathname === '/' && window.location.hash === '#contact',
      isLink: false,
      sectionId: 'contact'
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
                className={`mobile-nav-item flex flex-col items-center justify-center space-y-1 ${
                  item.current 
                    ? 'active text-yellow-400' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="text-xs font-medium">{item.name}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
