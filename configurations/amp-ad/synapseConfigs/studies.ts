import { HomeExploreConfig } from '../../types/portal-config'
import { SynapseConstants } from 'synapse-react-client'
import loadingScreen from '../loadingScreen'
import { CommonCardProps } from 'synapse-react-client/dist/containers/CardContainerLogic';
const unitDescription = 'studies'
const rgbIndex = 0
export const studiesSql = 'SELECT * FROM syn17083367'
const sql = studiesSql
const facet = 'Species'
export const studyCardProps: CommonCardProps =  {
  type: SynapseConstants.GENERIC_CARD,
  secondaryLabelLimit: 4,
  titleLinkConfig: {
    baseURL: 'Explore/Studies',
    URLColumnNames: ['Study']
  },
  genericCardSchema: {
    type: SynapseConstants.STUDY,
    title: 'Study_Name',
    subTitle: 'Data_Contributor',
    icon: 'Access_Type',
    description: 'Study_Description',
    secondaryLabels: [
      'DataType_All',
      'Diagnosis_or_Model_System',
      'Number_Of_Individuals',
      'Sample_Type',
      'Species',
      'Cohort_Type',
      'Study_Status',
      'Consortium',
      'Grant'
    ]
  },
}
const facetAliases = {
  Consortium: 'Program',
  DataType_All: 'Data Types',
  Diagnosis_or_Model_System: 'Diagnosis',
  Number_of_Individuals: 'Individuals',
  Sample_Type: 'Tissue'
}
const studies: HomeExploreConfig = {
  homePageSynapseObject: {
    name: 'QueryWrapperFlattened',
    props: {
      unitDescription,
      rgbIndex,
      loadingScreen,
      facet,
      link: 'Explore/Studies',
      linkText: 'Explore Studies',
      initQueryRequest : {
        concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
        partMask: SynapseConstants.BUNDLE_MASK_QUERY_FACETS
          | SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
        query: {
          sql,
          isConsistent: true,
          limit: 25,
          offset: 0,
        }
      }
    }
  },
  explorePageSynapseObject: {
    name: 'QueryWrapperMenu',
    props: {
      rgbIndex,
      unitDescription,
      facetAliases,
      stackedBarChartConfiguration: {
        loadingScreen,
      },
      name: 'Studies',
      isConsistent: true,
      cardConfiguration: studyCardProps,
      searchConfiguration: {
        searchable: [
          {
            columnName: 'Consortium',
            hintText: 'AMP-AD'
          },
          {
            columnName: 'Data_Contributor',
            hintText: 'LastName'
          },
          {
            columnName: 'DataType_All',
            hintText: 'Gene Expression'
          },
          {
            columnName: 'Diagnosis_or_Model_System',
            hintText: 'LOAD'
          },
          {
            columnName: 'Grant',
            hintText: 'U01AG046139'
          },
          {
            columnName: 'Sample_Type',
            hintText: 'Temporal Cortex'
          },
          {
            columnName: 'Species',
            hintText: 'Drosophila'
          },
          {
            columnName: 'Study_Description',
            hintText: 'RNAseq'
          },
          {
            columnName: 'Study_Name',
            hintText: 'Mayo'
          },
        ]
      },
      menuConfig: [
        {
          sql,
          facet,
        },
        {
          sql,
          facet: 'Grant'
        },
        {
          sql,
          facet: 'Consortium',
        }
      ]
    }
  }
}
export const studiesProgrammaticRouteConfig = [
  {
    name: 'CardContainerLogic',
    isOutsideContainer: true,
    props: {
      isHeader: true,
      ...studyCardProps,
      sql,
      secondaryLabelLimit: Infinity,
      backgroundColor: '#DE9A1F'
    }
  },
  {
    name: 'GenerateComponentsFromRow',
    isOutsideContainer: false,
    props: {
      sql: studiesSql,
      synapseConfigArray: [
        {
          name: 'Markdown',
          columnName: 'Study',
          title: 'Study Description',
          props: {
            renderTitle: true
          }
        },
        {
          name: 'Markdown',
          // https://www.synapse.org/#!Synapse:syn12666371/wiki/595380
          title: 'Access Requirements',
          injectProps: false,
          props: {
            renderTitle: true,
            ownerId: 'syn12666371',
            wikiId: '595380'
          }
        },
        {
          name: 'Markdown',
          columnName: 'Methods',
          title: 'Methods',
          props: {
            renderTitle: true
          }
        },
        {
          name: 'QueryWrapperFlattened',
          title: 'Metadata',
          columnName: 'Study',
          resolveSynId: true,
          tableSqlKeys: ['study'],
          props: {
            initQueryRequest: {
              partMask: SynapseConstants.BUNDLE_MASK_QUERY_FACETS
              | SynapseConstants.BUNDLE_MASK_QUERY_COUNT
              | SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS
              | SynapseConstants.BUNDLE_MASK_QUERY_RESULTS
              ,
              concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
              query: {
                sql: "SELECT id, dataType FROM syn11346063 WHERE `dataSubtype` = 'metadata'",
                isConsistent: true,
                limit: 25,
              }
            },
            loadingScreen,
            facetAliases,
            rgbIndex: 1,
            unitDescription: 'Metadata Files',
            synapseId: 'syn11346063',
            title: 'Metadata'
          }
        },
        {
          name: 'QueryWrapperFlattened',
          title: 'Data',
          columnName: 'Study',
          resolveSynId: true,
          tableSqlKeys: ['study'],
          props: {
            initQueryRequest: {
              partMask: SynapseConstants.BUNDLE_MASK_QUERY_FACETS
              | SynapseConstants.BUNDLE_MASK_QUERY_COUNT
              | SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS
              | SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS
              | SynapseConstants.BUNDLE_MASK_QUERY_RESULTS
              ,
              concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
              query: {
                sql: "SELECT dataType, assay, fileFormat, count(id) AS Files FROM syn11346063 GROUP BY 1,2,3 ORDER BY 4 DESC",
                isConsistent: true,
                limit: 25,
              }
            },
            loadingScreen,
            facetAliases,
            rgbIndex: 1,
            unitDescription: 'Data Files',
            synapseId: 'syn11346063',
            title: 'Data'
          }
        },
        {
          name: 'Markdown',
          // https://www.synapse.org/#!Synapse:syn12666371/wiki/595381
          title: 'Data Updates',
          injectProps: false,
          props: {
            renderTitle: true,
            ownerId: 'syn12666371',
            wikiId: '595381'
          }
        },
      ]
    }
  }
]
export default studies