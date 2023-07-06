// package: tser
// file: tser/tracker.proto

import * as jspb from "google-protobuf";

export class ClientRegisterRequest extends jspb.Message {
  clearUrllistList(): void;
  getUrllistList(): Array<string>;
  setUrllistList(value: Array<string>): void;
  addUrllist(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientRegisterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ClientRegisterRequest): ClientRegisterRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientRegisterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientRegisterRequest;
  static deserializeBinaryFromReader(message: ClientRegisterRequest, reader: jspb.BinaryReader): ClientRegisterRequest;
}

export namespace ClientRegisterRequest {
  export type AsObject = {
    urllistList: Array<string>,
  }
}

export class ClientRegisterResponse extends jspb.Message {
  clearErrlistList(): void;
  getErrlistList(): Array<string>;
  setErrlistList(value: Array<string>): void;
  addErrlist(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientRegisterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ClientRegisterResponse): ClientRegisterResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientRegisterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientRegisterResponse;
  static deserializeBinaryFromReader(message: ClientRegisterResponse, reader: jspb.BinaryReader): ClientRegisterResponse;
}

export namespace ClientRegisterResponse {
  export type AsObject = {
    errlistList: Array<string>,
  }
}

export class GetPeerRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPeerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPeerRequest): GetPeerRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPeerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPeerRequest;
  static deserializeBinaryFromReader(message: GetPeerRequest, reader: jspb.BinaryReader): GetPeerRequest;
}

export namespace GetPeerRequest {
  export type AsObject = {
  }
}

export class GetPeerResponse extends jspb.Message {
  clearUrllistList(): void;
  getUrllistList(): Array<string>;
  setUrllistList(value: Array<string>): void;
  addUrllist(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPeerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPeerResponse): GetPeerResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPeerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPeerResponse;
  static deserializeBinaryFromReader(message: GetPeerResponse, reader: jspb.BinaryReader): GetPeerResponse;
}

export namespace GetPeerResponse {
  export type AsObject = {
    urllistList: Array<string>,
  }
}

