configData = {
	numChatMax				: 20,
	personalColor			: true,
	badgeVisible			: true,
	themeURI				: "",
	theme					: "default",
	themeName				: "",
	msgExistDuration		: 0,
	msgAniDuration			: 0,
	debugLevel				: 2,
	useDisplayName			: true,
	loadCheerImgs			: true,
	loadTwitchCons			: true,
	consRealSubsOnly		: true,
	loadDcCons				: true,
<<<<<<< HEAD
	dcConsURI				: "",
	subMonthsMsg			: "☆ {!0:{months} 개월 }구독{0: 시작}! ☆",
	cheersMsg				: "☆ {!0:{bits} 비트 }후원 ! ☆",
	loadClipPreview			: true,
	clipReplaceMsg			: "[ 클립 ]",
	webSocket				: "wss://irc-ws.chat.twitch.tv:443",
	nick					: "justinfan48648",
	pass					: "foobar",
=======
	dcConsURI					: "",
  subMonthsMsg			: "☆ {!0:{months} 개월 }구독{0: 시작}! ☆",
  cheersMsg         : "☆ {!0:{bits} 비트 }후원 ! ☆",
	loadClipPreview		: true,
	clipReplaceMsg		: "[ 클립 ]",
	webSocket					: "wss://irc-ws.chat.twitch.tv:443",
	nick							: "justinfan16831",
	pass							: "foobar",
>>>>>>> 98f4f30c7bf8db66295175c041c2a1ad6f2584ed
	channel						: "#byeolu",
	retryInterval			: 2,
	allMessageHandle		: true,
	muteUser					: ["OpenRCT2"],
	deleteBanMsg			: true,
	commands					: [
		{exe:"clear", msg:"!!clear"},
		{exe:"theme", msg:"!!theme"}
	],
	replaceMsgs				: [
		{orig:/\\u0001ACTION/, to:""},
		{orig:/\\u0001/, to:""}
	]
};
