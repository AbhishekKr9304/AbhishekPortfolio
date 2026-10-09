import type { ProjectPrivacyPolicy } from "@/types/project";

export const assemblyLineVrPrivacyPolicy: ProjectPrivacyPolicy = {
  appName: "Assembly Line VR",
  platform: "Meta Horizon Store",
  lastUpdated: "2026-10-09",
  summary:
    "Assembly Line VR runs entirely on your Meta Quest headset. It has no accounts, no analytics, and no servers, and it does not send your personal information to me or to anyone else.",
  sections: [
    {
      id: "scope",
      title: "About this policy",
      blocks: [
        "This privacy policy explains how Assembly Line VR (the “app”), a virtual reality application for Meta Quest headsets published by Abhishek Kumar on the Meta Horizon Store, collects, uses, stores, and lets you delete data.",
        "It applies only to the app. The portfolio website has its own privacy policy.",
      ],
    },
    {
      id: "collection",
      title: "Information the app collects",
      blocks: [
        "The app runs entirely on your headset. It does not require an account, does not connect to any server operated by me, and does not send personal information to me or to any third party.",
        "The app does not collect:",
        [
          "Your name, email address, or other contact details.",
          "Your Meta account ID, username, or friends list.",
          "Microphone audio, camera images, or passthrough video.",
          "Eye, face, or body tracking data.",
          "Your location, advertising identifiers, analytics, or crash reports.",
        ],
        "The app contains no advertising, no in-app analytics, and no third-party tracking SDKs.",
      ],
    },
    {
      id: "tracking",
      title: "Head, controller, and hand tracking",
      blocks: [
        "To let you look around and interact with the virtual assembly line, the app uses the position and movement of your headset and controllers and, if you choose to use it, hand tracking.",
        [
          "This tracking data is produced by the Meta Quest operating system and provided to the app in real time.",
          "The app uses it only while it is running, to render your view and respond to your hand and controller input.",
          "The app does not record, store, or transmit this data, and it is not shared with me or anyone else.",
        ],
        "Hand tracking is controlled by your headset's own settings. You can turn it on or off at any time in your Meta Quest's movement tracking settings and use controllers instead.",
      ],
    },
    {
      id: "on-device",
      title: "Data stored on your headset",
      blocks: [
        "The app may save basic data locally on your headset so it works as expected, such as settings or session progress. This data stays on your device and is never sent to me.",
        "If you have turned on cloud backup in your Meta Quest settings, Meta may back up this app data to your Meta account. That backup is handled by Meta, not by me.",
      ],
    },
    {
      id: "meta-platform",
      title: "Meta Horizon platform",
      blocks: [
        "The app is distributed through the Meta Horizon Store. Your purchase, download, and use of your headset are handled by Meta under its own privacy policy. Meta may provide me with aggregated, non-identifying store statistics, such as the number of installs. I do not receive information that identifies you individually.",
        { label: "Meta Privacy Policy", href: "https://www.meta.com/legal/privacy-policy/" },
      ],
    },
    {
      id: "deletion",
      title: "Deleting your data",
      blocks: [
        "Because the app does not send any data to me, all app data exists only on your headset, and in Meta's cloud backup if you turned it on. You can delete it at any time by:",
        [
          "Uninstalling the app from your headset, which removes its locally stored data.",
          "Deleting the app's cloud backup from the backup settings on your Meta Quest or in your Meta account.",
        ],
        "If you have emailed me about the app, you can ask me to delete that correspondence or any other personal information you sent me. I will respond to deletion requests within 30 days, subject to any information I must keep by law.",
      ],
    },
    {
      id: "sharing",
      title: "Sharing and selling",
      blocks: [
        "I do not sell, rent, or share personal information from the app, because the app does not collect any. Information you send me by email is used only to respond to you and is shared only if required by law.",
      ],
    },
    {
      id: "children",
      title: "Children's privacy",
      blocks: [
        "The app is not directed at children under 13 and does not knowingly collect personal information from anyone, including children. If you believe a child has sent me personal information, contact me and I will delete it.",
      ],
    },
    {
      id: "changes",
      title: "Changes to this policy",
      blocks: [
        "If the app's data practices change, for example if a future version adds online features, I will update this policy before releasing that version. The latest version will always be published on this page with a revised date.",
      ],
    },
  ],
};
