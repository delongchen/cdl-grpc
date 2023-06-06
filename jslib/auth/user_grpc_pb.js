// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var auth_user_pb = require('../auth/user_pb.js');

function serialize_auth_LoginRequest(arg) {
  if (!(arg instanceof auth_user_pb.LoginRequest)) {
    throw new Error('Expected argument of type auth.LoginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_LoginRequest(buffer_arg) {
  return auth_user_pb.LoginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_LoginResponse(arg) {
  if (!(arg instanceof auth_user_pb.LoginResponse)) {
    throw new Error('Expected argument of type auth.LoginResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_LoginResponse(buffer_arg) {
  return auth_user_pb.LoginResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_MailRequest(arg) {
  if (!(arg instanceof auth_user_pb.MailRequest)) {
    throw new Error('Expected argument of type auth.MailRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_MailRequest(buffer_arg) {
  return auth_user_pb.MailRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_MailResponse(arg) {
  if (!(arg instanceof auth_user_pb.MailResponse)) {
    throw new Error('Expected argument of type auth.MailResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_MailResponse(buffer_arg) {
  return auth_user_pb.MailResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_RegisterRequest(arg) {
  if (!(arg instanceof auth_user_pb.RegisterRequest)) {
    throw new Error('Expected argument of type auth.RegisterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_RegisterRequest(buffer_arg) {
  return auth_user_pb.RegisterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_RegisterResponse(arg) {
  if (!(arg instanceof auth_user_pb.RegisterResponse)) {
    throw new Error('Expected argument of type auth.RegisterResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_RegisterResponse(buffer_arg) {
  return auth_user_pb.RegisterResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserService = exports.UserService = {
  login: {
    path: '/auth.User/login',
    requestStream: false,
    responseStream: false,
    requestType: auth_user_pb.LoginRequest,
    responseType: auth_user_pb.LoginResponse,
    requestSerialize: serialize_auth_LoginRequest,
    requestDeserialize: deserialize_auth_LoginRequest,
    responseSerialize: serialize_auth_LoginResponse,
    responseDeserialize: deserialize_auth_LoginResponse,
  },
  register: {
    path: '/auth.User/register',
    requestStream: false,
    responseStream: false,
    requestType: auth_user_pb.RegisterRequest,
    responseType: auth_user_pb.RegisterResponse,
    requestSerialize: serialize_auth_RegisterRequest,
    requestDeserialize: deserialize_auth_RegisterRequest,
    responseSerialize: serialize_auth_RegisterResponse,
    responseDeserialize: deserialize_auth_RegisterResponse,
  },
  mail: {
    path: '/auth.User/mail',
    requestStream: false,
    responseStream: false,
    requestType: auth_user_pb.MailRequest,
    responseType: auth_user_pb.MailResponse,
    requestSerialize: serialize_auth_MailRequest,
    requestDeserialize: deserialize_auth_MailRequest,
    responseSerialize: serialize_auth_MailResponse,
    responseDeserialize: deserialize_auth_MailResponse,
  },
};

exports.UserClient = grpc.makeGenericClientConstructor(UserService);
