export class CustomCollection {

    constructor() {
        this._map = new Map()
    }

    add(value) {
        let id = this.generateUId();
        this._map.set(id, value);
        return id;
    }

    getById(id) {
        return this._map.get(id);
    }

    getAll() {
        return this._map.values();
    }

    deleteById(id) {
        return this._map.delete(id);
    }

    updateById(id, value) {
        let oldValue = this._map.get(id);
        if (oldValue || this._map.has(id)) {
            if (this.validate(oldValue, value)) {
                for (const field in oldValue) {
                    oldValue[field] = value[field];
                }

                return true;
            }
        }

        return false;
    }

    replaceById(id, value) {
        if (this._map.has(id)) {
            this._map.set(id, value);
            return true;
        }

        return false;
    }

    validate(oldValue, value) {
        if (oldValue === value) {
            return true;
        }

        if (!(oldValue instanceof Object) || !(value instanceof Object)) {
            return false;
        }

        if (oldValue.constructor !== value.constructor) {
            return false;
        }

        for (const field in oldValue) {
            if (!value.hasOwnProperty(field)) {
                return false;
            }
        }

        for (const field in value) {
            if (value.hasOwnProperty(field) && !oldValue.hasOwnProperty(field)) {
                return false;
            }
        }

        return true;
    }

    generateUId() {
        while(true) {
            let id = this.uuidv4();
            if (!this._map.has(id)) {
                return id;
            }
        }
    }


    uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            let r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}
