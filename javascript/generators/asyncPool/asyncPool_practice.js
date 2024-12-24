/**
 * Generator
 * 1. Executing Set, key -> promise reference
 * 2. consume -> Promise.race, executing.delete
 * 3. for -> executing add
 * 4. while -> executing rest item
 */

async function* asyncPool(maxCount, queue, callback) {
  const executing = new Set();

  const consume = async () => {
    const [promise, result] = await Promise.race(executing);
    executing.delete(promise);
    return result;
  };

  for (let i = 0; i < queue.length; i++) {
    const current = queue[i];
    let promise; //create promise reference to avoid circular reference in /lib/es9.js
    promise = callback(current, queue).then((value) => [promise, value]);
    executing.add(promise);

    if (executing.size >= maxCount) {
      yield await consume();
    }
  }

  while (executing.size > 0) {
    yield await consume();
  }
}

export default asyncPool;
