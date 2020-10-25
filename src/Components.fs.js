import { Feliz_React__React_useState_Static_1505 as React_Feliz_React__React_useState_Static_1505 } from "./.fable/Feliz.1.16.0/React.fs.js";
import { reactApi as Interop_reactApi, reactElement as Interop_reactElement, mkAttr as Interop_mkAttr, mkStyle as Interop_mkStyle } from "./.fable/Feliz.1.16.0/Interop.fs.js";
import { singleton as List_singleton, ofArray as List_ofArray } from "./.fable/fable-library.3.0.0-nagareyama-beta-003/List.js";
import { createObjDebug as Util_createObjDebug } from "./.fable/fable-library.3.0.0-nagareyama-beta-003/Util.js";
import { createElement as react_createElement } from "react";

export function Counter(counterProps) {
    let xs, properties, xs_1, properties_2;
    const initial = counterProps.initial;
    const patternInput = React_Feliz_React__React_useState_Static_1505(initial);
    const setCount = patternInput[1];
    const count = patternInput[0] | 0;
    const children = List_ofArray([(xs = List_ofArray([(properties = List_ofArray([Interop_mkStyle("backgroundColor", "#ADFF2F"), Interop_mkStyle("padding", 20), Interop_mkStyle("margin", 10)]), Interop_mkAttr("style", Util_createObjDebug(properties))), Interop_mkAttr("onClick", (_arg1) => {
        setCount(count + 5);
    }), Interop_mkAttr("children", "Increment")]), Interop_reactElement("button", Util_createObjDebug(xs))), (xs_1 = List_ofArray([(properties_2 = List_ofArray([Interop_mkStyle("backgroundColor", "#800080"), Interop_mkStyle("color", "#FFFFFF"), Interop_mkStyle("padding", 20)]), Interop_mkAttr("style", Util_createObjDebug(properties_2))), Interop_mkAttr("onClick", (_arg2) => {
        setCount(count - 1);
    }), Interop_mkAttr("children", "Decrement")]), Interop_reactElement("button", Util_createObjDebug(xs_1))), Interop_reactElement("h1", Util_createObjDebug(List_singleton(["children", new Int32Array([count])])))]);
    return Interop_reactElement("div", Util_createObjDebug(List_singleton(["children", Interop_reactApi.Children.toArray(Array.from(children))])));
}

export function Index() {
    const children = List_ofArray([react_createElement(Counter, {
        initial: 5,
    }), react_createElement(Counter, {
        initial: 15,
    })]);
    return Interop_reactElement("div", Util_createObjDebug(List_singleton(["children", Interop_reactApi.Children.toArray(Array.from(children))])));
}

