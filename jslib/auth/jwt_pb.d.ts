// package: auth
// file: auth/jwt.proto

import * as jspb from "google-protobuf";

export class SignPayload extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): void;

  getMail(): string;
  setMail(value: string): void;

  getUserName(): string;
  setUserName(value: string): void;

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

export class CheckRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CheckRequest): CheckRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CheckRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckRequest;
  static deserializeBinaryFromReader(message: CheckRequest, reader: jspb.BinaryReader): CheckRequest;
}

export namespace CheckRequest {
  export type AsObject = {
    token: string,
  }
}

export class CheckResponse extends jspb.Message {
  getCode(): ResponseCodeMap[keyof ResponseCodeMap];
  setCode(value: ResponseCodeMap[keyof ResponseCodeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CheckResponse): CheckResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CheckResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckResponse;
  static deserializeBinaryFromReader(message: CheckResponse, reader: jspb.BinaryReader): CheckResponse;
}

export namespace CheckResponse {
  export type AsObject = {
    code: ResponseCodeMap[keyof ResponseCodeMap],
  }
}

export interface ResponseCodeMap {
  OK: 0;
  ERR: 1;
}

export const ResponseCode: ResponseCodeMap;

