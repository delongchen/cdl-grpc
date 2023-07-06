// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.30.0
// 	protoc        v3.21.12
// source: auth/jwt.proto

package auth

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type ResponseCode int32

const (
	ResponseCode_OK               ResponseCode = 0
	ResponseCode_ERROR_EMPTY_BODY ResponseCode = 1
	ResponseCode_ERROR_SERVER     ResponseCode = 2
	ResponseCode_ERROR_UNKNOWN    ResponseCode = 3
)

// Enum value maps for ResponseCode.
var (
	ResponseCode_name = map[int32]string{
		0: "OK",
		1: "ERROR_EMPTY_BODY",
		2: "ERROR_SERVER",
		3: "ERROR_UNKNOWN",
	}
	ResponseCode_value = map[string]int32{
		"OK":               0,
		"ERROR_EMPTY_BODY": 1,
		"ERROR_SERVER":     2,
		"ERROR_UNKNOWN":    3,
	}
)

func (x ResponseCode) Enum() *ResponseCode {
	p := new(ResponseCode)
	*p = x
	return p
}

func (x ResponseCode) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (ResponseCode) Descriptor() protoreflect.EnumDescriptor {
	return file_auth_jwt_proto_enumTypes[0].Descriptor()
}

func (ResponseCode) Type() protoreflect.EnumType {
	return &file_auth_jwt_proto_enumTypes[0]
}

func (x ResponseCode) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use ResponseCode.Descriptor instead.
func (ResponseCode) EnumDescriptor() ([]byte, []int) {
	return file_auth_jwt_proto_rawDescGZIP(), []int{0}
}

type SignPayload struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	UserId   uint32   `protobuf:"varint,1,opt,name=user_id,json=userId,proto3" json:"user_id,omitempty"`
	UserMail string   `protobuf:"bytes,2,opt,name=user_mail,json=userMail,proto3" json:"user_mail,omitempty"`
	UserName string   `protobuf:"bytes,3,opt,name=user_name,json=userName,proto3" json:"user_name,omitempty"`
	Remember bool     `protobuf:"varint,4,opt,name=remember,proto3" json:"remember,omitempty"`
	UserType UserType `protobuf:"varint,5,opt,name=user_type,json=userType,proto3,enum=auth.UserType" json:"user_type,omitempty"`
}

func (x *SignPayload) Reset() {
	*x = SignPayload{}
	if protoimpl.UnsafeEnabled {
		mi := &file_auth_jwt_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SignPayload) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SignPayload) ProtoMessage() {}

func (x *SignPayload) ProtoReflect() protoreflect.Message {
	mi := &file_auth_jwt_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SignPayload.ProtoReflect.Descriptor instead.
func (*SignPayload) Descriptor() ([]byte, []int) {
	return file_auth_jwt_proto_rawDescGZIP(), []int{0}
}

func (x *SignPayload) GetUserId() uint32 {
	if x != nil {
		return x.UserId
	}
	return 0
}

func (x *SignPayload) GetUserMail() string {
	if x != nil {
		return x.UserMail
	}
	return ""
}

func (x *SignPayload) GetUserName() string {
	if x != nil {
		return x.UserName
	}
	return ""
}

func (x *SignPayload) GetRemember() bool {
	if x != nil {
		return x.Remember
	}
	return false
}

func (x *SignPayload) GetUserType() UserType {
	if x != nil {
		return x.UserType
	}
	return UserType_BOSS
}

type SignRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Payload *SignPayload `protobuf:"bytes,1,opt,name=payload,proto3" json:"payload,omitempty"`
}

func (x *SignRequest) Reset() {
	*x = SignRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_auth_jwt_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SignRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SignRequest) ProtoMessage() {}

func (x *SignRequest) ProtoReflect() protoreflect.Message {
	mi := &file_auth_jwt_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SignRequest.ProtoReflect.Descriptor instead.
func (*SignRequest) Descriptor() ([]byte, []int) {
	return file_auth_jwt_proto_rawDescGZIP(), []int{1}
}

func (x *SignRequest) GetPayload() *SignPayload {
	if x != nil {
		return x.Payload
	}
	return nil
}

type SignResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Code  ResponseCode `protobuf:"varint,1,opt,name=code,proto3,enum=auth.ResponseCode" json:"code,omitempty"`
	Msg   string       `protobuf:"bytes,2,opt,name=msg,proto3" json:"msg,omitempty"`
	Token string       `protobuf:"bytes,3,opt,name=token,proto3" json:"token,omitempty"`
}

func (x *SignResponse) Reset() {
	*x = SignResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_auth_jwt_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SignResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SignResponse) ProtoMessage() {}

func (x *SignResponse) ProtoReflect() protoreflect.Message {
	mi := &file_auth_jwt_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SignResponse.ProtoReflect.Descriptor instead.
func (*SignResponse) Descriptor() ([]byte, []int) {
	return file_auth_jwt_proto_rawDescGZIP(), []int{2}
}

func (x *SignResponse) GetCode() ResponseCode {
	if x != nil {
		return x.Code
	}
	return ResponseCode_OK
}

func (x *SignResponse) GetMsg() string {
	if x != nil {
		return x.Msg
	}
	return ""
}

func (x *SignResponse) GetToken() string {
	if x != nil {
		return x.Token
	}
	return ""
}

var File_auth_jwt_proto protoreflect.FileDescriptor

var file_auth_jwt_proto_rawDesc = []byte{
	0x0a, 0x0e, 0x61, 0x75, 0x74, 0x68, 0x2f, 0x6a, 0x77, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x12, 0x04, 0x61, 0x75, 0x74, 0x68, 0x1a, 0x0f, 0x61, 0x75, 0x74, 0x68, 0x2f, 0x75, 0x73, 0x65,
	0x72, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xa9, 0x01, 0x0a, 0x0b, 0x53, 0x69, 0x67, 0x6e,
	0x50, 0x61, 0x79, 0x6c, 0x6f, 0x61, 0x64, 0x12, 0x17, 0x0a, 0x07, 0x75, 0x73, 0x65, 0x72, 0x5f,
	0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x06, 0x75, 0x73, 0x65, 0x72, 0x49, 0x64,
	0x12, 0x1b, 0x0a, 0x09, 0x75, 0x73, 0x65, 0x72, 0x5f, 0x6d, 0x61, 0x69, 0x6c, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x08, 0x75, 0x73, 0x65, 0x72, 0x4d, 0x61, 0x69, 0x6c, 0x12, 0x1b, 0x0a,
	0x09, 0x75, 0x73, 0x65, 0x72, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x08, 0x75, 0x73, 0x65, 0x72, 0x4e, 0x61, 0x6d, 0x65, 0x12, 0x1a, 0x0a, 0x08, 0x72, 0x65,
	0x6d, 0x65, 0x6d, 0x62, 0x65, 0x72, 0x18, 0x04, 0x20, 0x01, 0x28, 0x08, 0x52, 0x08, 0x72, 0x65,
	0x6d, 0x65, 0x6d, 0x62, 0x65, 0x72, 0x12, 0x2b, 0x0a, 0x09, 0x75, 0x73, 0x65, 0x72, 0x5f, 0x74,
	0x79, 0x70, 0x65, 0x18, 0x05, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x0e, 0x2e, 0x61, 0x75, 0x74, 0x68,
	0x2e, 0x55, 0x73, 0x65, 0x72, 0x54, 0x79, 0x70, 0x65, 0x52, 0x08, 0x75, 0x73, 0x65, 0x72, 0x54,
	0x79, 0x70, 0x65, 0x22, 0x3a, 0x0a, 0x0b, 0x53, 0x69, 0x67, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x12, 0x2b, 0x0a, 0x07, 0x70, 0x61, 0x79, 0x6c, 0x6f, 0x61, 0x64, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x0b, 0x32, 0x11, 0x2e, 0x61, 0x75, 0x74, 0x68, 0x2e, 0x53, 0x69, 0x67, 0x6e, 0x50,
	0x61, 0x79, 0x6c, 0x6f, 0x61, 0x64, 0x52, 0x07, 0x70, 0x61, 0x79, 0x6c, 0x6f, 0x61, 0x64, 0x22,
	0x5e, 0x0a, 0x0c, 0x53, 0x69, 0x67, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12,
	0x26, 0x0a, 0x04, 0x63, 0x6f, 0x64, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x12, 0x2e,
	0x61, 0x75, 0x74, 0x68, 0x2e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x43, 0x6f, 0x64,
	0x65, 0x52, 0x04, 0x63, 0x6f, 0x64, 0x65, 0x12, 0x10, 0x0a, 0x03, 0x6d, 0x73, 0x67, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6d, 0x73, 0x67, 0x12, 0x14, 0x0a, 0x05, 0x74, 0x6f, 0x6b,
	0x65, 0x6e, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x2a,
	0x51, 0x0a, 0x0c, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x43, 0x6f, 0x64, 0x65, 0x12,
	0x06, 0x0a, 0x02, 0x4f, 0x4b, 0x10, 0x00, 0x12, 0x14, 0x0a, 0x10, 0x45, 0x52, 0x52, 0x4f, 0x52,
	0x5f, 0x45, 0x4d, 0x50, 0x54, 0x59, 0x5f, 0x42, 0x4f, 0x44, 0x59, 0x10, 0x01, 0x12, 0x10, 0x0a,
	0x0c, 0x45, 0x52, 0x52, 0x4f, 0x52, 0x5f, 0x53, 0x45, 0x52, 0x56, 0x45, 0x52, 0x10, 0x02, 0x12,
	0x11, 0x0a, 0x0d, 0x45, 0x52, 0x52, 0x4f, 0x52, 0x5f, 0x55, 0x4e, 0x4b, 0x4e, 0x4f, 0x57, 0x4e,
	0x10, 0x03, 0x32, 0x3a, 0x0a, 0x07, 0x41, 0x75, 0x74, 0x68, 0x4a, 0x57, 0x54, 0x12, 0x2f, 0x0a,
	0x04, 0x53, 0x69, 0x67, 0x6e, 0x12, 0x11, 0x2e, 0x61, 0x75, 0x74, 0x68, 0x2e, 0x53, 0x69, 0x67,
	0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x12, 0x2e, 0x61, 0x75, 0x74, 0x68, 0x2e,
	0x53, 0x69, 0x67, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x42, 0x08,
	0x5a, 0x06, 0x2e, 0x2f, 0x61, 0x75, 0x74, 0x68, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_auth_jwt_proto_rawDescOnce sync.Once
	file_auth_jwt_proto_rawDescData = file_auth_jwt_proto_rawDesc
)

func file_auth_jwt_proto_rawDescGZIP() []byte {
	file_auth_jwt_proto_rawDescOnce.Do(func() {
		file_auth_jwt_proto_rawDescData = protoimpl.X.CompressGZIP(file_auth_jwt_proto_rawDescData)
	})
	return file_auth_jwt_proto_rawDescData
}

var file_auth_jwt_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_auth_jwt_proto_msgTypes = make([]protoimpl.MessageInfo, 3)
var file_auth_jwt_proto_goTypes = []interface{}{
	(ResponseCode)(0),    // 0: auth.ResponseCode
	(*SignPayload)(nil),  // 1: auth.SignPayload
	(*SignRequest)(nil),  // 2: auth.SignRequest
	(*SignResponse)(nil), // 3: auth.SignResponse
	(UserType)(0),        // 4: auth.UserType
}
var file_auth_jwt_proto_depIdxs = []int32{
	4, // 0: auth.SignPayload.user_type:type_name -> auth.UserType
	1, // 1: auth.SignRequest.payload:type_name -> auth.SignPayload
	0, // 2: auth.SignResponse.code:type_name -> auth.ResponseCode
	2, // 3: auth.AuthJWT.Sign:input_type -> auth.SignRequest
	3, // 4: auth.AuthJWT.Sign:output_type -> auth.SignResponse
	4, // [4:5] is the sub-list for method output_type
	3, // [3:4] is the sub-list for method input_type
	3, // [3:3] is the sub-list for extension type_name
	3, // [3:3] is the sub-list for extension extendee
	0, // [0:3] is the sub-list for field type_name
}

func init() { file_auth_jwt_proto_init() }
func file_auth_jwt_proto_init() {
	if File_auth_jwt_proto != nil {
		return
	}
	file_auth_user_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_auth_jwt_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SignPayload); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_auth_jwt_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SignRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_auth_jwt_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SignResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_auth_jwt_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   3,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_auth_jwt_proto_goTypes,
		DependencyIndexes: file_auth_jwt_proto_depIdxs,
		EnumInfos:         file_auth_jwt_proto_enumTypes,
		MessageInfos:      file_auth_jwt_proto_msgTypes,
	}.Build()
	File_auth_jwt_proto = out.File
	file_auth_jwt_proto_rawDesc = nil
	file_auth_jwt_proto_goTypes = nil
	file_auth_jwt_proto_depIdxs = nil
}
