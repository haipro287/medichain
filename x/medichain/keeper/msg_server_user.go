package keeper

import (
	"context"
	"fmt"
	"github.com/google/uuid"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/sota/medichain/x/medichain/types"
)

func (k msgServer) CreateUser(goCtx context.Context, msg *types.MsgCreateUser) (*types.MsgCreateUserResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	//validate creator
	if err := k.CheckAdmin(ctx, msg.Creator); err != nil {
		return nil, err
	}

	var indexStr string

	// Check if the id value already exists
	for indexStr == "" {
		index := uuid.New()

		_, isFound := k.GetService(ctx, indexStr)
		if !isFound {
			indexStr = index.String()
		}
	}

	var user = types.User{
		Index:    indexStr,
		Creator:  msg.Creator,
		PubKey:   msg.PubKey,
		IsActive: msg.IsActive,
	}

	_, found := k.GetUserIfExisted(ctx, user)
	if found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "user pubKey existed")
	}

	k.SetUser(
		ctx,
		user,
	)

	return &types.MsgCreateUserResponse{User: &user}, nil
}

func (k msgServer) UpdateUser(goCtx context.Context, msg *types.MsgUpdateUser) (*types.MsgUpdateUserResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	//validate creator
	if err := k.CheckAdmin(ctx, msg.Creator); err != nil {
		return nil, err
	}

	// Check if the value exists
	valFound, isFound := k.GetUser(ctx, msg.Index)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("index %v not set", msg.Index))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != valFound.Creator {
		//return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var user = types.User{
		Index:    msg.Index,
		Creator:  msg.Creator,
		PubKey:   msg.PubKey,
		IsActive: msg.IsActive,
	}

	_, found := k.GetUserIfExisted(ctx, user)
	if found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "user pubKey existed")
	}

	k.SetUser(ctx, user)

	return &types.MsgUpdateUserResponse{User: &user}, nil
}

func (k msgServer) DeleteUser(goCtx context.Context, msg *types.MsgDeleteUser) (*types.MsgDeleteUserResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	//validate creator
	if err := k.CheckAdmin(ctx, msg.Creator); err != nil {
		return nil, err
	}

	// Check if the value exists
	valFound, isFound := k.GetUser(ctx, msg.Index)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("index %v not set", msg.Index))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != valFound.Creator {
		//return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveUser(ctx, msg.Index)

	return &types.MsgDeleteUserResponse{}, nil
}
