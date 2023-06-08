// GENERATED CODE -- DO NOT EDIT!

// package: gateway
// file: gateway/life.proto

import * as gateway_life_pb from "../gateway/life_pb";
import * as grpc from "@grpc/grpc-js";

interface IGatewayService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  ping: grpc.MethodDefinition<gateway_life_pb.Ping, gateway_life_pb.Pong>;
  register: grpc.MethodDefinition<gateway_life_pb.RegisterRequest, gateway_life_pb.RegisterResponse>;
}

export const GatewayService: IGatewayService;

export interface IGatewayServer extends grpc.UntypedServiceImplementation {
  ping: grpc.handleUnaryCall<gateway_life_pb.Ping, gateway_life_pb.Pong>;
  register: grpc.handleUnaryCall<gateway_life_pb.RegisterRequest, gateway_life_pb.RegisterResponse>;
}

export class GatewayClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  ping(argument: gateway_life_pb.Ping, callback: grpc.requestCallback<gateway_life_pb.Pong>): grpc.ClientUnaryCall;
  ping(argument: gateway_life_pb.Ping, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<gateway_life_pb.Pong>): grpc.ClientUnaryCall;
  ping(argument: gateway_life_pb.Ping, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<gateway_life_pb.Pong>): grpc.ClientUnaryCall;
  register(argument: gateway_life_pb.RegisterRequest, callback: grpc.requestCallback<gateway_life_pb.RegisterResponse>): grpc.ClientUnaryCall;
  register(argument: gateway_life_pb.RegisterRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<gateway_life_pb.RegisterResponse>): grpc.ClientUnaryCall;
  register(argument: gateway_life_pb.RegisterRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<gateway_life_pb.RegisterResponse>): grpc.ClientUnaryCall;
}
