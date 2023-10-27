import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

type MissionValue = {
  icon: LucideIcon
  name: string
  description: string
}

type FAQuestion = {
  title: string
  body: string
}

type NavItem = {
  href: string
  linkText: string
}

type PriceDetail = {
  icon: ReactNode
  text: string  
}

type PackageDetails = {
  packageType: 
    'Weekly' | 'One-Time';
    
  price: number
  description: string
  details: PriceDetail[]
  isPopular?: boolean
}

export {
  MissionValue,
  FAQuestion,
  NavItem,
  PriceDetail,
  PackageDetails,
}
