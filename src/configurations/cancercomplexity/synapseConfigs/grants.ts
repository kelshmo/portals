import { SynapseConstants } from 'synapse-react-client'
import { HomeExploreConfig } from 'types/portal-config'
import {
  GenericCardSchema,
  IconOptions,
} from 'synapse-react-client/dist/containers/GenericCard'
import { Project } from 'synapse-react-client/dist/assets/themed_icons/Project'
import { CardConfiguration } from 'synapse-react-client/dist/containers/CardContainerLogic'
import { grantsSql } from '../resources'
const unitDescription = 'Grants'
const rgbIndex = 3

export const grantsSchema: GenericCardSchema = {
  type: 'Grant',
  title: 'grantName',
  subTitle: 'grantInstitution',
  description: 'abstract',
  secondaryLabels: [
    'investigator',
    'grantNumber',
    'consortium',
    'grantType',
    'theme',
  ],
}

// TODO: Change iconOptions type to map () => string | JSX.Element and remove cast
const iconOptions: IconOptions = {
  Grant: (Project as unknown) as string,
}

export const grantsCardConfiguration: CardConfiguration = {
  genericCardSchema: grantsSchema,
  titleLinkConfig: {
    isMarkdown: false,
    URLColumnName: 'grantId',
    matchColumnName: 'grantId',
    baseURL: 'Explore/Grants/DetailsPage',
  },
  type: SynapseConstants.GENERIC_CARD,
  secondaryLabelLimit: 4,
  iconOptions,
}

export const grants: HomeExploreConfig = {
  homePageSynapseObject: {
    name: 'StandaloneQueryWrapper',
    props: {
      unitDescription,
      rgbIndex: 3,
      facet: 'grantType',
      link: 'Explore/Grants',
      linkText: 'Explore Grants',
      sql: grantsSql,
    },
  },
  explorePageSynapseObject: {
    name: 'QueryWrapperPlotNav',
    props: {
      rgbIndex,
      sql: grantsSql,
      cardConfiguration: grantsCardConfiguration,
      shouldDeepLink: true,
      name: 'Grants',
      facetsToPlot: ['consortium', 'grantType'],
      searchConfiguration: {
        searchable: [
          {
            columnName: 'grantName',
          },
          {
            columnName: 'abstract',
          },
          {
            columnName: 'grantInstitution',
          },
          {
            columnName: 'investigator',
          },
          {
            columnName: 'grantNumber',
          },
        ],
      },
    },
  },
}
