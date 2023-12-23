import { FlexProps } from "antd";
import { ImageProps } from "next/image";



export const getSidebarLogoContainerProps = ({ collapsed }: { collapsed: boolean }): Omit<FlexProps, 'children'> => ({
  style: {
    padding: collapsed ? 16 : 0,
    paddingRight: 0,
    paddingLeft: 0,
  }
})

export const getSidebarLogoProps = ({ collapsed }: { collapsed: boolean }): Omit<ImageProps, 'src' | 'alt'> => ({
  width: collapsed ? 32 : 64,
  height: collapsed ? 32 : 64,
})