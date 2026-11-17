import React from 'react';
import { navigationItems } from '@/data/navigation';
import { Navbar } from './Navbar';

export function Header() {
  return <Navbar items={navigationItems} />;
}
