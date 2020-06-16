const Queue = require('../Queue');

const distribute = (nums, queues, n, digit) => {
    for (let i = 0; i < n; ++i) {
        if (digit === 1) {
            queues[nums[i] % 10].enqueue(nums[i]);
        } else {
            queues[Math.floor(nums[i] / 10)].enqueue(nums[i]);
        }
    }
};

const collect = (queues, nums) => {
    let i = 0;
    for (let digit = 0; digit < 10; ++digit) {
        while (!queues[digit].empty()) {
            nums[i++] = queues[digit].dequeue();
        }
    }
};

const displayArr = arr => {
    arr.forEach(a => console.log(a));
};

let queues = [];

for (let i = 0; i < 10; ++i) {
    queues[i] = new Queue();
}

let nums = [];

for (let i = 0; i < 10; ++i) {
    nums[i] = Math.floor(Math.floor(Math.random() * 101));
}

console.log(`Before sorted`);
displayArr(nums);

distribute(nums, queues, 10, 1);
collect(queues, nums);

distribute(nums, queues, 10, 10);
collect(queues, nums);

console.log(`After sorted`);
displayArr(nums);
