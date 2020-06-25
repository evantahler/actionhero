export const DEFAULT = {
  errors: (config) => {
    return {
      _toExpand: false,

      // ///////////////
      // SERIALIZERS //
      // ///////////////

      serializers: {
        servers: {
          web: (error) => {
            return {
              message: error.message ? error.message : String(error),
              code: error.code,
            };
          },
          websocket: (error) => {
            return {
              message: error.message ? error.message : String(error),
              code: error.code,
            };
          },
          specHelper: (error) => {
            return {
              message: error.message ? error.message : String(error),
              code: error.code,
            };
          },
        },
      },

      // ///////////
      // ACTIONS //
      // ///////////

      // When a params for an action is invalid
      invalidParams: (data, validationErrors) => {
        if (validationErrors.length >= 0) {
          return validationErrors[0];
        }
        return data.connection.localize("actionhero.errors.invalidParams");
      },

      // When a required param for an action is not provided
      missingParams: (data, missingParams) => {
        return data.connection.localize([
          "actionhero.errors.missingParams",
          { param: missingParams[0] },
        ]);
      },

      // user requested an unknown action
      unknownAction: (data) => {
        return data.connection.localize("actionhero.errors.unknownAction");
      },

      // action not useable by this client/server type
      unsupportedServerType: (data) => {
        return data.connection.localize([
          "actionhero.errors.unsupportedServerType",
          { type: data.connection.type },
        ]);
      },

      // action failed because server is mid-shutdown
      serverShuttingDown: (data) => {
        return data.connection.localize("actionhero.errors.serverShuttingDown");
      },

      // action failed because this client already has too many pending actions
      // limit defined in api.config.general.simultaneousActions
      tooManyPendingActions: (data) => {
        return data.connection.localize(
          "actionhero.errors.tooManyPendingActions"
        );
      },

      // Decorate your response based on Error here.
      // Any action that throws an Error will pass through this method before returning
      //   an error to the client. Response can be edited here, status codes changed, etc.
      async genericError(data, error) {
        return error;
      },

      // ///////////////
      // FILE SERVER //
      // ///////////////

      // The body message to accompany 404 (file not found) errors regarding flat files
      // You may want to load in the content of 404.html or similar
      fileNotFound: (connection) => {
        return connection.localize(["actionhero.errors.fileNotFound"]);
      },

      // user didn't request a file
      fileNotProvided: (connection) => {
        return connection.localize("actionhero.errors.fileNotProvided");
      },

      // something went wrong trying to read the file
      fileReadError: (connection, error) => {
        return connection.localize([
          "actionhero.errors.fileReadError",
          { error: String(error) },
        ]);
      },

      // ///////////////
      // CONNECTIONS //
      // ///////////////

      verbNotFound: (connection, verb) => {
        return connection.localize([
          "actionhero.errors.verbNotFound",
          { verb: verb },
        ]);
      },

      verbNotAllowed: (connection, verb) => {
        return connection.localize([
          "actionhero.errors.verbNotAllowed",
          { verb: verb },
        ]);
      },

      connectionRoomAndMessage: (connection) => {
        return connection.localize(
          "actionhero.errors.connectionRoomAndMessage"
        );
      },

      connectionNotInRoom: (connection, room) => {
        return connection.localize([
          "actionhero.errors.connectionNotInRoom",
          { room: room },
        ]);
      },

      connectionAlreadyInRoom: (connection, room) => {
        return connection.localize([
          "actionhero.errors.connectionAlreadyInRoom",
          { room: room },
        ]);
      },

      connectionRoomHasBeenDeleted: (room) => {
        return "this room has been deleted";
      },

      connectionRoomNotExist: (room) => {
        return "room does not exist";
      },

      connectionRoomExists: (room) => {
        return "room exists";
      },

      connectionRoomRequired: (room) => {
        return "a room is required";
      },
    };
  },
};
