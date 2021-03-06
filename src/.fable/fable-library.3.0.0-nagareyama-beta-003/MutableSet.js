import { sumBy as Seq_sumBy, map as Seq_map, iterateIndexed as Seq_iterateIndexed, toIterator as Seq_toIterator, concat as Seq_concat, getEnumerator as Seq_getEnumerator } from "./Seq.js";
import { FSharpRef as Types_FSharpRef } from "./Types.js";
import { class_type as Reflection_class_type } from "./Reflection.js";
import { getItemFromDict as MapUtil_getItemFromDict, tryGetValue as MapUtil_tryGetValue } from "./MapUtil.js";
import { some as Option_some } from "./Option.js";

export class HashSet {
    constructor(items, comparer) {
        const this$ = new Types_FSharpRef(null);
        this.comparer = comparer;
        this$.contents = this;
        this.hashMap = (new Map([]));
        this["init@22-2"] = 1;
        const enumerator = Seq_getEnumerator(items);
        try {
            while (enumerator["System.Collections.IEnumerator.MoveNext"]()) {
                const item = enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]();
                const value = HashSet__Add_2B595(this$.contents, item);
                void value;
            }
        }
        finally {
            enumerator.Dispose();
        }
    }
    ["System.Collections.IEnumerable.GetEnumerator"]() {
        const this$ = this;
        return Seq_getEnumerator(this$);
    }
    GetEnumerator() {
        const this$ = this;
        const elems = Seq_concat(this$.hashMap.values());
        return Seq_getEnumerator(elems);
    }
    [Symbol.iterator]() {
        return Seq_toIterator(this.GetEnumerator());
    }
    ["System.Collections.Generic.ICollection`1.Add2B595"](item) {
        const this$ = this;
        const value = HashSet__Add_2B595(this$, item);
        void value;
    }
    ["System.Collections.Generic.ICollection`1.Clear"]() {
        const this$ = this;
        HashSet__Clear(this$);
    }
    ["System.Collections.Generic.ICollection`1.Contains2B595"](item) {
        const this$ = this;
        return HashSet__Contains_2B595(this$, item);
    }
    ["System.Collections.Generic.ICollection`1.CopyToZ2E171D71"](array, arrayIndex) {
        const this$ = this;
        Seq_iterateIndexed((i, e) => {
            array[arrayIndex + i] = e;
        }, this$);
    }
    ["System.Collections.Generic.ICollection`1.get_Count"]() {
        const this$ = this;
        return HashSet__get_Count(this$) | 0;
    }
    ["System.Collections.Generic.ICollection`1.get_IsReadOnly"]() {
        return false;
    }
    ["System.Collections.Generic.ICollection`1.Remove2B595"](item) {
        const this$ = this;
        return HashSet__Remove_2B595(this$, item);
    }
    get size() {
        const this$ = this;
        return HashSet__get_Count(this$) | 0;
    }
    add(k) {
        const this$ = this;
        const value = HashSet__Add_2B595(this$, k);
        void value;
        return this$;
    }
    add_(k) {
        const this$ = this;
        return HashSet__Add_2B595(this$, k);
    }
    clear() {
        const this$ = this;
        HashSet__Clear(this$);
    }
    delete(k) {
        const this$ = this;
        return HashSet__Remove_2B595(this$, k);
    }
    has(k) {
        const this$ = this;
        return HashSet__Contains_2B595(this$, k);
    }
    keys() {
        const this$ = this;
        return Seq_map((x) => x, this$);
    }
    values() {
        const this$ = this;
        return Seq_map((x) => x, this$);
    }
    entries() {
        const this$ = this;
        return Seq_map((v) => [v, v], this$);
    }
}

export function HashSet$reflection(gen0) {
    return Reflection_class_type("Fable.Collections.HashSet", [gen0], HashSet);
}

export function HashSet_$ctor_Z6150332D(items, comparer) {
    return new HashSet(items, comparer);
}

function HashSet__TryFindIndex_2B595(this$, k) {
    const h = this$.comparer.GetHashCode(k) | 0;
    let matchValue;
    let outArg = null;
    matchValue = [MapUtil_tryGetValue(this$.hashMap, h, new Types_FSharpRef(() => outArg, (v) => {
        outArg = v;
    })), outArg];
    if (matchValue[0]) {
        return [true, h, matchValue[1].findIndex((v_1) => this$.comparer.Equals(k, v_1))];
    }
    else {
        return [false, h, -1];
    }
}

function HashSet__TryFind_2B595(this$, k) {
    const matchValue = HashSet__TryFindIndex_2B595(this$, k);
    let pattern_matching_result;
    if (matchValue[0]) {
        if (matchValue[2] > -1) {
            pattern_matching_result = 0;
        }
        else {
            pattern_matching_result = 1;
        }
    }
    else {
        pattern_matching_result = 1;
    }
    switch (pattern_matching_result) {
        case 0: {
            return Option_some(MapUtil_getItemFromDict(this$.hashMap, matchValue[1])[matchValue[2]]);
        }
        case 1: {
            return void 0;
        }
    }
}

export function HashSet__get_Comparer(this$) {
    return this$.comparer;
}

export function HashSet__Clear(this$) {
    this$.hashMap.clear();
}

export function HashSet__get_Count(this$) {
    const source = this$.hashMap.values();
    return Seq_sumBy((pairs) => pairs.length, source, {
        GetZero: () => 0,
        Add: (x, y) => (x + y),
    }) | 0;
}

export function HashSet__Add_2B595(this$, k) {
    const matchValue = HashSet__TryFindIndex_2B595(this$, k);
    let pattern_matching_result;
    if (matchValue[0]) {
        if (matchValue[2] > -1) {
            pattern_matching_result = 0;
        }
        else {
            pattern_matching_result = 1;
        }
    }
    else {
        pattern_matching_result = 1;
    }
    switch (pattern_matching_result) {
        case 0: {
            return false;
        }
        case 1: {
            if (matchValue[0]) {
                const value = void (MapUtil_getItemFromDict(this$.hashMap, matchValue[1]).push(k));
                void undefined;
                return true;
            }
            else {
                this$.hashMap.set(matchValue[1], [k]);
                return true;
            }
        }
    }
}

export function HashSet__Contains_2B595(this$, k) {
    const matchValue = HashSet__TryFindIndex_2B595(this$, k);
    let pattern_matching_result;
    if (matchValue[0]) {
        if (matchValue[2] > -1) {
            pattern_matching_result = 0;
        }
        else {
            pattern_matching_result = 1;
        }
    }
    else {
        pattern_matching_result = 1;
    }
    switch (pattern_matching_result) {
        case 0: {
            return true;
        }
        case 1: {
            return false;
        }
    }
}

export function HashSet__Remove_2B595(this$, k) {
    const matchValue = HashSet__TryFindIndex_2B595(this$, k);
    let pattern_matching_result;
    if (matchValue[0]) {
        if (matchValue[2] > -1) {
            pattern_matching_result = 0;
        }
        else {
            pattern_matching_result = 1;
        }
    }
    else {
        pattern_matching_result = 1;
    }
    switch (pattern_matching_result) {
        case 0: {
            MapUtil_getItemFromDict(this$.hashMap, matchValue[1]).splice(matchValue[2], 1);
            return true;
        }
        case 1: {
            return false;
        }
    }
}

