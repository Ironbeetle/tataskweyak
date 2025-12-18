import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';

// Lazy load components
const PhotoGallery = lazy(() => import('./pages/PhotoGallery'));
const AboutTCN = lazy(() => import('./pages/AboutTCN'));
const WorldViewHome = lazy(() => import('./pages/WorldViewHome'));
const TCNEcDev = lazy(() => import('./pages/TCNEcDev'));
const CommSysInfo = lazy(() => import('./TCN_Portal/System_Info'));
const TCN_Greet = lazy (() => import('./TCN_Members/TCN_Greet'));
const ForgotPassword = lazy(() => import('./components/ForgotPassword'));
const ResetPassword = lazy(() => import('./components/ResetPassword'));
const NamaoTCN = lazy(() => import('./pages/NamaoTCN'));

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
    path: '/TCN_Members/TCN_Greet',
    element: <TCN_Greet/>
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword/>
  },
  {
    path: '/reset-password',
    element: <ResetPassword/>
  },
   {
    path: '/pages/NamaoTCN',
    element: <NamaoTCN/>
  },
  {
    path: '/TCN_Portal/System_Info',
    element: <CommSysInfo/>
  }
  
];