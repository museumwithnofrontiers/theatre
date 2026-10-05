import { describeGallerySmoke } from '@museumwnf/viewer-layout/dxa/testing'
import { catalogues as sharedTexts } from '@museumwnf/viewer-i18n/gallery'
import manifest from '@inventory-data/manifest.json'
import ownTexts from '../locales/en.json'
import config from '../src/dataset.config.js'

// The gallery family's smoke test, run against this gallery's own dataset.
// The picks are records of that dataset the tests look for; each is described
// in the suite's own documentation (@museumwnf/viewer-layout/dxa/testing).
describeGallerySmoke({
  config,
  sharedTexts,
  ownTexts,
  manifest,
  namespace: 'theatre',
  picks: {
    collection: {
      tiles: 9,
      paginations: 2,
    },
    about: 'Theatre',
    credits: 'LOCAL PROJECT TEAMS',
    chip: {
      item: '957ca713-c1c0-5491-8542-164f00239bf4',
      project: 'Sharing History - Arab-Ottoman-European relations in the 19th century.',
      className: 'mwnf-chip--AWE',
    },
    noticeItem: '1b55ef6a-0fb1-56d2-9274-4f0775c2cee9',
    dynasty: null,
    timeline: {
      code: 'fr',
      id: 'fra',
      country: 'France',
    },
    partner: {
      id: '3ca60fa4-b04d-5aac-8545-cd0a8f6b1935',
      name: 'Los Angeles County Museum of Art (LACMA)',
      city: 'Los Angeles',
      country: 'United States of America',
      objects: 1,
    },
  },
})
