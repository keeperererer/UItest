import React, { FC } from 'react';
export interface MenuItemProps {
    index?: string;
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
}
declare const MenuItem: FC<MenuItemProps>;
export default MenuItem;
