import { BoilerPlateSectionProps } from './BoilerPlateSection.types'

export const boilerPlateSectionMock: BoilerPlateSectionProps = {
  __typename: 'BoilerPlateSection',
  id: 'promo-banner',
  desktopImage: {
    uid: 'bdi',
    src: 'https://picsum.photos/id/338/1464/340',
    alt: 'banner',
    content_type: 'img/jpg',
  },
  tabletImage: {
    uid: 'bti',
    src: 'https://picsum.photos/id/338/840/340',
    alt: '',
    content_type: '',
  },
  mobileImage: {
    uid: 'bmi',
    src: 'https://picsum.photos/id/338/340/200',
    alt: '',
    content_type: '',
  },
  icon: {
    uid: 'bbi',
    src: '/mock-images/marker_hub_lg.png',
    alt: '',
    content_type: '',
  },
  description:
    'Most of us are familiar with third hands and DMMs, but fusible silicone tape or freeze spray?',
  action: {
    title: 'Learn more',
    href: '',
  },
}
