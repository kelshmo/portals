import { SynapseConfig } from 'types/portal-config'

import { dataSql } from '../resources'

export const dataEntityId = 'syn20821313'

const facetAliases = {
  id: 'File',
}

const rgbIndex = 8

export const data: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  props: {
    rgbIndex,
    sql: dataSql,
    tableConfiguration: {
      showAccessColumn: true,
      columnLinks: [
        {
          matchColumnName: 'study',
          URLColumnName: 'studyName',
          baseURL: 'Explore/Studies/DetailsPage',
          isMarkdown: false,
        },
      ],
    },
    visibleColumnCount: 10,
    shouldDeepLink: true,
    name: 'Data',
    facetAliases,
    facetsToPlot: [
      'study',
      'dataType',
      'species',
      'tissue',
      'referenceSet',
      'fileFormat',
    ],
  },
}
