import { profile } from "@/data/profile";

export default function sitemap() {
  return [
    {
      url: profile.siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
