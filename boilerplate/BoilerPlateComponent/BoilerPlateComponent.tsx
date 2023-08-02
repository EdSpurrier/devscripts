import React from 'react'
import classNames from 'classnames'
import styles from './BoilerPlateComponent.module.css'
import { BoilerPlateComponentProps } from './BoilerPlateComponent.types'

const BoilerPlateComponent = ({
  children,
  onClick = () => {alert('Not Connected!')},
  className,
}: BoilerPlateComponentProps) => {


  return (
    <div 
      className={classNames(
        styles.root,
        styles.wrapper, 
        'rounded-lg', 
        className)}
      onClick={()=>{onClick()}}
    >
      {children}
    </div>
  )
}


export default BoilerPlateComponent