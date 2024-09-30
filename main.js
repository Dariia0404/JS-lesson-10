
let social = {
    "instagram": ["Нове повідомлення 1", "Нове повідомлення 2"],
    "telegram": ["У вас 1 пропущений виклик", "У вас 3 нових повідомлення"],
    "youTube": ["Вийшло нове відео", "Ваше відео має 5 переглядів"],
};

let groupedSocial = {};

for (let notifications in social) {
    groupedSocial[notifications] = social[notifications];
}

let allNotifications = Object.values(groupedSocial).flat();


allNotifications[Symbol.iterator] = function() {
    let index = 0;
    return {
        next: () => {
            if (index < allNotifications.length) {
                return { value: allNotifications[index++], done: false };
            } else {
                return { done: true };
            }
        }
    };
};

for (let item of allNotifications) {
    console.log(item);
}


/*
function memoize(fn) {
    let cache = new Map();

    return function(...args) {
        let key = args.join(',');

        if (cache.has(key)) {
            return cache.get(key);
        }

        let result = fn(...args);
        cache.set(key, result);

        return result;
    };
}
function calculation(a, b) {
    console.log('Обчислення...');
    return a + b;
}
let memoizedFunction = memoize(calculation);
console.log(memoizedFunction(10, 15)); 
console.log(memoizedFunction(34, 90)); 
*/


/*
function limitCache(size) {
    let cache = [];

    function add(value) {
        if (cache.length >= size) {
            cache.shift(); 
        }
        cache.push(value);
    }

    function getCache() {
        return cache;
    }

    return {
        add,
        getCache
    };
}
let cache = limitCache(4); 
cache.add(1);
cache.add(2);
cache.add(3);
cache.add(4);
console.log(cache.getCache()); 
cache.add(5);
console.log(cache.getCache());  
cache.add(6);
console.log(cache.getCache());  
*/

/*
function limitCache(size) {
    let cache = [];

    function add(value) {
        if (cache.includes(value)) {
       
            cache = cache.filter(item => item !== value);
        }
        if (cache.length >= size) {
            cache.shift(); 
        }
        cache.push(value);
    }

    function getCache() {
        return cache;
    }

    return {
        add,
        getCache
    };
}

let cache = limitCache(3); 
cache.add(1);
cache.add(2);
cache.add(3);
console.log(cache.getCache()); 
cache.add(4);
console.log(cache.getCache());  
cache.add(5);
console.log(cache.getCache());  
cache.add(3);  
console.log(cache.getCache());  
*/