import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

// project import
import DashboardLayout from 'layout/Dashboard';
import ErrorBoundary from 'components/ErrorBoundary';
import Loadable from 'components/Loadable';

import { Loader as projectListLoader } from 'api/ProjectsApi';
import { Loader as userListLoader } from 'api/UsersApi';
import { Loader as userEntitlementsListLoader } from 'api/UserEntitlementsApi';
import WorkItemsPage from 'pages/workitems';
import BuildsPage from 'pages/builds';
import CommitsPage from 'pages/commits';
import PullRequestsPage from 'pages/pull-requests';

// render
const Dashboard = Loadable(lazy(() => import('pages/dashboard')));
const ProjectList = Loadable(lazy(() => import('pages/admin/project-list')));
const RepoList = Loadable(lazy(() => import('pages/admin/repo-list')));
const UserList = Loadable(lazy(() => import('pages/admin/user-list')));
const UserEntitlementsList = Loadable(lazy(() => import('pages/admin/user-entitlements-list')));
const WorkItemsList = Loadable(lazy(() => import('pages/admin/workitems-list')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: (
    <ErrorBoundary>
      <DashboardLayout />
    </ErrorBoundary>
  ),
  children: [
    {
      index: true,
      element: <Dashboard />
    },
    {
      path: '/dashboard',
      element: <Dashboard />
    },
    {
      path: '/project-list',
      element: <ProjectList />,
      loader: projectListLoader
    },
    {
      path: '/repo-list',
      element: <RepoList />
    },
    {
      path: '/user-list',
      element: <UserList />,
      loader: userListLoader
    },
    {
      path: '/user-entitlements-list',
      element: <UserEntitlementsList />,
      loader: userEntitlementsListLoader
    },
    {
      path: '/workitems-list',
      element: <WorkItemsList />
    },
    {
      path: 'workitems',
      element: (
        <ErrorBoundary>
          <WorkItemsPage />
        </ErrorBoundary>
      )
    },
    {
      path: 'builds',
      element: (
        <ErrorBoundary>
          <BuildsPage />
        </ErrorBoundary>
      )
    },
    {
      path: 'commits',
      element: (
        <ErrorBoundary>
          <CommitsPage />
        </ErrorBoundary>
      )
    },
    {
      path: 'pull-requests',
      element: (
        <ErrorBoundary>
          <PullRequestsPage />
        </ErrorBoundary>
      )
    },
    {
      path: '*',
      element: <Navigate to="/error/404" />
    }
  ]
};

export default MainRoutes;
