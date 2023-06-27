import React from 'react'
import classNames from 'classnames'
import styles from './BoilerPlateComponent.module.css'
import { BoilerPlateComponentProps } from './BoilerPlateComponent.types'

const BoilerPlateComponent = ({
  icon,
  onClick = () => {alert('Not Connected!')},
  children,
  active = false,
  className = [],
  state
}: BoilerPlateComponentProps) => {

  const stateClass = () => {
    if (state==='processing') return styles.processing;
    if (state==='error') return styles.error;
    if (state==='success') return styles.success;
    return null;
  }

  return (
    <div 
    className={classNames(styles.wrapper, 'rounded-lg', !active&&styles.inactive, stateClass(), className)} 
    onClick={onClick}
    >
      {children}
      {icon&&<span className={styles.icon}>
        {icon}
      </span>}
      </div>
  )
}


export default BoilerPlateComponent