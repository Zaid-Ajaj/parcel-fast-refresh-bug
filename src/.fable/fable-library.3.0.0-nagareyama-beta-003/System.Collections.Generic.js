import { structuralHash as Util_structuralHash, equals as Util_equals, compare as Util_compare } from "./Util.js";
import { class_type as Reflection_class_type } from "./Reflection.js";

export class Comparer$1 {
    constructor() {
    }
    Compare(x, y) {
        return Util_compare(x, y);
    }
}

export function Comparer$1$reflection(gen0) {
    return Reflection_class_type("System.Collections.Generic.Comparer`1", [gen0], Comparer$1);
}

export function Comparer$1_$ctor() {
    return new Comparer$1();
}

export function Comparer$1_get_Default() {
    return {
        Compare(x, y) {
            return Util_compare(x, y);
        },
    };
}

export class EqualityComparer$1 {
    constructor() {
    }
    Equals(x, y) {
        return Util_equals(x, y);
    }
    GetHashCode(x) {
        return Util_structuralHash(x);
    }
}

export function EqualityComparer$1$reflection(gen0) {
    return Reflection_class_type("System.Collections.Generic.EqualityComparer`1", [gen0], EqualityComparer$1);
}

export function EqualityComparer$1_$ctor() {
    return new EqualityComparer$1();
}

export function EqualityComparer$1_get_Default() {
    return {
        Equals(x, y) {
            return Util_equals(x, y);
        },
        GetHashCode(x_1) {
            return Util_structuralHash(x_1);
        },
    };
}

