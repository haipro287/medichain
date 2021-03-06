package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sota/medichain/x/medichain/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) CheckSharing(goCtx context.Context, req *types.QueryCheckSharingRequest) (*types.QueryCheckSharingResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	sharing := types.Sharing{
		Creator:  "",
		Index:    "",
		OwnerId:  req.OwnerId,
		ViewerId: req.ViewerId,
		Status:   "",
	}
	res := k.GetSharingIfExisted(ctx, sharing)
	if res == nil {
		return nil, status.Error(codes.NotFound, "not found")
	}

	owner, isFound := k.GetServiceUser(ctx, sharing.OwnerId)
	if !isFound {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryCheckSharingResponse{
		Sharing: res,
		Owner:   &owner,
	}, nil
}
