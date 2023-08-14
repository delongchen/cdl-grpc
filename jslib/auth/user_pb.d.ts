// package: auth
// file: auth/user.proto

import * as jspb from "google-protobuf";

export class LoginRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  getKeep(): boolean;
  setKeep(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoginRequest): LoginRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginRequest;
  static deserializeBinaryFromReader(message: LoginRequest, reader: jspb.BinaryReader): LoginRequest;
}

export namespace LoginRequest {
  export type AsObject = {
    email: string,
    password: string,
    keep: boolean,
  }
}

export class LoginResponse extends jspb.Message {
  getStatus(): LoginStatusMap[keyof LoginStatusMap];
  setStatus(value: LoginStatusMap[keyof LoginStatusMap]): void;

  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LoginResponse): LoginResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginResponse;
  static deserializeBinaryFromReader(message: LoginResponse, reader: jspb.BinaryReader): LoginResponse;
}

export namespace LoginResponse {
  export type AsObject = {
    status: LoginStatusMap[keyof LoginStatusMap],
    token: string,
  }
}

export class RegisterRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  getCode(): string;
  setCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterRequest): RegisterRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegisterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterRequest;
  static deserializeBinaryFromReader(message: RegisterRequest, reader: jspb.BinaryReader): RegisterRequest;
}

export namespace RegisterRequest {
  export type AsObject = {
    email: string,
    password: string,
    code: string,
  }
}

export class RegisterResponse extends jspb.Message {
  getStatus(): RegisterStatusMap[keyof RegisterStatusMap];
  setStatus(value: RegisterStatusMap[keyof RegisterStatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterResponse): RegisterResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegisterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterResponse;
  static deserializeBinaryFromReader(message: RegisterResponse, reader: jspb.BinaryReader): RegisterResponse;
}

export namespace RegisterResponse {
  export type AsObject = {
    status: RegisterStatusMap[keyof RegisterStatusMap],
  }
}

export class CheckTokenRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  getAction(): string;
  setAction(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckTokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CheckTokenRequest): CheckTokenRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CheckTokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckTokenRequest;
  static deserializeBinaryFromReader(message: CheckTokenRequest, reader: jspb.BinaryReader): CheckTokenRequest;
}

export namespace CheckTokenRequest {
  export type AsObject = {
    token: string,
    action: string,
  }
}

export class CheckTokenResponse extends jspb.Message {
  getStatus(): TokenStatusMap[keyof TokenStatusMap];
  setStatus(value: TokenStatusMap[keyof TokenStatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckTokenResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CheckTokenResponse): CheckTokenResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CheckTokenResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckTokenResponse;
  static deserializeBinaryFromReader(message: CheckTokenResponse, reader: jspb.BinaryReader): CheckTokenResponse;
}

export namespace CheckTokenResponse {
  export type AsObject = {
    status: TokenStatusMap[keyof TokenStatusMap],
  }
}

export interface LoginStatusMap {
  LOGIN_OK: 0;
  EMAIL_NOT_EXIST: 1;
  PASSWORD_ERROR: 2;
  LOGIN_INTERNAL_ERROR: 3;
}

export const LoginStatus: LoginStatusMap;

export interface RegisterStatusMap {
  REGISTER_OK: 0;
  VERIFY_CODE_ERROR: 1;
  REGISTER_INTERNAL_ERROR: 2;
  USER_ALREADY_EXIST: 3;
}

export const RegisterStatus: RegisterStatusMap;

export interface TokenStatusMap {
  TOKEN_OK: 0;
  TOKEN_EXPIRED: 1;
  TOKEN_CHANGED: 2;
  TOKEN_IS_NOT_RSA: 3;
}

export const TokenStatus: TokenStatusMap;

