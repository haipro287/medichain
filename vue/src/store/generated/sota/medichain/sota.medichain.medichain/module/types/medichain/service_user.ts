/* eslint-disable */
import * as Long from 'long'
import { util, configure, Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'sota.medichain.medichain'

export interface ServiceUser {
  creator: string
  index: string
  serviceId: string
  userId: string
  serviceUserId: string
  connectedAt: number
  isActive: boolean
}

const baseServiceUser: object = { creator: '', index: '', serviceId: '', userId: '', serviceUserId: '', connectedAt: 0, isActive: false }

export const ServiceUser = {
  encode(message: ServiceUser, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.index !== '') {
      writer.uint32(18).string(message.index)
    }
    if (message.serviceId !== '') {
      writer.uint32(26).string(message.serviceId)
    }
    if (message.userId !== '') {
      writer.uint32(34).string(message.userId)
    }
    if (message.serviceUserId !== '') {
      writer.uint32(42).string(message.serviceUserId)
    }
    if (message.connectedAt !== 0) {
      writer.uint32(48).int64(message.connectedAt)
    }
    if (message.isActive === true) {
      writer.uint32(56).bool(message.isActive)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): ServiceUser {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseServiceUser } as ServiceUser
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.index = reader.string()
          break
        case 3:
          message.serviceId = reader.string()
          break
        case 4:
          message.userId = reader.string()
          break
        case 5:
          message.serviceUserId = reader.string()
          break
        case 6:
          message.connectedAt = longToNumber(reader.int64() as Long)
          break
        case 7:
          message.isActive = reader.bool()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): ServiceUser {
    const message = { ...baseServiceUser } as ServiceUser
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index)
    } else {
      message.index = ''
    }
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
    if (object.serviceUserId !== undefined && object.serviceUserId !== null) {
      message.serviceUserId = String(object.serviceUserId)
    } else {
      message.serviceUserId = ''
    }
    if (object.connectedAt !== undefined && object.connectedAt !== null) {
      message.connectedAt = Number(object.connectedAt)
    } else {
      message.connectedAt = 0
    }
    if (object.isActive !== undefined && object.isActive !== null) {
      message.isActive = Boolean(object.isActive)
    } else {
      message.isActive = false
    }
    return message
  },

  toJSON(message: ServiceUser): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.index !== undefined && (obj.index = message.index)
    message.serviceId !== undefined && (obj.serviceId = message.serviceId)
    message.userId !== undefined && (obj.userId = message.userId)
    message.serviceUserId !== undefined && (obj.serviceUserId = message.serviceUserId)
    message.connectedAt !== undefined && (obj.connectedAt = message.connectedAt)
    message.isActive !== undefined && (obj.isActive = message.isActive)
    return obj
  },

  fromPartial(object: DeepPartial<ServiceUser>): ServiceUser {
    const message = { ...baseServiceUser } as ServiceUser
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index
    } else {
      message.index = ''
    }
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
    if (object.serviceUserId !== undefined && object.serviceUserId !== null) {
      message.serviceUserId = object.serviceUserId
    } else {
      message.serviceUserId = ''
    }
    if (object.connectedAt !== undefined && object.connectedAt !== null) {
      message.connectedAt = object.connectedAt
    } else {
      message.connectedAt = 0
    }
    if (object.isActive !== undefined && object.isActive !== null) {
      message.isActive = object.isActive
    } else {
      message.isActive = false
    }
    return message
  }
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
