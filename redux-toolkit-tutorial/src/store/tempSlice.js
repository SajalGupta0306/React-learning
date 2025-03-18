import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// const initialState = {
//   data: [],
//   status: 'idle'
// }

const initialState = {}

const arrData = [
  {
    serviceName: 'Delivery',
    serviceNameSpace: 'Delivery',
    baseUrl: '/dummyUrl',
    initialURL: '/loadup.jsp',
    defaultMenuVisibility: 'show',
    leftNavMenus: [
      {
        label: 'Client',
        icon: '/static/SettingUnselected.svg',
        tooltip: 'UsethispagetoviewandsetClientSettings',
        pageUrl: '/dummyUrl',
        webUrl: false,
        pinned: true,
        children: [
          {
            label: 'ClientSettings',
            pageUrl: '/clientProfileViewPage',
            webUrl: false,
            tooltip: 'UsethispagetoviewandsetDeliveryconfigurations',
            pinned: true,
            children: []
          },
          {
            label: 'ServiceSettings',
            pageUrl: '/dummyUrl',
            webUrl: false,
            tooltip: 'UsethispagetoviewandsetDeliveryconfigurations',
            pinned: false,
            children: [
              {
                label: 'General',
                pageUrl: '/dummyUrl',
                webUrl: false,
                tooltip: 'UsethispagetoviewandsetDeliveryconfigurations',
                pinned: false,
                children: []
              },
              {
                label: 'SupportCenter',
                pageUrl: '/dummyUrl',
                webUrl: false,
                tooltip: 'UsethispagetoviewandsetDeliveryconfigurations',
                pinned: false,
                children: []
              },
              {
                label: 'PickupDefaults',
                pageUrl: '/dummyUrl',
                webUrl: false,
                tooltip: 'UsethispagetoviewandsetDeliveryconfigurations',
                pinned: false,
                children: []
              },
              {
                label: 'ProductAdd-onsDefaults',
                pageUrl: '/dummyUrl',
                webUrl: false,
                tooltip: 'UsethispagetoviewandsetDeliveryconfigurations',
                pinned: false,
                children: []
              }
            ]
          }
        ]
      },
      {
        label: 'Dispatcher',
        icon: '/static/DeliveryUnselected.svg',
        tooltip: 'UsethispagetoviewandsetClientSettings',
        pageUrl: '/dummyUrl',
        webUrl: false,
        pinned: true,
        children: []
      },
      {
        label: 'BookDelivery',
        icon: '/static/DispatcherSelected.svg',
        tooltip: 'UsethispagetoviewandsetClientSettings',
        pageUrl: '/dummyUrl',
        webUrl: false,
        pinned: false,
        children: []
      },
      {
        label: 'PickupPoints',
        icon: '/static/PickupFromUnselected.svg',
        tooltip: 'UsethispagetoviewandsetClientSettings',
        pageUrls: '/pickupPoint',
        pageUrl:
          'https://247wallst.com/retail/2014/03/22/walmart-now-has-six-types-of-stores/',
        webUrl: true,
        pinned: true,
        children: []
      }
    ]
  },
  {
    serviceName: 'WTS',
    serviceNameSpace: 'WTS',
    baseUrl: '/dummyUrl',
    initialURL: '/loadup.jsp',
    defaultMenuVisibility: 'show',
    leftNavMenus: [
      {
        label: 'Client',
        icon: '/static/SettingUnselected.svg',
        tooltip: 'UsethispagetoviewandsetClientSettings',
        pageUrl: '/dummyUrl',
        webUrl: false,
        pinned: true,
        children: [
          {
            label: 'ClientSettings',
            icon: '/static/SettingUnselected.svg',
            tooltip: 'UsethispagetoviewandsetClientSettings',
            pageUrl: '/dummyUrl',
            webUrl: false,
            pinned: true,
            children: []
          }
        ]
      },
      {
        label: 'Dashboards',
        icon: '/static/SettingUnselected.svg',
        tooltip: 'UsethispagetoviewandsetClientSettings',
        pageUrl: '/dummyUrl',
        webUrl: false,
        pinned: true,
        children: []
      },
      {
        label: 'Settings',
        icon: '/static/SettingUnselected.svg',
        tooltip: 'UsethispagetoviewandsetClientSettings',
        pageUrl: '/dummyUrl',
        webUrl: false,
        pinned: true,
        children: [
          {
            label: 'CarrierGroup',
            icon: '/static/SettingUnselected.svg',
            tooltip: 'UsethispagetoviewandsetClientSettings',
            pageUrl: '/dummyUrl',
            webUrl: false,
            pinned: true,
            children: []
          },
          {
            label: 'Zones',
            icon: '/static/SettingUnselected.svg',
            tooltip: 'UsethispagetoviewandsetClientSettings',
            pageUrl: '/dummyUrl',
            webUrl: false,
            pinned: true,
            children: []
          },
          {
            label: 'Carrier',
            icon: '/static/SettingUnselected.svg',
            tooltip: 'UsethispagetoviewandsetClientSettings',
            pageUrl: '/dummyUrl',
            webUrl: false,
            pinned: true,
            children: []
          },
          {
            label: 'Lanes',
            icon: '/static/SettingUnselected.svg',
            tooltip: 'UsethispagetoviewandsetClientSettings',
            pageUrl: '/dummyUrl',
            webUrl: false,
            pinned: true,
            children: []
          }
        ]
      }
    ]
  },
  {
    serviceName: 'Scheduling',
    serviceNameSpace: 'Scheduling',
    baseUrl: '/dummyUrl',
    initialURL: '/loadup.jsp',
    defaultMenuVisibility: 'show',
    leftNavMenus: [
      {
        label: 'Client',
        icon: '/static/SettingUnselected.svg',
        tooltip: 'UsethispagetoviewandsetClientSettings',
        pageUrl: '/dummyUrl',
        webUrl: false,
        pinned: true,
        children: [
          {
            label: 'ClientSettings',
            icon: '/static/SettingUnselected.svg',
            tooltip: 'UsethispagetoviewandsetClientSettings',
            pageUrl: '/dummyUrl',
            webUrl: false,
            pinned: true,
            children: []
          }
        ]
      },
      {
        label: 'ResourceTemplates',
        icon: '/static/SettingUnselected.svg',
        tooltip: 'UsethispagetoviewandsetClientSettings',
        pageUrl: '/dummyUrl',
        webUrl: false,
        pinned: true,
        children: []
      },
      {
        label: 'Configurator',
        icon: '/static/SettingUnselected.svg',
        tooltip: 'UsethispagetoviewandsetClientSettings',
        pageUrl: '/dummyUrl',
        webUrl: false,
        pinned: true,
        children: []
      },
      {
        label: 'OperationalExcellence',
        icon: '/static/SettingUnselected.svg',
        tooltip: 'UsethispagetoviewandsetClientSettings',
        pageUrl: '/dummyUrl',
        webUrl: false,
        pinned: true,
        children: []
      }
    ]
  },
  {
    serviceName: 'Fulfillment',
    serviceNameSpace: 'Fulfillment',
    baseUrl: 'https://FulfillmentService',
    initialURL: '/loadup.jsp',
    defaultMenuVisibility: 'show',
    leftNavMenus: [
      {
        label: 'Client',
        icon: '/static/SettingUnselected.svg',
        tooltip: 'UsethispagetoviewandsetClientSettings',
        pageUrl: '/dummyUrl',
        webUrl: false,
        pinned: true,
        children: [
          {
            label: 'ClientSettings',
            icon: '/static/SettingUnselected.svg',
            tooltip: 'UsethispagetoviewandsetClientSettings',
            pageUrl: '/dummyUrl',
            webUrl: false,
            pinned: true,
            children: []
          },
          {
            label: 'Servicesettings',
            icon: '/static/SettingUnselected.svg',
            tooltip: 'UsethispagetoviewandsetClientSettings',
            pageUrl: '/dummyUrl',
            webUrl: false,
            pinned: true,
            children: [
              {
                label: 'SupportCenter',
                icon: '/static/SettingUnselected.svg',
                tooltip: 'UsethispagetoviewandsetClientSettings',
                pageUrl: '/dummyUrl',
                webUrl: false,
                pinned: true,
                children: []
              },
              {
                label: 'StoreDefaults',
                icon: '/static/SettingUnselected.svg',
                tooltip: 'UsethispagetoviewandsetClientSettings',
                pageUrl: '/dummyUrl',
                webUrl: false,
                pinned: true,
                children: []
              }
            ]
          }
        ]
      },
      {
        label: 'Picking',
        icon: '/static/SettingUnselected.svg',
        tooltip: 'UsethispagetoviewandsetClientSettings',
        pageUrl: '/dummyUrl',
        webUrl: false,
        pinned: true,
        children: [
          {
            label: 'AllOrders',
            icon: '/static/SettingUnselected.svg',
            tooltip: 'UsethispagetoviewandsetClientSettings',
            pageUrl: '/dummyUrl',
            webUrl: false,
            pinned: true,
            children: []
          },
          {
            label: 'HotOrdes',
            icon: '/static/SettingUnselected.svg',
            tooltip: 'UsethispagetoviewandsetClientSettings',
            pageUrl: '/dummyUrl',
            webUrl: false,
            pinned: true,
            children: []
          }
        ]
      },
      {
        label: 'Stores',
        icon: '/static/SettingUnselected.svg',
        tooltip: 'UsethispagetoviewandsetClientSettings',
        pageUrl: '/dummyUrl',
        webUrl: false,
        pinned: true,
        children: [
          {
            label: 'GeneralSettings',
            icon: '/static/SettingUnselected.svg',
            tooltip: 'UsethispagetoviewandsetClientSettings',
            pageUrl: '/dummyUrl',
            webUrl: false,
            pinned: true,
            children: []
          },
          {
            label: 'PickOptimization',
            icon: '/static/SettingUnselected.svg',
            tooltip: 'UsethispagetoviewandsetClientSettings',
            pageUrl: '/dummyUrl',
            webUrl: false,
            pinned: true,
            children: []
          }
        ]
      }
    ]
  },
  {
    serviceName: 'AllServices',
    serviceNameSpace: 'AllServices',
    baseUrl: '/dummyUrl',
    initialURL: '/loadup.jsp',
    defaultMenuVisibility: 'show',
    leftNavMenus: [
      {
        label: 'AdminTools',
        icon: '/static/SettingUnselected.svg',
        tooltip: 'UsethispagetoviewandsetClientSettings',
        pageUrl: '/dummyUrl',
        webUrl: false,
        pinned: true,
        children: [
          {
            label: 'UserManagement',
            pageUrl: '/dummyUrl',
            webUrl: false,
            tooltip: 'UsethispagetoviewandsetDeliveryconfigurations',
            pinned: true,
            children: [
              {
                label: 'AddUser',
                pageUrl: '/dummyUrl',
                webUrl: false,
                tooltip: 'UsethispagetoviewandsetDeliveryconfigurations',
                pinned: true,
                children: []
              },
              {
                label: 'UserList',
                pageUrl: '/dummyUrl',
                webUrl: false,
                tooltip: 'UsethispagetoviewandsetDeliveryconfigurations',
                pinned: true,
                children: []
              }
            ]
          },
          {
            label: 'RoleManagement',
            pageUrl: '/dummyUrl',
            webUrl: false,
            tooltip: 'UsethispagetoviewandsetDeliveryconfigurations',
            pinned: true,
            children: []
          },
          {
            label: 'AuditTrail',
            pageUrl: '/dummyUrl',
            webUrl: false,
            tooltip: 'UsethispagetoviewandsetDeliveryconfigurations',
            pinned: true,
            children: []
          },
          {
            label: 'GiveFeedback',
            pageUrl: '/dummyUrl',
            webUrl: false,
            tooltip: 'UsethispagetoviewandsetDeliveryconfigurations',
            pinned: true,
            children: []
          },
          {
            label: 'MyProfile',
            pageUrl: '/dummyUrl',
            webUrl: false,
            tooltip: 'UsethispagetoviewandsetDeliveryconfigurations',
            pinned: true,
            children: []
          },
          {
            label: 'APIs',
            pageUrl: '/dummyUrl',
            webUrl: false,
            tooltip: 'UsethispagetoviewandsetDeliveryconfigurations',
            pinned: true,
            children: []
          }
        ]
      },
      {
        label: 'Notifications',
        icon: '/static/SettingUnselected.svg',
        tooltip: 'UsethispagetoviewandsetClientSettings',
        pageUrl: '/dummyUrl',
        webUrl: false,
        pinned: true,
        children: []
      },
      {
        label: 'Help',
        icon: '/static/SettingUnselected.svg',
        tooltip: 'UsethispagetoviewandsetClientSettings',
        pageUrl: '/dummyUrl',
        webUrl: false,
        pinned: true,
        children: [
          {
            label: 'ViewTutorials',
            pageUrl: '/dummyUrl',
            webUrl: false,
            tooltip: 'UsethispagetoviewandsetDeliveryconfigurations',
            pinned: true,
            children: []
          },
          {
            label: 'CreateaCase',
            pageUrl: '/dummyUrl',
            webUrl: false,
            tooltip: 'UsethispagetoviewandsetDeliveryconfigurations',
            pinned: true,
            children: []
          },
          {
            label: 'ViewCaseHistory',
            pageUrl: '/dummyUrl',
            webUrl: false,
            tooltip: 'UsethispagetoviewandsetDeliveryconfigurations',
            pinned: true,
            children: []
          },
          {
            label: 'ReadArticles',
            pageUrl: '/dummyUrl',
            webUrl: false,
            tooltip: 'UsethispagetoviewandsetDeliveryconfigurations',
            pinned: true,
            children: []
          }
        ]
      }
    ]
  }
]

const getData = () => {
  return new Promise((res, rej) => {
    res(arrData)
  })
}

const tempSlice = createSlice({
  name: 'temp',
  initialState,
  extraReducers: builder => {
    builder.addCase(getUIData.fulfilled, (state, action) => {
      const tempObj = {}
      action.payload.forEach(obj => {
        state[obj.serviceName] = obj['leftNavMenus']
        tempObj[obj.serviceName] = obj['leftNavMenus']
      })
    })
  }
})

// using thunk middleware for calling api
export const getUIData = createAsyncThunk('header/get', async () => {
  const resp = await getData()
  return resp
})

export default tempSlice.reducer // gives back the state
