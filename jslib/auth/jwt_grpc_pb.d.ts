// GENERATED CODE -- DO NOT EDIT!

// package: auth
// file: auth/jwt.proto

import * as auth_jwt_pb from "../auth/jwt_pb";
import * as grpc from "@grpc/grpc-js";

interface IAuthJWTService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  sign: grpc.MethodDefinition<auth_jwt_pb.SignRequest, auth_jwt_pb.SignResponse>;
}

export const AuthJWTService: IAuthJWTService;

export interface IAuthJWTServer extends grpc.UntypedServiceImplementation {
  sign: grpc.handleUnaryCall<auth_jwt_pb.SignRequest, auth_jwt_pb.SignResponse>;
}

export class AuthJWTClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  sign(argument: auth_jwt_pb.SignRequest, callback: grpc.requestCallback<auth_jwt_pb.SignResponse>): grpc.ClientUnaryCall;
  sign(argument: auth_jwt_pb.SignRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<auth_jwt_pb.SignResponse>): grpc.ClientUnaryCall;
  sign(argument: auth_jwt_pb.SignRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<auth_jwt_pb.SignResponse>): grpc.ClientUnaryCall;
}
