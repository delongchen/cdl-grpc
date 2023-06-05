// package: auth
// file: auth/jwt.proto

import * as jspb from "google-protobuf";
import * as auth_user_pb from "../auth/user_pb";

export class SignPayload extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): void;

  getMail(): string;
  setMail(value: string): void;

  getUserName(): string;
  setUserName(value: string): void;

  getRemember(): boolean;
  setRemember(value: boolean): void;

  getType(): auth_user_pb.UserTypeMap[keyof auth_user_pb.UserTypeMap];
  setType(value: auth_user_pb.UserTypeMap[keyof auth_user_pb.UserTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignPayload.AsObject;
  static toObject(includeInstance: boolean, msg: SignPayload): SignPayload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignPayload;
  static deserializeBinaryFromReader(message: SignPayload, reader: jspb.BinaryReader): SignPayload;
}

export namespace SignPayload {
  export type AsObject = {
    userId: number,
    mail: string,
    userName: string,
    remember: boolean,
    type: auth_user_pb.UserTypeMap[keyof auth_user_pb.UserTypeMap],
  }
}

export class SignRequest extends jspb.Message {
  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): SignPayload | undefined;
  setPayload(value?: SignPayload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SignRequest): SignRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignRequest;
  static deserializeBinaryFromReader(message: SignRequest, reader: jspb.BinaryReader): SignRequest;
}

export namespace SignRequest {
  export type AsObject = {
    payload?: SignPayload.AsObject,
  }
}

export class SignResponse extends jspb.Message {
  getCode(): ResponseCodeMap[keyof ResponseCodeMap];
  setCode(value: ResponseCodeMap[keyof ResponseCodeMap]): void;

  getMsg(): string;
  setMsg(value: string): void;

  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SignResponse): SignResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignResponse;
  static deserializeBinaryFromReader(message: SignResponse, reader: jspb.BinaryReader): SignResponse;
}

export namespace SignResponse {
  export type AsObject = {
    code: ResponseCodeMap[keyof ResponseCodeMap],
    msg: string,
    token: string,
  }
}

export interface ResponseCodeMap {
  OK: 0;
  ERR: 1;
}

export const ResponseCode: ResponseCodeMap;

