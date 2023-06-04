// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var auth_jwt_pb = require('../auth/jwt_pb.js');

function serialize_auth_SignRequest(arg) {
  if (!(arg instanceof auth_jwt_pb.SignRequest)) {
    throw new Error('Expected argument of type auth.SignRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_SignRequest(buffer_arg) {
  return auth_jwt_pb.SignRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_SignResponse(arg) {
  if (!(arg instanceof auth_jwt_pb.SignResponse)) {
    throw new Error('Expected argument of type auth.SignResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_SignResponse(buffer_arg) {
  return auth_jwt_pb.SignResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AuthJWTService = exports.AuthJWTService = {
  sign: {
    path: '/auth.AuthJWT/Sign',
    requestStream: false,
    responseStream: false,
    requestType: auth_jwt_pb.SignRequest,
    responseType: auth_jwt_pb.SignResponse,
    requestSerialize: serialize_auth_SignRequest,
    requestDeserialize: deserialize_auth_SignRequest,
    responseSerialize: serialize_auth_SignResponse,
    responseDeserialize: deserialize_auth_SignResponse,
  },
};

exports.AuthJWTClient = grpc.makeGenericClientConstructor(AuthJWTService);
