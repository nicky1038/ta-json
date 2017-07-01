import { JsonValue } from '../types';
export interface IPropertyConverter {
    serialize(property: any): JsonValue;
    deserialize(value: JsonValue): any;
}
export declare const propertyConverters: Map<Function, IPropertyConverter>;