import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import AppLayout from './layout/default';
import {ProtectedRoutedContent, RoutedContent} from './routes';
import {getUser} from "./services/auth";

const basePath = process.env.BASE_PATH || '/';
const user = getUser()
const AppClient = () => {
  return (
      <Router basename={ basePath }>
        <AppLayout>
            {user && <ProtectedRoutedContent />}
            {!user && <RoutedContent />}
        </AppLayout>
      </Router>
  );
}

export default AppClient;