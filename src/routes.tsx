import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';
// Lazy load components
const PhotoGallery = lazy(() => import('./pages/PhotoGallery'));
const AboutTCN = lazy(() => import('./pages/AboutTCN'));
const WorldViewHome = lazy(() => import('./pages/WorldViewHome'));
const TCNEcDev = lazy(() => import('./pages/TCNEcDev'));
const Achimowin = lazy(() => import('./pages/Achimowin'));

export const routes: RouteObject[] = [
  {
    path: '/pages/PhotoGallery',
    element: <PhotoGallery />
  },
  {
    path: '/pages/AboutTCN',
    element: <AboutTCN />
  },
  {
    path: '/pages/WorldViewHome',
    element: <WorldViewHome />
  },
  {
    path: '/pages/TCNEcDev',
    element: <TCNEcDev />
  },
   {
    path: '/pages/Achimowin',
    element: <Achimowin />
  },
  
];