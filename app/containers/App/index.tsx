import * as React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styles/styled-components';
import { Switch, Route, Link } from 'react-router-dom';

import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';

import MetaEditorPage from 'containers/MetaEditorPage';
import JsonEditorPage from 'containers/JsonEditorPage';
import { Grid } from '@material-ui/core';
import GlobalStyle from '../../global-styles';

const AppStyle = styled(Grid)`
  margin: 0 auto;
`;

const AppRoutes = [
  {
    name: 'JSON',
    path: '/',
    exact: true,
    component: JsonEditorPage,
  },
  {
    name: 'Metadata',
    path: '/meta-editor',
    exact: false,
    component: MetaEditorPage,
  },
];

export default function App() {
  return (
    <AppStyle>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Header>
        {AppRoutes.map(({ name, path }) => (
          <Link to={path}>{name}</Link>
        ))}
      </Header>
      <Switch>
        {AppRoutes.map(({ component, path, exact }) => (
          <Route exact={exact} path={path} component={component} />
        ))}
        <Route path="" component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </AppStyle>
  );
}
