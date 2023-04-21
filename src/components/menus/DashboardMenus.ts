import { AiOutlineClockCircle } from 'react-icons/ai'
import { routes } from "@/config/router.config"

export const TopMenus = [
  {
    defaultSelectedKey: '1',
    defaultOpenKey: 'sub1',
    icon: AiOutlineClockCircle,
    name: 'Treatment',
    url: routes.dashboard.url,
  },
  {
    defaultSelectedKey: '3',
    defaultOpenKey: 'sub1',
    icon: AiOutlineClockCircle,
    name: 'Doctors',
    url: routes.dashboard.url,
  },
  {
    defaultSelectedKey: '2',
    defaultOpenKey: 'sub1',
    icon: AiOutlineClockCircle,
    name: 'Prescriptions',
    url: routes.dashboard.url,
  }
]
