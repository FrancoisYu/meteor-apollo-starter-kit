import { Meteor } from 'meteor/meteor';
import extend from 'lodash/extend';

/**
 * @namespace Users
 * @summary defines utilities related to User entities.
 */
const Users = {};

// Load client-only or client-server utilities if any

// Load server-only utilities
if (Meteor.isServer) {
  import collection from './server/collection';
  import types from './server/types.graphql';
  import resolvers from './server/resolvers';
  import utilities from './server/utilities';

  extend(Users, { collection, types, resolvers, utilities });
}

export default Users;