/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'
import { Admin } from '../medichain/admin'
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination'
import { ServiceUser } from '../medichain/service_user'
import { Sharing } from '../medichain/sharing'
import { Service } from '../medichain/service'
import { User } from '../medichain/user'

export const protobufPackage = 'sota.medichain.medichain'

/** this line is used by starport scaffolding # 3 */
export interface QueryGetAdminRequest {
  id: number
}

export interface QueryGetAdminResponse {
  Admin: Admin | undefined
}

export interface QueryAllAdminRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllAdminResponse {
  Admin: Admin[]
  pagination: PageResponse | undefined
}

export interface QueryUserServiceRequest {
  userId: string
}

export interface QueryUserServiceResponse {
  ServiceUser: ServiceUser[]
}

export interface QueryCheckServiceUserRequest {
  serviceId: string
  userId: string
}

export interface QueryCheckServiceUserResponse {
  ServiceUser: ServiceUser | undefined
}

export interface QueryCheckSharingRequest {
  ownerId: string
  viewerId: string
}

export interface QueryCheckSharingResponse {
  Sharing: Sharing | undefined
  Owner: ServiceUser | undefined
}

export interface QueryGetSharingRequest {
  index: string
}

export interface QueryGetSharingResponse {
  Sharing: Sharing | undefined
}

export interface QueryAllSharingRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllSharingResponse {
  Sharing: Sharing[]
  pagination: PageResponse | undefined
}

export interface QueryGetServiceUserRequest {
  index: string
}

export interface QueryGetServiceUserResponse {
  ServiceUser: ServiceUser | undefined
}

export interface QueryAllServiceUserRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllServiceUserResponse {
  ServiceUser: ServiceUser[]
  pagination: PageResponse | undefined
}

export interface QueryGetServiceRequest {
  index: string
}

export interface QueryGetServiceResponse {
  Service: Service | undefined
}

export interface QueryAllServiceRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllServiceResponse {
  Service: Service[]
  pagination: PageResponse | undefined
}

export interface QueryGetUserRequest {
  index: string
}

export interface QueryGetUserResponse {
  User: User | undefined
}

export interface QueryAllUserRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllUserResponse {
  User: User[]
  pagination: PageResponse | undefined
}

const baseQueryGetAdminRequest: object = { id: 0 }

export const QueryGetAdminRequest = {
  encode(message: QueryGetAdminRequest, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetAdminRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetAdminRequest } as QueryGetAdminRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetAdminRequest {
    const message = { ...baseQueryGetAdminRequest } as QueryGetAdminRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: QueryGetAdminRequest): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetAdminRequest>): QueryGetAdminRequest {
    const message = { ...baseQueryGetAdminRequest } as QueryGetAdminRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseQueryGetAdminResponse: object = {}

export const QueryGetAdminResponse = {
  encode(message: QueryGetAdminResponse, writer: Writer = Writer.create()): Writer {
    if (message.Admin !== undefined) {
      Admin.encode(message.Admin, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetAdminResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetAdminResponse } as QueryGetAdminResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Admin = Admin.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetAdminResponse {
    const message = { ...baseQueryGetAdminResponse } as QueryGetAdminResponse
    if (object.Admin !== undefined && object.Admin !== null) {
      message.Admin = Admin.fromJSON(object.Admin)
    } else {
      message.Admin = undefined
    }
    return message
  },

  toJSON(message: QueryGetAdminResponse): unknown {
    const obj: any = {}
    message.Admin !== undefined && (obj.Admin = message.Admin ? Admin.toJSON(message.Admin) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetAdminResponse>): QueryGetAdminResponse {
    const message = { ...baseQueryGetAdminResponse } as QueryGetAdminResponse
    if (object.Admin !== undefined && object.Admin !== null) {
      message.Admin = Admin.fromPartial(object.Admin)
    } else {
      message.Admin = undefined
    }
    return message
  }
}

const baseQueryAllAdminRequest: object = {}

export const QueryAllAdminRequest = {
  encode(message: QueryAllAdminRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllAdminRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllAdminRequest } as QueryAllAdminRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllAdminRequest {
    const message = { ...baseQueryAllAdminRequest } as QueryAllAdminRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllAdminRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllAdminRequest>): QueryAllAdminRequest {
    const message = { ...baseQueryAllAdminRequest } as QueryAllAdminRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllAdminResponse: object = {}

export const QueryAllAdminResponse = {
  encode(message: QueryAllAdminResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.Admin) {
      Admin.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllAdminResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllAdminResponse } as QueryAllAdminResponse
    message.Admin = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Admin.push(Admin.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllAdminResponse {
    const message = { ...baseQueryAllAdminResponse } as QueryAllAdminResponse
    message.Admin = []
    if (object.Admin !== undefined && object.Admin !== null) {
      for (const e of object.Admin) {
        message.Admin.push(Admin.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllAdminResponse): unknown {
    const obj: any = {}
    if (message.Admin) {
      obj.Admin = message.Admin.map((e) => (e ? Admin.toJSON(e) : undefined))
    } else {
      obj.Admin = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllAdminResponse>): QueryAllAdminResponse {
    const message = { ...baseQueryAllAdminResponse } as QueryAllAdminResponse
    message.Admin = []
    if (object.Admin !== undefined && object.Admin !== null) {
      for (const e of object.Admin) {
        message.Admin.push(Admin.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryUserServiceRequest: object = { userId: '' }

export const QueryUserServiceRequest = {
  encode(message: QueryUserServiceRequest, writer: Writer = Writer.create()): Writer {
    if (message.userId !== '') {
      writer.uint32(10).string(message.userId)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryUserServiceRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryUserServiceRequest } as QueryUserServiceRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.userId = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryUserServiceRequest {
    const message = { ...baseQueryUserServiceRequest } as QueryUserServiceRequest
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = String(object.userId)
    } else {
      message.userId = ''
    }
    return message
  },

  toJSON(message: QueryUserServiceRequest): unknown {
    const obj: any = {}
    message.userId !== undefined && (obj.userId = message.userId)
    return obj
  },

  fromPartial(object: DeepPartial<QueryUserServiceRequest>): QueryUserServiceRequest {
    const message = { ...baseQueryUserServiceRequest } as QueryUserServiceRequest
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = object.userId
    } else {
      message.userId = ''
    }
    return message
  }
}

const baseQueryUserServiceResponse: object = {}

export const QueryUserServiceResponse = {
  encode(message: QueryUserServiceResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.ServiceUser) {
      ServiceUser.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryUserServiceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryUserServiceResponse } as QueryUserServiceResponse
    message.ServiceUser = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.ServiceUser.push(ServiceUser.decode(reader, reader.uint32()))
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryUserServiceResponse {
    const message = { ...baseQueryUserServiceResponse } as QueryUserServiceResponse
    message.ServiceUser = []
    if (object.ServiceUser !== undefined && object.ServiceUser !== null) {
      for (const e of object.ServiceUser) {
        message.ServiceUser.push(ServiceUser.fromJSON(e))
      }
    }
    return message
  },

  toJSON(message: QueryUserServiceResponse): unknown {
    const obj: any = {}
    if (message.ServiceUser) {
      obj.ServiceUser = message.ServiceUser.map((e) => (e ? ServiceUser.toJSON(e) : undefined))
    } else {
      obj.ServiceUser = []
    }
    return obj
  },

  fromPartial(object: DeepPartial<QueryUserServiceResponse>): QueryUserServiceResponse {
    const message = { ...baseQueryUserServiceResponse } as QueryUserServiceResponse
    message.ServiceUser = []
    if (object.ServiceUser !== undefined && object.ServiceUser !== null) {
      for (const e of object.ServiceUser) {
        message.ServiceUser.push(ServiceUser.fromPartial(e))
      }
    }
    return message
  }
}

const baseQueryCheckServiceUserRequest: object = { serviceId: '', userId: '' }

export const QueryCheckServiceUserRequest = {
  encode(message: QueryCheckServiceUserRequest, writer: Writer = Writer.create()): Writer {
    if (message.serviceId !== '') {
      writer.uint32(10).string(message.serviceId)
    }
    if (message.userId !== '') {
      writer.uint32(18).string(message.userId)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryCheckServiceUserRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryCheckServiceUserRequest } as QueryCheckServiceUserRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.serviceId = reader.string()
          break
        case 2:
          message.userId = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryCheckServiceUserRequest {
    const message = { ...baseQueryCheckServiceUserRequest } as QueryCheckServiceUserRequest
    if (object.serviceId !== undefined && object.serviceId !== null) {
      message.serviceId = String(object.serviceId)
    } else {
      message.serviceId = ''
    }
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = String(object.userId)
    } else {
      message.userId = ''
    }
    return message
  },

  toJSON(message: QueryCheckServiceUserRequest): unknown {
    const obj: any = {}
    message.serviceId !== undefined && (obj.serviceId = message.serviceId)
    message.userId !== undefined && (obj.userId = message.userId)
    return obj
  },

  fromPartial(object: DeepPartial<QueryCheckServiceUserRequest>): QueryCheckServiceUserRequest {
    const message = { ...baseQueryCheckServiceUserRequest } as QueryCheckServiceUserRequest
    if (object.serviceId !== undefined && object.serviceId !== null) {
      message.serviceId = object.serviceId
    } else {
      message.serviceId = ''
    }
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = object.userId
    } else {
      message.userId = ''
    }
    return message
  }
}

const baseQueryCheckServiceUserResponse: object = {}

export const QueryCheckServiceUserResponse = {
  encode(message: QueryCheckServiceUserResponse, writer: Writer = Writer.create()): Writer {
    if (message.ServiceUser !== undefined) {
      ServiceUser.encode(message.ServiceUser, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryCheckServiceUserResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryCheckServiceUserResponse } as QueryCheckServiceUserResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.ServiceUser = ServiceUser.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryCheckServiceUserResponse {
    const message = { ...baseQueryCheckServiceUserResponse } as QueryCheckServiceUserResponse
    if (object.ServiceUser !== undefined && object.ServiceUser !== null) {
      message.ServiceUser = ServiceUser.fromJSON(object.ServiceUser)
    } else {
      message.ServiceUser = undefined
    }
    return message
  },

  toJSON(message: QueryCheckServiceUserResponse): unknown {
    const obj: any = {}
    message.ServiceUser !== undefined && (obj.ServiceUser = message.ServiceUser ? ServiceUser.toJSON(message.ServiceUser) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryCheckServiceUserResponse>): QueryCheckServiceUserResponse {
    const message = { ...baseQueryCheckServiceUserResponse } as QueryCheckServiceUserResponse
    if (object.ServiceUser !== undefined && object.ServiceUser !== null) {
      message.ServiceUser = ServiceUser.fromPartial(object.ServiceUser)
    } else {
      message.ServiceUser = undefined
    }
    return message
  }
}

const baseQueryCheckSharingRequest: object = { ownerId: '', viewerId: '' }

export const QueryCheckSharingRequest = {
  encode(message: QueryCheckSharingRequest, writer: Writer = Writer.create()): Writer {
    if (message.ownerId !== '') {
      writer.uint32(10).string(message.ownerId)
    }
    if (message.viewerId !== '') {
      writer.uint32(18).string(message.viewerId)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryCheckSharingRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryCheckSharingRequest } as QueryCheckSharingRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.ownerId = reader.string()
          break
        case 2:
          message.viewerId = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryCheckSharingRequest {
    const message = { ...baseQueryCheckSharingRequest } as QueryCheckSharingRequest
    if (object.ownerId !== undefined && object.ownerId !== null) {
      message.ownerId = String(object.ownerId)
    } else {
      message.ownerId = ''
    }
    if (object.viewerId !== undefined && object.viewerId !== null) {
      message.viewerId = String(object.viewerId)
    } else {
      message.viewerId = ''
    }
    return message
  },

  toJSON(message: QueryCheckSharingRequest): unknown {
    const obj: any = {}
    message.ownerId !== undefined && (obj.ownerId = message.ownerId)
    message.viewerId !== undefined && (obj.viewerId = message.viewerId)
    return obj
  },

  fromPartial(object: DeepPartial<QueryCheckSharingRequest>): QueryCheckSharingRequest {
    const message = { ...baseQueryCheckSharingRequest } as QueryCheckSharingRequest
    if (object.ownerId !== undefined && object.ownerId !== null) {
      message.ownerId = object.ownerId
    } else {
      message.ownerId = ''
    }
    if (object.viewerId !== undefined && object.viewerId !== null) {
      message.viewerId = object.viewerId
    } else {
      message.viewerId = ''
    }
    return message
  }
}

const baseQueryCheckSharingResponse: object = {}

export const QueryCheckSharingResponse = {
  encode(message: QueryCheckSharingResponse, writer: Writer = Writer.create()): Writer {
    if (message.Sharing !== undefined) {
      Sharing.encode(message.Sharing, writer.uint32(10).fork()).ldelim()
    }
    if (message.Owner !== undefined) {
      ServiceUser.encode(message.Owner, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryCheckSharingResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryCheckSharingResponse } as QueryCheckSharingResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Sharing = Sharing.decode(reader, reader.uint32())
          break
        case 2:
          message.Owner = ServiceUser.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryCheckSharingResponse {
    const message = { ...baseQueryCheckSharingResponse } as QueryCheckSharingResponse
    if (object.Sharing !== undefined && object.Sharing !== null) {
      message.Sharing = Sharing.fromJSON(object.Sharing)
    } else {
      message.Sharing = undefined
    }
    if (object.Owner !== undefined && object.Owner !== null) {
      message.Owner = ServiceUser.fromJSON(object.Owner)
    } else {
      message.Owner = undefined
    }
    return message
  },

  toJSON(message: QueryCheckSharingResponse): unknown {
    const obj: any = {}
    message.Sharing !== undefined && (obj.Sharing = message.Sharing ? Sharing.toJSON(message.Sharing) : undefined)
    message.Owner !== undefined && (obj.Owner = message.Owner ? ServiceUser.toJSON(message.Owner) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryCheckSharingResponse>): QueryCheckSharingResponse {
    const message = { ...baseQueryCheckSharingResponse } as QueryCheckSharingResponse
    if (object.Sharing !== undefined && object.Sharing !== null) {
      message.Sharing = Sharing.fromPartial(object.Sharing)
    } else {
      message.Sharing = undefined
    }
    if (object.Owner !== undefined && object.Owner !== null) {
      message.Owner = ServiceUser.fromPartial(object.Owner)
    } else {
      message.Owner = undefined
    }
    return message
  }
}

const baseQueryGetSharingRequest: object = { index: '' }

export const QueryGetSharingRequest = {
  encode(message: QueryGetSharingRequest, writer: Writer = Writer.create()): Writer {
    if (message.index !== '') {
      writer.uint32(10).string(message.index)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetSharingRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetSharingRequest } as QueryGetSharingRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetSharingRequest {
    const message = { ...baseQueryGetSharingRequest } as QueryGetSharingRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index)
    } else {
      message.index = ''
    }
    return message
  },

  toJSON(message: QueryGetSharingRequest): unknown {
    const obj: any = {}
    message.index !== undefined && (obj.index = message.index)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetSharingRequest>): QueryGetSharingRequest {
    const message = { ...baseQueryGetSharingRequest } as QueryGetSharingRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index
    } else {
      message.index = ''
    }
    return message
  }
}

const baseQueryGetSharingResponse: object = {}

export const QueryGetSharingResponse = {
  encode(message: QueryGetSharingResponse, writer: Writer = Writer.create()): Writer {
    if (message.Sharing !== undefined) {
      Sharing.encode(message.Sharing, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetSharingResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetSharingResponse } as QueryGetSharingResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Sharing = Sharing.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetSharingResponse {
    const message = { ...baseQueryGetSharingResponse } as QueryGetSharingResponse
    if (object.Sharing !== undefined && object.Sharing !== null) {
      message.Sharing = Sharing.fromJSON(object.Sharing)
    } else {
      message.Sharing = undefined
    }
    return message
  },

  toJSON(message: QueryGetSharingResponse): unknown {
    const obj: any = {}
    message.Sharing !== undefined && (obj.Sharing = message.Sharing ? Sharing.toJSON(message.Sharing) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetSharingResponse>): QueryGetSharingResponse {
    const message = { ...baseQueryGetSharingResponse } as QueryGetSharingResponse
    if (object.Sharing !== undefined && object.Sharing !== null) {
      message.Sharing = Sharing.fromPartial(object.Sharing)
    } else {
      message.Sharing = undefined
    }
    return message
  }
}

const baseQueryAllSharingRequest: object = {}

export const QueryAllSharingRequest = {
  encode(message: QueryAllSharingRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllSharingRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllSharingRequest } as QueryAllSharingRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllSharingRequest {
    const message = { ...baseQueryAllSharingRequest } as QueryAllSharingRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllSharingRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllSharingRequest>): QueryAllSharingRequest {
    const message = { ...baseQueryAllSharingRequest } as QueryAllSharingRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllSharingResponse: object = {}

export const QueryAllSharingResponse = {
  encode(message: QueryAllSharingResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.Sharing) {
      Sharing.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllSharingResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllSharingResponse } as QueryAllSharingResponse
    message.Sharing = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Sharing.push(Sharing.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllSharingResponse {
    const message = { ...baseQueryAllSharingResponse } as QueryAllSharingResponse
    message.Sharing = []
    if (object.Sharing !== undefined && object.Sharing !== null) {
      for (const e of object.Sharing) {
        message.Sharing.push(Sharing.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllSharingResponse): unknown {
    const obj: any = {}
    if (message.Sharing) {
      obj.Sharing = message.Sharing.map((e) => (e ? Sharing.toJSON(e) : undefined))
    } else {
      obj.Sharing = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllSharingResponse>): QueryAllSharingResponse {
    const message = { ...baseQueryAllSharingResponse } as QueryAllSharingResponse
    message.Sharing = []
    if (object.Sharing !== undefined && object.Sharing !== null) {
      for (const e of object.Sharing) {
        message.Sharing.push(Sharing.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryGetServiceUserRequest: object = { index: '' }

export const QueryGetServiceUserRequest = {
  encode(message: QueryGetServiceUserRequest, writer: Writer = Writer.create()): Writer {
    if (message.index !== '') {
      writer.uint32(10).string(message.index)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetServiceUserRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetServiceUserRequest } as QueryGetServiceUserRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetServiceUserRequest {
    const message = { ...baseQueryGetServiceUserRequest } as QueryGetServiceUserRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index)
    } else {
      message.index = ''
    }
    return message
  },

  toJSON(message: QueryGetServiceUserRequest): unknown {
    const obj: any = {}
    message.index !== undefined && (obj.index = message.index)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetServiceUserRequest>): QueryGetServiceUserRequest {
    const message = { ...baseQueryGetServiceUserRequest } as QueryGetServiceUserRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index
    } else {
      message.index = ''
    }
    return message
  }
}

const baseQueryGetServiceUserResponse: object = {}

export const QueryGetServiceUserResponse = {
  encode(message: QueryGetServiceUserResponse, writer: Writer = Writer.create()): Writer {
    if (message.ServiceUser !== undefined) {
      ServiceUser.encode(message.ServiceUser, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetServiceUserResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetServiceUserResponse } as QueryGetServiceUserResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.ServiceUser = ServiceUser.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetServiceUserResponse {
    const message = { ...baseQueryGetServiceUserResponse } as QueryGetServiceUserResponse
    if (object.ServiceUser !== undefined && object.ServiceUser !== null) {
      message.ServiceUser = ServiceUser.fromJSON(object.ServiceUser)
    } else {
      message.ServiceUser = undefined
    }
    return message
  },

  toJSON(message: QueryGetServiceUserResponse): unknown {
    const obj: any = {}
    message.ServiceUser !== undefined && (obj.ServiceUser = message.ServiceUser ? ServiceUser.toJSON(message.ServiceUser) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetServiceUserResponse>): QueryGetServiceUserResponse {
    const message = { ...baseQueryGetServiceUserResponse } as QueryGetServiceUserResponse
    if (object.ServiceUser !== undefined && object.ServiceUser !== null) {
      message.ServiceUser = ServiceUser.fromPartial(object.ServiceUser)
    } else {
      message.ServiceUser = undefined
    }
    return message
  }
}

const baseQueryAllServiceUserRequest: object = {}

export const QueryAllServiceUserRequest = {
  encode(message: QueryAllServiceUserRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllServiceUserRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllServiceUserRequest } as QueryAllServiceUserRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllServiceUserRequest {
    const message = { ...baseQueryAllServiceUserRequest } as QueryAllServiceUserRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllServiceUserRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllServiceUserRequest>): QueryAllServiceUserRequest {
    const message = { ...baseQueryAllServiceUserRequest } as QueryAllServiceUserRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllServiceUserResponse: object = {}

export const QueryAllServiceUserResponse = {
  encode(message: QueryAllServiceUserResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.ServiceUser) {
      ServiceUser.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllServiceUserResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllServiceUserResponse } as QueryAllServiceUserResponse
    message.ServiceUser = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.ServiceUser.push(ServiceUser.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllServiceUserResponse {
    const message = { ...baseQueryAllServiceUserResponse } as QueryAllServiceUserResponse
    message.ServiceUser = []
    if (object.ServiceUser !== undefined && object.ServiceUser !== null) {
      for (const e of object.ServiceUser) {
        message.ServiceUser.push(ServiceUser.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllServiceUserResponse): unknown {
    const obj: any = {}
    if (message.ServiceUser) {
      obj.ServiceUser = message.ServiceUser.map((e) => (e ? ServiceUser.toJSON(e) : undefined))
    } else {
      obj.ServiceUser = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllServiceUserResponse>): QueryAllServiceUserResponse {
    const message = { ...baseQueryAllServiceUserResponse } as QueryAllServiceUserResponse
    message.ServiceUser = []
    if (object.ServiceUser !== undefined && object.ServiceUser !== null) {
      for (const e of object.ServiceUser) {
        message.ServiceUser.push(ServiceUser.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryGetServiceRequest: object = { index: '' }

export const QueryGetServiceRequest = {
  encode(message: QueryGetServiceRequest, writer: Writer = Writer.create()): Writer {
    if (message.index !== '') {
      writer.uint32(10).string(message.index)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetServiceRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetServiceRequest } as QueryGetServiceRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetServiceRequest {
    const message = { ...baseQueryGetServiceRequest } as QueryGetServiceRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index)
    } else {
      message.index = ''
    }
    return message
  },

  toJSON(message: QueryGetServiceRequest): unknown {
    const obj: any = {}
    message.index !== undefined && (obj.index = message.index)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetServiceRequest>): QueryGetServiceRequest {
    const message = { ...baseQueryGetServiceRequest } as QueryGetServiceRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index
    } else {
      message.index = ''
    }
    return message
  }
}

const baseQueryGetServiceResponse: object = {}

export const QueryGetServiceResponse = {
  encode(message: QueryGetServiceResponse, writer: Writer = Writer.create()): Writer {
    if (message.Service !== undefined) {
      Service.encode(message.Service, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetServiceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetServiceResponse } as QueryGetServiceResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Service = Service.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetServiceResponse {
    const message = { ...baseQueryGetServiceResponse } as QueryGetServiceResponse
    if (object.Service !== undefined && object.Service !== null) {
      message.Service = Service.fromJSON(object.Service)
    } else {
      message.Service = undefined
    }
    return message
  },

  toJSON(message: QueryGetServiceResponse): unknown {
    const obj: any = {}
    message.Service !== undefined && (obj.Service = message.Service ? Service.toJSON(message.Service) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetServiceResponse>): QueryGetServiceResponse {
    const message = { ...baseQueryGetServiceResponse } as QueryGetServiceResponse
    if (object.Service !== undefined && object.Service !== null) {
      message.Service = Service.fromPartial(object.Service)
    } else {
      message.Service = undefined
    }
    return message
  }
}

const baseQueryAllServiceRequest: object = {}

export const QueryAllServiceRequest = {
  encode(message: QueryAllServiceRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllServiceRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllServiceRequest } as QueryAllServiceRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllServiceRequest {
    const message = { ...baseQueryAllServiceRequest } as QueryAllServiceRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllServiceRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllServiceRequest>): QueryAllServiceRequest {
    const message = { ...baseQueryAllServiceRequest } as QueryAllServiceRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllServiceResponse: object = {}

export const QueryAllServiceResponse = {
  encode(message: QueryAllServiceResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.Service) {
      Service.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllServiceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllServiceResponse } as QueryAllServiceResponse
    message.Service = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Service.push(Service.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllServiceResponse {
    const message = { ...baseQueryAllServiceResponse } as QueryAllServiceResponse
    message.Service = []
    if (object.Service !== undefined && object.Service !== null) {
      for (const e of object.Service) {
        message.Service.push(Service.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllServiceResponse): unknown {
    const obj: any = {}
    if (message.Service) {
      obj.Service = message.Service.map((e) => (e ? Service.toJSON(e) : undefined))
    } else {
      obj.Service = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllServiceResponse>): QueryAllServiceResponse {
    const message = { ...baseQueryAllServiceResponse } as QueryAllServiceResponse
    message.Service = []
    if (object.Service !== undefined && object.Service !== null) {
      for (const e of object.Service) {
        message.Service.push(Service.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryGetUserRequest: object = { index: '' }

export const QueryGetUserRequest = {
  encode(message: QueryGetUserRequest, writer: Writer = Writer.create()): Writer {
    if (message.index !== '') {
      writer.uint32(10).string(message.index)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetUserRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetUserRequest } as QueryGetUserRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetUserRequest {
    const message = { ...baseQueryGetUserRequest } as QueryGetUserRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index)
    } else {
      message.index = ''
    }
    return message
  },

  toJSON(message: QueryGetUserRequest): unknown {
    const obj: any = {}
    message.index !== undefined && (obj.index = message.index)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetUserRequest>): QueryGetUserRequest {
    const message = { ...baseQueryGetUserRequest } as QueryGetUserRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index
    } else {
      message.index = ''
    }
    return message
  }
}

const baseQueryGetUserResponse: object = {}

export const QueryGetUserResponse = {
  encode(message: QueryGetUserResponse, writer: Writer = Writer.create()): Writer {
    if (message.User !== undefined) {
      User.encode(message.User, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetUserResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetUserResponse } as QueryGetUserResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.User = User.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetUserResponse {
    const message = { ...baseQueryGetUserResponse } as QueryGetUserResponse
    if (object.User !== undefined && object.User !== null) {
      message.User = User.fromJSON(object.User)
    } else {
      message.User = undefined
    }
    return message
  },

  toJSON(message: QueryGetUserResponse): unknown {
    const obj: any = {}
    message.User !== undefined && (obj.User = message.User ? User.toJSON(message.User) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetUserResponse>): QueryGetUserResponse {
    const message = { ...baseQueryGetUserResponse } as QueryGetUserResponse
    if (object.User !== undefined && object.User !== null) {
      message.User = User.fromPartial(object.User)
    } else {
      message.User = undefined
    }
    return message
  }
}

const baseQueryAllUserRequest: object = {}

export const QueryAllUserRequest = {
  encode(message: QueryAllUserRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllUserRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllUserRequest } as QueryAllUserRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllUserRequest {
    const message = { ...baseQueryAllUserRequest } as QueryAllUserRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllUserRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllUserRequest>): QueryAllUserRequest {
    const message = { ...baseQueryAllUserRequest } as QueryAllUserRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllUserResponse: object = {}

export const QueryAllUserResponse = {
  encode(message: QueryAllUserResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.User) {
      User.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllUserResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllUserResponse } as QueryAllUserResponse
    message.User = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.User.push(User.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllUserResponse {
    const message = { ...baseQueryAllUserResponse } as QueryAllUserResponse
    message.User = []
    if (object.User !== undefined && object.User !== null) {
      for (const e of object.User) {
        message.User.push(User.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllUserResponse): unknown {
    const obj: any = {}
    if (message.User) {
      obj.User = message.User.map((e) => (e ? User.toJSON(e) : undefined))
    } else {
      obj.User = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllUserResponse>): QueryAllUserResponse {
    const message = { ...baseQueryAllUserResponse } as QueryAllUserResponse
    message.User = []
    if (object.User !== undefined && object.User !== null) {
      for (const e of object.User) {
        message.User.push(User.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a admin by id. */
  Admin(request: QueryGetAdminRequest): Promise<QueryGetAdminResponse>
  /** Queries a list of admin items. */
  AdminAll(request: QueryAllAdminRequest): Promise<QueryAllAdminResponse>
  /** Queries a list of userService items. */
  UserService(request: QueryUserServiceRequest): Promise<QueryUserServiceResponse>
  /** Queries a list of checkServiceUser items. */
  CheckServiceUser(request: QueryCheckServiceUserRequest): Promise<QueryCheckServiceUserResponse>
  /** Queries a list of checkSharing items. */
  CheckSharing(request: QueryCheckSharingRequest): Promise<QueryCheckSharingResponse>
  /** Queries a sharing by index. */
  Sharing(request: QueryGetSharingRequest): Promise<QueryGetSharingResponse>
  /** Queries a list of sharing items. */
  SharingAll(request: QueryAllSharingRequest): Promise<QueryAllSharingResponse>
  /** Queries a serviceUser by index. */
  ServiceUser(request: QueryGetServiceUserRequest): Promise<QueryGetServiceUserResponse>
  /** Queries a list of serviceUser items. */
  ServiceUserAll(request: QueryAllServiceUserRequest): Promise<QueryAllServiceUserResponse>
  /** Queries a service by index. */
  Service(request: QueryGetServiceRequest): Promise<QueryGetServiceResponse>
  /** Queries a list of service items. */
  ServiceAll(request: QueryAllServiceRequest): Promise<QueryAllServiceResponse>
  /** Queries a user by index. */
  User(request: QueryGetUserRequest): Promise<QueryGetUserResponse>
  /** Queries a list of user items. */
  UserAll(request: QueryAllUserRequest): Promise<QueryAllUserResponse>
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  Admin(request: QueryGetAdminRequest): Promise<QueryGetAdminResponse> {
    const data = QueryGetAdminRequest.encode(request).finish()
    const promise = this.rpc.request('sota.medichain.medichain.Query', 'Admin', data)
    return promise.then((data) => QueryGetAdminResponse.decode(new Reader(data)))
  }

  AdminAll(request: QueryAllAdminRequest): Promise<QueryAllAdminResponse> {
    const data = QueryAllAdminRequest.encode(request).finish()
    const promise = this.rpc.request('sota.medichain.medichain.Query', 'AdminAll', data)
    return promise.then((data) => QueryAllAdminResponse.decode(new Reader(data)))
  }

  UserService(request: QueryUserServiceRequest): Promise<QueryUserServiceResponse> {
    const data = QueryUserServiceRequest.encode(request).finish()
    const promise = this.rpc.request('sota.medichain.medichain.Query', 'UserService', data)
    return promise.then((data) => QueryUserServiceResponse.decode(new Reader(data)))
  }

  CheckServiceUser(request: QueryCheckServiceUserRequest): Promise<QueryCheckServiceUserResponse> {
    const data = QueryCheckServiceUserRequest.encode(request).finish()
    const promise = this.rpc.request('sota.medichain.medichain.Query', 'CheckServiceUser', data)
    return promise.then((data) => QueryCheckServiceUserResponse.decode(new Reader(data)))
  }

  CheckSharing(request: QueryCheckSharingRequest): Promise<QueryCheckSharingResponse> {
    const data = QueryCheckSharingRequest.encode(request).finish()
    const promise = this.rpc.request('sota.medichain.medichain.Query', 'CheckSharing', data)
    return promise.then((data) => QueryCheckSharingResponse.decode(new Reader(data)))
  }

  Sharing(request: QueryGetSharingRequest): Promise<QueryGetSharingResponse> {
    const data = QueryGetSharingRequest.encode(request).finish()
    const promise = this.rpc.request('sota.medichain.medichain.Query', 'Sharing', data)
    return promise.then((data) => QueryGetSharingResponse.decode(new Reader(data)))
  }

  SharingAll(request: QueryAllSharingRequest): Promise<QueryAllSharingResponse> {
    const data = QueryAllSharingRequest.encode(request).finish()
    const promise = this.rpc.request('sota.medichain.medichain.Query', 'SharingAll', data)
    return promise.then((data) => QueryAllSharingResponse.decode(new Reader(data)))
  }

  ServiceUser(request: QueryGetServiceUserRequest): Promise<QueryGetServiceUserResponse> {
    const data = QueryGetServiceUserRequest.encode(request).finish()
    const promise = this.rpc.request('sota.medichain.medichain.Query', 'ServiceUser', data)
    return promise.then((data) => QueryGetServiceUserResponse.decode(new Reader(data)))
  }

  ServiceUserAll(request: QueryAllServiceUserRequest): Promise<QueryAllServiceUserResponse> {
    const data = QueryAllServiceUserRequest.encode(request).finish()
    const promise = this.rpc.request('sota.medichain.medichain.Query', 'ServiceUserAll', data)
    return promise.then((data) => QueryAllServiceUserResponse.decode(new Reader(data)))
  }

  Service(request: QueryGetServiceRequest): Promise<QueryGetServiceResponse> {
    const data = QueryGetServiceRequest.encode(request).finish()
    const promise = this.rpc.request('sota.medichain.medichain.Query', 'Service', data)
    return promise.then((data) => QueryGetServiceResponse.decode(new Reader(data)))
  }

  ServiceAll(request: QueryAllServiceRequest): Promise<QueryAllServiceResponse> {
    const data = QueryAllServiceRequest.encode(request).finish()
    const promise = this.rpc.request('sota.medichain.medichain.Query', 'ServiceAll', data)
    return promise.then((data) => QueryAllServiceResponse.decode(new Reader(data)))
  }

  User(request: QueryGetUserRequest): Promise<QueryGetUserResponse> {
    const data = QueryGetUserRequest.encode(request).finish()
    const promise = this.rpc.request('sota.medichain.medichain.Query', 'User', data)
    return promise.then((data) => QueryGetUserResponse.decode(new Reader(data)))
  }

  UserAll(request: QueryAllUserRequest): Promise<QueryAllUserResponse> {
    const data = QueryAllUserRequest.encode(request).finish()
    const promise = this.rpc.request('sota.medichain.medichain.Query', 'UserAll', data)
    return promise.then((data) => QueryAllUserResponse.decode(new Reader(data)))
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>
}

declare var self: any | undefined
declare var window: any | undefined
var globalThis: any = (() => {
  if (typeof globalThis !== 'undefined') return globalThis
  if (typeof self !== 'undefined') return self
  if (typeof window !== 'undefined') return window
  if (typeof global !== 'undefined') return global
  throw 'Unable to locate global object'
})()

type Builtin = Date | Function | Uint8Array | string | number | undefined
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER')
  }
  return long.toNumber()
}

if (util.Long !== Long) {
  util.Long = Long as any
  configure()
}
