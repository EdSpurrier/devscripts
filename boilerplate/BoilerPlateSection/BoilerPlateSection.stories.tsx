import { Meta, StoryFn } from '@storybook/react'
import { BoilerPlateSection } from './BoilerPlateSection'
import { boilerPlateSectionMock } from './BoilerPlateSection.mock'
import { BoilerPlateSectionProps } from './BoilerPlateSection.types'

export default {
  title: 'Sections/BoilerPlateSection',
  component: BoilerPlateSection,
  args: boilerPlateSectionMock,
} as Meta

export const Defaultstory: StoryFn<BoilerPlateSectionProps> = (args) => {
  return <BoilerPlateSection {...args} />
}

Defaultstory.storyName = 'Default'
Defaultstory.args = boilerPlateSectionMock
