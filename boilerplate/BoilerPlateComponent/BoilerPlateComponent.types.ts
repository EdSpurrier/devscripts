import { ReactNode } from 'react'

export interface BoilerPlateComponentProps {
  icon?: ReactNode
  onClick?: () => void,
  children?: ReactNode,
  active?: boolean,
  className?: string,
  state?: string
}
