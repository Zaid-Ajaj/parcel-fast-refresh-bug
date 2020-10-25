import { sumBy as Seq_sumBy, map as Seq_map, iterateIndexed as Seq_iterateIndexed, toIterator as Seq_toIterator, concat as Seq_concat, getEnumerator as Seq_getEnumerator } from "./Seq.js";
import { equals as Util_equals } from "./Util.js";
import { FSharpRef as Types_FSharpRef } from "./Types.js";
import { class_type as Reflection_class_type } from "./Reflection.js";
import { getItemFromDict as MapUtil_getItemFromDict, tryGetValue as MapUtil_tryGetValue } from "./MapUtil.js";
import { format as String_format } from "./String.js";

export class Dictionary {
    constructor(pairs, comparer) {
        const this$ = new Types_FSharpRef(null);
        this.comparer = comparer;
        this$.contents = this;
        this.hashMap = (new Map([]));
        this["init@21-1"] = 1;
        const enumerator = Seq_getEnumerator(pairs);
        try {
            while (enumerator["System.Collections.IEnumerator.MoveNext"]()) {
                const pair = enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]();
                Dictionary__Add_5BDDA1(this$.contents, pair[0], pair[1]);
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
        Dictionary__Add_5BDDA1(this$, item[0], item[1]);
    }
    ["System.Collections.Generic.ICollection`1.Clear"]() {
        const this$ = this;
        Dictionary__Clear(this$);
    }
    ["System.Collections.Generic.ICollection`1.Contains2B595"](item) {
        let p;
        const this$ = this;
        const matchValue = Dictionary__TryFind_2B595(this$, item[0]);
        let pattern_matching_result;
        if (matchValue != null) {
            if (p = matchValue, Util_equals(p[1], item[1])) {
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
    ["System.Collections.Generic.ICollection`1.CopyToZ2E171D71"](array, arrayIndex) {
        const this$ = this;
        Seq_iterateIndexed((i, e) => {
            array[arrayIndex + i] = e;
        }, this$);
    }
    ["System.Collections.Generic.ICollection`1.get_Count"]() {
        const this$ = this;
        return Dictionary__get_Count(this$) | 0;
    }
    ["System.Collections.Generic.ICollection`1.get_IsReadOnly"]() {
        return false;
    }
    ["System.Collections.Generic.ICollection`1.Remove2B595"](item) {
        const this$ = this;
        const matchValue = Dictionary__TryFind_2B595(this$, item[0]);
        if (matchValue != null) {
            const pair = matchValue;
            if (Util_equals(pair[1], item[1])) {
                const value = Dictionary__Remove_2B595(this$, item[0]);
                void value;
            }
            return true;
        }
        else {
            return false;
        }
    }
    get size() {
        const this$ = this;
        return Dictionary__get_Count(this$) | 0;
    }
    clear() {
        const this$ = this;
        Dictionary__Clear(this$);
    }
    delete(k) {
        const this$ = this;
        return Dictionary__Remove_2B595(this$, k);
    }
    entries() {
        const this$ = this;
        return Seq_map((x) => x, this$);
    }
    get(k) {
        const this$ = this;
        return Dictionary__get_Item_2B595(this$, k);
    }
    has(k) {
        const this$ = this;
        return Dictionary__ContainsKey_2B595(this$, k);
    }
    keys() {
        const this$ = this;
        return Seq_map((pair) => pair[0], this$);
    }
    set(k, v) {
        const this$ = this;
        Dictionary__set_Item_5BDDA1(this$, k, v);
        return this$;
    }
    values() {
        const this$ = this;
        return Seq_map((pair) => pair[1], this$);
    }
}

export function Dictionary$reflection(gen0, gen1) {
    return Reflection_class_type("Fable.Collections.Dictionary", [gen0, gen1], Dictionary);
}

export function Dictionary_$ctor_6623D9B3(pairs, comparer) {
    return new Dictionary(pairs, comparer);
}

function Dictionary__TryFindIndex_2B595(this$, k) {
    const h = this$.comparer.GetHashCode(k) | 0;
    let matchValue;
    let outArg = null;
    matchValue = [MapUtil_tryGetValue(this$.hashMap, h, new Types_FSharpRef(() => outArg, (v) => {
        outArg = v;
    })), outArg];
    if (matchValue[0]) {
        return [true, h, matchValue[1].findIndex((pair) => this$.comparer.Equals(k, pair[0]))];
    }
    else {
        return [false, h, -1];
    }
}

export function Dictionary__TryFind_2B595(this$, k) {
    const matchValue = Dictionary__TryFindIndex_2B595(this$, k);
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
            return MapUtil_getItemFromDict(this$.hashMap, matchValue[1])[matchValue[2]];
        }
        case 1: {
            return void 0;
        }
    }
}

export function Dictionary__get_Comparer(this$) {
    return this$.comparer;
}

export function Dictionary__Clear(this$) {
    this$.hashMap.clear();
}

export function Dictionary__get_Count(this$) {
    const source = this$.hashMap.values();
    return Seq_sumBy((pairs) => pairs.length, source, {
        GetZero: () => 0,
        Add: (x, y) => (x + y),
    }) | 0;
}

export function Dictionary__get_Item_2B595(this$, k) {
    const matchValue = Dictionary__TryFind_2B595(this$, k);
    if (matchValue != null) {
        const pair = matchValue;
        return pair[1];
    }
    else {
        throw (new Error("The item was not found in collection"));
    }
}

export function Dictionary__set_Item_5BDDA1(this$, k, v) {
    const matchValue = Dictionary__TryFindIndex_2B595(this$, k);
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
            MapUtil_getItemFromDict(this$.hashMap, matchValue[1])[matchValue[2]] = [k, v];
            break;
        }
        case 1: {
            if (matchValue[0]) {
                const value = void (MapUtil_getItemFromDict(this$.hashMap, matchValue[1]).push([k, v]));
                void undefined;
            }
            else {
                this$.hashMap.set(matchValue[1], [[k, v]]);
            }
            break;
        }
    }
}

export function Dictionary__Add_5BDDA1(this$, k, v) {
    const matchValue = Dictionary__TryFindIndex_2B595(this$, k);
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
            const msg = String_format("An item with the same key has already been added. Key: {0}", k);
            throw (new Error(msg));
            break;
        }
        case 1: {
            if (matchValue[0]) {
                const value = void (MapUtil_getItemFromDict(this$.hashMap, matchValue[1]).push([k, v]));
                void undefined;
            }
            else {
                this$.hashMap.set(matchValue[1], [[k, v]]);
            }
            break;
        }
    }
}

export function Dictionary__ContainsKey_2B595(this$, k) {
    const matchValue = Dictionary__TryFindIndex_2B595(this$, k);
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

export function Dictionary__Remove_2B595(this$, k) {
    const matchValue = Dictionary__TryFindIndex_2B595(this$, k);
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

