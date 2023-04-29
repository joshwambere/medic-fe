import { AiOutlineClockCircle } from 'react-icons/ai'
import { routes } from "@/config/router.config"

export const TopMenus = [
  {
    defaultSelectedKey: '2',
    defaultOpenKey: 'sub1',
    icon: AiOutlineClockCircle,
    name: 'Treatment',
    url: routes.dashboard.url,
    role: 'PATIENT'
  },
  {
    defaultSelectedKey: '1',
    defaultOpenKey: 'sub2',
    icon: AiOutlineClockCircle,
    name: 'Doctors',
    url: routes.doctor.url,
    role: 'PATIENT'
  },
  {
    defaultSelectedKey: '3',
    defaultOpenKey: 'sub2',
    icon: AiOutlineClockCircle,
    name: 'Pharmacists',
    url: routes.prescriptions.url,
    role: 'PATIENT'
  },
  {
    defaultSelectedKey: '3',
    defaultOpenKey: 'sub2',
    icon: AiOutlineClockCircle,
    name: 'Patients',
    url: routes.patient.url,
    role: 'PHARMACIST PHYSICIAN'
  }
]
