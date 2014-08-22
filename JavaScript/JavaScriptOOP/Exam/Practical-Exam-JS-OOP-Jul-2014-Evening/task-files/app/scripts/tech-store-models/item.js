define(function () {
    'use strict';
    var Item;
    Item = (function () {
        var minNameSize = 6,
            maxNameSize = 40;
            function checkType(type) {
            switch (type) {
                case 'accessory': return true
                case 'smart-phone': return true
                case 'notebook': return true
                case 'pc': return true
                case 'tablet': return true
                default: return false
            }
        }

        function Item(type, name, price) {
            if (!checkType) {
                throw {
                    message: 'type did not match'
                };
            };

            this.type = type;

            if (name.length < minNameSize ||
               name.length > maxNameSize) {
                throw {
                    message: 'name must be' + minNameSize + 'and' + maxNameSize
                };
            };

            this.name = name;

            if (!parseFloat(price)) {
                throw {
                    message: 'Price is not a number'
                };
            };

            this.price = price;
        }

        Item.prototype.toString = function () {
            return '{' + this.type + ', ' + this.name + ', ' + this.price + '}';
        };

        return Item;
    })();
    return Item;
});