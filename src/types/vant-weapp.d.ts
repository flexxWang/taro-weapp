declare module '@vant/weapp' {
  export interface SearchProps {
    value?: string
    placeholder?: string
    shape?: string
    background?: string
  }
  export const Search: React.ComponentType<SearchProps>

  export interface SwiperProps {
    autoplay?: boolean
  }
  export const Swiper: React.ComponentType<SwiperProps>
  export const SwiperItem: React.ComponentType

  export interface ImageProps {
    round?: boolean
    width?: string
    height?: string
    src?: string
  }
  export const Image: React.ComponentType<ImageProps>

  export interface ButtonProps {
    size?: string
    type?: string
  }
  export const Button: React.ComponentType<ButtonProps>

  export interface IconProps {
    name?: string
  }
  export const Icon: React.ComponentType<IconProps>

  export interface TabbarProps {
    activeColor?: string
  }
  export const Tabbar: React.ComponentType<TabbarProps>

  export interface TabbarItemProps {
    icon?: string
  }
  export const TabbarItem: React.ComponentType<TabbarItemProps>
}