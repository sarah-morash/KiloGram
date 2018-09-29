import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLBoolean
} from "graphql/type";

import Exercises from "../../mongoose/exercises";
import Users from "../../mongoose/users";

/**
 * generate projection object for mongoose
 * @param  {Object} fieldASTs
 * @return {Project}
 */
export function getProjection(fieldASTs) {
  return fieldASTs.fieldNodes[0].selectionSet.selections.reduce(
    (projections, selection) => {
      projections[selection.name.value] = true;
      return projections;
    },
    {}
  );
}

var userType = new GraphQLObjectType({
  name: "user",
  description: "user item",
  fields: () => ({
    name: {
      type: GraphQLString,
      description: "User name"
    },
    email: {
      type: GraphQLString,
      description: "User email address"
    },
    password: {
      type: GraphQLString,
      description: "User password"
    },
    dateCreated: {
      type: GraphQLString,
      description: "Date user is created"
    }
  })
});

var exerciseType = new GraphQLObjectType({
  name: "exercise",
  description: "exercise item",
  fields: () => ({
    name: {
      type: GraphQLString,
      description: "The name of the exercise"
    }
  })
});

var schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
      exercise: {
        type: new GraphQLList(exerciseType),
        args: {
          name: {
            name: "name",
            type: new GraphQLObjectType(GraphQLString)
          }
        },
        resolve: (root, { _id }, source, fieldASTs) => {
          var projections = getProjection(fieldASTs);
          var foundItems = new Promise((resolve, reject) => {
            Exercises.find({ _id }, projections, (err, exercises) => {
              err ? reject(err) : resolve(exercises);
            });
          });

          return foundItems;
        }
      },
      user: {
        type: new GraphQLList(userType),
        args: {
          name: {
            name: "name",
            type: new GraphQLObjectType(GraphQLString)
          },
          email: {
            name: "email",
            type: new GraphQLObjectType(GraphQLString)
          },
          password: {
            name: "password",
            type: new GraphQLObjectType(GraphQLString)
          },
          dateCreated: {
            name: "dateCreated",
            type: new GraphQLObjectType(GraphQLString)
          }
        },
        resolve: (root, { itemId }, source, fieldASTs) => {
          var projections = getProjection(fieldASTs);
          var foundItems = new Promise((resolve, reject) => {
            Users.find({ _id }, projections, (err, users) => {
              err ? reject(err) : resolve(users);
            });
          });

          return foundItems;
        }
      }
    }
  })
});

export default schema;
