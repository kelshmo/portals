import { GenericRoute } from '../types/portal-config'
import { SynapseConstants } from 'synapse-react-client'
import { projects, studies, data, people, programs, publications } from './synapseConfigs'
import exploreButtonWrapperProps from './exploreButtonWrapperProps'
import { ampAd, move2Ad, modelAd, resilienceAd } from './synapseConfigs/programs/'
// @ts-ignore
import iconAgoraSvg from './style/icon-agora.svg'

const routes: GenericRoute [] = [
  {
    name: 'Home',
    to: '/',
    isNested: false,
    synapseConfigArray: [
      {
        name: 'HomeButtonControlWrapper',
        title: 'EXPLORE CONTENT',
        props: {
          configs: [
            { name: 'Projects', synapseConfig: projects.homePageSynapseObject },
            { name: 'Studies', synapseConfig: studies.homePageSynapseObject },
            { name: 'Data', synapseConfig: data.homePageSynapseObject },
            { name: 'People', synapseConfig: people.homePageSynapseObject }
          ],
          colors: [
            '#E5AE4C',
            '#5BB0B5',
            '#5171C0',
            '#D4689A',
          ]
        }
      },
      {
        name: 'CardContainerLogic',
        title: 'PROGRAMS',
        props: {
          sql: 'SELECT * FROM syn17024173',
          type: SynapseConstants.AMP_CONSORTIUM
        }
      },
      {
        name: 'Markdown',
        title: "WHAT'S NEW",
        props: {
          ownerId:'syn12666371',
          wikiId:'582408'
        }
      }
    ],
  },
  {
    name: 'Explore',
    isNested: true,
    routes: [
      {
        name: 'Programs',
        isNested: true,
        to: '/Explore/Programs',
        synapseConfigArray: [
          {
            ...exploreButtonWrapperProps,
            props: {
              ...exploreButtonWrapperProps.props,
              synapseConfig: programs
            }
          }
        ],
        routes: [
          {
            name: 'AMP-AD',
            isNested: false,
            to: '/Explore/Programs/AMP-AD',
            synapseConfigArray: ampAd
          },
          {
            name: 'M2OVE-AD',
            isNested: false,
            to: '/Explore/Programs/M2OVE-AD',
            synapseConfigArray: move2Ad
          },
          {
            name: 'MODEL-AD',
            isNested: false,
            to: '/Explore/Programs/MODEL-AD',
            synapseConfigArray: modelAd
          },
          {
            name: 'Resilience-AD',
            isNested: false,
            to: '/Explore/Programs/AResilience-AD',
            synapseConfigArray: resilienceAd
          },
        ]
      },
      {
        name: 'Projects',
        isNested: false,
        to: '/Explore/Projects',
        synapseConfigArray: [
          {
            ...exploreButtonWrapperProps,
            props: {
              ...exploreButtonWrapperProps.props,
              synapseConfig: projects.explorePageSynapseObject
            }
          }
        ]
      },
      {
        name: 'Studies',
        isNested: false,
        to: '/Explore/Studies',
        synapseConfigArray: [
          {
            ...exploreButtonWrapperProps,
            props: {
              ...exploreButtonWrapperProps.props,
              synapseConfig: studies.explorePageSynapseObject
            }
          }
        ]
      },
      {
        name: 'Data',
        isNested: false,
        to: '/Explore/Data',
        synapseConfigArray: [
          {
            ...exploreButtonWrapperProps,
            props: {
              ...exploreButtonWrapperProps.props,
              synapseConfig: data.explorePageSynapseObject
            }
          }
        ]
      },
      {
        name: 'Publications',
        isNested: false,
        to: '/Explore/Publications',
        synapseConfigArray: [
          {
            ...exploreButtonWrapperProps,
            props: {
              ...exploreButtonWrapperProps.props,
              synapseConfig: publications
            }
          }
        ]
      },
      {
        name: 'People',
        isNested: false,
        to: '/Explore/People',
        synapseConfigArray: [
          {
            ...exploreButtonWrapperProps,
            props: {
              ...exploreButtonWrapperProps.props,
              synapseConfig: people.explorePageSynapseObject
            }
          }
        ]
      }
    ]
  },
  {
    name: 'ResearchTools',
    displayName: 'Research Tools',
    to: '/ResearchTools',
    isNested: false,
    synapseConfigArray: [
      {
        name: 'Markdown',
        title: 'Research Tools',
        props: {
          ownerId:'syn2580853',
          wikiId:'409845'
        }
      }
    ]
  },
  {
    name: 'DataAccess',
    displayName: 'Data Access',
    isNested: true,
    routes: [
      {
        name: 'Instructions',
        displayName: 'Getting Access to Data',
        isNested: false,
        to: '/DataAccess/Instructions',
        synapseConfigArray: [
          {
            name: 'Markdown',
            title: 'GETTING ACCESS TO DATA',
            props: {
              ownerId: 'syn12666371',
              wikiId: '585317'
            }
          }
        ]
      },
      {
        name: 'Acknowleding-Data-Use',
        displayName: 'Acknowleding Data Use',
        isNested: false,
        to: '/DataAccess/Acknowleding-Data-Use',
        synapseConfigArray: [
          {
            name: 'Markdown',
            title: 'ACKNOWLEDGEMENT STATEMENTS',
            props: {
              ownerId: 'syn2580853',
              wikiId: '584597'
            }
          }
        ]
      },
    ]
  },
  {
    name: 'About',
    isNested: false,
    to: '/About',
    synapseConfigArray: [
      {
        name: 'Markdown',
        title: 'About',
        props: {
          wikiId:'581939',
          ownerId:'syn12666371'
        }
      }
    ]
  },
  {
    name: 'ExploreResults',
    displayName: 'Explore Results',
    icon: iconAgoraSvg,
    isNested: false,
    to: 'https://agora.ampadportal.org/genes',
    synapseConfigArray: []
  }
]

export default routes