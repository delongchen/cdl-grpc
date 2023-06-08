// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var gateway_life_pb = require('../gateway/life_pb.js');

function serialize_gateway_Ping(arg) {
  if (!(arg instanceof gateway_life_pb.Ping)) {
    throw new Error('Expected argument of type gateway.Ping');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gateway_Ping(buffer_arg) {
  return gateway_life_pb.Ping.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gateway_Pong(arg) {
  if (!(arg instanceof gateway_life_pb.Pong)) {
    throw new Error('Expected argument of type gateway.Pong');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gateway_Pong(buffer_arg) {
  return gateway_life_pb.Pong.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gateway_RegisterRequest(arg) {
  if (!(arg instanceof gateway_life_pb.RegisterRequest)) {
    throw new Error('Expected argument of type gateway.RegisterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gateway_RegisterRequest(buffer_arg) {
  return gateway_life_pb.RegisterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gateway_RegisterResponse(arg) {
  if (!(arg instanceof gateway_life_pb.RegisterResponse)) {
    throw new Error('Expected argument of type gateway.RegisterResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gateway_RegisterResponse(buffer_arg) {
  return gateway_life_pb.RegisterResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var GatewayService = exports.GatewayService = {
  ping: {
    path: '/gateway.Gateway/ping',
    requestStream: false,
    responseStream: false,
    requestType: gateway_life_pb.Ping,
    responseType: gateway_life_pb.Pong,
    requestSerialize: serialize_gateway_Ping,
    requestDeserialize: deserialize_gateway_Ping,
    responseSerialize: serialize_gateway_Pong,
    responseDeserialize: deserialize_gateway_Pong,
  },
  register: {
    path: '/gateway.Gateway/register',
    requestStream: false,
    responseStream: false,
    requestType: gateway_life_pb.RegisterRequest,
    responseType: gateway_life_pb.RegisterResponse,
    requestSerialize: serialize_gateway_RegisterRequest,
    requestDeserialize: deserialize_gateway_RegisterRequest,
    responseSerialize: serialize_gateway_RegisterResponse,
    responseDeserialize: deserialize_gateway_RegisterResponse,
  },
};

exports.GatewayClient = grpc.makeGenericClientConstructor(GatewayService);
