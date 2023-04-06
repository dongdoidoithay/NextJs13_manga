import { GlobalNav } from '@/ui/global-nav';
import React from 'react';

export default function Template({ children }: { children: React.ReactNode }) {
  return ( 
  <>
  <GlobalNav />
  <div className="lg:pl-60 ">
    {children}
  </div>
  </>
  )
}
