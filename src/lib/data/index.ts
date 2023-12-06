import feature_1 from "@/assets/blanding/illustration-features-tab-1.svg";
import feature_2 from "@/assets/blanding/illustration-features-tab-2.svg";
import feature_3 from "@/assets/blanding/illustration-features-tab-3.svg";
import chrome_logo from "@/assets/blanding/logo-chrome.svg";
import firefox_logo from "@/assets/blanding/logo-firefox.svg";
import opera_logo from "@/assets/blanding/logo-opera.svg";
const tabsInfo = [
  {
    key: 1,
    title: "Simple Bookmarking",
    imageUrl: feature_1,
    bodyHeader: "Bookmark Your Favorites with Ease",
    bodyText:
      "Quickly save your favorite websites with just one click. Organize your bookmarks effortlessly and access them anytime, anywhere.",
    infoUrl: "",
  },
  {
    key: 2,
    title: "Speedy Searching",
    imageUrl: feature_2,
    bodyHeader: "Find What You Need Instantly",
    bodyText:
      "Efficiently search through your bookmarks using our powerful search feature. Save time and get to your desired websites in seconds.",
    infoUrl: "",
  },
  {
    key: 3,
    title: "Easy Sharing",
    imageUrl: feature_3,
    bodyHeader: "Share Your Bookmarks with Friends",
    bodyText:
      "Share your favorite websites effortlessly. Collaborate with friends and discover new content together. Enjoy easy and seamless sharing.",
    infoUrl: "",
  },
];

const FAQs = [
  {
    header: "What is Bookmark",
    body: "Bookmark is a simple and clean interface to organize your favorite websites. It allows you to access your bookmarks quickly and syncs them across your devices.",
  },
  {
    header: "How can I request a new browser",
    body: "If you have a favorite browser that is not currently supported, you can reach out to us through our contact page to request its addition to Bookmark.",
  },
  {
    header: "Is there a mobile app",
    body: "Currently, Bookmark is designed for desktop browsers. However, we are actively working on a mobile app to provide a seamless experience on your mobile devices.",
  },
  {
    header: "What about other Chromium browsers",
    body: "Bookmark supports Chromium-based browsers, including but not limited to Chrome. If you have a specific Chromium browser in mind, feel free to check if it's already supported or request its addition.",
  },
];

const browsersInfo = [
  { browserName: "Chrome", browserLogoUrl: chrome_logo, minimumVersion: 62 },
  {
    browserName: "Firefox",
    browserLogoUrl: firefox_logo,
    minimumVersion: 55,
  },
  { browserName: "Opera", browserLogoUrl: opera_logo, minimumVersion: 46 },
];

export { tabsInfo, FAQs, browsersInfo };
