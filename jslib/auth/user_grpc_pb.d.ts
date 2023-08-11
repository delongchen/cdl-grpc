// GENERATED CODE -- DO NOT EDIT!

// package: auth
// file: auth/user.proto

import * as auth_user_pb from "../auth/user_pb";
import * as grpc from "@grpc/grpc-js";

interface IUserService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  login: grpc.MethodDefinition<auth_user_pb.LoginRequest, auth_user_pb.LoginResponse>;
}

export const UserService: IUserService;

export interface IUserServer extends grpc.UntypedServiceImplementation {
  login: grpc.handleUnaryCall<auth_user_pb.LoginRequest, auth_user_pb.LoginResponse>;
}

export class UserClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  login(argument: auth_user_pb.LoginRequest, callback: grpc.requestCallback<auth_user_pb.LoginResponse>): grpc.ClientUnaryCall;
  login(argument: auth_user_pb.LoginRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<auth_user_pb.LoginResponse>): grpc.ClientUnaryCall;
  login(argument: auth_user_pb.LoginRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<auth_user_pb.LoginResponse>): grpc.ClientUnaryCall;
}
