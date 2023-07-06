// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var tser_tracker_pb = require('../tser/tracker_pb.js');

function serialize_tser_ClientRegisterRequest(arg) {
  if (!(arg instanceof tser_tracker_pb.ClientRegisterRequest)) {
    throw new Error('Expected argument of type tser.ClientRegisterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tser_ClientRegisterRequest(buffer_arg) {
  return tser_tracker_pb.ClientRegisterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tser_ClientRegisterResponse(arg) {
  if (!(arg instanceof tser_tracker_pb.ClientRegisterResponse)) {
    throw new Error('Expected argument of type tser.ClientRegisterResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tser_ClientRegisterResponse(buffer_arg) {
  return tser_tracker_pb.ClientRegisterResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tser_GetPeerRequest(arg) {
  if (!(arg instanceof tser_tracker_pb.GetPeerRequest)) {
    throw new Error('Expected argument of type tser.GetPeerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tser_GetPeerRequest(buffer_arg) {
  return tser_tracker_pb.GetPeerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tser_GetPeerResponse(arg) {
  if (!(arg instanceof tser_tracker_pb.GetPeerResponse)) {
    throw new Error('Expected argument of type tser.GetPeerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tser_GetPeerResponse(buffer_arg) {
  return tser_tracker_pb.GetPeerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var TserTrackerService = exports.TserTrackerService = {
  register: {
    path: '/tser.TserTracker/Register',
    requestStream: false,
    responseStream: false,
    requestType: tser_tracker_pb.ClientRegisterRequest,
    responseType: tser_tracker_pb.ClientRegisterResponse,
    requestSerialize: serialize_tser_ClientRegisterRequest,
    requestDeserialize: deserialize_tser_ClientRegisterRequest,
    responseSerialize: serialize_tser_ClientRegisterResponse,
    responseDeserialize: deserialize_tser_ClientRegisterResponse,
  },
  getPeer: {
    path: '/tser.TserTracker/GetPeer',
    requestStream: false,
    responseStream: false,
    requestType: tser_tracker_pb.GetPeerRequest,
    responseType: tser_tracker_pb.GetPeerResponse,
    requestSerialize: serialize_tser_GetPeerRequest,
    requestDeserialize: deserialize_tser_GetPeerRequest,
    responseSerialize: serialize_tser_GetPeerResponse,
    responseDeserialize: deserialize_tser_GetPeerResponse,
  },
};

exports.TserTrackerClient = grpc.makeGenericClientConstructor(TserTrackerService);
