import classNames from 'classnames'
import Image from 'next/image'
import { Button } from '~/components/Button'
import { SectionContainer } from '~/components/SectionContainer'
import Typography, {
  TypographyTag,
  TypographyVariant,
} from '~/components/Typography'
import styles from './BoilerPlateSection.module.css'
import { BoilerPlateSectionProps } from './BoilerPlateSection.types'

export const BoilerPlateSection = ({

}: BoilerPlateSectionProps) => {


  return (
    <SectionContainer width='full'>
      <div className={styles.wrapper}>
        
      </div>
    </SectionContainer>
  )
}
