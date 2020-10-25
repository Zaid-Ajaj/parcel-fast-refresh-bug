import { structuralHash as Util_structuralHash, equals as Util_equals } from "./Util.js";
import { HashIdentity_Structural as FSharp$002ECollections_HashIdentity_Structural, ComparisonIdentity_Structural as FSharp$002ECollections_ComparisonIdentity_Structural } from "./FSharp.Collections.js";
import { StringBuilder__Append_Z721C83C5 as System$002EText_StringBuilder__Append_Z721C83C5 } from "./System.Text.js";

export const LanguagePrimitives_GenericEqualityComparer = {
    ["System.Collections.IEqualityComparer.Equals541DA560"](x, y) {
        return Util_equals(x, y);
    },
    ["System.Collections.IEqualityComparer.GetHashCode4E60E31B"](x_1) {
        return Util_structuralHash(x_1);
    },
};

export const LanguagePrimitives_GenericEqualityERComparer = {
    ["System.Collections.IEqualityComparer.Equals541DA560"](x, y) {
        return Util_equals(x, y);
    },
    ["System.Collections.IEqualityComparer.GetHashCode4E60E31B"](x_1) {
        return Util_structuralHash(x_1);
    },
};

export function LanguagePrimitives_FastGenericComparer() {
    return FSharp$002ECollections_ComparisonIdentity_Structural();
}

export function LanguagePrimitives_FastGenericComparerFromTable() {
    return FSharp$002ECollections_ComparisonIdentity_Structural();
}

export function LanguagePrimitives_FastGenericEqualityComparer() {
    return FSharp$002ECollections_HashIdentity_Structural();
}

export function LanguagePrimitives_FastGenericEqualityComparerFromTable() {
    return FSharp$002ECollections_HashIdentity_Structural();
}

export function Operators_Failure(message) {
    return new Error(message);
}

export function Operators_FailurePattern(exn) {
    return exn.message;
}

export function Operators_NullArg(x) {
    throw (new Error(x));
}

export function Operators_Using(resource, action) {
    try {
        return action(resource);
    }
    finally {
        if (Util_equals(resource, null)) {
        }
        else {
            resource.Dispose();
        }
    }
}

export function Operators_Lock(_lockObj, action) {
    return action();
}

export function ExtraTopLevelOperators_LazyPattern(input) {
    return input.Value;
}

export function PrintfModule_PrintFormatToStringBuilderThen(continuation, builder, format) {
    return format.cont((s) => {
        const value = System$002EText_StringBuilder__Append_Z721C83C5(builder, s);
        void value;
        return continuation();
    });
}

export function PrintfModule_PrintFormatToStringBuilder(builder, format) {
    return PrintfModule_PrintFormatToStringBuilderThen(() => {
        void undefined;
    }, builder, format);
}

