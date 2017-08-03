"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BufferConverter {
    constructor(encoding = "json") {
        this._encoding = encoding;
    }
    serialize(property) {
        if (this._encoding === "json") {
            return property.toJSON();
        }
        return property.toString(this._encoding);
    }
    deserialize(value) {
        if (this._encoding === "json") {
            return Buffer.from(value.data);
        }
        return Buffer.from(value, this._encoding);
    }
    collapseArrayWithSingleItem() {
        return false;
    }
}
exports.BufferConverter = BufferConverter;
//# sourceMappingURL=buffer-converter.js.map