import { createBrowserRouter, Navigate, type RouteObject } from 'react-router'
import ErrorPage from './components/ErrorPage'
import Layout from './components/Layout'
import FavoritesPage from './pages/FavoritesPage'
import GamesPage from './pages/GamesPage'
import StickerPage from './pages/StickerPage'

export const routes: RouteObject[] = [
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <GamesPage /> },
      { path: 'favoriten', element: <FavoritesPage /> },
      { path: 'sticker', element: <StickerPage /> },
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
]

export const router = createBrowserRouter(routes, {
  basename: import.meta.env.BASE_URL,
})
