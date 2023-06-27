import React from 'react'
import { Meta } from '@storybook/react'

import BoilerPlateComponent from './BoilerPlateComponent'
import { 
  BoilerPlateComponentMock1,
  BoilerPlateComponentMock2,
  BoilerPlateComponentMock3,
  BoilerPlateComponentMock4,
  BoilerPlateComponentMock5
} from './BoilerPlateComponent.mock'
import { BoilerPlateComponentProps } from './BoilerPlateComponent.types'

export default {
  title: 'Components/BoilerPlateComponent',
  component: BoilerPlateComponent,
  args: { 
    BoilerPlateComponentMock1,
    BoilerPlateComponentMock2,
    BoilerPlateComponentMock3,
    BoilerPlateComponentMock4,
    BoilerPlateComponentMock5
  },
} as Meta

export function BoilerPlateComponentStory(args: { [key: string]: BoilerPlateComponentProps }) {
  return (
    <div className='flex gap-2'>
      <BoilerPlateComponent {...args?.BoilerPlateComponentMock1} />
      <BoilerPlateComponent {...args?.BoilerPlateComponentMock2} />
      <BoilerPlateComponent {...args?.BoilerPlateComponentMock3} />
      <BoilerPlateComponent {...args?.BoilerPlateComponentMock4} />
      <BoilerPlateComponent {...args?.BoilerPlateComponentMock5} />
    </div>
  )
}

BoilerPlateComponentStory.storyName = 'Default'
