import { record_type as Reflection_record_type, bool_type as Reflection_bool_type, list_type as Reflection_list_type, class_type as Reflection_class_type } from "./Reflection.js";
import { value as Option_value, some as Option_some } from "./Option.js";
import { Record as Types_Record, List as Types_List } from "./Types.js";
import { fold as List_fold } from "./List.js";
import { structuralHash as Util_structuralHash, compare as Util_compare, equals as Util_equals, isArrayLike as Util_isArrayLike } from "./Util.js";
import { empty as Seq_empty, tryPick as Seq_tryPick, pick as Seq_pick, compareWith as Seq_compareWith, toIterator as Seq_toIterator, map as Seq_map, unfold as Seq_unfold, getEnumerator as Seq_getEnumerator } from "./Seq.js";
import { join as String_join, format as String_format } from "./String.js";
import { LanguagePrimitives_FastGenericComparer as FSharp$002ECore_LanguagePrimitives_FastGenericComparer } from "./FSharp.Core.js";
import { Dictionary_$ctor_6623D9B3 as MutableMap_Dictionary_$ctor_6623D9B3 } from "./MutableMap.js";

export class MapTree$2 {
    constructor(k, v) {
        this.k = k;
        this.v = v;
    }
}

export function MapTree$2$reflection(gen0, gen1) {
    return Reflection_class_type("Map.MapTree`2", [gen0, gen1], MapTree$2);
}

export function MapTree$2_$ctor_5BDDA1(k, v) {
    return new MapTree$2(k, v);
}

export function MapTree$2__get_Key(_) {
    return _.k;
}

export function MapTree$2__get_Value(_) {
    return _.v;
}

export class MapTreeNode$2 extends MapTree$2 {
    constructor(k, v, left, right, h) {
        super(k, v);
        this.left = left;
        this.right = right;
        this.h = h;
    }
}

export function MapTreeNode$2$reflection(gen0, gen1) {
    return Reflection_class_type("Map.MapTreeNode`2", [gen0, gen1], MapTreeNode$2, MapTree$2$reflection(gen0, gen1));
}

export function MapTreeNode$2_$ctor_2A120A1D(k, v, left, right, h) {
    return new MapTreeNode$2(k, v, left, right, h);
}

export function MapTreeNode$2__get_Left(_) {
    return _.left;
}

export function MapTreeNode$2__get_Right(_) {
    return _.right;
}

export function MapTreeNode$2__get_Height(_) {
    return _.h;
}

export function MapTreeModule_empty() {
    return null;
}

export function MapTreeModule_sizeAux(acc_mut, m_mut) {
    MapTreeModule_sizeAux:
    while (true) {
        const acc = acc_mut, m = m_mut;
        if (m == null) {
            return acc | 0;
        }
        else if (m instanceof MapTreeNode$2) {
            acc_mut = MapTreeModule_sizeAux(acc + 1, MapTreeNode$2__get_Left(m));
            m_mut = MapTreeNode$2__get_Right(m);
            continue MapTreeModule_sizeAux;
        }
        else {
            return (acc + 1) | 0;
        }
        break;
    }
}

export function MapTreeModule_size(x) {
    return MapTreeModule_sizeAux(0, x);
}

export function MapTreeModule_mk(l, k, v, r) {
    let hl;
    const m = l;
    hl = ((m == null) ? 0 : ((m instanceof MapTreeNode$2) ? MapTreeNode$2__get_Height(m) : 1));
    let hr;
    const m_2 = r;
    hr = ((m_2 == null) ? 0 : ((m_2 instanceof MapTreeNode$2) ? MapTreeNode$2__get_Height(m_2) : 1));
    const m_4 = ((hl < hr) ? hr : hl) | 0;
    if (m_4 === 0) {
        return MapTree$2_$ctor_5BDDA1(k, v);
    }
    else {
        return MapTreeNode$2_$ctor_2A120A1D(k, v, l, r, m_4 + 1);
    }
}

export function MapTreeModule_rebalance(t1, k, v, t2) {
    let m_4, m_6;
    let t1h;
    const m = t1;
    t1h = ((m == null) ? 0 : ((m instanceof MapTreeNode$2) ? MapTreeNode$2__get_Height(m) : 1));
    let t2h;
    const m_2 = t2;
    t2h = ((m_2 == null) ? 0 : ((m_2 instanceof MapTreeNode$2) ? MapTreeNode$2__get_Height(m_2) : 1));
    if (t2h > (t1h + 2)) {
        const t2$0027 = t2;
        if ((m_4 = MapTreeNode$2__get_Left(t2$0027), (m_4 == null) ? 0 : ((m_4 instanceof MapTreeNode$2) ? MapTreeNode$2__get_Height(m_4) : 1)) > (t1h + 1)) {
            let t2l;
            const value_1 = MapTreeNode$2__get_Left(t2$0027);
            t2l = value_1;
            return MapTreeModule_mk(MapTreeModule_mk(t1, k, v, MapTreeNode$2__get_Left(t2l)), MapTree$2__get_Key(t2l), MapTree$2__get_Value(t2l), MapTreeModule_mk(MapTreeNode$2__get_Right(t2l), MapTree$2__get_Key(t2$0027), MapTree$2__get_Value(t2$0027), MapTreeNode$2__get_Right(t2$0027)));
        }
        else {
            return MapTreeModule_mk(MapTreeModule_mk(t1, k, v, MapTreeNode$2__get_Left(t2$0027)), MapTree$2__get_Key(t2$0027), MapTree$2__get_Value(t2$0027), MapTreeNode$2__get_Right(t2$0027));
        }
    }
    else if (t1h > (t2h + 2)) {
        const t1$0027 = t1;
        if ((m_6 = MapTreeNode$2__get_Right(t1$0027), (m_6 == null) ? 0 : ((m_6 instanceof MapTreeNode$2) ? MapTreeNode$2__get_Height(m_6) : 1)) > (t2h + 1)) {
            let t1r;
            const value_3 = MapTreeNode$2__get_Right(t1$0027);
            t1r = value_3;
            return MapTreeModule_mk(MapTreeModule_mk(MapTreeNode$2__get_Left(t1$0027), MapTree$2__get_Key(t1$0027), MapTree$2__get_Value(t1$0027), MapTreeNode$2__get_Left(t1r)), MapTree$2__get_Key(t1r), MapTree$2__get_Value(t1r), MapTreeModule_mk(MapTreeNode$2__get_Right(t1r), k, v, t2));
        }
        else {
            return MapTreeModule_mk(MapTreeNode$2__get_Left(t1$0027), MapTree$2__get_Key(t1$0027), MapTree$2__get_Value(t1$0027), MapTreeModule_mk(MapTreeNode$2__get_Right(t1$0027), k, v, t2));
        }
    }
    else {
        return MapTreeModule_mk(t1, k, v, t2);
    }
}

export function MapTreeModule_add(comparer, k, v, m) {
    if (m == null) {
        return MapTree$2_$ctor_5BDDA1(k, v);
    }
    else {
        const c = comparer.Compare(k, MapTree$2__get_Key(m)) | 0;
        if (m instanceof MapTreeNode$2) {
            if (c < 0) {
                return MapTreeModule_rebalance(MapTreeModule_add(comparer, k, v, MapTreeNode$2__get_Left(m)), MapTree$2__get_Key(m), MapTree$2__get_Value(m), MapTreeNode$2__get_Right(m));
            }
            else if (c === 0) {
                return MapTreeNode$2_$ctor_2A120A1D(k, v, MapTreeNode$2__get_Left(m), MapTreeNode$2__get_Right(m), MapTreeNode$2__get_Height(m));
            }
            else {
                return MapTreeModule_rebalance(MapTreeNode$2__get_Left(m), MapTree$2__get_Key(m), MapTree$2__get_Value(m), MapTreeModule_add(comparer, k, v, MapTreeNode$2__get_Right(m)));
            }
        }
        else if (c < 0) {
            return MapTreeNode$2_$ctor_2A120A1D(k, v, MapTreeModule_empty(), m, 2);
        }
        else if (c === 0) {
            return MapTree$2_$ctor_5BDDA1(k, v);
        }
        else {
            return MapTreeNode$2_$ctor_2A120A1D(k, v, m, MapTreeModule_empty(), 2);
        }
    }
}

export function MapTreeModule_tryGetValue(comparer_mut, k_mut, m_mut) {
    MapTreeModule_tryGetValue:
    while (true) {
        const comparer = comparer_mut, k = k_mut, m = m_mut;
        if (m == null) {
            return [false, null];
        }
        else {
            const c = comparer.Compare(k, MapTree$2__get_Key(m)) | 0;
            if (c === 0) {
                return [true, MapTree$2__get_Value(m)];
            }
            else if (m instanceof MapTreeNode$2) {
                comparer_mut = comparer;
                k_mut = k;
                m_mut = ((c < 0) ? MapTreeNode$2__get_Left(m) : MapTreeNode$2__get_Right(m));
                continue MapTreeModule_tryGetValue;
            }
            else {
                return [false, null];
            }
        }
        break;
    }
}

export function MapTreeModule_find(comparer, k, m) {
    const matchValue = MapTreeModule_tryGetValue(comparer, k, m);
    if (matchValue[0]) {
        return matchValue[1];
    }
    else {
        throw (new Error());
    }
}

export function MapTreeModule_tryFind(comparer, k, m) {
    const matchValue = MapTreeModule_tryGetValue(comparer, k, m);
    if (matchValue[0]) {
        return Option_some(matchValue[1]);
    }
    else {
        return void 0;
    }
}

export function MapTreeModule_partition1(comparer, f, k, v, acc1, acc2) {
    if (f(k, v)) {
        return [MapTreeModule_add(comparer, k, v, acc1), acc2];
    }
    else {
        return [acc1, MapTreeModule_add(comparer, k, v, acc2)];
    }
}

export function MapTreeModule_partitionAux(comparer_mut, f_mut, m_mut, acc_0_mut, acc_1_mut) {
    MapTreeModule_partitionAux:
    while (true) {
        const comparer = comparer_mut, f = f_mut, m = m_mut, acc_0 = acc_0_mut, acc_1 = acc_1_mut;
        const acc = [acc_0, acc_1];
        if (m == null) {
            return acc;
        }
        else if (m instanceof MapTreeNode$2) {
            let acc_2;
            const m_2 = MapTreeNode$2__get_Right(m);
            acc_2 = MapTreeModule_partitionAux(comparer, f, m_2, acc[0], acc[1]);
            let acc_3;
            const k = MapTree$2__get_Key(m);
            const v = MapTree$2__get_Value(m);
            acc_3 = MapTreeModule_partition1(comparer, f, k, v, acc_2[0], acc_2[1]);
            const m_3 = MapTreeNode$2__get_Left(m);
            comparer_mut = comparer;
            f_mut = f;
            m_mut = m_3;
            acc_0_mut = acc_3[0];
            acc_1_mut = acc_3[1];
            continue MapTreeModule_partitionAux;
        }
        else {
            const k_1 = MapTree$2__get_Key(m);
            const v_1 = MapTree$2__get_Value(m);
            return MapTreeModule_partition1(comparer, f, k_1, v_1, acc[0], acc[1]);
        }
        break;
    }
}

export function MapTreeModule_partition(comparer, f, m) {
    return MapTreeModule_partitionAux(comparer, f, m, MapTreeModule_empty(), MapTreeModule_empty());
}

export function MapTreeModule_filter1(comparer, f, k, v, acc) {
    if (f(k, v)) {
        return MapTreeModule_add(comparer, k, v, acc);
    }
    else {
        return acc;
    }
}

export function MapTreeModule_filterAux(comparer_mut, f_mut, m_mut, acc_mut) {
    MapTreeModule_filterAux:
    while (true) {
        const comparer = comparer_mut, f = f_mut, m = m_mut, acc = acc_mut;
        if (m == null) {
            return acc;
        }
        else if (m instanceof MapTreeNode$2) {
            const acc_1 = MapTreeModule_filterAux(comparer, f, MapTreeNode$2__get_Left(m), acc);
            const acc_2 = MapTreeModule_filter1(comparer, f, MapTree$2__get_Key(m), MapTree$2__get_Value(m), acc_1);
            comparer_mut = comparer;
            f_mut = f;
            m_mut = MapTreeNode$2__get_Right(m);
            acc_mut = acc_2;
            continue MapTreeModule_filterAux;
        }
        else {
            return MapTreeModule_filter1(comparer, f, MapTree$2__get_Key(m), MapTree$2__get_Value(m), acc);
        }
        break;
    }
}

export function MapTreeModule_filter(comparer, f, m) {
    return MapTreeModule_filterAux(comparer, f, m, MapTreeModule_empty());
}

export function MapTreeModule_spliceOutSuccessor(m) {
    let m_2;
    if (m == null) {
        throw (new Error("internal error: Map.spliceOutSuccessor"));
    }
    else if (m instanceof MapTreeNode$2) {
        if (m_2 = MapTreeNode$2__get_Left(m), m_2 == null) {
            return [MapTree$2__get_Key(m), MapTree$2__get_Value(m), MapTreeNode$2__get_Right(m)];
        }
        else {
            const patternInput = MapTreeModule_spliceOutSuccessor(MapTreeNode$2__get_Left(m));
            return [patternInput[0], patternInput[1], MapTreeModule_mk(patternInput[2], MapTree$2__get_Key(m), MapTree$2__get_Value(m), MapTreeNode$2__get_Right(m))];
        }
    }
    else {
        return [MapTree$2__get_Key(m), MapTree$2__get_Value(m), MapTreeModule_empty()];
    }
}

export function MapTreeModule_remove(comparer, k, m) {
    let m_2, m_3;
    if (m == null) {
        return MapTreeModule_empty();
    }
    else {
        const c = comparer.Compare(k, MapTree$2__get_Key(m)) | 0;
        if (m instanceof MapTreeNode$2) {
            if (c < 0) {
                return MapTreeModule_rebalance(MapTreeModule_remove(comparer, k, MapTreeNode$2__get_Left(m)), MapTree$2__get_Key(m), MapTree$2__get_Value(m), MapTreeNode$2__get_Right(m));
            }
            else if (c === 0) {
                if (m_2 = MapTreeNode$2__get_Left(m), m_2 == null) {
                    return MapTreeNode$2__get_Right(m);
                }
                else if (m_3 = MapTreeNode$2__get_Right(m), m_3 == null) {
                    return MapTreeNode$2__get_Left(m);
                }
                else {
                    const patternInput = MapTreeModule_spliceOutSuccessor(MapTreeNode$2__get_Right(m));
                    return MapTreeModule_mk(MapTreeNode$2__get_Left(m), patternInput[0], patternInput[1], patternInput[2]);
                }
            }
            else {
                return MapTreeModule_rebalance(MapTreeNode$2__get_Left(m), MapTree$2__get_Key(m), MapTree$2__get_Value(m), MapTreeModule_remove(comparer, k, MapTreeNode$2__get_Right(m)));
            }
        }
        else if (c === 0) {
            return MapTreeModule_empty();
        }
        else {
            return m;
        }
    }
}

export function MapTreeModule_change(comparer, k, u, m) {
    let m_2, m_3;
    if (m == null) {
        const matchValue = u(void 0);
        if (matchValue != null) {
            const v = Option_value(matchValue);
            return MapTree$2_$ctor_5BDDA1(k, v);
        }
        else {
            return m;
        }
    }
    else if (m instanceof MapTreeNode$2) {
        const c = comparer.Compare(k, MapTree$2__get_Key(m)) | 0;
        if (c < 0) {
            return MapTreeModule_rebalance(MapTreeModule_change(comparer, k, u, MapTreeNode$2__get_Left(m)), MapTree$2__get_Key(m), MapTree$2__get_Value(m), MapTreeNode$2__get_Right(m));
        }
        else if (c === 0) {
            const matchValue_1 = u(Option_some(MapTree$2__get_Value(m)));
            if (matchValue_1 != null) {
                const v_1 = Option_value(matchValue_1);
                return MapTreeNode$2_$ctor_2A120A1D(k, v_1, MapTreeNode$2__get_Left(m), MapTreeNode$2__get_Right(m), MapTreeNode$2__get_Height(m));
            }
            else if (m_2 = MapTreeNode$2__get_Left(m), m_2 == null) {
                return MapTreeNode$2__get_Right(m);
            }
            else if (m_3 = MapTreeNode$2__get_Right(m), m_3 == null) {
                return MapTreeNode$2__get_Left(m);
            }
            else {
                const patternInput = MapTreeModule_spliceOutSuccessor(MapTreeNode$2__get_Right(m));
                return MapTreeModule_mk(MapTreeNode$2__get_Left(m), patternInput[0], patternInput[1], patternInput[2]);
            }
        }
        else {
            return MapTreeModule_rebalance(MapTreeNode$2__get_Left(m), MapTree$2__get_Key(m), MapTree$2__get_Value(m), MapTreeModule_change(comparer, k, u, MapTreeNode$2__get_Right(m)));
        }
    }
    else {
        const c_1 = comparer.Compare(k, MapTree$2__get_Key(m)) | 0;
        if (c_1 < 0) {
            const matchValue_2 = u(void 0);
            if (matchValue_2 != null) {
                const v_2 = Option_value(matchValue_2);
                return MapTreeNode$2_$ctor_2A120A1D(k, v_2, MapTreeModule_empty(), m, 2);
            }
            else {
                return m;
            }
        }
        else if (c_1 === 0) {
            const matchValue_3 = u(Option_some(MapTree$2__get_Value(m)));
            if (matchValue_3 != null) {
                const v_3 = Option_value(matchValue_3);
                return MapTree$2_$ctor_5BDDA1(k, v_3);
            }
            else {
                return MapTreeModule_empty();
            }
        }
        else {
            const matchValue_4 = u(void 0);
            if (matchValue_4 != null) {
                const v_4 = Option_value(matchValue_4);
                return MapTreeNode$2_$ctor_2A120A1D(k, v_4, m, MapTreeModule_empty(), 2);
            }
            else {
                return m;
            }
        }
    }
}

export function MapTreeModule_mem(comparer_mut, k_mut, m_mut) {
    MapTreeModule_mem:
    while (true) {
        const comparer = comparer_mut, k = k_mut, m = m_mut;
        if (m == null) {
            return false;
        }
        else {
            const c = comparer.Compare(k, MapTree$2__get_Key(m)) | 0;
            if (m instanceof MapTreeNode$2) {
                if (c < 0) {
                    comparer_mut = comparer;
                    k_mut = k;
                    m_mut = MapTreeNode$2__get_Left(m);
                    continue MapTreeModule_mem;
                }
                else if (c === 0) {
                    return true;
                }
                else {
                    comparer_mut = comparer;
                    k_mut = k;
                    m_mut = MapTreeNode$2__get_Right(m);
                    continue MapTreeModule_mem;
                }
            }
            else {
                return c === 0;
            }
        }
        break;
    }
}

export function MapTreeModule_iterOpt(f_mut, m_mut) {
    MapTreeModule_iterOpt:
    while (true) {
        const f = f_mut, m = m_mut;
        if (m == null) {
        }
        else if (m instanceof MapTreeNode$2) {
            MapTreeModule_iterOpt(f, MapTreeNode$2__get_Left(m));
            f(MapTree$2__get_Key(m), MapTree$2__get_Value(m));
            f_mut = f;
            m_mut = MapTreeNode$2__get_Right(m);
            continue MapTreeModule_iterOpt;
        }
        else {
            f(MapTree$2__get_Key(m), MapTree$2__get_Value(m));
        }
        break;
    }
}

export function MapTreeModule_iter(f, m) {
    MapTreeModule_iterOpt(f, m);
}

export function MapTreeModule_tryPickOpt(f_mut, m_mut) {
    MapTreeModule_tryPickOpt:
    while (true) {
        const f = f_mut, m = m_mut;
        if (m == null) {
            return void 0;
        }
        else if (m instanceof MapTreeNode$2) {
            const matchValue = MapTreeModule_tryPickOpt(f, MapTreeNode$2__get_Left(m));
            if (matchValue == null) {
                const matchValue_1 = f(MapTree$2__get_Key(m), MapTree$2__get_Value(m));
                if (matchValue_1 == null) {
                    f_mut = f;
                    m_mut = MapTreeNode$2__get_Right(m);
                    continue MapTreeModule_tryPickOpt;
                }
                else {
                    return matchValue_1;
                }
            }
            else {
                return matchValue;
            }
        }
        else {
            return f(MapTree$2__get_Key(m), MapTree$2__get_Value(m));
        }
        break;
    }
}

export function MapTreeModule_tryPick(f, m) {
    return MapTreeModule_tryPickOpt(f, m);
}

export function MapTreeModule_existsOpt(f_mut, m_mut) {
    MapTreeModule_existsOpt:
    while (true) {
        const f = f_mut, m = m_mut;
        if (m == null) {
            return false;
        }
        else if (m instanceof MapTreeNode$2) {
            if (MapTreeModule_existsOpt(f, MapTreeNode$2__get_Left(m)) ? true : f(MapTree$2__get_Key(m), MapTree$2__get_Value(m))) {
                return true;
            }
            else {
                f_mut = f;
                m_mut = MapTreeNode$2__get_Right(m);
                continue MapTreeModule_existsOpt;
            }
        }
        else {
            return f(MapTree$2__get_Key(m), MapTree$2__get_Value(m));
        }
        break;
    }
}

export function MapTreeModule_exists(f, m) {
    return MapTreeModule_existsOpt(f, m);
}

export function MapTreeModule_forallOpt(f_mut, m_mut) {
    MapTreeModule_forallOpt:
    while (true) {
        const f = f_mut, m = m_mut;
        if (m == null) {
            return true;
        }
        else if (m instanceof MapTreeNode$2) {
            if (MapTreeModule_forallOpt(f, MapTreeNode$2__get_Left(m)) ? f(MapTree$2__get_Key(m), MapTree$2__get_Value(m)) : false) {
                f_mut = f;
                m_mut = MapTreeNode$2__get_Right(m);
                continue MapTreeModule_forallOpt;
            }
            else {
                return false;
            }
        }
        else {
            return f(MapTree$2__get_Key(m), MapTree$2__get_Value(m));
        }
        break;
    }
}

export function MapTreeModule_forall(f, m) {
    return MapTreeModule_forallOpt(f, m);
}

export function MapTreeModule_map(f, m) {
    if (m == null) {
        return MapTreeModule_empty();
    }
    else if (m instanceof MapTreeNode$2) {
        const l2 = MapTreeModule_map(f, MapTreeNode$2__get_Left(m));
        const v2 = f(MapTree$2__get_Value(m));
        const r2 = MapTreeModule_map(f, MapTreeNode$2__get_Right(m));
        return MapTreeNode$2_$ctor_2A120A1D(MapTree$2__get_Key(m), v2, l2, r2, MapTreeNode$2__get_Height(m));
    }
    else {
        return MapTree$2_$ctor_5BDDA1(MapTree$2__get_Key(m), f(MapTree$2__get_Value(m)));
    }
}

export function MapTreeModule_mapiOpt(f, m) {
    if (m == null) {
        return MapTreeModule_empty();
    }
    else if (m instanceof MapTreeNode$2) {
        const l2 = MapTreeModule_mapiOpt(f, MapTreeNode$2__get_Left(m));
        const v2 = f(MapTree$2__get_Key(m), MapTree$2__get_Value(m));
        const r2 = MapTreeModule_mapiOpt(f, MapTreeNode$2__get_Right(m));
        return MapTreeNode$2_$ctor_2A120A1D(MapTree$2__get_Key(m), v2, l2, r2, MapTreeNode$2__get_Height(m));
    }
    else {
        return MapTree$2_$ctor_5BDDA1(MapTree$2__get_Key(m), f(MapTree$2__get_Key(m), MapTree$2__get_Value(m)));
    }
}

export function MapTreeModule_mapi(f, m) {
    return MapTreeModule_mapiOpt(f, m);
}

export function MapTreeModule_foldBackOpt(f_mut, m_mut, x_mut) {
    MapTreeModule_foldBackOpt:
    while (true) {
        const f = f_mut, m = m_mut, x = x_mut;
        if (m == null) {
            return x;
        }
        else if (m instanceof MapTreeNode$2) {
            const x_1 = MapTreeModule_foldBackOpt(f, MapTreeNode$2__get_Right(m), x);
            const x_2 = f(MapTree$2__get_Key(m), MapTree$2__get_Value(m), x_1);
            f_mut = f;
            m_mut = MapTreeNode$2__get_Left(m);
            x_mut = x_2;
            continue MapTreeModule_foldBackOpt;
        }
        else {
            return f(MapTree$2__get_Key(m), MapTree$2__get_Value(m), x);
        }
        break;
    }
}

export function MapTreeModule_foldBack(f, m, x) {
    return MapTreeModule_foldBackOpt(f, m, x);
}

export function MapTreeModule_foldOpt(f_mut, x_mut, m_mut) {
    MapTreeModule_foldOpt:
    while (true) {
        const f = f_mut, x = x_mut, m = m_mut;
        if (m == null) {
            return x;
        }
        else if (m instanceof MapTreeNode$2) {
            const x_1 = MapTreeModule_foldOpt(f, x, MapTreeNode$2__get_Left(m));
            const x_2 = f(x_1, MapTree$2__get_Key(m), MapTree$2__get_Value(m));
            f_mut = f;
            x_mut = x_2;
            m_mut = MapTreeNode$2__get_Right(m);
            continue MapTreeModule_foldOpt;
        }
        else {
            return f(x, MapTree$2__get_Key(m), MapTree$2__get_Value(m));
        }
        break;
    }
}

export function MapTreeModule_fold(f, x, m) {
    return MapTreeModule_foldOpt(f, x, m);
}

export function MapTreeModule_foldSectionOpt(comparer, lo, hi, f, m, x) {
    const foldFromTo = (f_1, m_1, x_1) => {
        if (m_1 == null) {
            return x_1;
        }
        else if (m_1 instanceof MapTreeNode$2) {
            const cLoKey = comparer.Compare(lo, MapTree$2__get_Key(m_1)) | 0;
            const cKeyHi = comparer.Compare(MapTree$2__get_Key(m_1), hi) | 0;
            const x_2 = (cLoKey < 0) ? foldFromTo(f_1, MapTreeNode$2__get_Left(m_1), x_1) : x_1;
            const x_3 = ((cLoKey <= 0) ? (cKeyHi <= 0) : false) ? f_1(MapTree$2__get_Key(m_1), MapTree$2__get_Value(m_1), x_2) : x_2;
            const x_4 = (cKeyHi < 0) ? foldFromTo(f_1, MapTreeNode$2__get_Right(m_1), x_3) : x_3;
            return x_4;
        }
        else {
            const cLoKey_1 = comparer.Compare(lo, MapTree$2__get_Key(m_1)) | 0;
            const cKeyHi_1 = comparer.Compare(MapTree$2__get_Key(m_1), hi) | 0;
            const x_5 = ((cLoKey_1 <= 0) ? (cKeyHi_1 <= 0) : false) ? f_1(MapTree$2__get_Key(m_1), MapTree$2__get_Value(m_1), x_1) : x_1;
            return x_5;
        }
    };
    if (comparer.Compare(lo, hi) === 1) {
        return x;
    }
    else {
        return foldFromTo(f, m, x);
    }
}

export function MapTreeModule_foldSection(comparer, lo, hi, f, m, x) {
    return MapTreeModule_foldSectionOpt(comparer, lo, hi, f, m, x);
}

export function MapTreeModule_toList(m) {
    const loop = (m_1_mut, acc_mut) => {
        loop:
        while (true) {
            const m_1 = m_1_mut, acc = acc_mut;
            if (m_1 == null) {
                return acc;
            }
            else if (m_1 instanceof MapTreeNode$2) {
                m_1_mut = MapTreeNode$2__get_Left(m_1);
                acc_mut = (new Types_List([MapTree$2__get_Key(m_1), MapTree$2__get_Value(m_1)], loop(MapTreeNode$2__get_Right(m_1), acc)));
                continue loop;
            }
            else {
                return new Types_List([MapTree$2__get_Key(m_1), MapTree$2__get_Value(m_1)], acc);
            }
            break;
        }
    };
    return loop(m, new Types_List());
}

export function MapTreeModule_toArray(m) {
    let list;
    list = MapTreeModule_toList(m);
    return Array.from(list);
}

export function MapTreeModule_ofList(comparer, l) {
    return List_fold((acc, tupledArg) => MapTreeModule_add(comparer, tupledArg[0], tupledArg[1], acc), MapTreeModule_empty(), l);
}

export function MapTreeModule_mkFromEnumerator(comparer_mut, acc_mut, e_mut) {
    MapTreeModule_mkFromEnumerator:
    while (true) {
        const comparer = comparer_mut, acc = acc_mut, e = e_mut;
        if (e["System.Collections.IEnumerator.MoveNext"]()) {
            const patternInput = e["System.Collections.Generic.IEnumerator`1.get_Current"]();
            comparer_mut = comparer;
            acc_mut = MapTreeModule_add(comparer, patternInput[0], patternInput[1], acc);
            e_mut = e;
            continue MapTreeModule_mkFromEnumerator;
        }
        else {
            return acc;
        }
        break;
    }
}

export function MapTreeModule_ofArray(comparer, arr) {
    let res = MapTreeModule_empty();
    for (let idx = 0; idx <= (arr.length - 1); idx++) {
        const forLoopVar = arr[idx];
        res = MapTreeModule_add(comparer, forLoopVar[0], forLoopVar[1], res);
    }
    return res;
}

export function MapTreeModule_ofSeq(comparer, c) {
    if (Util_isArrayLike(c)) {
        return MapTreeModule_ofArray(comparer, c);
    }
    else if (c instanceof Types_List) {
        return MapTreeModule_ofList(comparer, c);
    }
    else {
        const ie = Seq_getEnumerator(c);
        try {
            return MapTreeModule_mkFromEnumerator(comparer, MapTreeModule_empty(), ie);
        }
        finally {
            ie.Dispose();
        }
    }
}

export function MapTreeModule_copyToArray(m, arr, i) {
    let j = i | 0;
    MapTreeModule_iter((x, y) => {
        arr[j] = [x, y];
        j = (j + 1);
    }, m);
}

export class MapTreeModule_MapIterator$2 extends Types_Record {
    constructor(stack, started) {
        super();
        this.stack = stack;
        this.started = started;
    }
}

export function MapTreeModule_MapIterator$2$reflection(gen0, gen1) {
    return Reflection_record_type("Map.MapTreeModule.MapIterator`2", [gen0, gen1], MapTreeModule_MapIterator$2, () => [["stack", Reflection_list_type(MapTree$2$reflection(gen0, gen1))], ["started", Reflection_bool_type]]);
}

export function MapTreeModule_collapseLHS(stack_mut) {
    MapTreeModule_collapseLHS:
    while (true) {
        const stack = stack_mut;
        if (stack.tail != null) {
            const rest = stack.tail;
            const m = stack.head;
            if (m == null) {
                stack_mut = rest;
                continue MapTreeModule_collapseLHS;
            }
            else if (m instanceof MapTreeNode$2) {
                stack_mut = (new Types_List(MapTreeNode$2__get_Left(m), new Types_List(MapTree$2_$ctor_5BDDA1(MapTree$2__get_Key(m), MapTree$2__get_Value(m)), new Types_List(MapTreeNode$2__get_Right(m), rest))));
                continue MapTreeModule_collapseLHS;
            }
            else {
                return stack;
            }
        }
        else {
            return new Types_List();
        }
        break;
    }
}

export function MapTreeModule_mkIterator(m) {
    return new MapTreeModule_MapIterator$2(MapTreeModule_collapseLHS(new Types_List(m, new Types_List())), false);
}

export function MapTreeModule_notStarted() {
    throw (new Error("enumeration not started"));
}

export function MapTreeModule_alreadyFinished() {
    throw (new Error("enumeration already finished"));
}

export function MapTreeModule_current(i) {
    if (i.started) {
        const matchValue = i.stack;
        if (matchValue.tail != null) {
            const m = matchValue.head;
            if (m instanceof MapTreeNode$2) {
                throw (new Error("Please report error: Map iterator, unexpected stack for current"));
            }
            else {
                return [MapTree$2__get_Key(m), MapTree$2__get_Value(m)];
            }
        }
        else {
            return MapTreeModule_alreadyFinished();
        }
    }
    else {
        return MapTreeModule_notStarted();
    }
}

export function MapTreeModule_moveNext(i) {
    if (i.started) {
        const matchValue = i.stack;
        if (matchValue.tail != null) {
            if (matchValue.head instanceof MapTreeNode$2) {
                throw (new Error("Please report error: Map iterator, unexpected stack for moveNext"));
            }
            else {
                i.stack = MapTreeModule_collapseLHS(matchValue.tail);
                return !(i.stack.tail == null);
            }
        }
        else {
            return false;
        }
    }
    else {
        i.started = true;
        return !(i.stack.tail == null);
    }
}

export function MapTreeModule_mkIEnumerator(m) {
    let i = MapTreeModule_mkIterator(m);
    return {
        ["System.Collections.Generic.IEnumerator`1.get_Current"]() {
            return MapTreeModule_current(i);
        },
        ["System.Collections.IEnumerator.get_Current"]() {
            return MapTreeModule_current(i);
        },
        ["System.Collections.IEnumerator.MoveNext"]() {
            return MapTreeModule_moveNext(i);
        },
        ["System.Collections.IEnumerator.Reset"]() {
            i = MapTreeModule_mkIterator(m);
        },
        Dispose() {
        },
    };
}

export function MapTreeModule_toSeq(s) {
    const en = MapTreeModule_mkIEnumerator(s);
    return Seq_unfold((en_1) => {
        if (en_1["System.Collections.IEnumerator.MoveNext"]()) {
            return [en_1["System.Collections.Generic.IEnumerator`1.get_Current"](), en_1];
        }
        else {
            return void 0;
        }
    }, en);
}

export class FSharpMap {
    constructor(comparer, tree) {
        this.comparer = comparer;
        this.tree = tree;
    }
    GetHashCode() {
        const this$ = this;
        return FSharpMap__ComputeHashCode(this$) | 0;
    }
    Equals(that) {
        const this$ = this;
        if (that instanceof FSharpMap) {
            const e1 = Seq_getEnumerator(this$);
            try {
                const e2 = Seq_getEnumerator(that);
                try {
                    const loop = () => {
                        const m1 = e1["System.Collections.IEnumerator.MoveNext"]();
                        const m2 = e2["System.Collections.IEnumerator.MoveNext"]();
                        if (m1 === m2) {
                            if (!m1) {
                                return true;
                            }
                            else {
                                const e1c = e1["System.Collections.Generic.IEnumerator`1.get_Current"]();
                                const e2c = e2["System.Collections.Generic.IEnumerator`1.get_Current"]();
                                if (Util_equals(e1c[0], e2c[0]) ? Util_equals(e1c[1], e2c[1]) : false) {
                                    return loop();
                                }
                                else {
                                    return false;
                                }
                            }
                        }
                        else {
                            return false;
                        }
                    };
                    return loop();
                }
                finally {
                    e2.Dispose();
                }
            }
            finally {
                e1.Dispose();
            }
        }
        else {
            return false;
        }
    }
    ToString() {
        const this$ = this;
        let str;
        let strings;
        strings = Seq_map((kv) => String_format("({0}, {1})", kv[0], kv[1]), this$);
        str = String_join("; ", strings);
        return ("map [" + str) + "]";
    }
    toString() {
        return this.ToString();
    }
    GetEnumerator() {
        const __ = this;
        return MapTreeModule_mkIEnumerator(__.tree);
    }
    [Symbol.iterator]() {
        return Seq_toIterator(this.GetEnumerator());
    }
    ["System.Collections.IEnumerable.GetEnumerator"]() {
        const __ = this;
        return MapTreeModule_mkIEnumerator(__.tree);
    }
    CompareTo(obj) {
        const m = this;
        if (obj instanceof FSharpMap) {
            return Seq_compareWith((kvp1, kvp2) => {
                const c = m.comparer.Compare(kvp1[0], kvp2[0]) | 0;
                return ((c !== 0) ? c : Util_compare(kvp1[1], kvp2[1])) | 0;
            }, m, obj) | 0;
        }
        else {
            throw (new Error("not comparable\\nParameter name: obj"));
        }
    }
    get size() {
        const this$ = this;
        return FSharpMap__get_Count(this$) | 0;
    }
    clear() {
        throw (new Error("Map cannot be mutated"));
    }
    delete(_arg1) {
        throw (new Error("Map cannot be mutated"));
    }
    entries() {
        const this$ = this;
        return MapTreeModule_toSeq(FSharpMap__get_Tree(this$));
    }
    get(k) {
        const this$ = this;
        return FSharpMap__get_Item(this$, k);
    }
    has(k) {
        const this$ = this;
        return FSharpMap__ContainsKey(this$, k);
    }
    keys() {
        const this$ = this;
        const source = MapTreeModule_toSeq(FSharpMap__get_Tree(this$));
        return Seq_map((kv) => kv[0], source);
    }
    set(k, v) {
        throw (new Error("Map cannot be mutated"));
    }
    values() {
        const this$ = this;
        const source = MapTreeModule_toSeq(FSharpMap__get_Tree(this$));
        return Seq_map((kv) => kv[1], source);
    }
}

export function FSharpMap$reflection(gen0, gen1) {
    return Reflection_class_type("Map.FSharpMap", [gen0, gen1], FSharpMap);
}

export function FSharpMap_$ctor(comparer, tree) {
    return new FSharpMap(comparer, tree);
}

(() => {
    const comparer = FSharp$002ECore_LanguagePrimitives_FastGenericComparer();
    FSharpMap.empty = FSharpMap_$ctor(comparer, MapTreeModule_empty());
})();

export function FSharpMap_get_Empty() {
    return FSharpMap.empty;
}

export function FSharpMap_Create(ie) {
    const comparer = FSharp$002ECore_LanguagePrimitives_FastGenericComparer();
    return FSharpMap_$ctor(comparer, MapTreeModule_ofSeq(comparer, ie));
}

export function FSharpMap__get_Comparer(m) {
    return m.comparer;
}

export function FSharpMap__get_Tree(m) {
    return m.tree;
}

export function FSharpMap__Add(m, key, value) {
    return FSharpMap_$ctor(m.comparer, MapTreeModule_add(m.comparer, key, value, m.tree));
}

export function FSharpMap__Change(m, key, f) {
    return FSharpMap_$ctor(m.comparer, MapTreeModule_change(m.comparer, key, f, m.tree));
}

export function FSharpMap__get_IsEmpty(m) {
    return m.tree == null;
}

export function FSharpMap__get_Item(m, key) {
    return MapTreeModule_find(m.comparer, key, m.tree);
}

export function FSharpMap__TryPick(m, f) {
    return MapTreeModule_tryPick(f, m.tree);
}

export function FSharpMap__Exists(m, predicate) {
    return MapTreeModule_exists(predicate, m.tree);
}

export function FSharpMap__Filter(m, predicate) {
    return FSharpMap_$ctor(m.comparer, MapTreeModule_filter(m.comparer, predicate, m.tree));
}

export function FSharpMap__ForAll(m, predicate) {
    return MapTreeModule_forall(predicate, m.tree);
}

export function FSharpMap__Fold(m, f, acc) {
    return MapTreeModule_foldBack(f, m.tree, acc);
}

export function FSharpMap__FoldSection(m, lo, hi, f, acc) {
    return MapTreeModule_foldSection(m.comparer, lo, hi, f, m.tree, acc);
}

export function FSharpMap__Iterate(m, f) {
    MapTreeModule_iter(f, m.tree);
}

export function FSharpMap__MapRange(m, f) {
    return FSharpMap_$ctor(m.comparer, MapTreeModule_map(f, m.tree));
}

export function FSharpMap__Map(m, f) {
    return FSharpMap_$ctor(m.comparer, MapTreeModule_mapi(f, m.tree));
}

export function FSharpMap__Partition(m, predicate) {
    const patternInput = MapTreeModule_partition(m.comparer, predicate, m.tree);
    return [FSharpMap_$ctor(m.comparer, patternInput[0]), FSharpMap_$ctor(m.comparer, patternInput[1])];
}

export function FSharpMap__get_Count(m) {
    return MapTreeModule_size(m.tree);
}

export function FSharpMap__ContainsKey(m, key) {
    return MapTreeModule_mem(m.comparer, key, m.tree);
}

export function FSharpMap__Remove(m, key) {
    return FSharpMap_$ctor(m.comparer, MapTreeModule_remove(m.comparer, key, m.tree));
}

export function FSharpMap__TryGetValue(__, key, value) {
    const matchValue = MapTreeModule_tryGetValue(__.comparer, key, __.tree);
    if (matchValue[0]) {
        value.contents = matchValue[1];
        return true;
    }
    else {
        return false;
    }
}

export function FSharpMap__TryFind(m, key) {
    return MapTreeModule_tryFind(m.comparer, key, m.tree);
}

export function FSharpMap__ToList(m) {
    return MapTreeModule_toList(m.tree);
}

export function FSharpMap__ToArray(m) {
    return MapTreeModule_toArray(m.tree);
}

export function FSharpMap_ofList(l) {
    const comparer = FSharp$002ECore_LanguagePrimitives_FastGenericComparer();
    return FSharpMap_$ctor(comparer, MapTreeModule_ofList(comparer, l));
}

export function FSharpMap__ComputeHashCode(this$) {
    const combineHash = (x, y) => (((x << 1) + y) + 631);
    let res = 0;
    const enumerator = Seq_getEnumerator(this$);
    try {
        while (enumerator["System.Collections.IEnumerator.MoveNext"]()) {
            const forLoopVar = enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]();
            const activePatternResult3734 = forLoopVar;
            res = combineHash(res, Util_structuralHash(activePatternResult3734[0]));
            res = combineHash(res, Util_structuralHash(activePatternResult3734[1]));
        }
    }
    finally {
        enumerator.Dispose();
    }
    return res | 0;
}

export function isEmpty(table) {
    return FSharpMap__get_IsEmpty(table);
}

export function add(key, value, table) {
    return FSharpMap__Add(table, key, value);
}

export function change(key, f, table) {
    return FSharpMap__Change(table, key, f);
}

export function find(key, table) {
    return FSharpMap__get_Item(table, key);
}

export function tryFind(key, table) {
    return FSharpMap__TryFind(table, key);
}

export function remove(key, table) {
    return FSharpMap__Remove(table, key);
}

export function containsKey(key, table) {
    return FSharpMap__ContainsKey(table, key);
}

export function iterate(action, table) {
    FSharpMap__Iterate(table, action);
}

export function tryPick(chooser, table) {
    return FSharpMap__TryPick(table, chooser);
}

export function pick(chooser, table) {
    const matchValue = tryPick(chooser, table);
    if (matchValue != null) {
        const res = Option_value(matchValue);
        return res;
    }
    else {
        throw (new Error());
    }
}

export function exists(predicate, table) {
    return FSharpMap__Exists(table, predicate);
}

export function filter(predicate, table) {
    return FSharpMap__Filter(table, predicate);
}

export function partition(predicate, table) {
    return FSharpMap__Partition(table, predicate);
}

export function forAll(predicate, table) {
    return FSharpMap__ForAll(table, predicate);
}

export function map(mapping, table) {
    return FSharpMap__Map(table, mapping);
}

export function fold(folder, state, table) {
    return MapTreeModule_fold(folder, state, FSharpMap__get_Tree(table));
}

export function foldBack(folder, table, state) {
    return MapTreeModule_foldBack(folder, FSharpMap__get_Tree(table), state);
}

export function toSeq(table) {
    return Seq_map((kvp) => [kvp[0], kvp[1]], table);
}

export function findKey(predicate, table) {
    return Seq_pick((kvp) => {
        const k = kvp[0];
        if (predicate(k, kvp[1])) {
            return Option_some(k);
        }
        else {
            return void 0;
        }
    }, table);
}

export function tryFindKey(predicate, table) {
    return Seq_tryPick((kvp) => {
        const k = kvp[0];
        if (predicate(k, kvp[1])) {
            return Option_some(k);
        }
        else {
            return void 0;
        }
    }, table);
}

export function ofList(elements) {
    return FSharpMap_ofList(elements);
}

export function ofSeq(elements) {
    return FSharpMap_Create(elements);
}

export function ofArray(elements) {
    const comparer = FSharp$002ECore_LanguagePrimitives_FastGenericComparer();
    return FSharpMap_$ctor(comparer, MapTreeModule_ofArray(comparer, elements));
}

export function toList(table) {
    return FSharpMap__ToList(table);
}

export function toArray(table) {
    return FSharpMap__ToArray(table);
}

export function empty() {
    return FSharpMap_get_Empty();
}

export function createMutable(source, comparer) {
    const map_1 = MutableMap_Dictionary_$ctor_6623D9B3(source, comparer);
    return map_1;
}

export function groupBy(projection, xs, comparer) {
    const dict = createMutable(Seq_empty(), comparer);
    const enumerator = Seq_getEnumerator(xs);
    try {
        while (enumerator["System.Collections.IEnumerator.MoveNext"]()) {
            const v = enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]();
            const key = projection(v);
            if (dict.has(key)) {
                void (dict.get(key).push(v));
            }
            else {
                const value = dict.set(key, [v]);
                void value;
            }
        }
    }
    finally {
        enumerator.Dispose();
    }
    return Seq_map((kv) => [kv[0], kv[1]], dict);
}

export function countBy(projection, xs, comparer) {
    const dict = createMutable(Seq_empty(), comparer);
    const enumerator = Seq_getEnumerator(xs);
    try {
        while (enumerator["System.Collections.IEnumerator.MoveNext"]()) {
            const value = enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]();
            const key = projection(value);
            const value_1 = dict.has(key) ? dict.set(key, dict.get(key) + 1) : dict.set(key, 1);
            void value_1;
        }
    }
    finally {
        enumerator.Dispose();
    }
    return Seq_map((kv) => [kv[0], kv[1]], dict);
}

export function count(table) {
    return FSharpMap__get_Count(table);
}

