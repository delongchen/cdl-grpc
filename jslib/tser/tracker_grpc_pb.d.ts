// GENERATED CODE -- DO NOT EDIT!

// package: tser
// file: tser/tracker.proto

import * as tser_tracker_pb from "../tser/tracker_pb";
import * as grpc from "@grpc/grpc-js";

interface ITserTrackerService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  register: grpc.MethodDefinition<tser_tracker_pb.ClientRegisterRequest, tser_tracker_pb.ClientRegisterResponse>;
  getPeer: grpc.MethodDefinition<tser_tracker_pb.GetPeerRequest, tser_tracker_pb.GetPeerResponse>;
}

export const TserTrackerService: ITserTrackerService;

export interface ITserTrackerServer extends grpc.UntypedServiceImplementation {
  register: grpc.handleUnaryCall<tser_tracker_pb.ClientRegisterRequest, tser_tracker_pb.ClientRegisterResponse>;
  getPeer: grpc.handleUnaryCall<tser_tracker_pb.GetPeerRequest, tser_tracker_pb.GetPeerResponse>;
}

export class TserTrackerClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  register(argument: tser_tracker_pb.ClientRegisterRequest, callback: grpc.requestCallback<tser_tracker_pb.ClientRegisterResponse>): grpc.ClientUnaryCall;
  register(argument: tser_tracker_pb.ClientRegisterRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<tser_tracker_pb.ClientRegisterResponse>): grpc.ClientUnaryCall;
  register(argument: tser_tracker_pb.ClientRegisterRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<tser_tracker_pb.ClientRegisterResponse>): grpc.ClientUnaryCall;
  getPeer(argument: tser_tracker_pb.GetPeerRequest, callback: grpc.requestCallback<tser_tracker_pb.GetPeerResponse>): grpc.ClientUnaryCall;
  getPeer(argument: tser_tracker_pb.GetPeerRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<tser_tracker_pb.GetPeerResponse>): grpc.ClientUnaryCall;
  getPeer(argument: tser_tracker_pb.GetPeerRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<tser_tracker_pb.GetPeerResponse>): grpc.ClientUnaryCall;
}
