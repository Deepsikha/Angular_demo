"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var heroes = [
            { id: 1, name: 'Virat' },
            { id: 2, name: 'Dhoni' },
            { id: 3, name: 'Rohit' },
            { id: 4, name: 'Dhawan' },
            { id: 5, name: 'Rahane' },
            { id: 6, name: 'Yuvaraj' },
            { id: 7, name: 'Jadhav' },
            { id: 8, name: 'Ashwin' },
            { id: 9, name: 'Jadeja' },
            { id: 10, name: 'Shami' },
            { id: 11, name: 'Sharma' },
            { id: 12, name: 'Yadav' },
            { id: 13, name: 'Bhumrah' },
            { id: 14, name: 'Kumar' },
            { id: 15, name: 'Saha' },
        ];
        return { heroes: heroes };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map