package types

const (
	// ModuleName defines the module name
	ModuleName = "medichain"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// RouterKey is the message route for slashing
	RouterKey = ModuleName

	// QuerierRoute defines the module's query routing key
	QuerierRoute = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_medichain"

	// this line is used by starport scaffolding # ibc/keys/name
)

// this line is used by starport scaffolding # ibc/keys/port

func KeyPrefix(p string) []byte {
	return []byte(p)
}

const (
	UserKey = "User-value-"
)

const (
	ServiceKey = "Service-value-"
	ViewerSharingCount = "Viewer-count-"
)

const (
	ServiceUserKey    = "ServiceUser-value-"
	OwnerSharingCount = "Owner-count-"
)

const (
	SharingKey = "Sharing-value-"
)

const (
	AdminKey      = "Admin-value-"
	AdminCountKey = "Admin-count-"
)
