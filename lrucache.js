// lru cache  -least recently used cache ..
//As the name suggests when the cache memory is full, LRU picks the data that is least recently used and removes it in order to make space for the new data.


class LRUCache {
  constructor(limit) {
    this.cache = new Map();
    this.limit = limit;
  }

  get(key) {
    if (!this.cache.has(key)) return -1;

    let value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size === this.limit) {
      this.cache.delete(this.cache.keys().next().value);
    }

    this.cache.set(key, value);
  }
}

// example usage 

const lru = new LRUCache(2);
lru.put(1, 1);
lru.put(2, 2);
console.log(lru.get(1)); // returns 1
lru.put(3, 3); // evicts key 2
console.log(lru.get(2));
lru.put(4, 4); // evicts key 3
console.log(lru.get(3));
console.log(lru.get(4));


// output:
// 1
// -1
// 3
// 4

