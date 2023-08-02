import React from 'react'
import { Meta } from '@storybook/react'

import BoilerPlateComponent from './BoilerPlateComponent'
import { 
  BoilerPlateComponentMock1
} from './BoilerPlateComponent.mock'
import { BoilerPlateComponentProps } from './BoilerPlateComponent.types'

export default {
  title: 'Components/BoilerPlateComponent',
  component: BoilerPlateComponent,
  args: { 
    BoilerPlateComponentMock1
  },
} as Meta

export function BoilerPlateComponentStory(args: { [key: string]: BoilerPlateComponentProps }) {
  return (
    <div className='flex gap-2'>
      <BoilerPlateComponent {...args?.BoilerPlateComponentMock1} />
    </div>
  )
}

BoilerPlateComponentStory.storyName = 'Default'
