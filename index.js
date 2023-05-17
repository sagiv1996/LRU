import LRUCache from "./LRUCache.js";
const cache = new LRUCache(3);
console.log(
  "-----",
  "Checking that the values ​​were added successfully",
  "-----"
);
cache.put("one", 1);
cache.put("two", 2);
cache.put("three", 3);

console.log(cache.get("one"));

cache.put("four", 4);
console.log(cache.get("two"));
console.log(cache.get("four"));

console.log(
  "-----",
  "Deletion test (maximum amount of members in the array).",
  "-----"
);
cache.put("five", 1);
console.log(cache.get("five"));

cache.put("five", 2);
console.log(cache.get("five"));
cache.put("five", 5);
console.log(cache.get("five"));
