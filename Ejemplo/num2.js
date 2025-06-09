"use strict";
(() => {
    const addTwoNumbers = (params) => {
        return params.first + params.second;
    };
    console.log(addTwoNumbers({
        first: 2,
        second: 4,
    }));
    console.log(addTwoNumbers({
        first: 10,
        second: 20,
    }));
})();
