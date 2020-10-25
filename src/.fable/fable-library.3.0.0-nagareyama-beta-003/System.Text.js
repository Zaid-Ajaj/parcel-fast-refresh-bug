import { substring as String_substring, format as String_format, isNullOrEmpty as String_isNullOrEmpty, join as String_join } from "./String.js";
import { class_type as Reflection_class_type } from "./Reflection.js";
import { sumBy as Seq_sumBy } from "./Seq.js";
import { toString as Types_toString } from "./Types.js";
import { clear as Util_clear } from "./Util.js";

export class StringBuilder {
    constructor(value, capacity) {
        this.buf = [];
        if (!String_isNullOrEmpty(value)) {
            void (this.buf.push(value));
        }
    }
    ToString() {
        const __ = this;
        return String_join("", __.buf);
    }
    toString() {
        return this.ToString();
    }
}

export function StringBuilder$reflection() {
    return Reflection_class_type("System.Text.StringBuilder", void 0, StringBuilder);
}

export function StringBuilder_$ctor_Z18115A39(value, capacity) {
    return new StringBuilder(value, capacity);
}

export function StringBuilder_$ctor_Z524259A4(capacity) {
    return StringBuilder_$ctor_Z18115A39("", capacity);
}

export function StringBuilder_$ctor_Z721C83C5(value) {
    return StringBuilder_$ctor_Z18115A39(value, 16);
}

export function StringBuilder_$ctor() {
    return StringBuilder_$ctor_Z18115A39("", 16);
}

export function StringBuilder__Append_Z721C83C5(x, s) {
    void (x.buf.push(s));
    return x;
}

export function StringBuilder__Append_244C7CD6(x, c) {
    void (x.buf.push(c));
    return x;
}

export function StringBuilder__AppendFormat_433E080(x, fmt, o) {
    void (x.buf.push(String_format(fmt, o)));
    return x;
}

export function StringBuilder__AppendLine(x) {
    void (x.buf.push("\n"));
    return x;
}

export function StringBuilder__AppendLine_Z721C83C5(x, s) {
    void (x.buf.push(s));
    void (x.buf.push("\n"));
    return x;
}

export function StringBuilder__get_Length(x) {
    return Seq_sumBy((str) => str.length, x.buf, {
        GetZero: () => 0,
        Add: (x_1, y) => (x_1 + y),
    }) | 0;
}

export function StringBuilder__ToString_Z37302880(x, firstIndex, length) {
    const str = Types_toString(x);
    return String_substring(str, firstIndex, length);
}

export function StringBuilder__Clear(x) {
    Util_clear(x.buf);
    return x;
}

