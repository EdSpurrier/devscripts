import React from 'react'
import classNames from 'classnames'
import styles from './BoilerPlateComponent.module.css'
import { BoilerPlateComponentProps } from './BoilerPlateComponent.types'

const BoilerPlateComponent = ({
  children,
  className,
}: BoilerPlateComponentProps) => {


  return (
    <div 
      className={classNames(
        styles.root,
        className
      )}
    >
      {children}
    </div>
  )
}


export default BoilerPlateComponent