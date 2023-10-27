import { ArrowUp, LockIcon, ArrowBigDownDash, LucideIcon } from "lucide-react";
import type { MissionValue } from '@/types';


export const MISSION_VALUES: MissionValue[]  = [
  {
    name: 'Convenient',
    description:
      'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
    icon: ArrowUp,
  },
  {
    name: 'Afforable',
    description:
      'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    icon: LockIcon,
  },
  {
    name: 'Relationship',
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    icon: ArrowBigDownDash,
  },
];