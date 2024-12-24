// 100个接口

// 14 多路复用
async function asyncPool(arr, maxCount, callback) {
  //[1, 2 ,3 ,4 .... 100]

  let idx = 0;
  const n = arr.length;

  const doCallback = (interfaceId) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        callback(interfaceId);
        resolve();
      }, Math.random() * 1000);
    });
  };

  while (idx < n) {
    const callbacks = [];
    for (let i = idx; i < idx + maxCount; i++) {
      callbacks.push(doCallback(arr[i]));
    }
    await Promise.all(callbacks);
    idx = idx + maxCount;
  }
}

asyncPool(
  Array.from(new Array(100), (_, i) => i),
  10,
  (i) => {
    console.log(i);
  }
);

// LRU. keepAlive
