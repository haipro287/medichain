/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal';
import * as Long from 'long';
import { Admin } from '../medichain/admin';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
import { ServiceUser } from '../medichain/service_user';
import { Sharing } from '../medichain/sharing';
import { Service } from '../medichain/service';
import { User } from '../medichain/user';
export const protobufPackage = 'sota.medichain.medichain';
const baseQueryGetAdminRequest = { id: 0 };
export const QueryGetAdminRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetAdminRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetAdminRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetAdminRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseQueryGetAdminResponse = {};
export const QueryGetAdminResponse = {
    encode(message, writer = Writer.create()) {
        if (message.Admin !== undefined) {
            Admin.encode(message.Admin, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetAdminResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Admin = Admin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetAdminResponse };
        if (object.Admin !== undefined && object.Admin !== null) {
            message.Admin = Admin.fromJSON(object.Admin);
        }
        else {
            message.Admin = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.Admin !== undefined && (obj.Admin = message.Admin ? Admin.toJSON(message.Admin) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetAdminResponse };
        if (object.Admin !== undefined && object.Admin !== null) {
            message.Admin = Admin.fromPartial(object.Admin);
        }
        else {
            message.Admin = undefined;
        }
        return message;
    }
};
const baseQueryAllAdminRequest = {};
export const QueryAllAdminRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllAdminRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllAdminRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllAdminRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllAdminResponse = {};
export const QueryAllAdminResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.Admin) {
            Admin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllAdminResponse };
        message.Admin = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Admin.push(Admin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllAdminResponse };
        message.Admin = [];
        if (object.Admin !== undefined && object.Admin !== null) {
            for (const e of object.Admin) {
                message.Admin.push(Admin.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.Admin) {
            obj.Admin = message.Admin.map((e) => (e ? Admin.toJSON(e) : undefined));
        }
        else {
            obj.Admin = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllAdminResponse };
        message.Admin = [];
        if (object.Admin !== undefined && object.Admin !== null) {
            for (const e of object.Admin) {
                message.Admin.push(Admin.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryUserServiceRequest = { userId: '' };
export const QueryUserServiceRequest = {
    encode(message, writer = Writer.create()) {
        if (message.userId !== '') {
            writer.uint32(10).string(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryUserServiceRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryUserServiceRequest };
        if (object.userId !== undefined && object.userId !== null) {
            message.userId = String(object.userId);
        }
        else {
            message.userId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.userId !== undefined && (obj.userId = message.userId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryUserServiceRequest };
        if (object.userId !== undefined && object.userId !== null) {
            message.userId = object.userId;
        }
        else {
            message.userId = '';
        }
        return message;
    }
};
const baseQueryUserServiceResponse = {};
export const QueryUserServiceResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.ServiceUser) {
            ServiceUser.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryUserServiceResponse };
        message.ServiceUser = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ServiceUser.push(ServiceUser.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryUserServiceResponse };
        message.ServiceUser = [];
        if (object.ServiceUser !== undefined && object.ServiceUser !== null) {
            for (const e of object.ServiceUser) {
                message.ServiceUser.push(ServiceUser.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.ServiceUser) {
            obj.ServiceUser = message.ServiceUser.map((e) => (e ? ServiceUser.toJSON(e) : undefined));
        }
        else {
            obj.ServiceUser = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryUserServiceResponse };
        message.ServiceUser = [];
        if (object.ServiceUser !== undefined && object.ServiceUser !== null) {
            for (const e of object.ServiceUser) {
                message.ServiceUser.push(ServiceUser.fromPartial(e));
            }
        }
        return message;
    }
};
const baseQueryCheckServiceUserRequest = { serviceId: '', userId: '' };
export const QueryCheckServiceUserRequest = {
    encode(message, writer = Writer.create()) {
        if (message.serviceId !== '') {
            writer.uint32(10).string(message.serviceId);
        }
        if (message.userId !== '') {
            writer.uint32(18).string(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryCheckServiceUserRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serviceId = reader.string();
                    break;
                case 2:
                    message.userId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryCheckServiceUserRequest };
        if (object.serviceId !== undefined && object.serviceId !== null) {
            message.serviceId = String(object.serviceId);
        }
        else {
            message.serviceId = '';
        }
        if (object.userId !== undefined && object.userId !== null) {
            message.userId = String(object.userId);
        }
        else {
            message.userId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.serviceId !== undefined && (obj.serviceId = message.serviceId);
        message.userId !== undefined && (obj.userId = message.userId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryCheckServiceUserRequest };
        if (object.serviceId !== undefined && object.serviceId !== null) {
            message.serviceId = object.serviceId;
        }
        else {
            message.serviceId = '';
        }
        if (object.userId !== undefined && object.userId !== null) {
            message.userId = object.userId;
        }
        else {
            message.userId = '';
        }
        return message;
    }
};
const baseQueryCheckServiceUserResponse = {};
export const QueryCheckServiceUserResponse = {
    encode(message, writer = Writer.create()) {
        if (message.ServiceUser !== undefined) {
            ServiceUser.encode(message.ServiceUser, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryCheckServiceUserResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ServiceUser = ServiceUser.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryCheckServiceUserResponse };
        if (object.ServiceUser !== undefined && object.ServiceUser !== null) {
            message.ServiceUser = ServiceUser.fromJSON(object.ServiceUser);
        }
        else {
            message.ServiceUser = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.ServiceUser !== undefined && (obj.ServiceUser = message.ServiceUser ? ServiceUser.toJSON(message.ServiceUser) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryCheckServiceUserResponse };
        if (object.ServiceUser !== undefined && object.ServiceUser !== null) {
            message.ServiceUser = ServiceUser.fromPartial(object.ServiceUser);
        }
        else {
            message.ServiceUser = undefined;
        }
        return message;
    }
};
const baseQueryCheckSharingRequest = { ownerId: '', viewerId: '' };
export const QueryCheckSharingRequest = {
    encode(message, writer = Writer.create()) {
        if (message.ownerId !== '') {
            writer.uint32(10).string(message.ownerId);
        }
        if (message.viewerId !== '') {
            writer.uint32(18).string(message.viewerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryCheckSharingRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ownerId = reader.string();
                    break;
                case 2:
                    message.viewerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryCheckSharingRequest };
        if (object.ownerId !== undefined && object.ownerId !== null) {
            message.ownerId = String(object.ownerId);
        }
        else {
            message.ownerId = '';
        }
        if (object.viewerId !== undefined && object.viewerId !== null) {
            message.viewerId = String(object.viewerId);
        }
        else {
            message.viewerId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.ownerId !== undefined && (obj.ownerId = message.ownerId);
        message.viewerId !== undefined && (obj.viewerId = message.viewerId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryCheckSharingRequest };
        if (object.ownerId !== undefined && object.ownerId !== null) {
            message.ownerId = object.ownerId;
        }
        else {
            message.ownerId = '';
        }
        if (object.viewerId !== undefined && object.viewerId !== null) {
            message.viewerId = object.viewerId;
        }
        else {
            message.viewerId = '';
        }
        return message;
    }
};
const baseQueryCheckSharingResponse = {};
export const QueryCheckSharingResponse = {
    encode(message, writer = Writer.create()) {
        if (message.Sharing !== undefined) {
            Sharing.encode(message.Sharing, writer.uint32(10).fork()).ldelim();
        }
        if (message.Owner !== undefined) {
            ServiceUser.encode(message.Owner, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryCheckSharingResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Sharing = Sharing.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.Owner = ServiceUser.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryCheckSharingResponse };
        if (object.Sharing !== undefined && object.Sharing !== null) {
            message.Sharing = Sharing.fromJSON(object.Sharing);
        }
        else {
            message.Sharing = undefined;
        }
        if (object.Owner !== undefined && object.Owner !== null) {
            message.Owner = ServiceUser.fromJSON(object.Owner);
        }
        else {
            message.Owner = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.Sharing !== undefined && (obj.Sharing = message.Sharing ? Sharing.toJSON(message.Sharing) : undefined);
        message.Owner !== undefined && (obj.Owner = message.Owner ? ServiceUser.toJSON(message.Owner) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryCheckSharingResponse };
        if (object.Sharing !== undefined && object.Sharing !== null) {
            message.Sharing = Sharing.fromPartial(object.Sharing);
        }
        else {
            message.Sharing = undefined;
        }
        if (object.Owner !== undefined && object.Owner !== null) {
            message.Owner = ServiceUser.fromPartial(object.Owner);
        }
        else {
            message.Owner = undefined;
        }
        return message;
    }
};
const baseQueryGetSharingRequest = { index: '' };
export const QueryGetSharingRequest = {
    encode(message, writer = Writer.create()) {
        if (message.index !== '') {
            writer.uint32(10).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetSharingRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetSharingRequest };
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetSharingRequest };
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = '';
        }
        return message;
    }
};
const baseQueryGetSharingResponse = {};
export const QueryGetSharingResponse = {
    encode(message, writer = Writer.create()) {
        if (message.Sharing !== undefined) {
            Sharing.encode(message.Sharing, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetSharingResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Sharing = Sharing.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetSharingResponse };
        if (object.Sharing !== undefined && object.Sharing !== null) {
            message.Sharing = Sharing.fromJSON(object.Sharing);
        }
        else {
            message.Sharing = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.Sharing !== undefined && (obj.Sharing = message.Sharing ? Sharing.toJSON(message.Sharing) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetSharingResponse };
        if (object.Sharing !== undefined && object.Sharing !== null) {
            message.Sharing = Sharing.fromPartial(object.Sharing);
        }
        else {
            message.Sharing = undefined;
        }
        return message;
    }
};
const baseQueryAllSharingRequest = {};
export const QueryAllSharingRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllSharingRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllSharingRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllSharingRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllSharingResponse = {};
export const QueryAllSharingResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.Sharing) {
            Sharing.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllSharingResponse };
        message.Sharing = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Sharing.push(Sharing.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllSharingResponse };
        message.Sharing = [];
        if (object.Sharing !== undefined && object.Sharing !== null) {
            for (const e of object.Sharing) {
                message.Sharing.push(Sharing.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.Sharing) {
            obj.Sharing = message.Sharing.map((e) => (e ? Sharing.toJSON(e) : undefined));
        }
        else {
            obj.Sharing = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllSharingResponse };
        message.Sharing = [];
        if (object.Sharing !== undefined && object.Sharing !== null) {
            for (const e of object.Sharing) {
                message.Sharing.push(Sharing.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryGetServiceUserRequest = { index: '' };
export const QueryGetServiceUserRequest = {
    encode(message, writer = Writer.create()) {
        if (message.index !== '') {
            writer.uint32(10).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetServiceUserRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetServiceUserRequest };
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetServiceUserRequest };
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = '';
        }
        return message;
    }
};
const baseQueryGetServiceUserResponse = {};
export const QueryGetServiceUserResponse = {
    encode(message, writer = Writer.create()) {
        if (message.ServiceUser !== undefined) {
            ServiceUser.encode(message.ServiceUser, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetServiceUserResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ServiceUser = ServiceUser.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetServiceUserResponse };
        if (object.ServiceUser !== undefined && object.ServiceUser !== null) {
            message.ServiceUser = ServiceUser.fromJSON(object.ServiceUser);
        }
        else {
            message.ServiceUser = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.ServiceUser !== undefined && (obj.ServiceUser = message.ServiceUser ? ServiceUser.toJSON(message.ServiceUser) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetServiceUserResponse };
        if (object.ServiceUser !== undefined && object.ServiceUser !== null) {
            message.ServiceUser = ServiceUser.fromPartial(object.ServiceUser);
        }
        else {
            message.ServiceUser = undefined;
        }
        return message;
    }
};
const baseQueryAllServiceUserRequest = {};
export const QueryAllServiceUserRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllServiceUserRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllServiceUserRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllServiceUserRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllServiceUserResponse = {};
export const QueryAllServiceUserResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.ServiceUser) {
            ServiceUser.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllServiceUserResponse };
        message.ServiceUser = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ServiceUser.push(ServiceUser.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllServiceUserResponse };
        message.ServiceUser = [];
        if (object.ServiceUser !== undefined && object.ServiceUser !== null) {
            for (const e of object.ServiceUser) {
                message.ServiceUser.push(ServiceUser.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.ServiceUser) {
            obj.ServiceUser = message.ServiceUser.map((e) => (e ? ServiceUser.toJSON(e) : undefined));
        }
        else {
            obj.ServiceUser = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllServiceUserResponse };
        message.ServiceUser = [];
        if (object.ServiceUser !== undefined && object.ServiceUser !== null) {
            for (const e of object.ServiceUser) {
                message.ServiceUser.push(ServiceUser.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryGetServiceRequest = { index: '' };
export const QueryGetServiceRequest = {
    encode(message, writer = Writer.create()) {
        if (message.index !== '') {
            writer.uint32(10).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetServiceRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetServiceRequest };
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetServiceRequest };
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = '';
        }
        return message;
    }
};
const baseQueryGetServiceResponse = {};
export const QueryGetServiceResponse = {
    encode(message, writer = Writer.create()) {
        if (message.Service !== undefined) {
            Service.encode(message.Service, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetServiceResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Service = Service.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetServiceResponse };
        if (object.Service !== undefined && object.Service !== null) {
            message.Service = Service.fromJSON(object.Service);
        }
        else {
            message.Service = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.Service !== undefined && (obj.Service = message.Service ? Service.toJSON(message.Service) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetServiceResponse };
        if (object.Service !== undefined && object.Service !== null) {
            message.Service = Service.fromPartial(object.Service);
        }
        else {
            message.Service = undefined;
        }
        return message;
    }
};
const baseQueryAllServiceRequest = {};
export const QueryAllServiceRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllServiceRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllServiceRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllServiceRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllServiceResponse = {};
export const QueryAllServiceResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.Service) {
            Service.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllServiceResponse };
        message.Service = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Service.push(Service.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllServiceResponse };
        message.Service = [];
        if (object.Service !== undefined && object.Service !== null) {
            for (const e of object.Service) {
                message.Service.push(Service.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.Service) {
            obj.Service = message.Service.map((e) => (e ? Service.toJSON(e) : undefined));
        }
        else {
            obj.Service = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllServiceResponse };
        message.Service = [];
        if (object.Service !== undefined && object.Service !== null) {
            for (const e of object.Service) {
                message.Service.push(Service.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryGetUserRequest = { index: '' };
export const QueryGetUserRequest = {
    encode(message, writer = Writer.create()) {
        if (message.index !== '') {
            writer.uint32(10).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetUserRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetUserRequest };
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetUserRequest };
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = '';
        }
        return message;
    }
};
const baseQueryGetUserResponse = {};
export const QueryGetUserResponse = {
    encode(message, writer = Writer.create()) {
        if (message.User !== undefined) {
            User.encode(message.User, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetUserResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.User = User.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetUserResponse };
        if (object.User !== undefined && object.User !== null) {
            message.User = User.fromJSON(object.User);
        }
        else {
            message.User = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.User !== undefined && (obj.User = message.User ? User.toJSON(message.User) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetUserResponse };
        if (object.User !== undefined && object.User !== null) {
            message.User = User.fromPartial(object.User);
        }
        else {
            message.User = undefined;
        }
        return message;
    }
};
const baseQueryAllUserRequest = {};
export const QueryAllUserRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllUserRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllUserRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllUserRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllUserResponse = {};
export const QueryAllUserResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.User) {
            User.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllUserResponse };
        message.User = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.User.push(User.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllUserResponse };
        message.User = [];
        if (object.User !== undefined && object.User !== null) {
            for (const e of object.User) {
                message.User.push(User.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.User) {
            obj.User = message.User.map((e) => (e ? User.toJSON(e) : undefined));
        }
        else {
            obj.User = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllUserResponse };
        message.User = [];
        if (object.User !== undefined && object.User !== null) {
            for (const e of object.User) {
                message.User.push(User.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    Admin(request) {
        const data = QueryGetAdminRequest.encode(request).finish();
        const promise = this.rpc.request('sota.medichain.medichain.Query', 'Admin', data);
        return promise.then((data) => QueryGetAdminResponse.decode(new Reader(data)));
    }
    AdminAll(request) {
        const data = QueryAllAdminRequest.encode(request).finish();
        const promise = this.rpc.request('sota.medichain.medichain.Query', 'AdminAll', data);
        return promise.then((data) => QueryAllAdminResponse.decode(new Reader(data)));
    }
    UserService(request) {
        const data = QueryUserServiceRequest.encode(request).finish();
        const promise = this.rpc.request('sota.medichain.medichain.Query', 'UserService', data);
        return promise.then((data) => QueryUserServiceResponse.decode(new Reader(data)));
    }
    CheckServiceUser(request) {
        const data = QueryCheckServiceUserRequest.encode(request).finish();
        const promise = this.rpc.request('sota.medichain.medichain.Query', 'CheckServiceUser', data);
        return promise.then((data) => QueryCheckServiceUserResponse.decode(new Reader(data)));
    }
    CheckSharing(request) {
        const data = QueryCheckSharingRequest.encode(request).finish();
        const promise = this.rpc.request('sota.medichain.medichain.Query', 'CheckSharing', data);
        return promise.then((data) => QueryCheckSharingResponse.decode(new Reader(data)));
    }
    Sharing(request) {
        const data = QueryGetSharingRequest.encode(request).finish();
        const promise = this.rpc.request('sota.medichain.medichain.Query', 'Sharing', data);
        return promise.then((data) => QueryGetSharingResponse.decode(new Reader(data)));
    }
    SharingAll(request) {
        const data = QueryAllSharingRequest.encode(request).finish();
        const promise = this.rpc.request('sota.medichain.medichain.Query', 'SharingAll', data);
        return promise.then((data) => QueryAllSharingResponse.decode(new Reader(data)));
    }
    ServiceUser(request) {
        const data = QueryGetServiceUserRequest.encode(request).finish();
        const promise = this.rpc.request('sota.medichain.medichain.Query', 'ServiceUser', data);
        return promise.then((data) => QueryGetServiceUserResponse.decode(new Reader(data)));
    }
    ServiceUserAll(request) {
        const data = QueryAllServiceUserRequest.encode(request).finish();
        const promise = this.rpc.request('sota.medichain.medichain.Query', 'ServiceUserAll', data);
        return promise.then((data) => QueryAllServiceUserResponse.decode(new Reader(data)));
    }
    Service(request) {
        const data = QueryGetServiceRequest.encode(request).finish();
        const promise = this.rpc.request('sota.medichain.medichain.Query', 'Service', data);
        return promise.then((data) => QueryGetServiceResponse.decode(new Reader(data)));
    }
    ServiceAll(request) {
        const data = QueryAllServiceRequest.encode(request).finish();
        const promise = this.rpc.request('sota.medichain.medichain.Query', 'ServiceAll', data);
        return promise.then((data) => QueryAllServiceResponse.decode(new Reader(data)));
    }
    User(request) {
        const data = QueryGetUserRequest.encode(request).finish();
        const promise = this.rpc.request('sota.medichain.medichain.Query', 'User', data);
        return promise.then((data) => QueryGetUserResponse.decode(new Reader(data)));
    }
    UserAll(request) {
        const data = QueryAllUserRequest.encode(request).finish();
        const promise = this.rpc.request('sota.medichain.medichain.Query', 'UserAll', data);
        return promise.then((data) => QueryAllUserResponse.decode(new Reader(data)));
    }
}
var globalThis = (() => {
    if (typeof globalThis !== 'undefined')
        return globalThis;
    if (typeof self !== 'undefined')
        return self;
    if (typeof window !== 'undefined')
        return window;
    if (typeof global !== 'undefined')
        return global;
    throw 'Unable to locate global object';
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
