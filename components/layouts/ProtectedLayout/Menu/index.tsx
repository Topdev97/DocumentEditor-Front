import { NAV_ITEMS } from '@/constants/nav';
import { FC } from 'react';
import MenuItem from './MenuItem';

interface IMenuProps {
    onCloseSidebar?: () => void;
}

const Menu: FC<IMenuProps> = (props) => {
    return (
        <nav>
            <ul>
                {NAV_ITEMS.map((item, index) => (
                    <li className='mb-6 last:mb-0' key={index}>
                        <MenuItem {...props} menuItem={item} />
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Menu;
