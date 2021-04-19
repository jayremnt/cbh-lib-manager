const CONSTANTS = {
	DELAY_TIME: 850,
	CONFIG_URL: "https://monokaitoolkit.com/system_config.json",
	FACEBOOK_URL: "https://facebook.com/",
	ADS: {
		"android": {
			"publisherId": "ca-app-pub-8854188793461271~7452171030",
			"interstitialAdId": "ca-app-pub-8854188793461271/1603729048"
		},
		"ios": {
			"publisherId": "ca-app-pub-8854188793461271~1719730106",
			"interstitialAdId": "ca-app-pub-8854188793461271/7901995073"
		}
	},
	PRODUCTS: [{
		id: 'com.nstudio.mtoolkit.noads.forever',
		type: 'non consumable'
	}, {
		id: 'no_ads_monthly',
		type: 'paid subscription'
	}],
	FEATURES: [ /* {
		"figure": "user-viewing.svg",
		"icon": "fas fa-wand-magic",
		"name": "FEATURE_PROFILE_INSIGHT",
		"subtitle": "FEATURE_PROFILE_INSIGHT_DESCRIPTION",
		"url": "/features/scan-buddies/",
		"color": "#8771de"
	}, */ {
		"figure": "upload-video.svg",
		"icon": "fas fa-download",
		"name": "FEATURE_UPLOAD_LONG_STORY",
		"subtitle": "FEATURE_UPLOAD_LONG_STORY_DESCRIPTION",
		"url": "/features/upload-story/",
		"spotlight": true,
		"color": "#9f5f80"
	}, {
		"figure": "user-download.svg",
		"icon": "fas fa-download",
		"name": "FEATURE_DOWNLOAD_FACEBOOK_VIDEO",
		"subtitle": "FEATURE_DOWNLOAD_FACEBOOK_VIDEO_DESCRIPTION",
		"url": "/features/download-facebook-video/",
		"spotlight": true,
		"color": "#FACD70"
	}, {
		"figure": "user-search.svg",
		"icon": "fas fa-id-card",
		"name": "FEATURE_GET_FACEBOOK_FRIEND_ID",
		"subtitle": "FEATURE_GET_FACEBOOK_FRIEND_ID_DESCRIPTION",
		"url": "/features/friend-facebook-id/",
		"color": "#b6df7f"
	}, {
		"figure": "user-cup.svg",
		"icon": "fas fa-trophy-alt",
		"name": "FEATURE_TOP_INTERACTIVE",
		"subtitle": "FEATURE_TOP_INTERACTIVE_DESCRIPTION",
		"url": "/features/top-interactive/",
		"color": "#ACC0FB"
	}, {
		"figure": "user-medal.svg",
		"icon": "fas fa-award",
		"name": "FEATURE_TOP_MESSAGES",
		"subtitle": "FEATURE_TOP_MESSAGES_DESCRIPTION",
		"url": "/features/top-messages/",
		"spotlight": true,
		"color": "#EFA075"
	}, {
		"figure": "user-avatar-guard.svg",
		"icon": "fas fa-shield-alt",
		"name": "FEATURE_AVATAR_GUARD",
		"subtitle": "FEATURE_AVATAR_GUARD_DESCRIPTION",
		"url": "/features/avatar-shield/",
		"spotlight": true,
		"color": "#F3D8C7"
	}, {
		"figure": "user-shield.svg",
		"icon": "fas fa-user-shield",
		"name": "FEATURE_SET_POST_PRIVACY",
		"subtitle": "FEATURE_SET_POST_PRIVACY_DESCRIPTION",
		"url": "/features/posts-privacy/",
		"color": "#9EE4D9"
	}, {
		"figure": "user-erase.svg",
		"icon": "fas fa-user-shield",
		"name": "FEATURE_DELETE_ALL_POSTS",
		"subtitle": "FEATURE_DELETE_ALL_POSTS_DESCRIPTION",
		"url": "/features/delete-all-posts/",
		"color": "#D2BFB1"
	}, {
		"figure": "user-cleaning.svg",
		"icon": "fas fa-user-times",
		"name": "FEATURE_REMOVE_UNINTERACTIVE",
		"subtitle": "FEATURE_REMOVE_UNINTERACTIVE_DESCRIPTION",
		"url": "/features/remove-uninteractive-friends/",
		"spotlight": true,
		"color": "#9ad3bc"
	}, {
		"figure": "user-think.svg",
		"icon": "fas fa-user-times",
		"name": "FEATURE_REMOVE_ALL_FRIENDS",
		"subtitle": "FEATURE_REMOVE_ALL_FRIENDS_DESCRIPTION",
		"url": "/features/remove-all-friends/",
		"color": "#FAB8C6"
	}, {
		"figure": "user-removing.svg",
		"icon": "fas fa-eye",
		"name": "FEATURE_UNFOLLOW_ALL_FRIENDS",
		"subtitle": "FEATURE_UNFOLLOW_ALL_FRIENDS_DESCRIPTION",
		"url": "/features/unfollow-friends/",
		"color": "#9f5f80"
	}, {
		"figure": "user-reading.svg",
		"icon": "fas fa-eye-slash",
		"name": "FEATURE_CLEAN_FRIENDS_REQUESTS",
		"subtitle": "FEATURE_CLEAN_FRIENDS_REQUESTS_DESCRIPTION",
		"url": "/features/clean-friend-requests/",
		"color": "#b6df7f"
	}, {
		"figure": "user-scanning.svg",
		"icon": "fas fa-quidditch",
		"name": "FEATURE_SCAN_LIKED_PAGES",
		"subtitle": "FEATURE_SCAN_LIKED_PAGES_DESCRIPTION",
		"url": "/features/scan-liked-pages/",
		"color": "#ACC0FB"
	}, {
		"figure": "user-scan-group.svg",
		"icon": "fas fa-search",
		"name": "FEATURE_JOINED_GROUPS",
		"subtitle": "FEATURE_JOINED_GROUPS_DESCRIPTION",
		"url": "/features/scan-joined-groups/",
		"color": "#FACD70"
	}, {
		"figure": "user-viewing.svg",
		"icon": "fas fa-wand-magic",
		"name": "FEATURE_SCAN_COMMENTS",
		"subtitle": "FEATURE_SCAN_COMMENTS_DESCRIPTION",
		"url": "/features/scan-comments/",
		"color": "#b6df7f"
	}]
};

export default CONSTANTS;