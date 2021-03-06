/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal';
import * as Long from 'long';
import { Sharing } from '../medichain/sharing';
import { ServiceUser } from '../medichain/service_user';
import { Service } from '../medichain/service';
import { User } from '../medichain/user';
export const protobufPackage = 'sota.medichain.medichain';
const baseMsgCreateServiceUserBatch = { creator: '', userId: '', serviceIds: '' };
export const MsgCreateServiceUserBatch = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.userId !== '') {
            writer.uint32(18).string(message.userId);
        }
        for (const v of message.serviceIds) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateServiceUserBatch };
        message.serviceIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.userId = reader.string();
                    break;
                case 3:
                    message.serviceIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateServiceUserBatch };
        message.serviceIds = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.userId !== undefined && object.userId !== null) {
            message.userId = String(object.userId);
        }
        else {
            message.userId = '';
        }
        if (object.serviceIds !== undefined && object.serviceIds !== null) {
            for (const e of object.serviceIds) {
                message.serviceIds.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.userId !== undefined && (obj.userId = message.userId);
        if (message.serviceIds) {
            obj.serviceIds = message.serviceIds.map((e) => e);
        }
        else {
            obj.serviceIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateServiceUserBatch };
        message.serviceIds = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.userId !== undefined && object.userId !== null) {
            message.userId = object.userId;
        }
        else {
            message.userId = '';
        }
        if (object.serviceIds !== undefined && object.serviceIds !== null) {
            for (const e of object.serviceIds) {
                message.serviceIds.push(e);
            }
        }
        return message;
    }
};
const baseMsgCreateServiceUserBatchResponse = {};
export const MsgCreateServiceUserBatchResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateServiceUserBatchResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgCreateServiceUserBatchResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgCreateServiceUserBatchResponse };
        return message;
    }
};
const baseMsgUnbanUser = { creator: '', userId: '' };
export const MsgUnbanUser = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.userId !== '') {
            writer.uint32(18).string(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUnbanUser };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
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
        const message = { ...baseMsgUnbanUser };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
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
        message.creator !== undefined && (obj.creator = message.creator);
        message.userId !== undefined && (obj.userId = message.userId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUnbanUser };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
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
const baseMsgUnbanUserResponse = {};
export const MsgUnbanUserResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUnbanUserResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgUnbanUserResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgUnbanUserResponse };
        return message;
    }
};
const baseMsgBanUser = { creator: '', userId: '' };
export const MsgBanUser = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.userId !== '') {
            writer.uint32(18).string(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgBanUser };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
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
        const message = { ...baseMsgBanUser };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
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
        message.creator !== undefined && (obj.creator = message.creator);
        message.userId !== undefined && (obj.userId = message.userId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgBanUser };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
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
const baseMsgBanUserResponse = {};
export const MsgBanUserResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgBanUserResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgBanUserResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgBanUserResponse };
        return message;
    }
};
const baseMsgDeleteSharingBatch = { creator: '', indexs: '' };
export const MsgDeleteSharingBatch = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        for (const v of message.indexs) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteSharingBatch };
        message.indexs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.indexs.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgDeleteSharingBatch };
        message.indexs = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.indexs !== undefined && object.indexs !== null) {
            for (const e of object.indexs) {
                message.indexs.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        if (message.indexs) {
            obj.indexs = message.indexs.map((e) => e);
        }
        else {
            obj.indexs = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeleteSharingBatch };
        message.indexs = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.indexs !== undefined && object.indexs !== null) {
            for (const e of object.indexs) {
                message.indexs.push(e);
            }
        }
        return message;
    }
};
const baseMsgDeleteSharingBatchResponse = {};
export const MsgDeleteSharingBatchResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteSharingBatchResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgDeleteSharingBatchResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgDeleteSharingBatchResponse };
        return message;
    }
};
const baseMsgUpdateSharingStatusBatch = { creator: '', indexs: '', status: '' };
export const MsgUpdateSharingStatusBatch = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        for (const v of message.indexs) {
            writer.uint32(18).string(v);
        }
        if (message.status !== '') {
            writer.uint32(26).string(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateSharingStatusBatch };
        message.indexs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.indexs.push(reader.string());
                    break;
                case 3:
                    message.status = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateSharingStatusBatch };
        message.indexs = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.indexs !== undefined && object.indexs !== null) {
            for (const e of object.indexs) {
                message.indexs.push(String(e));
            }
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = String(object.status);
        }
        else {
            message.status = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        if (message.indexs) {
            obj.indexs = message.indexs.map((e) => e);
        }
        else {
            obj.indexs = [];
        }
        message.status !== undefined && (obj.status = message.status);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateSharingStatusBatch };
        message.indexs = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.indexs !== undefined && object.indexs !== null) {
            for (const e of object.indexs) {
                message.indexs.push(e);
            }
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        else {
            message.status = '';
        }
        return message;
    }
};
const baseMsgUpdateSharingStatusBatchResponse = {};
export const MsgUpdateSharingStatusBatchResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateSharingStatusBatchResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgUpdateSharingStatusBatchResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgUpdateSharingStatusBatchResponse };
        return message;
    }
};
const baseMsgCreateSharingBatch = { creator: '', viewerId: '', status: '', ownerIds: '' };
export const MsgCreateSharingBatch = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.viewerId !== '') {
            writer.uint32(18).string(message.viewerId);
        }
        if (message.status !== '') {
            writer.uint32(26).string(message.status);
        }
        for (const v of message.ownerIds) {
            writer.uint32(34).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateSharingBatch };
        message.ownerIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.viewerId = reader.string();
                    break;
                case 3:
                    message.status = reader.string();
                    break;
                case 4:
                    message.ownerIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateSharingBatch };
        message.ownerIds = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.viewerId !== undefined && object.viewerId !== null) {
            message.viewerId = String(object.viewerId);
        }
        else {
            message.viewerId = '';
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = String(object.status);
        }
        else {
            message.status = '';
        }
        if (object.ownerIds !== undefined && object.ownerIds !== null) {
            for (const e of object.ownerIds) {
                message.ownerIds.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.viewerId !== undefined && (obj.viewerId = message.viewerId);
        message.status !== undefined && (obj.status = message.status);
        if (message.ownerIds) {
            obj.ownerIds = message.ownerIds.map((e) => e);
        }
        else {
            obj.ownerIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateSharingBatch };
        message.ownerIds = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.viewerId !== undefined && object.viewerId !== null) {
            message.viewerId = object.viewerId;
        }
        else {
            message.viewerId = '';
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        else {
            message.status = '';
        }
        if (object.ownerIds !== undefined && object.ownerIds !== null) {
            for (const e of object.ownerIds) {
                message.ownerIds.push(e);
            }
        }
        return message;
    }
};
const baseMsgCreateSharingBatchResponse = {};
export const MsgCreateSharingBatchResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateSharingBatchResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgCreateSharingBatchResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgCreateSharingBatchResponse };
        return message;
    }
};
const baseMsgCreateAdmin = { creator: '', pubKey: '' };
export const MsgCreateAdmin = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.pubKey !== '') {
            writer.uint32(18).string(message.pubKey);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateAdmin };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.pubKey = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateAdmin };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.pubKey !== undefined && object.pubKey !== null) {
            message.pubKey = String(object.pubKey);
        }
        else {
            message.pubKey = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.pubKey !== undefined && (obj.pubKey = message.pubKey);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateAdmin };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.pubKey !== undefined && object.pubKey !== null) {
            message.pubKey = object.pubKey;
        }
        else {
            message.pubKey = '';
        }
        return message;
    }
};
const baseMsgCreateAdminResponse = { id: 0 };
export const MsgCreateAdminResponse = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateAdminResponse };
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
        const message = { ...baseMsgCreateAdminResponse };
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
        const message = { ...baseMsgCreateAdminResponse };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseMsgUpdateAdmin = { creator: '', id: 0, pubKey: '' };
export const MsgUpdateAdmin = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.pubKey !== '') {
            writer.uint32(26).string(message.pubKey);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateAdmin };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.pubKey = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateAdmin };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        if (object.pubKey !== undefined && object.pubKey !== null) {
            message.pubKey = String(object.pubKey);
        }
        else {
            message.pubKey = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.pubKey !== undefined && (obj.pubKey = message.pubKey);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateAdmin };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        if (object.pubKey !== undefined && object.pubKey !== null) {
            message.pubKey = object.pubKey;
        }
        else {
            message.pubKey = '';
        }
        return message;
    }
};
const baseMsgUpdateAdminResponse = {};
export const MsgUpdateAdminResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateAdminResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgUpdateAdminResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgUpdateAdminResponse };
        return message;
    }
};
const baseMsgDeleteAdmin = { creator: '', id: 0 };
export const MsgDeleteAdmin = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteAdmin };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
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
        const message = { ...baseMsgDeleteAdmin };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
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
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeleteAdmin };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseMsgDeleteAdminResponse = {};
export const MsgDeleteAdminResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteAdminResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgDeleteAdminResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgDeleteAdminResponse };
        return message;
    }
};
const baseMsgRejectSharing = { creator: '', sharingId: '' };
export const MsgRejectSharing = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.sharingId !== '') {
            writer.uint32(18).string(message.sharingId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgRejectSharing };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.sharingId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgRejectSharing };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.sharingId !== undefined && object.sharingId !== null) {
            message.sharingId = String(object.sharingId);
        }
        else {
            message.sharingId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.sharingId !== undefined && (obj.sharingId = message.sharingId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgRejectSharing };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.sharingId !== undefined && object.sharingId !== null) {
            message.sharingId = object.sharingId;
        }
        else {
            message.sharingId = '';
        }
        return message;
    }
};
const baseMsgRejectSharingResponse = {};
export const MsgRejectSharingResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgRejectSharingResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgRejectSharingResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgRejectSharingResponse };
        return message;
    }
};
const baseMsgAcceptSharing = { creator: '', sharingId: '' };
export const MsgAcceptSharing = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.sharingId !== '') {
            writer.uint32(18).string(message.sharingId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgAcceptSharing };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.sharingId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgAcceptSharing };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.sharingId !== undefined && object.sharingId !== null) {
            message.sharingId = String(object.sharingId);
        }
        else {
            message.sharingId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.sharingId !== undefined && (obj.sharingId = message.sharingId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgAcceptSharing };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.sharingId !== undefined && object.sharingId !== null) {
            message.sharingId = object.sharingId;
        }
        else {
            message.sharingId = '';
        }
        return message;
    }
};
const baseMsgAcceptSharingResponse = {};
export const MsgAcceptSharingResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgAcceptSharingResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgAcceptSharingResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgAcceptSharingResponse };
        return message;
    }
};
const baseMsgCreateSharing = { creator: '', ownerId: '', viewerId: '', status: '' };
export const MsgCreateSharing = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.ownerId !== '') {
            writer.uint32(26).string(message.ownerId);
        }
        if (message.viewerId !== '') {
            writer.uint32(34).string(message.viewerId);
        }
        if (message.status !== '') {
            writer.uint32(42).string(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateSharing };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 3:
                    message.ownerId = reader.string();
                    break;
                case 4:
                    message.viewerId = reader.string();
                    break;
                case 5:
                    message.status = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateSharing };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
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
        if (object.status !== undefined && object.status !== null) {
            message.status = String(object.status);
        }
        else {
            message.status = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.ownerId !== undefined && (obj.ownerId = message.ownerId);
        message.viewerId !== undefined && (obj.viewerId = message.viewerId);
        message.status !== undefined && (obj.status = message.status);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateSharing };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
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
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        else {
            message.status = '';
        }
        return message;
    }
};
const baseMsgCreateSharingResponse = {};
export const MsgCreateSharingResponse = {
    encode(message, writer = Writer.create()) {
        if (message.Sharing !== undefined) {
            Sharing.encode(message.Sharing, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateSharingResponse };
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
        const message = { ...baseMsgCreateSharingResponse };
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
        const message = { ...baseMsgCreateSharingResponse };
        if (object.Sharing !== undefined && object.Sharing !== null) {
            message.Sharing = Sharing.fromPartial(object.Sharing);
        }
        else {
            message.Sharing = undefined;
        }
        return message;
    }
};
const baseMsgUpdateSharing = { creator: '', index: '', ownerId: '', viewerId: '', status: '' };
export const MsgUpdateSharing = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.index !== '') {
            writer.uint32(18).string(message.index);
        }
        if (message.ownerId !== '') {
            writer.uint32(26).string(message.ownerId);
        }
        if (message.viewerId !== '') {
            writer.uint32(34).string(message.viewerId);
        }
        if (message.status !== '') {
            writer.uint32(42).string(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateSharing };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.index = reader.string();
                    break;
                case 3:
                    message.ownerId = reader.string();
                    break;
                case 4:
                    message.viewerId = reader.string();
                    break;
                case 5:
                    message.status = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateSharing };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = '';
        }
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
        if (object.status !== undefined && object.status !== null) {
            message.status = String(object.status);
        }
        else {
            message.status = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.index !== undefined && (obj.index = message.index);
        message.ownerId !== undefined && (obj.ownerId = message.ownerId);
        message.viewerId !== undefined && (obj.viewerId = message.viewerId);
        message.status !== undefined && (obj.status = message.status);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateSharing };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = '';
        }
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
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        else {
            message.status = '';
        }
        return message;
    }
};
const baseMsgUpdateSharingResponse = {};
export const MsgUpdateSharingResponse = {
    encode(message, writer = Writer.create()) {
        if (message.Sharing !== undefined) {
            Sharing.encode(message.Sharing, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateSharingResponse };
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
        const message = { ...baseMsgUpdateSharingResponse };
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
        const message = { ...baseMsgUpdateSharingResponse };
        if (object.Sharing !== undefined && object.Sharing !== null) {
            message.Sharing = Sharing.fromPartial(object.Sharing);
        }
        else {
            message.Sharing = undefined;
        }
        return message;
    }
};
const baseMsgDeleteSharing = { creator: '', index: '' };
export const MsgDeleteSharing = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.index !== '') {
            writer.uint32(18).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteSharing };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
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
        const message = { ...baseMsgDeleteSharing };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
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
        message.creator !== undefined && (obj.creator = message.creator);
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeleteSharing };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = '';
        }
        return message;
    }
};
const baseMsgDeleteSharingResponse = {};
export const MsgDeleteSharingResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteSharingResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgDeleteSharingResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgDeleteSharingResponse };
        return message;
    }
};
const baseMsgCreateServiceUser = { creator: '', serviceId: '', userId: '', serviceUserId: '', isActive: false };
export const MsgCreateServiceUser = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.serviceId !== '') {
            writer.uint32(26).string(message.serviceId);
        }
        if (message.userId !== '') {
            writer.uint32(34).string(message.userId);
        }
        if (message.serviceUserId !== '') {
            writer.uint32(42).string(message.serviceUserId);
        }
        if (message.isActive === true) {
            writer.uint32(48).bool(message.isActive);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateServiceUser };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 3:
                    message.serviceId = reader.string();
                    break;
                case 4:
                    message.userId = reader.string();
                    break;
                case 5:
                    message.serviceUserId = reader.string();
                    break;
                case 6:
                    message.isActive = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateServiceUser };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
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
        if (object.serviceUserId !== undefined && object.serviceUserId !== null) {
            message.serviceUserId = String(object.serviceUserId);
        }
        else {
            message.serviceUserId = '';
        }
        if (object.isActive !== undefined && object.isActive !== null) {
            message.isActive = Boolean(object.isActive);
        }
        else {
            message.isActive = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.serviceId !== undefined && (obj.serviceId = message.serviceId);
        message.userId !== undefined && (obj.userId = message.userId);
        message.serviceUserId !== undefined && (obj.serviceUserId = message.serviceUserId);
        message.isActive !== undefined && (obj.isActive = message.isActive);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateServiceUser };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
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
        if (object.serviceUserId !== undefined && object.serviceUserId !== null) {
            message.serviceUserId = object.serviceUserId;
        }
        else {
            message.serviceUserId = '';
        }
        if (object.isActive !== undefined && object.isActive !== null) {
            message.isActive = object.isActive;
        }
        else {
            message.isActive = false;
        }
        return message;
    }
};
const baseMsgCreateServiceUserResponse = {};
export const MsgCreateServiceUserResponse = {
    encode(message, writer = Writer.create()) {
        if (message.ServiceUser !== undefined) {
            ServiceUser.encode(message.ServiceUser, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateServiceUserResponse };
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
        const message = { ...baseMsgCreateServiceUserResponse };
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
        const message = { ...baseMsgCreateServiceUserResponse };
        if (object.ServiceUser !== undefined && object.ServiceUser !== null) {
            message.ServiceUser = ServiceUser.fromPartial(object.ServiceUser);
        }
        else {
            message.ServiceUser = undefined;
        }
        return message;
    }
};
const baseMsgUpdateServiceUser = { creator: '', index: '', serviceId: '', userId: '', serviceUserId: '', isActive: false };
export const MsgUpdateServiceUser = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.index !== '') {
            writer.uint32(18).string(message.index);
        }
        if (message.serviceId !== '') {
            writer.uint32(26).string(message.serviceId);
        }
        if (message.userId !== '') {
            writer.uint32(34).string(message.userId);
        }
        if (message.serviceUserId !== '') {
            writer.uint32(42).string(message.serviceUserId);
        }
        if (message.isActive === true) {
            writer.uint32(48).bool(message.isActive);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateServiceUser };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.index = reader.string();
                    break;
                case 3:
                    message.serviceId = reader.string();
                    break;
                case 4:
                    message.userId = reader.string();
                    break;
                case 5:
                    message.serviceUserId = reader.string();
                    break;
                case 6:
                    message.isActive = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateServiceUser };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = '';
        }
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
        if (object.serviceUserId !== undefined && object.serviceUserId !== null) {
            message.serviceUserId = String(object.serviceUserId);
        }
        else {
            message.serviceUserId = '';
        }
        if (object.isActive !== undefined && object.isActive !== null) {
            message.isActive = Boolean(object.isActive);
        }
        else {
            message.isActive = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.index !== undefined && (obj.index = message.index);
        message.serviceId !== undefined && (obj.serviceId = message.serviceId);
        message.userId !== undefined && (obj.userId = message.userId);
        message.serviceUserId !== undefined && (obj.serviceUserId = message.serviceUserId);
        message.isActive !== undefined && (obj.isActive = message.isActive);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateServiceUser };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = '';
        }
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
        if (object.serviceUserId !== undefined && object.serviceUserId !== null) {
            message.serviceUserId = object.serviceUserId;
        }
        else {
            message.serviceUserId = '';
        }
        if (object.isActive !== undefined && object.isActive !== null) {
            message.isActive = object.isActive;
        }
        else {
            message.isActive = false;
        }
        return message;
    }
};
const baseMsgUpdateServiceUserResponse = {};
export const MsgUpdateServiceUserResponse = {
    encode(message, writer = Writer.create()) {
        if (message.ServiceUser !== undefined) {
            ServiceUser.encode(message.ServiceUser, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateServiceUserResponse };
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
        const message = { ...baseMsgUpdateServiceUserResponse };
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
        const message = { ...baseMsgUpdateServiceUserResponse };
        if (object.ServiceUser !== undefined && object.ServiceUser !== null) {
            message.ServiceUser = ServiceUser.fromPartial(object.ServiceUser);
        }
        else {
            message.ServiceUser = undefined;
        }
        return message;
    }
};
const baseMsgDeleteServiceUser = { creator: '', index: '' };
export const MsgDeleteServiceUser = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.index !== '') {
            writer.uint32(18).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteServiceUser };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
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
        const message = { ...baseMsgDeleteServiceUser };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
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
        message.creator !== undefined && (obj.creator = message.creator);
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeleteServiceUser };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = '';
        }
        return message;
    }
};
const baseMsgDeleteServiceUserResponse = {};
export const MsgDeleteServiceUserResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteServiceUserResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgDeleteServiceUserResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgDeleteServiceUserResponse };
        return message;
    }
};
const baseMsgCreateService = { creator: '', name: '', url: '', pubKey: '', isActive: false };
export const MsgCreateService = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        if (message.url !== '') {
            writer.uint32(34).string(message.url);
        }
        if (message.pubKey !== '') {
            writer.uint32(42).string(message.pubKey);
        }
        if (message.isActive === true) {
            writer.uint32(48).bool(message.isActive);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateService };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.url = reader.string();
                    break;
                case 5:
                    message.pubKey = reader.string();
                    break;
                case 6:
                    message.isActive = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateService };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.url !== undefined && object.url !== null) {
            message.url = String(object.url);
        }
        else {
            message.url = '';
        }
        if (object.pubKey !== undefined && object.pubKey !== null) {
            message.pubKey = String(object.pubKey);
        }
        else {
            message.pubKey = '';
        }
        if (object.isActive !== undefined && object.isActive !== null) {
            message.isActive = Boolean(object.isActive);
        }
        else {
            message.isActive = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.name !== undefined && (obj.name = message.name);
        message.url !== undefined && (obj.url = message.url);
        message.pubKey !== undefined && (obj.pubKey = message.pubKey);
        message.isActive !== undefined && (obj.isActive = message.isActive);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateService };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.url !== undefined && object.url !== null) {
            message.url = object.url;
        }
        else {
            message.url = '';
        }
        if (object.pubKey !== undefined && object.pubKey !== null) {
            message.pubKey = object.pubKey;
        }
        else {
            message.pubKey = '';
        }
        if (object.isActive !== undefined && object.isActive !== null) {
            message.isActive = object.isActive;
        }
        else {
            message.isActive = false;
        }
        return message;
    }
};
const baseMsgCreateServiceResponse = {};
export const MsgCreateServiceResponse = {
    encode(message, writer = Writer.create()) {
        if (message.Service !== undefined) {
            Service.encode(message.Service, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateServiceResponse };
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
        const message = { ...baseMsgCreateServiceResponse };
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
        const message = { ...baseMsgCreateServiceResponse };
        if (object.Service !== undefined && object.Service !== null) {
            message.Service = Service.fromPartial(object.Service);
        }
        else {
            message.Service = undefined;
        }
        return message;
    }
};
const baseMsgUpdateService = { creator: '', index: '', name: '', url: '', pubKey: '', isActive: false };
export const MsgUpdateService = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.index !== '') {
            writer.uint32(18).string(message.index);
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        if (message.url !== '') {
            writer.uint32(34).string(message.url);
        }
        if (message.pubKey !== '') {
            writer.uint32(42).string(message.pubKey);
        }
        if (message.isActive === true) {
            writer.uint32(48).bool(message.isActive);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateService };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.index = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.url = reader.string();
                    break;
                case 5:
                    message.pubKey = reader.string();
                    break;
                case 6:
                    message.isActive = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateService };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.url !== undefined && object.url !== null) {
            message.url = String(object.url);
        }
        else {
            message.url = '';
        }
        if (object.pubKey !== undefined && object.pubKey !== null) {
            message.pubKey = String(object.pubKey);
        }
        else {
            message.pubKey = '';
        }
        if (object.isActive !== undefined && object.isActive !== null) {
            message.isActive = Boolean(object.isActive);
        }
        else {
            message.isActive = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.index !== undefined && (obj.index = message.index);
        message.name !== undefined && (obj.name = message.name);
        message.url !== undefined && (obj.url = message.url);
        message.pubKey !== undefined && (obj.pubKey = message.pubKey);
        message.isActive !== undefined && (obj.isActive = message.isActive);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateService };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.url !== undefined && object.url !== null) {
            message.url = object.url;
        }
        else {
            message.url = '';
        }
        if (object.pubKey !== undefined && object.pubKey !== null) {
            message.pubKey = object.pubKey;
        }
        else {
            message.pubKey = '';
        }
        if (object.isActive !== undefined && object.isActive !== null) {
            message.isActive = object.isActive;
        }
        else {
            message.isActive = false;
        }
        return message;
    }
};
const baseMsgUpdateServiceResponse = {};
export const MsgUpdateServiceResponse = {
    encode(message, writer = Writer.create()) {
        if (message.Service !== undefined) {
            Service.encode(message.Service, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateServiceResponse };
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
        const message = { ...baseMsgUpdateServiceResponse };
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
        const message = { ...baseMsgUpdateServiceResponse };
        if (object.Service !== undefined && object.Service !== null) {
            message.Service = Service.fromPartial(object.Service);
        }
        else {
            message.Service = undefined;
        }
        return message;
    }
};
const baseMsgDeleteService = { creator: '', index: '' };
export const MsgDeleteService = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.index !== '') {
            writer.uint32(18).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteService };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
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
        const message = { ...baseMsgDeleteService };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
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
        message.creator !== undefined && (obj.creator = message.creator);
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeleteService };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = '';
        }
        return message;
    }
};
const baseMsgDeleteServiceResponse = {};
export const MsgDeleteServiceResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteServiceResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgDeleteServiceResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgDeleteServiceResponse };
        return message;
    }
};
const baseMsgCreateUser = { creator: '', pubKey: '', isActive: false };
export const MsgCreateUser = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.pubKey !== '') {
            writer.uint32(26).string(message.pubKey);
        }
        if (message.isActive === true) {
            writer.uint32(32).bool(message.isActive);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateUser };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 3:
                    message.pubKey = reader.string();
                    break;
                case 4:
                    message.isActive = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateUser };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.pubKey !== undefined && object.pubKey !== null) {
            message.pubKey = String(object.pubKey);
        }
        else {
            message.pubKey = '';
        }
        if (object.isActive !== undefined && object.isActive !== null) {
            message.isActive = Boolean(object.isActive);
        }
        else {
            message.isActive = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.pubKey !== undefined && (obj.pubKey = message.pubKey);
        message.isActive !== undefined && (obj.isActive = message.isActive);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateUser };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.pubKey !== undefined && object.pubKey !== null) {
            message.pubKey = object.pubKey;
        }
        else {
            message.pubKey = '';
        }
        if (object.isActive !== undefined && object.isActive !== null) {
            message.isActive = object.isActive;
        }
        else {
            message.isActive = false;
        }
        return message;
    }
};
const baseMsgCreateUserResponse = {};
export const MsgCreateUserResponse = {
    encode(message, writer = Writer.create()) {
        if (message.User !== undefined) {
            User.encode(message.User, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateUserResponse };
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
        const message = { ...baseMsgCreateUserResponse };
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
        const message = { ...baseMsgCreateUserResponse };
        if (object.User !== undefined && object.User !== null) {
            message.User = User.fromPartial(object.User);
        }
        else {
            message.User = undefined;
        }
        return message;
    }
};
const baseMsgUpdateUser = { creator: '', index: '', pubKey: '', isActive: false };
export const MsgUpdateUser = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.index !== '') {
            writer.uint32(18).string(message.index);
        }
        if (message.pubKey !== '') {
            writer.uint32(26).string(message.pubKey);
        }
        if (message.isActive === true) {
            writer.uint32(32).bool(message.isActive);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateUser };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.index = reader.string();
                    break;
                case 3:
                    message.pubKey = reader.string();
                    break;
                case 4:
                    message.isActive = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateUser };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = '';
        }
        if (object.pubKey !== undefined && object.pubKey !== null) {
            message.pubKey = String(object.pubKey);
        }
        else {
            message.pubKey = '';
        }
        if (object.isActive !== undefined && object.isActive !== null) {
            message.isActive = Boolean(object.isActive);
        }
        else {
            message.isActive = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.index !== undefined && (obj.index = message.index);
        message.pubKey !== undefined && (obj.pubKey = message.pubKey);
        message.isActive !== undefined && (obj.isActive = message.isActive);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateUser };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = '';
        }
        if (object.pubKey !== undefined && object.pubKey !== null) {
            message.pubKey = object.pubKey;
        }
        else {
            message.pubKey = '';
        }
        if (object.isActive !== undefined && object.isActive !== null) {
            message.isActive = object.isActive;
        }
        else {
            message.isActive = false;
        }
        return message;
    }
};
const baseMsgUpdateUserResponse = {};
export const MsgUpdateUserResponse = {
    encode(message, writer = Writer.create()) {
        if (message.User !== undefined) {
            User.encode(message.User, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateUserResponse };
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
        const message = { ...baseMsgUpdateUserResponse };
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
        const message = { ...baseMsgUpdateUserResponse };
        if (object.User !== undefined && object.User !== null) {
            message.User = User.fromPartial(object.User);
        }
        else {
            message.User = undefined;
        }
        return message;
    }
};
const baseMsgDeleteUser = { creator: '', index: '' };
export const MsgDeleteUser = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.index !== '') {
            writer.uint32(18).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteUser };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
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
        const message = { ...baseMsgDeleteUser };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
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
        message.creator !== undefined && (obj.creator = message.creator);
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeleteUser };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = '';
        }
        return message;
    }
};
const baseMsgDeleteUserResponse = {};
export const MsgDeleteUserResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteUserResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgDeleteUserResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgDeleteUserResponse };
        return message;
    }
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    CreateServiceUserBatch(request) {
        const data = MsgCreateServiceUserBatch.encode(request).finish();
        const promise = this.rpc.request('sota.medichain.medichain.Msg', 'CreateServiceUserBatch', data);
        return promise.then((data) => MsgCreateServiceUserBatchResponse.decode(new Reader(data)));
    }
    UnbanUser(request) {
        const data = MsgUnbanUser.encode(request).finish();
        const promise = this.rpc.request('sota.medichain.medichain.Msg', 'UnbanUser', data);
        return promise.then((data) => MsgUnbanUserResponse.decode(new Reader(data)));
    }
    BanUser(request) {
        const data = MsgBanUser.encode(request).finish();
        const promise = this.rpc.request('sota.medichain.medichain.Msg', 'BanUser', data);
        return promise.then((data) => MsgBanUserResponse.decode(new Reader(data)));
    }
    DeleteSharingBatch(request) {
        const data = MsgDeleteSharingBatch.encode(request).finish();
        const promise = this.rpc.request('sota.medichain.medichain.Msg', 'DeleteSharingBatch', data);
        return promise.then((data) => MsgDeleteSharingBatchResponse.decode(new Reader(data)));
    }
    UpdateSharingStatusBatch(request) {
        const data = MsgUpdateSharingStatusBatch.encode(request).finish();
        const promise = this.rpc.request('sota.medichain.medichain.Msg', 'UpdateSharingStatusBatch', data);
        return promise.then((data) => MsgUpdateSharingStatusBatchResponse.decode(new Reader(data)));
    }
    CreateSharingBatch(request) {
        const data = MsgCreateSharingBatch.encode(request).finish();
        const promise = this.rpc.request('sota.medichain.medichain.Msg', 'CreateSharingBatch', data);
        return promise.then((data) => MsgCreateSharingBatchResponse.decode(new Reader(data)));
    }
    CreateAdmin(request) {
        const data = MsgCreateAdmin.encode(request).finish();
        const promise = this.rpc.request('sota.medichain.medichain.Msg', 'CreateAdmin', data);
        return promise.then((data) => MsgCreateAdminResponse.decode(new Reader(data)));
    }
    UpdateAdmin(request) {
        const data = MsgUpdateAdmin.encode(request).finish();
        const promise = this.rpc.request('sota.medichain.medichain.Msg', 'UpdateAdmin', data);
        return promise.then((data) => MsgUpdateAdminResponse.decode(new Reader(data)));
    }
    DeleteAdmin(request) {
        const data = MsgDeleteAdmin.encode(request).finish();
        const promise = this.rpc.request('sota.medichain.medichain.Msg', 'DeleteAdmin', data);
        return promise.then((data) => MsgDeleteAdminResponse.decode(new Reader(data)));
    }
    RejectSharing(request) {
        const data = MsgRejectSharing.encode(request).finish();
        const promise = this.rpc.request('sota.medichain.medichain.Msg', 'RejectSharing', data);
        return promise.then((data) => MsgRejectSharingResponse.decode(new Reader(data)));
    }
    AcceptSharing(request) {
        const data = MsgAcceptSharing.encode(request).finish();
        const promise = this.rpc.request('sota.medichain.medichain.Msg', 'AcceptSharing', data);
        return promise.then((data) => MsgAcceptSharingResponse.decode(new Reader(data)));
    }
    CreateSharing(request) {
        const data = MsgCreateSharing.encode(request).finish();
        const promise = this.rpc.request('sota.medichain.medichain.Msg', 'CreateSharing', data);
        return promise.then((data) => MsgCreateSharingResponse.decode(new Reader(data)));
    }
    UpdateSharing(request) {
        const data = MsgUpdateSharing.encode(request).finish();
        const promise = this.rpc.request('sota.medichain.medichain.Msg', 'UpdateSharing', data);
        return promise.then((data) => MsgUpdateSharingResponse.decode(new Reader(data)));
    }
    DeleteSharing(request) {
        const data = MsgDeleteSharing.encode(request).finish();
        const promise = this.rpc.request('sota.medichain.medichain.Msg', 'DeleteSharing', data);
        return promise.then((data) => MsgDeleteSharingResponse.decode(new Reader(data)));
    }
    CreateServiceUser(request) {
        const data = MsgCreateServiceUser.encode(request).finish();
        const promise = this.rpc.request('sota.medichain.medichain.Msg', 'CreateServiceUser', data);
        return promise.then((data) => MsgCreateServiceUserResponse.decode(new Reader(data)));
    }
    UpdateServiceUser(request) {
        const data = MsgUpdateServiceUser.encode(request).finish();
        const promise = this.rpc.request('sota.medichain.medichain.Msg', 'UpdateServiceUser', data);
        return promise.then((data) => MsgUpdateServiceUserResponse.decode(new Reader(data)));
    }
    DeleteServiceUser(request) {
        const data = MsgDeleteServiceUser.encode(request).finish();
        const promise = this.rpc.request('sota.medichain.medichain.Msg', 'DeleteServiceUser', data);
        return promise.then((data) => MsgDeleteServiceUserResponse.decode(new Reader(data)));
    }
    CreateService(request) {
        const data = MsgCreateService.encode(request).finish();
        const promise = this.rpc.request('sota.medichain.medichain.Msg', 'CreateService', data);
        return promise.then((data) => MsgCreateServiceResponse.decode(new Reader(data)));
    }
    UpdateService(request) {
        const data = MsgUpdateService.encode(request).finish();
        const promise = this.rpc.request('sota.medichain.medichain.Msg', 'UpdateService', data);
        return promise.then((data) => MsgUpdateServiceResponse.decode(new Reader(data)));
    }
    DeleteService(request) {
        const data = MsgDeleteService.encode(request).finish();
        const promise = this.rpc.request('sota.medichain.medichain.Msg', 'DeleteService', data);
        return promise.then((data) => MsgDeleteServiceResponse.decode(new Reader(data)));
    }
    CreateUser(request) {
        const data = MsgCreateUser.encode(request).finish();
        const promise = this.rpc.request('sota.medichain.medichain.Msg', 'CreateUser', data);
        return promise.then((data) => MsgCreateUserResponse.decode(new Reader(data)));
    }
    UpdateUser(request) {
        const data = MsgUpdateUser.encode(request).finish();
        const promise = this.rpc.request('sota.medichain.medichain.Msg', 'UpdateUser', data);
        return promise.then((data) => MsgUpdateUserResponse.decode(new Reader(data)));
    }
    DeleteUser(request) {
        const data = MsgDeleteUser.encode(request).finish();
        const promise = this.rpc.request('sota.medichain.medichain.Msg', 'DeleteUser', data);
        return promise.then((data) => MsgDeleteUserResponse.decode(new Reader(data)));
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
