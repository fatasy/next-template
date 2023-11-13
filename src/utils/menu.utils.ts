

import { MenuItemType } from "antd/lib/menu/hooks/useItems";
import clsx from 'clsx';



export function getItemsWithDefaultClass(items: MenuItemType[], defaultClassName: string) {
  return items.map(({ className, ...item }) => ({ ...item, className: clsx(className, defaultClassName) }));
}