
import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/home/page'));
const AboutUs = lazy(() => import('../pages/about/page'));
const AIVideoMonitoring = lazy(() => import('../pages/ai-video-monitoring/page'));
const AIVideoAnalytics = lazy(() => import('../pages/ai-video-analytics/page'));
const FleetManagement = lazy(() => import('../pages/fleet-management/page'));
const FireDetection = lazy(() => import('../pages/fire-detection/page'));
const CoverAlarmMonitoring = lazy(() => import('../pages/cover-alarm-monitoring/page'));
const EnterpriseAI = lazy(() => import('../pages/enterprise-ai/page'));
const RetailAgricultureManufacturing = lazy(() => import('../pages/retail-agriculture-manufacturing/page'));
const GovernmentSolutions = lazy(() => import('../pages/government-solutions/page'));
const GovernmentSmartCities = lazy(() => import('../pages/government-smart-cities/page'));
const VehicleAICCTV = lazy(() => import('../pages/vehicle-ai-cctv/page'));
const BNPL = lazy(() => import('../pages/bnpl/page'));
const Blog = lazy(() => import('../pages/blog/page'));
const Careers = lazy(() => import('../pages/careers/page'));
const PrivacyPolicy = lazy(() => import('../pages/privacy-policy/page'));
const TermsOfService = lazy(() => import('../pages/terms-of-service/page'));
const NotFound = lazy(() => import('../pages/NotFound'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/about',
    element: <AboutUs />
  },
  {
    path: '/ai-video-monitoring',
    element: <AIVideoMonitoring />
  },
  {
    path: '/ai-video-analytics',
    element: <AIVideoAnalytics />
  },
  {
    path: '/fleet-management',
    element: <FleetManagement />
  },
  // Legacy routes redirect to fleet management
  {
    path: '/gps-fleet-tracking',
    element: <FleetManagement />
  },
  {
    path: '/fuel-monitoring',
    element: <FleetManagement />
  },
  {
    path: '/fire-detection',
    element: <FireDetection />
  },
  {
    path: '/cover-alarm-monitoring',
    element: <CoverAlarmMonitoring />
  },
  {
    path: '/enterprise-ai',
    element: <EnterpriseAI />
  },
  {
    path: '/retail-agriculture-manufacturing',
    element: <RetailAgricultureManufacturing />
  },
  {
    path: '/government-solutions',
    element: <GovernmentSolutions />
  },
  {
    path: '/government-smart-cities',
    element: <GovernmentSmartCities />
  },
  // Legacy route redirect to government solutions
  {
    path: '/smart-city',
    element: <GovernmentSolutions />
  },
  {
    path: '/vehicle-ai-cctv',
    element: <VehicleAICCTV />
  },
  {
    path: '/bnpl',
    element: <BNPL />
  },
  {
    path: '/blog',
    element: <Blog />
  },
  {
    path: '/careers',
    element: <Careers />
  },
  {
    path: '/privacy-policy',
    element: <PrivacyPolicy />
  },
  {
    path: '/terms-of-service',
    element: <TermsOfService />
  },
  {
    path: '*',
    element: <NotFound />
  }
];

export default routes;