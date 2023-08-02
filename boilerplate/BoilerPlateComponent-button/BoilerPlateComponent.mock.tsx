import React from 'react'
import { BoilerPlateComponentProps } from './BoilerPlateComponent.types'

export const BoilerPlateComponentMock1: BoilerPlateComponentProps = {
  active: true,
  children: <span>DEFAULT</span>,
  state: ''
}

export const BoilerPlateComponentMock2: BoilerPlateComponentProps = {
  active: false,
  children: <span>INACTIVE</span>,
}

export const BoilerPlateComponentMock3: BoilerPlateComponentProps = {
  active: true,
  children: <span>PROCESSING</span>,
  state: 'processing'
}

export const BoilerPlateComponentMock4: BoilerPlateComponentProps = {
  active: true,
  children: <span>SUCCESS</span>,
  state: 'success'
}

export const BoilerPlateComponentMock5: BoilerPlateComponentProps = {
  active: true,
  children: <span>ERROR</span>,
  state: 'error'
}