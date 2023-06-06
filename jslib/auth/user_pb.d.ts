// package: auth
// file: auth/user.proto

import * as jspb from "google-protobuf";

export class LoginRequest extends jspb.Message {
  getMail(): string;
  setMail(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  getRemember(): boolean;
  setRemember(value: boolean): void;

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
    mail: string,
    password: string,
    remember: boolean,
  }
}

export class LoginResponse extends jspb.Message {
  getStatus(): LoginStatusMap[keyof LoginStatusMap];
  setStatus(value: LoginStatusMap[keyof LoginStatusMap]): void;

  getMsg(): string;
  setMsg(value: string): void;

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
    msg: string,
  }
}

export class RegisterRequest extends jspb.Message {
  getMail(): string;
  setMail(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

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
    mail: string,
    password: string,
  }
}

export class RegisterResponse extends jspb.Message {
  getStatus(): RegisterStatusMap[keyof RegisterStatusMap];
  setStatus(value: RegisterStatusMap[keyof RegisterStatusMap]): void;

  getMsg(): string;
  setMsg(value: string): void;

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
    msg: string,
  }
}

export class MailRequest extends jspb.Message {
  getMail(): string;
  setMail(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MailRequest): MailRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MailRequest;
  static deserializeBinaryFromReader(message: MailRequest, reader: jspb.BinaryReader): MailRequest;
}

export namespace MailRequest {
  export type AsObject = {
    mail: string,
  }
}

export class MailResponse extends jspb.Message {
  getStatus(): MailStatusMap[keyof MailStatusMap];
  setStatus(value: MailStatusMap[keyof MailStatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MailResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MailResponse): MailResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MailResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MailResponse;
  static deserializeBinaryFromReader(message: MailResponse, reader: jspb.BinaryReader): MailResponse;
}

export namespace MailResponse {
  export type AsObject = {
    status: MailStatusMap[keyof MailStatusMap],
  }
}

export interface UserTypeMap {
  BOSS: 0;
  ADMIN: 1;
  NORMAL: 2;
  BLACK: 3;
}

export const UserType: UserTypeMap;

export interface LoginStatusMap {
  LOGIN_OK: 0;
  ERROR_PASSWORD: 1;
  ERROR_NAME: 2;
}

export const LoginStatus: LoginStatusMap;

export interface RegisterStatusMap {
  REGISTER_OK: 0;
  ERROR_NAME_EXIST: 1;
  ERROR_PASSWORD_ILLEGAL: 2;
}

export const RegisterStatus: RegisterStatusMap;

export interface MailStatusMap {
  SEND_OK: 0;
  ERROR_MAIL_ADDR: 1;
  ERROR_MAIL_SEND: 2;
}

export const MailStatus: MailStatusMap;

