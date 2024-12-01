import type { CollectionEntry } from "astro:content";
import privatePostFilter from "./privatePostFilter";

const getSortedPrivatePosts = (posts: CollectionEntry<"private">[]) => {
  return posts
    .filter(privatePostFilter)
    .sort(
      (a, b) =>        
        Math.floor(
          new Date(b.data.modDatetime ?? b.data.pubDatetime).getTime() / 1000
        ) -
        Math.floor(
          new Date(a.data.modDatetime ?? a.data.pubDatetime).getTime() / 1000
        )
    )
};

export default getSortedPrivatePosts;