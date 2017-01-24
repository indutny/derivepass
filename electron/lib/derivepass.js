'use strict';

const React = require('react');
const ReactDOM = require('react-dom');

const derivepass = exports;

derivepass.env = process.env.NODE_ENV === 'production' ?
    'production' : 'development';

// CloudKit requires cookies... Emulate them!
require('./derivepass/utils/local-cookie').env = derivepass.env;

// Various
derivepass.Cryptor = require('./derivepass/cryptor');

// Redux definitions

const redux = {};
derivepass.redux = redux;
redux.actions = require('./derivepass/redux/actions');
redux.reducers = require('./derivepass/redux/reducers');

// React components

const components = {};
derivepass.components = components;

components.Emoji = require('./derivepass/components/emoji');
components.MasterPassword = require('./derivepass/components/master-password');
components.Config = require('./derivepass/components/config');
components.LocalStorage = require('./derivepass/components/local-storage');
components.RemoteStorage = require('./derivepass/components/remote-storage');
components.TabView = require('./derivepass/components/tab-view');
components.Page = require('./derivepass/components/page');

derivepass.start = (id) => {
  ReactDOM.render(React.createElement(components.Page),
                  document.getElementById(id));
};
