import { ReactNode } from 'react';

export interface IMenuItem {
  icon: string;
  activeIcon: string;
  brandImg: string;
  label: ReactNode;
  href: string;
  children?: IMenuItem[];
}
