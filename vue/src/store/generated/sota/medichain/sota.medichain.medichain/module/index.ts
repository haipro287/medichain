// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgRejectSharing } from "./types/medichain/tx";
import { MsgDeleteSharing } from "./types/medichain/tx";
import { MsgCreateService } from "./types/medichain/tx";
import { MsgUpdateUser } from "./types/medichain/tx";
import { MsgUpdateServiceUser } from "./types/medichain/tx";
import { MsgUpdateService } from "./types/medichain/tx";
import { MsgCreateSharing } from "./types/medichain/tx";
import { MsgUpdateAdmin } from "./types/medichain/tx";
import { MsgCreateUser } from "./types/medichain/tx";
import { MsgDeleteService } from "./types/medichain/tx";
import { MsgAcceptSharing } from "./types/medichain/tx";
import { MsgCreateAdmin } from "./types/medichain/tx";
import { MsgUpdateSharing } from "./types/medichain/tx";
import { MsgCreateSharingBatch } from "./types/medichain/tx";
import { MsgDeleteAdmin } from "./types/medichain/tx";
import { MsgDeleteServiceUser } from "./types/medichain/tx";
import { MsgCreateServiceUser } from "./types/medichain/tx";
import { MsgDeleteUser } from "./types/medichain/tx";


const types = [
  ["/sota.medichain.medichain.MsgRejectSharing", MsgRejectSharing],
  ["/sota.medichain.medichain.MsgDeleteSharing", MsgDeleteSharing],
  ["/sota.medichain.medichain.MsgCreateService", MsgCreateService],
  ["/sota.medichain.medichain.MsgUpdateUser", MsgUpdateUser],
  ["/sota.medichain.medichain.MsgUpdateServiceUser", MsgUpdateServiceUser],
  ["/sota.medichain.medichain.MsgUpdateService", MsgUpdateService],
  ["/sota.medichain.medichain.MsgCreateSharing", MsgCreateSharing],
  ["/sota.medichain.medichain.MsgUpdateAdmin", MsgUpdateAdmin],
  ["/sota.medichain.medichain.MsgCreateUser", MsgCreateUser],
  ["/sota.medichain.medichain.MsgDeleteService", MsgDeleteService],
  ["/sota.medichain.medichain.MsgAcceptSharing", MsgAcceptSharing],
  ["/sota.medichain.medichain.MsgCreateAdmin", MsgCreateAdmin],
  ["/sota.medichain.medichain.MsgUpdateSharing", MsgUpdateSharing],
  ["/sota.medichain.medichain.MsgCreateSharingBatch", MsgCreateSharingBatch],
  ["/sota.medichain.medichain.MsgDeleteAdmin", MsgDeleteAdmin],
  ["/sota.medichain.medichain.MsgDeleteServiceUser", MsgDeleteServiceUser],
  ["/sota.medichain.medichain.MsgCreateServiceUser", MsgCreateServiceUser],
  ["/sota.medichain.medichain.MsgDeleteUser", MsgDeleteUser],
  
];
export const MissingWalletError = new Error("wallet is required");

const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;

  const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgRejectSharing: (data: MsgRejectSharing): EncodeObject => ({ typeUrl: "/sota.medichain.medichain.MsgRejectSharing", value: data }),
    msgDeleteSharing: (data: MsgDeleteSharing): EncodeObject => ({ typeUrl: "/sota.medichain.medichain.MsgDeleteSharing", value: data }),
    msgCreateService: (data: MsgCreateService): EncodeObject => ({ typeUrl: "/sota.medichain.medichain.MsgCreateService", value: data }),
    msgUpdateUser: (data: MsgUpdateUser): EncodeObject => ({ typeUrl: "/sota.medichain.medichain.MsgUpdateUser", value: data }),
    msgUpdateServiceUser: (data: MsgUpdateServiceUser): EncodeObject => ({ typeUrl: "/sota.medichain.medichain.MsgUpdateServiceUser", value: data }),
    msgUpdateService: (data: MsgUpdateService): EncodeObject => ({ typeUrl: "/sota.medichain.medichain.MsgUpdateService", value: data }),
    msgCreateSharing: (data: MsgCreateSharing): EncodeObject => ({ typeUrl: "/sota.medichain.medichain.MsgCreateSharing", value: data }),
    msgUpdateAdmin: (data: MsgUpdateAdmin): EncodeObject => ({ typeUrl: "/sota.medichain.medichain.MsgUpdateAdmin", value: data }),
    msgCreateUser: (data: MsgCreateUser): EncodeObject => ({ typeUrl: "/sota.medichain.medichain.MsgCreateUser", value: data }),
    msgDeleteService: (data: MsgDeleteService): EncodeObject => ({ typeUrl: "/sota.medichain.medichain.MsgDeleteService", value: data }),
    msgAcceptSharing: (data: MsgAcceptSharing): EncodeObject => ({ typeUrl: "/sota.medichain.medichain.MsgAcceptSharing", value: data }),
    msgCreateAdmin: (data: MsgCreateAdmin): EncodeObject => ({ typeUrl: "/sota.medichain.medichain.MsgCreateAdmin", value: data }),
    msgUpdateSharing: (data: MsgUpdateSharing): EncodeObject => ({ typeUrl: "/sota.medichain.medichain.MsgUpdateSharing", value: data }),
    msgCreateSharingBatch: (data: MsgCreateSharingBatch): EncodeObject => ({ typeUrl: "/sota.medichain.medichain.MsgCreateSharingBatch", value: data }),
    msgDeleteAdmin: (data: MsgDeleteAdmin): EncodeObject => ({ typeUrl: "/sota.medichain.medichain.MsgDeleteAdmin", value: data }),
    msgDeleteServiceUser: (data: MsgDeleteServiceUser): EncodeObject => ({ typeUrl: "/sota.medichain.medichain.MsgDeleteServiceUser", value: data }),
    msgCreateServiceUser: (data: MsgCreateServiceUser): EncodeObject => ({ typeUrl: "/sota.medichain.medichain.MsgCreateServiceUser", value: data }),
    msgDeleteUser: (data: MsgDeleteUser): EncodeObject => ({ typeUrl: "/sota.medichain.medichain.MsgDeleteUser", value: data }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
