// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { CalendarTwoTone, ContainerTwoTone, FileTextTwoTone, FunnelPlotTwoTone, TagTwoTone } from '@ant-design/icons';
import { BuildOutlined, AssignmentOutlined, CodeOutlined, MergeOutlined } from '@mui/icons-material';

// icons
const icons = {
  CalendarTwoTone, ContainerTwoTone, FileTextTwoTone, FunnelPlotTwoTone, TagTwoTone
};

// ==============================|| MENU ITEMS - ADMIN ||============================== //

const admin = {
  id: 'admin',
  title: 'Yönetim',
  type: 'group',
  children: [
    {
      id: 'projects',
      title: <FormattedMessage id="projects" />,
      type: 'collapse',
      icon: icons.FileTextTwoTone,
      children: [
        {
          id: 'project-list',
          title: <FormattedMessage id="project-list" />,
          type: 'item',
          url: '/project-list',
          icon: icons.FileTextTwoTone
        }
      ]
    },
    {
      id: 'repos',
      title: <FormattedMessage id="repos" />,
      type: 'collapse',
      icon: icons.FileTextTwoTone,
      children: [
        {
          id: 'repo-list',
          title: <FormattedMessage id="repo-list" />,
          type: 'item',
          url: '/repo-list',
          icon: icons.FileTextTwoTone
        }
      ]
    },
    {
      id: 'users',
      title: <FormattedMessage id="users" />,
      type: 'collapse',
      icon: icons.FileTextTwoTone,
      children: [
        // {
        //   id: 'user-list',
        //   title: <FormattedMessage id="user-list" />,
        //   type: 'item',
        //   url: '/user-list',
        //   icon: icons.FileTextTwoTone,
        //   // target: true // open in new tab
        // },
        {
          id: 'user-entitlements-list',
          title: <FormattedMessage id="user-entitlements-list" />,
          type: 'item',
          url: '/user-entitlements-list',
          icon: icons.FileTextTwoTone
        }
      ]
    },
    {
      id: 'workitems2',
      title: <FormattedMessage id="workitems" />,
      type: 'collapse',
      icon: icons.FileTextTwoTone,
      children: [
        {
          id: 'workitems-list',
          title: <FormattedMessage id="workitems-list" />,
          type: 'item',
          url: '/workitems-list',
          icon: icons.FileTextTwoTone
        }
      ],
      breadcrumbs: false
    },
    {
      id: 'workitems',
      title: 'Work Items',
      type: 'item',
      url: '/workitems',
      icon: AssignmentOutlined,
      breadcrumbs: false
    },
    {
      id: 'builds',
      title: 'Builds',
      type: 'item',
      url: '/builds',
      icon: BuildOutlined,
      breadcrumbs: false
    },
    {
      id: 'commits',
      title: 'Commits',
      type: 'item',
      url: '/commits',
      icon: CodeOutlined,
      breadcrumbs: false
    },
    {
      id: 'pull-requests',
      title: 'Pull Requests',
      type: 'item',
      url: '/pull-requests',
      icon: MergeOutlined,
      breadcrumbs: false
    }
  ]
};

export default admin;
