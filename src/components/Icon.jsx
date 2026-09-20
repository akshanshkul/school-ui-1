import {
  BookOpen,
  Bus,
  Clock,
  Compass,
  Droplets,
  GraduationCap,
  HeartHandshake,
  Languages,
  Monitor,
  Star,
  Trophy,
  UserCheck,
  Users,
  Utensils,
  Zap,
} from 'lucide-react';

const icons = {
  BookOpen,
  Bus,
  Clock,
  Compass,
  Droplets,
  GraduationCap,
  HeartHandshake,
  Languages,
  Monitor,
  Star,
  Trophy,
  UserCheck,
  Users,
  Utensils,
  Zap,
};

/** Renders a lucide icon by name (names come from src/data/site.js). */
export default function Icon({ name, ...props }) {
  const Component = icons[name] ?? BookOpen;
  return <Component aria-hidden="true" {...props} />;
}
