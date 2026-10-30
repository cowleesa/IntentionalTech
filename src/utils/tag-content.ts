export interface TagContent {
  title: string;
  heading: string;
  description: string;
  summary: string;
  noindex?: boolean;
}

export const TAG_CONTENT: Record<string, TagContent> = {
  handhelds: {
    title: "Handheld Gaming Reviews & Guides | Intentional Tech",
    heading: "Handheld Gaming",
    description:
      "Handheld gaming console reviews and guides from a casual gamer, covering retro, Android and PC handhelds at every budget.",
    summary:
      "Handheld gaming console reviews and guides from a casual gamer's point of view. Whether you're after a pocket-sized retro handheld, a capable Android device or a full PC handheld, these posts focus on how each one feels to use and how it fits into everyday life.",
  },
  reviews: {
    title: "Gaming Tech Reviews | Intentional Tech",
    heading: "Gaming Tech Reviews",
    description:
      "Hands-on gaming tech reviews for casual gamers, from handheld consoles and controllers to XR glasses, laptops and portable projectors.",
    summary:
      "Hands-on gaming tech reviews for casual gamers rather than spec chasers. Alongside handheld consoles and home consoles, you'll find controllers, XR glasses, laptops and portable projectors, all judged on how they hold up in real use.",
  },
  sponsored: {
    title: "Sponsored Posts | Intentional Tech",
    heading: "Sponsored Posts",
    description:
      "Intentional Tech posts about products provided by a brand for promotional purposes. All views are those of Intentional Tech.",
    summary:
      "These posts cover products provided by a brand for promotional purposes. Each one carries this tag and a disclaimer at the foot of the page, and all views are those of Intentional Tech.",
    noindex: true,
  },
  consoles: {
    title: "Game Console Reviews & Advice | Intentional Tech",
    heading: "Game Consoles",
    description:
      "Game console reviews and advice for casual gamers, covering Nintendo Switch 2, PlayStation Portal, Steam Machine, Analogue 3D and PS Vita.",
    summary:
      "Game console reviews and buying advice for casual gamers, from current hardware like the Nintendo Switch 2 and Steam Machine to the PlayStation Portal, Analogue 3D and the much-missed PS Vita. If you're deciding what to play on next, this is a good place to start.",
  },
  android: {
    title: "Android Gaming Handheld Reviews | Intentional Tech",
    heading: "Android Gaming Handhelds",
    description:
      "Android gaming handheld reviews covering Retroid, AYN, MANGMI, AYANEO and KONKR, with a focus on retro emulation and value for money.",
    summary:
      "Android gaming handheld reviews covering devices from Retroid, AYN, MANGMI, AYANEO and KONKR. These posts look at retro emulation, build quality and value for money, so you can work out which Android handheld suits the games you want to play.",
  },
  linux: {
    title: "Linux Gaming Handhelds & PCs | Intentional Tech",
    heading: "Linux Gaming",
    description:
      "Linux gaming on handhelds and PCs, from SteamOS on the Steam Deck and Steam Machine to budget retro handhelds and a laptop rescued by Fedora.",
    summary:
      "Linux gaming and everyday Linux use from someone who came to it through SteamOS. These posts cover SteamOS on the Steam Deck, Steam Machine and Legion Go S, dual booting on an Android handheld, budget retro devices and moving a struggling laptop over to Fedora.",
  },
  "pc-gaming": {
    title: "PC Gaming Handhelds & Hardware | Intentional Tech",
    heading: "PC Gaming",
    description:
      "PC gaming hardware reviews for casual gamers, including the Steam Deck, Steam Machine and Lenovo Legion Go handhelds, on SteamOS and Windows.",
    summary:
      "PC gaming hardware for people who'd rather play games than troubleshoot them. These posts cover PC gaming handhelds like the Steam Deck and Lenovo Legion Go, plus the Steam Machine, and weigh up what SteamOS and Windows are really like to live with.",
  },
  lifestyle: {
    title: "Casual Gaming Lifestyle & Advice | Intentional Tech",
    heading: "Casual Gaming Lifestyle",
    description:
      "Making room for gaming in a busy life: advice for casual gamers and parents on backlogs, screen time and getting more from handheld gaming.",
    summary:
      "Making room for gaming in a busy life. These posts are about being a casual gamer and a parent, swapping doom scrolling for handheld gaming, enjoying your backlog and carrying only what you need, with less focus on specs and more on how tech fits around you.",
  },
  accessories: {
    title: "Gaming Accessories Reviews | Intentional Tech",
    heading: "Gaming Accessories",
    description:
      "Gaming accessories reviewed for casual gamers, from Switch 2 add-ons and iPad controllers to XR glasses and Steam Machine faceplates.",
    summary:
      "Gaming accessories that promise to get more out of the hardware you already own. You'll find Switch 2 add-ons and controllers, iPad gaming controllers, XR glasses and the occasional oddity, with a clear view on which ones are worth buying.",
  },
  nintendo: {
    title: "Nintendo Switch 2 Reviews & Guides | Intentional Tech",
    heading: "Nintendo",
    description:
      "Nintendo Switch 2 reviews, guides and accessory coverage for casual gamers, plus the Analogue Pocket for playing your Game Boy cartridges.",
    summary:
      "Nintendo Switch 2 reviews, buying advice and guides for casual gamers, including controllers and how to play on an Apple Studio Display. For older Nintendo games, there's also the Analogue Pocket, a modern way to play your Game Boy cartridges.",
  },
  wearables: {
    title: "XR Glasses & Wearable Gaming Tech | Intentional Tech",
    heading: "Wearable Gaming Tech",
    description:
      "Wearable gaming tech reviewed, including VITURE XR glasses and how they compare with projectors and portable displays for gaming on the go.",
    summary:
      "Wearable gaming tech, and XR glasses in particular. These posts cover VITURE's XR glasses, how they compare with projectors and portable displays for big-screen gaming on the go, and what happens when you turn an Apple Watch into a gaming handheld.",
  },
  valve: {
    title: "Valve Steam Deck & Steam Machine | Intentional Tech",
    heading: "Valve Hardware",
    description:
      "Valve hardware from a casual gamer's perspective: Steam Deck and Steam Machine reviews, plus accessories worth knowing about before you buy.",
    summary:
      "Valve hardware from a casual gamer's perspective. These posts cover the Steam Deck and Steam Machine, what SteamOS is like to live with day to day, and the accessories worth thinking about before you buy.",
  },
  productivity: {
    title: "Productivity Tech for Work & Play | Intentional Tech",
    heading: "Productivity Tech",
    description:
      "Productivity tech that also works for gaming, including XR glasses as a virtual display and a budget laptop transformed by switching to Linux.",
    summary:
      "Productivity tech that doesn't have to stop at work. These posts look at XR glasses as a virtual display you can take anywhere, and at how installing Linux can give a struggling budget laptop a new lease of life.",
  },
  playstation: {
    title: "PlayStation Portal & PS Vita Reviews | Intentional Tech",
    heading: "PlayStation",
    description:
      "PlayStation handhelds for casual gamers: PS Portal reviews, what cloud streaming adds for PS5 and PS4 games, and why the PS Vita still holds up.",
    summary:
      "Sony's handhelds from a casual gamer's perspective. Find out what the PlayStation Portal can and can't do, how cloud streaming of PS5 and PS4 games from your digital library changes the case for buying one, and why the PS Vita still holds its own against modern handhelds.",
  },
  ipad: {
    title: "iPad Gaming Reviews & Controllers | Intentional Tech",
    heading: "iPad Gaming",
    description:
      "iPad gaming from a casual gamer's perspective, including a review of the iPad Mini 7 and the ELO Vagabond iPad gaming controller.",
    summary:
      "iPad gaming from a casual gamer's perspective. These posts cover the iPad Mini 7 as a gaming device and the ELO Vagabond controller, for anyone wondering whether an iPad can double as a handheld.",
  },
  computers: {
    title: "Gaming PC & Laptop Reviews | Intentional Tech",
    heading: "Computers",
    description:
      "Computer reviews from a casual gamer, including Valve's Steam Machine gaming PC and a budget Windows laptop that came alive on Linux.",
    summary:
      "Computers reviewed from a casual gamer's perspective, from Valve's living-room-friendly Steam Machine to a budget laptop that struggled on Windows until it moved to Linux.",
  },
};
