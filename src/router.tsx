import { createBrowserRouter, Navigate, type RouteObject } from 'react-router'
import ErrorPage from './components/ErrorPage'
import Layout from './components/Layout'
import CategoryPage from './pages/CategoryPage'
import DiscoverPage from './pages/DiscoverPage'
import FavoritesPage from './pages/FavoritesPage'
import SearchPage from './pages/SearchPage'
import WishPage from './pages/WishPage'

export const routes: RouteObject[] = [
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <DiscoverPage /> },
      { path: 'k/:cat', element: <CategoryPage /> },
      { path: 'suche', element: <SearchPage /> },
      { path: 'zufall', element: <WishPage /> },
      { path: 'favoriten', element: <FavoritesPage /> },
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
]

export const router = createBrowserRouter(routes, {
  basename: import.meta.env.BASE_URL,
})
