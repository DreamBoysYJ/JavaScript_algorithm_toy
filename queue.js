const queue = Array(5);
let front = 0;
let rear = 0;
const enQueue = (queue, item) => {
  queue[rear] = item;
  rear++;
};

const deQueue = (queue) => {
  return queue[front++];
};

enQueue(queue, "하이");
console.log(deQueue(queue));
console.log(front, rear);
console.log(queue);
