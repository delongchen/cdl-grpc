// GENERATED CODE -- DO NOT EDIT!

// package: auth
// file: auth/user.proto

import * as auth_user_pb from "../auth/user_pb";
import * as grpc from "@grpc/grpc-js";

interface IUserService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  login: grpc.MethodDefinition<auth_user_pb.LoginRequest, auth_user_pb.LoginResponse>;
  register: grpc.MethodDefinition<auth_user_pb.RegisterRequest, auth_user_pb.RegisterResponse>;
  check: grpc.MethodDefinition<auth_user_pb.CheckTokenRequest, auth_user_pb.CheckTokenResponse>;
}

export const UserService: IUserService;

export interface IUserServer extends grpc.UntypedServiceImplementation {
  login: grpc.handleUnaryCall<auth_user_pb.LoginRequest, auth_user_pb.LoginResponse>;
  register: grpc.handleUnaryCall<auth_user_pb.RegisterRequest, auth_user_pb.RegisterResponse>;
  check: grpc.handleUnaryCall<auth_user_pb.CheckTokenRequest, auth_user_pb.CheckTokenResponse>;
}

export class UserClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  login(argument: auth_user_pb.LoginRequest, callback: grpc.requestCallback<auth_user_pb.LoginResponse>): grpc.ClientUnaryCall;
  login(argument: auth_user_pb.LoginRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<auth_user_pb.LoginResponse>): grpc.ClientUnaryCall;
  login(argument: auth_user_pb.LoginRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<auth_user_pb.LoginResponse>): grpc.ClientUnaryCall;
  register(argument: auth_user_pb.RegisterRequest, callback: grpc.requestCallback<auth_user_pb.RegisterResponse>): grpc.ClientUnaryCall;
  register(argument: auth_user_pb.RegisterRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<auth_user_pb.RegisterResponse>): grpc.ClientUnaryCall;
  register(argument: auth_user_pb.RegisterRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<auth_user_pb.RegisterResponse>): grpc.ClientUnaryCall;
  check(argument: auth_user_pb.CheckTokenRequest, callback: grpc.requestCallback<auth_user_pb.CheckTokenResponse>): grpc.ClientUnaryCall;
  check(argument: auth_user_pb.CheckTokenRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<auth_user_pb.CheckTokenResponse>): grpc.ClientUnaryCall;
  check(argument: auth_user_pb.CheckTokenRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<auth_user_pb.CheckTokenResponse>): grpc.ClientUnaryCall;
}
