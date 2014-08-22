define(['tech-store-models/item'], function (Item) {
    'use strict';
    var Store;
    Store = (function () {

        function sortByName(firstItem, secondItem) {
            var firstItemToLower = firstItem.name.toLowerCase();
            var secondItemToLower = secondItem.name.toLowerCase();

            if (firstItemToLower > secondItemToLower)
                return 1;
            if (firstItemToLower < secondItemToLower)
                return -1;
            return 0;
        }

        function sortNumbers(firtsItem, secondItem) {
            return firtsItem.price - secondItem.price;
        }

        function Store(name) {
            var minNameSize = 6,
             maxNameSize = 30;

            if (name.length < minNameSize ||
               name.length > maxNameSize) {
                throw {
                    message: 'Name must be between' + minNameSize + 'and' + maxNameSize
                };

            };
            this.name = name;
            this._items = [];
        }

        Store.prototype.addItem = function (item) {
            if (!(item instanceof Item)) {
                throw {
                    message: 'This object is not of type Item!'
                };
            };
            this._items.push(item);
            return this;
        };

        Store.prototype.getAll = function () {
            return this._items.sort(sortByName).slice(0);
        };

        Store.prototype.getSmartPhones = function () {
            return this._items.filter(function (item) {
                return item.type === 'smart-phone';
            }).sort(sortByName);
        };

        Store.prototype.getMobiles = function () {
            return this._items.filter(function (item) {
                return item.type === 'smart-phone' || item.type === 'tablet';
            }).sort(sortByName);
        };

        Store.prototype.getComputers = function () {
            return this._items.filter(function (item) {
                return item.type === 'pc' || item.type === 'notebook';
            }).sort(sortByName);
        };

        Store.prototype.filterItemsByPrice = function (options) {
            var min,
                max;

            if (options) {
                if (options.min && !options.max) {
                    min = options.min;
                    max = Number.POSITIVE_INFINITY;
                    return this._items.filter(function (item) {
                        return item.price > min && item.price < max;
                    }).sort(sortNumbers);
                } else if (!options.min && options.max) {
                    min = 0;
                    max = options.max;
                    return this._items.filter(function (item) {
                        return item.price > min && item.price < max;
                    }).sort(sortNumbers);
                } else {
                    min = options.min;
                    max = options.max;
                    return this._items.filter(function (item) {
                        return item.price > min && item.price < max;
                    }).sort(sortNumbers);
                }

            } else {
                return this._items.sort(function (firtsItem, secondItem) {
                    return firtsItem.price - secondItem.price;
                });
            }
        };

        Store.prototype.filterItemsByType = function (filterType) {
            return this._items.filter(function (item) {
                return item.type === filterType;
            }).sort(sortByName);
        };

        Store.prototype.filterItemsByName = function (partOfName) {
            var searchPartOfName = partOfName.toLowerCase();

            return this._items.filter(function (item) {
                return item.name.toLowerCase().indexOf(searchPartOfName) > -1;
            }).sort(sortByName);
        };

        Store.prototype.countItemsByType = function () {
			return null;
        };

        return Store;
    })();
    return Store;
});