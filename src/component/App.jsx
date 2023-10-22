import { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import store from '../app/store'
import Body from './Body'
import ErrorBoundary from './ErrorBoundary'
import SearchedVideosContainer from './SearchedVideosContainer'
import MainContainer from './MainContainer'
import WatchVideoContainer from './WatchVideoContainer'
import ChannelDetail from './channelDetail/ChannelDetail'
import Home from './channelDetail/channelTabs/Home'
import Videos from './channelDetail/channelTabs/Videos'
import Community  from './channelDetail/channelTabs/Community'
import ChannelPlayList from './channelDetail/channelTabs/ChannelPlayList'
import Channel from './channelDetail/channelTabs/Channel'
import About from './channelDetail/channelTabs/About'
import ClickedPlaylist from './channelDetail/ClickedPlaylist'

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <Body/>,
    errorElement:<ErrorBoundary/>,
    children:[
      {
        path:"/",
        element:<MainContainer/>,
        errorElement:<ErrorBoundary/>,
      },
      {
        path:"searchedvideos",
        element:<SearchedVideosContainer/>,
        errorElement:<ErrorBoundary/>,
      },
      {
        path:"watch",
        element:<WatchVideoContainer/>,
        errorElement:<ErrorBoundary/>,
      },
      {
        path:"channel/:channelId",
        element:<ChannelDetail/>,
        errorElement:<ErrorBoundary/>,
        children:[
          {
            path:"featured",
            element:<Home/>,
            errorElement:<ErrorBoundary/>,
          },
          {
            path:"videos",
            element:<Videos/>,
            errorElement:<ErrorBoundary/>,
          },
          {
            path:"playlists",
            element:<ChannelPlayList/>,
            errorElement:<ErrorBoundary/>,
          },
          {
            path:"community",
            element:<Community/>,
            errorElement:<ErrorBoundary/>,
          },
          {
            path:"channels",
            element:<Channel/>,
            errorElement:<ErrorBoundary/>,
          },
          {
            path:"about",
            element:<About/>,
            errorElement:<ErrorBoundary/>,
          }
        ]
      },
      {
        path:"playlist",
        element:<ClickedPlaylist/>
      }
    ]
  }
])


function App() {
  
  return (
  <Provider store={store}>
    <RouterProvider router={appRouter}/>
  </Provider>
  )
}

export default App
