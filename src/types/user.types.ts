export type TrendingUser = {
	"id": string,
	"username": string,
	"name": string,
	"bio": string,
	"photoUrl": string,
	"followersCount": number,
}

export type UserType = TrendingUser & {
	"followingCount": number,
	"messageCount": number,
	"createdAt": string,
}