import { List as Types_List, Record as Types_Record } from "../Types.js";
import { record_type as Reflection_record_type, array_type as Reflection_array_type, int32_type as Reflection_int32_type } from "../Reflection.js";
import { op_LeftShift as Long_op_LeftShift, op_BitwiseAnd as Long_op_BitwiseAnd, op_Addition as Long_op_Addition, compare as Long_compare, op_Subtraction as Long_op_Subtraction, op_Division as Long_op_Division, equals as Long_equals, fromInteger as Long_fromInteger, op_Multiply as Long_op_Multiply, op_Modulus as Long_op_Modulus, toInt as Long_toInt, fromBits as Long_fromBits } from "../Long.js";
import { copy as Array_copy, initialize as Array_initialize, map as Array_map, fill as Array_fill } from "../Array.js";
import { int32ToString as Util_int32ToString } from "../Util.js";
import { isNullOrEmpty as String_isNullOrEmpty, join as String_join } from "../String.js";

export class BigNat extends Types_Record {
    constructor(bound, digits) {
        super();
        this.bound = (bound | 0);
        this.digits = digits;
    }
}

export function BigNat$reflection() {
    return Reflection_record_type("BigInt.BigNat", [], BigNat, () => [["bound", Reflection_int32_type], ["digits", Reflection_array_type(Reflection_int32_type)]]);
}

export function BigNatModule_FFT_pow32(x_mut, n_mut) {
    BigNatModule_FFT_pow32:
    while (true) {
        const x = x_mut, n = n_mut;
        if (n === 0) {
            return 1;
        }
        else if ((n % 2) === 0) {
            x_mut = (x * x);
            n_mut = (~(~(n / 2)));
            continue BigNatModule_FFT_pow32;
        }
        else {
            return (x * BigNatModule_FFT_pow32(x * x, ~(~(n / 2)))) | 0;
        }
        break;
    }
}

export function BigNatModule_FFT_leastBounding2Power(b) {
    const findBounding2Power = (b_1_mut, tp_mut, i_mut) => {
        findBounding2Power:
        while (true) {
            const b_1 = b_1_mut, tp = tp_mut, i = i_mut;
            if (b_1 <= tp) {
                return [tp, i];
            }
            else {
                b_1_mut = b_1;
                tp_mut = (tp * 2);
                i_mut = (i + 1);
                continue findBounding2Power;
            }
            break;
        }
    };
    return findBounding2Power(b, 1, 0);
}

export const BigNatModule_FFT_p = Long_fromBits(2013265921, 0, false);

const BigNatModule_FFT_patternInput$004075 = [27, 15, 31, 440564289];

export const BigNatModule_FFT_w = BigNatModule_FFT_patternInput$004075[3];

export const BigNatModule_FFT_m = BigNatModule_FFT_patternInput$004075[1];

export const BigNatModule_FFT_k = BigNatModule_FFT_patternInput$004075[0];

export const BigNatModule_FFT_g = BigNatModule_FFT_patternInput$004075[2];

export const BigNatModule_FFT_primeP = BigNatModule_FFT_p;

export const BigNatModule_FFT_maxBitsInsideFp = 30;

export const BigNatModule_FFT_Fp_p = 2013265921;

export const BigNatModule_FFT_Fp_p64 = Long_fromBits(2013265921, 0, true);

export function BigNatModule_FFT_Fp_toInt(x) {
    return ~(~x);
}

export function BigNatModule_FFT_Fp_ofInt32(x) {
    return x >>> 0;
}

export const BigNatModule_FFT_Fp_mzero = 0;

export const BigNatModule_FFT_Fp_mone = 1;

export const BigNatModule_FFT_Fp_mtwo = 2;

export function BigNatModule_FFT_Fp_mpow(x_mut, n_mut) {
    BigNatModule_FFT_Fp_mpow:
    while (true) {
        const x = x_mut, n = n_mut;
        if (n === 0) {
            return BigNatModule_FFT_Fp_mone;
        }
        else if ((n % 2) === 0) {
            x_mut = (Long_toInt(Long_op_Modulus(Long_op_Multiply(Long_fromInteger(x, true, 6), Long_fromInteger(x, true, 6)), BigNatModule_FFT_Fp_p64)) >>> 0);
            n_mut = (~(~(n / 2)));
            continue BigNatModule_FFT_Fp_mpow;
        }
        else {
            const y_2 = BigNatModule_FFT_Fp_mpow(Long_toInt(Long_op_Modulus(Long_op_Multiply(Long_fromInteger(x, true, 6), Long_fromInteger(x, true, 6)), BigNatModule_FFT_Fp_p64)) >>> 0, ~(~(n / 2)));
            return Long_toInt(Long_op_Modulus(Long_op_Multiply(Long_fromInteger(x, true, 6), Long_fromInteger(y_2, true, 6)), BigNatModule_FFT_Fp_p64)) >>> 0;
        }
        break;
    }
}

export function BigNatModule_FFT_Fp_mpowL(x_mut, n_mut) {
    BigNatModule_FFT_Fp_mpowL:
    while (true) {
        const x = x_mut, n = n_mut;
        if (Long_equals(n, Long_fromBits(0, 0, false))) {
            return BigNatModule_FFT_Fp_mone;
        }
        else if (Long_equals(Long_op_Modulus(n, Long_fromBits(2, 0, false)), Long_fromBits(0, 0, false))) {
            x_mut = (Long_toInt(Long_op_Modulus(Long_op_Multiply(Long_fromInteger(x, true, 6), Long_fromInteger(x, true, 6)), BigNatModule_FFT_Fp_p64)) >>> 0);
            n_mut = Long_op_Division(n, Long_fromBits(2, 0, false));
            continue BigNatModule_FFT_Fp_mpowL;
        }
        else {
            const y_2 = BigNatModule_FFT_Fp_mpowL(Long_toInt(Long_op_Modulus(Long_op_Multiply(Long_fromInteger(x, true, 6), Long_fromInteger(x, true, 6)), BigNatModule_FFT_Fp_p64)) >>> 0, Long_op_Division(n, Long_fromBits(2, 0, false)));
            return Long_toInt(Long_op_Modulus(Long_op_Multiply(Long_fromInteger(x, true, 6), Long_fromInteger(y_2, true, 6)), BigNatModule_FFT_Fp_p64)) >>> 0;
        }
        break;
    }
}

export function BigNatModule_FFT_Fp_m2PowNthRoot(n) {
    return BigNatModule_FFT_Fp_mpow(BigNatModule_FFT_w >>> 0, BigNatModule_FFT_pow32(2, BigNatModule_FFT_k - n));
}

export function BigNatModule_FFT_Fp_minv(x) {
    return BigNatModule_FFT_Fp_mpowL(x, Long_op_Subtraction(BigNatModule_FFT_primeP, Long_fromBits(2, 0, false)));
}

export function BigNatModule_FFT_computeFFT(lambda, mu, n, w, u, res, offset) {
    if (n === 1) {
        res[offset] = u[mu];
    }
    else {
        const halfN = (~(~(n / 2))) | 0;
        const ww = Long_toInt(Long_op_Modulus(Long_op_Multiply(Long_fromInteger(w, true, 6), Long_fromInteger(w, true, 6)), BigNatModule_FFT_Fp_p64)) >>> 0;
        const offsetHalfN = (offset + halfN) | 0;
        BigNatModule_FFT_computeFFT(lambda * 2, mu, halfN, ww, u, res, offset);
        BigNatModule_FFT_computeFFT(lambda * 2, lambda + mu, halfN, ww, u, res, offsetHalfN);
        let wj = BigNatModule_FFT_Fp_mone;
        for (let j = 0; j <= (halfN - 1); j++) {
            const even = res[offset + j];
            const odd = res[offsetHalfN + j];
            let y_2;
            const x_1 = wj;
            y_2 = (Long_toInt(Long_op_Modulus(Long_op_Multiply(Long_fromInteger(x_1, true, 6), Long_fromInteger(odd, true, 6)), BigNatModule_FFT_Fp_p64)) >>> 0);
            res[offset + j] = ((even + y_2) % BigNatModule_FFT_Fp_p);
            let y_4;
            const x_3 = wj;
            y_4 = (Long_toInt(Long_op_Modulus(Long_op_Multiply(Long_fromInteger(x_3, true, 6), Long_fromInteger(odd, true, 6)), BigNatModule_FFT_Fp_p64)) >>> 0);
            res[offsetHalfN + j] = (((even + BigNatModule_FFT_Fp_p) - y_4) % BigNatModule_FFT_Fp_p);
            const y_5 = wj;
            wj = (Long_toInt(Long_op_Modulus(Long_op_Multiply(Long_fromInteger(w, true, 6), Long_fromInteger(y_5, true, 6)), BigNatModule_FFT_Fp_p64)) >>> 0);
        }
    }
}

export function BigNatModule_FFT_computFftInPlace(n, w, u) {
    const res = Array_fill(new Uint32Array(n), 0, n, BigNatModule_FFT_Fp_mzero);
    BigNatModule_FFT_computeFFT(1, 0, n, w, u, res, 0);
    return res;
}

export function BigNatModule_FFT_computeInverseFftInPlace(n, w, uT) {
    const bigKInv = BigNatModule_FFT_Fp_minv(n >>> 0);
    return Array_map((y) => (Long_toInt(Long_op_Modulus(Long_op_Multiply(Long_fromInteger(bigKInv, true, 6), Long_fromInteger(y, true, 6)), BigNatModule_FFT_Fp_p64)) >>> 0), BigNatModule_FFT_computFftInPlace(n, BigNatModule_FFT_Fp_minv(w), uT), Uint32Array);
}

export const BigNatModule_FFT_maxTwoPower = 29;

export const BigNatModule_FFT_twoPowerTable = Array_initialize(BigNatModule_FFT_maxTwoPower - 1, (i) => BigNatModule_FFT_pow32(2, i), Int32Array);

export function BigNatModule_FFT_computeFftPaddedPolynomialProduct(bigK, k, u, v) {
    const w = BigNatModule_FFT_Fp_m2PowNthRoot(k);
    const n = bigK | 0;
    const uT = BigNatModule_FFT_computFftInPlace(n, w, u);
    const vT = BigNatModule_FFT_computFftInPlace(n, w, v);
    const rT = Array_initialize(n, (i) => {
        const x = uT[i];
        const y = vT[i];
        return Long_toInt(Long_op_Modulus(Long_op_Multiply(Long_fromInteger(x, true, 6), Long_fromInteger(y, true, 6)), BigNatModule_FFT_Fp_p64)) >>> 0;
    }, Uint32Array);
    const r = BigNatModule_FFT_computeInverseFftInPlace(n, w, rT);
    return r;
}

export function BigNatModule_FFT_padTo(n, u) {
    const uBound = u.length | 0;
    return Array_initialize(n, (i) => ((i < uBound) ? BigNatModule_FFT_Fp_ofInt32(u[i]) : BigNatModule_FFT_Fp_mzero), Uint32Array);
}

export function BigNatModule_FFT_computeFftPolynomialProduct(degu, u, degv, v) {
    const deguv = (degu + degv) | 0;
    const bound = (deguv + 1) | 0;
    const patternInput = BigNatModule_FFT_leastBounding2Power(bound);
    const bigK = patternInput[0] | 0;
    const w = BigNatModule_FFT_Fp_m2PowNthRoot(patternInput[1]);
    const u_1 = BigNatModule_FFT_padTo(bigK, u);
    const v_1 = BigNatModule_FFT_padTo(bigK, v);
    const n = bigK | 0;
    const uT = BigNatModule_FFT_computFftInPlace(n, w, u_1);
    const vT = BigNatModule_FFT_computFftInPlace(n, w, v_1);
    const rT = Array_initialize(n, (i) => {
        const x = uT[i];
        const y = vT[i];
        return Long_toInt(Long_op_Modulus(Long_op_Multiply(Long_fromInteger(x, true, 6), Long_fromInteger(y, true, 6)), BigNatModule_FFT_Fp_p64)) >>> 0;
    }, Uint32Array);
    const r = BigNatModule_FFT_computeInverseFftInPlace(n, w, rT);
    return Array_map(BigNatModule_FFT_Fp_toInt, r, Int32Array);
}

export const BigNatModule_FFT_mzero = BigNatModule_FFT_Fp_mzero;

export const BigNatModule_FFT_mone = BigNatModule_FFT_Fp_mone;

export const BigNatModule_FFT_maxFp = ((BigNatModule_FFT_Fp_p + BigNatModule_FFT_Fp_p) - BigNatModule_FFT_mone) % BigNatModule_FFT_Fp_p;

export function BigNatModule_bound(n) {
    return n.bound;
}

export function BigNatModule_setBound(n, v) {
    n.bound = v;
}

export function BigNatModule_coeff(n, i) {
    return n.digits[i];
}

export function BigNatModule_coeff64(n, i) {
    return Long_fromInteger(BigNatModule_coeff(n, i), false, 2);
}

export function BigNatModule_setCoeff(n, i, v) {
    n.digits[i] = v;
}

export function BigNatModule_pow64(x_mut, n_mut) {
    BigNatModule_pow64:
    while (true) {
        const x = x_mut, n = n_mut;
        if (n === 0) {
            return Long_fromBits(1, 0, false);
        }
        else if ((n % 2) === 0) {
            x_mut = Long_op_Multiply(x, x);
            n_mut = (~(~(n / 2)));
            continue BigNatModule_pow64;
        }
        else {
            return Long_op_Multiply(x, BigNatModule_pow64(Long_op_Multiply(x, x), ~(~(n / 2))));
        }
        break;
    }
}

export function BigNatModule_pow32(x_mut, n_mut) {
    BigNatModule_pow32:
    while (true) {
        const x = x_mut, n = n_mut;
        if (n === 0) {
            return 1;
        }
        else if ((n % 2) === 0) {
            x_mut = (x * x);
            n_mut = (~(~(n / 2)));
            continue BigNatModule_pow32;
        }
        else {
            return (x * BigNatModule_pow32(x * x, ~(~(n / 2)))) | 0;
        }
        break;
    }
}

export function BigNatModule_hash(n) {
    let res = 0;
    for (let i = 0; i <= (n.bound - 1); i++) {
        res = (n.digits[i] + (res << 3));
    }
    return res | 0;
}

export function BigNatModule_maxInt(a, b) {
    if (a < b) {
        return b | 0;
    }
    else {
        return a | 0;
    }
}

export function BigNatModule_minInt(a, b) {
    if (a < b) {
        return a | 0;
    }
    else {
        return b | 0;
    }
}

export const BigNatModule_baseBits = 24;

export const BigNatModule_baseN = 16777216;

export const BigNatModule_baseMask = 16777215;

export const BigNatModule_baseNi64 = Long_fromBits(16777216, 0, false);

export const BigNatModule_baseMaski64 = Long_fromBits(16777215, 0, false);

export const BigNatModule_baseMaskU = Long_fromBits(16777215, 0, true);

export const BigNatModule_baseMask32A = 16777215;

export const BigNatModule_baseMask32B = 255;

export const BigNatModule_baseShift32B = 24;

export const BigNatModule_baseMask64A = 16777215;

export const BigNatModule_baseMask64B = 16777215;

export const BigNatModule_baseMask64C = 65535;

export const BigNatModule_baseShift64B = 24;

export const BigNatModule_baseShift64C = 48;

export function BigNatModule_divbase(x) {
    return ~(~((x >>> 0) >>> BigNatModule_baseBits));
}

export function BigNatModule_modbase(x) {
    return x & BigNatModule_baseMask;
}

export function BigNatModule_createN(b) {
    return new BigNat(b, new Int32Array(b));
}

export function BigNatModule_copyN(x) {
    return new BigNat(x.bound, Array_copy(x.digits));
}

export function BigNatModule_normN(n) {
    const findLeastBound = (na_mut, i_mut) => {
        findLeastBound:
        while (true) {
            const na = na_mut, i = i_mut;
            if ((i === -1) ? true : (na[i] !== 0)) {
                return (i + 1) | 0;
            }
            else {
                na_mut = na;
                i_mut = (i - 1);
                continue findLeastBound;
            }
            break;
        }
    };
    const bound = findLeastBound(n.digits, n.bound - 1) | 0;
    n.bound = bound;
    return n;
}

export const BigNatModule_boundInt = 2;

export const BigNatModule_boundInt64 = 3;

export const BigNatModule_boundBase = 1;

export function BigNatModule_embed(x) {
    const x_1 = ((x < 0) ? 0 : x) | 0;
    if (x_1 < BigNatModule_baseN) {
        const r = BigNatModule_createN(1);
        r.digits[0] = x_1;
        return BigNatModule_normN(r);
    }
    else {
        const r_1 = BigNatModule_createN(BigNatModule_boundInt);
        for (let i = 0; i <= (BigNatModule_boundInt - 1); i++) {
            r_1.digits[i] = ((~(~(x_1 / BigNatModule_pow32(BigNatModule_baseN, i)))) % BigNatModule_baseN);
        }
        return BigNatModule_normN(r_1);
    }
}

export function BigNatModule_embed64(x) {
    const x_1 = (Long_compare(x, Long_fromBits(0, 0, false)) < 0) ? Long_fromBits(0, 0, false) : x;
    const r = BigNatModule_createN(BigNatModule_boundInt64);
    for (let i = 0; i <= (BigNatModule_boundInt64 - 1); i++) {
        r.digits[i] = (~(~Long_toInt(Long_op_Modulus(Long_op_Division(x_1, BigNatModule_pow64(BigNatModule_baseNi64, i)), BigNatModule_baseNi64))));
    }
    return BigNatModule_normN(r);
}

export function BigNatModule_eval32(n) {
    if (n.bound === 1) {
        return n.digits[0] | 0;
    }
    else {
        let acc = 0;
        for (let i = n.bound - 1; i >= 0; i--) {
            acc = (n.digits[i] + (BigNatModule_baseN * acc));
        }
        return acc | 0;
    }
}

export function BigNatModule_eval64(n) {
    if (n.bound === 1) {
        return Long_fromInteger(n.digits[0], false, 2);
    }
    else {
        let acc = Long_fromBits(0, 0, false);
        for (let i = n.bound - 1; i >= 0; i--) {
            acc = Long_op_Addition(Long_fromInteger(n.digits[i], false, 2), Long_op_Multiply(BigNatModule_baseNi64, acc));
        }
        return acc;
    }
}

export const BigNatModule_one = BigNatModule_embed(1);

export const BigNatModule_zero = BigNatModule_embed(0);

export function BigNatModule_restrictTo(d, n) {
    return new BigNat(BigNatModule_minInt(d, n.bound), n.digits);
}

export function BigNatModule_shiftUp(d, n) {
    const m = BigNatModule_createN(n.bound + d);
    for (let i = 0; i <= (n.bound - 1); i++) {
        m.digits[i + d] = n.digits[i];
    }
    return m;
}

export function BigNatModule_shiftDown(d, n) {
    if ((n.bound - d) <= 0) {
        return BigNatModule_zero;
    }
    else {
        const m = BigNatModule_createN(n.bound - d);
        for (let i = 0; i <= (m.bound - 1); i++) {
            m.digits[i] = n.digits[i + d];
        }
        return m;
    }
}

export function BigNatModule_degree(n) {
    return n.bound - 1;
}

export function BigNatModule_addP(i_mut, n_mut, c_mut, p_mut, q_mut, r_mut) {
    let z, i_1, z_1, i_2;
    BigNatModule_addP:
    while (true) {
        const i = i_mut, n = n_mut, c = c_mut, p = p_mut, q = q_mut, r = r_mut;
        if (i < n) {
            const x = (((z = p, (i_1 = (i | 0), (i_1 < z.bound) ? z.digits[i_1] : 0)) + (z_1 = q, (i_2 = (i | 0), (i_2 < z_1.bound) ? z_1.digits[i_2] : 0))) + c) | 0;
            r.digits[i] = BigNatModule_modbase(x);
            const c_1 = BigNatModule_divbase(x) | 0;
            i_mut = (i + 1);
            n_mut = n;
            c_mut = c_1;
            p_mut = p;
            q_mut = q;
            r_mut = r;
            continue BigNatModule_addP;
        }
        break;
    }
}

export function BigNatModule_add(p, q) {
    const rbound = (1 + BigNatModule_maxInt(p.bound, q.bound)) | 0;
    const r = BigNatModule_createN(rbound);
    BigNatModule_addP(0, rbound, 0, p, q, r);
    return BigNatModule_normN(r);
}

export function BigNatModule_subP(i_mut, n_mut, c_mut, p_mut, q_mut, r_mut) {
    let z, i_1, z_1, i_2;
    BigNatModule_subP:
    while (true) {
        const i = i_mut, n = n_mut, c = c_mut, p = p_mut, q = q_mut, r = r_mut;
        if (i < n) {
            const x = (((z = p, (i_1 = (i | 0), (i_1 < z.bound) ? z.digits[i_1] : 0)) - (z_1 = q, (i_2 = (i | 0), (i_2 < z_1.bound) ? z_1.digits[i_2] : 0))) + c) | 0;
            if (x > 0) {
                r.digits[i] = BigNatModule_modbase(x);
                const c_1 = BigNatModule_divbase(x) | 0;
                i_mut = (i + 1);
                n_mut = n;
                c_mut = c_1;
                p_mut = p;
                q_mut = q;
                r_mut = r;
                continue BigNatModule_subP;
            }
            else {
                const x_1 = (x + BigNatModule_baseN) | 0;
                r.digits[i] = BigNatModule_modbase(x_1);
                const c_2 = (BigNatModule_divbase(x_1) - 1) | 0;
                i_mut = (i + 1);
                n_mut = n;
                c_mut = c_2;
                p_mut = p;
                q_mut = q;
                r_mut = r;
                continue BigNatModule_subP;
            }
        }
        else {
            const underflow = c !== 0;
            return underflow;
        }
        break;
    }
}

export function BigNatModule_sub(p, q) {
    const rbound = BigNatModule_maxInt(p.bound, q.bound) | 0;
    const r = BigNatModule_createN(rbound);
    const underflow = BigNatModule_subP(0, rbound, 0, p, q, r);
    if (underflow) {
        return BigNatModule_embed(0);
    }
    else {
        return BigNatModule_normN(r);
    }
}

export function BigNatModule_isZero(p) {
    return p.bound === 0;
}

export function BigNatModule_IsZero(p) {
    return BigNatModule_isZero(p);
}

export function BigNatModule_isOne(p) {
    if (p.bound === 1) {
        return p.digits[0] === 1;
    }
    else {
        return false;
    }
}

export function BigNatModule_equal(p, q) {
    if (p.bound === q.bound) {
        const check = (pa_mut, qa_mut, i_mut) => {
            check:
            while (true) {
                const pa = pa_mut, qa = qa_mut, i = i_mut;
                if (i === -1) {
                    return true;
                }
                else if (pa[i] === qa[i]) {
                    pa_mut = pa;
                    qa_mut = qa;
                    i_mut = (i - 1);
                    continue check;
                }
                else {
                    return false;
                }
                break;
            }
        };
        return check(p.digits, q.digits, p.bound - 1);
    }
    else {
        return false;
    }
}

export function BigNatModule_shiftCompare(p, pn, q, qn) {
    if ((p.bound + pn) < (q.bound + qn)) {
        return -1;
    }
    else if ((p.bound + pn) > (q.bound + pn)) {
        return 1;
    }
    else {
        const check = (pa_mut, qa_mut, i_mut) => {
            check:
            while (true) {
                const pa = pa_mut, qa = qa_mut, i = i_mut;
                if (i === -1) {
                    return 0;
                }
                else {
                    const pai = ((i < pn) ? 0 : pa[i - pn]) | 0;
                    const qai = ((i < qn) ? 0 : qa[i - qn]) | 0;
                    if (pai === qai) {
                        pa_mut = pa;
                        qa_mut = qa;
                        i_mut = (i - 1);
                        continue check;
                    }
                    else if (pai < qai) {
                        return -1;
                    }
                    else {
                        return 1;
                    }
                }
                break;
            }
        };
        return check(p.digits, q.digits, (p.bound + pn) - 1) | 0;
    }
}

export function BigNatModule_compare(p, q) {
    if (p.bound < q.bound) {
        return -1;
    }
    else if (p.bound > q.bound) {
        return 1;
    }
    else {
        const check = (pa_mut, qa_mut, i_mut) => {
            check:
            while (true) {
                const pa = pa_mut, qa = qa_mut, i = i_mut;
                if (i === -1) {
                    return 0;
                }
                else if (pa[i] === qa[i]) {
                    pa_mut = pa;
                    qa_mut = qa;
                    i_mut = (i - 1);
                    continue check;
                }
                else if (pa[i] < qa[i]) {
                    return -1;
                }
                else {
                    return 1;
                }
                break;
            }
        };
        return check(p.digits, q.digits, p.bound - 1) | 0;
    }
}

export function BigNatModule_lt(p, q) {
    return BigNatModule_compare(p, q) === -1;
}

export function BigNatModule_gt(p, q) {
    return BigNatModule_compare(p, q) === 1;
}

export function BigNatModule_lte(p, q) {
    return BigNatModule_compare(p, q) !== 1;
}

export function BigNatModule_gte(p, q) {
    return BigNatModule_compare(p, q) !== -1;
}

export function BigNatModule_min(a, b) {
    if (BigNatModule_lt(a, b)) {
        return a;
    }
    else {
        return b;
    }
}

export function BigNatModule_max(a, b) {
    if (BigNatModule_lt(a, b)) {
        return b;
    }
    else {
        return a;
    }
}

export function BigNatModule_contributeArr(a_mut, i_mut, c_mut) {
    BigNatModule_contributeArr:
    while (true) {
        const a = a_mut, i = i_mut, c = c_mut;
        const x = Long_op_Addition(Long_fromInteger(a[i], false, 2), c);
        const c_1 = Long_op_Division(x, BigNatModule_baseNi64);
        let x_3;
        const value = Long_op_BitwiseAnd(x, BigNatModule_baseMaski64);
        x_3 = (~(~Long_toInt(value)));
        a[i] = x_3;
        if (Long_compare(c_1, Long_fromBits(0, 0, false)) > 0) {
            a_mut = a;
            i_mut = (i + 1);
            c_mut = c_1;
            continue BigNatModule_contributeArr;
        }
        break;
    }
}

export function BigNatModule_scale(k, p) {
    const rbound = (p.bound + BigNatModule_boundInt) | 0;
    const r = BigNatModule_createN(rbound);
    const k_1 = Long_fromInteger(k, false, 2);
    for (let i = 0; i <= (p.bound - 1); i++) {
        const kpi = Long_op_Multiply(k_1, Long_fromInteger(p.digits[i], false, 2));
        BigNatModule_contributeArr(r.digits, i, kpi);
    }
    return BigNatModule_normN(r);
}

export function BigNatModule_mulSchoolBookBothSmall(p, q) {
    let value;
    const r = BigNatModule_createN(2);
    const rak = Long_op_Multiply(Long_fromInteger(p, false, 2), Long_fromInteger(q, false, 2));
    BigNatModule_setCoeff(r, 0, (value = Long_op_BitwiseAnd(rak, BigNatModule_baseMaski64), (~(~Long_toInt(value)))));
    BigNatModule_setCoeff(r, 1, ~(~Long_toInt(Long_op_Division(rak, BigNatModule_baseNi64))));
    return BigNatModule_normN(r);
}

export function BigNatModule_mulSchoolBookCarry(r_mut, c_mut, k_mut) {
    let value;
    BigNatModule_mulSchoolBookCarry:
    while (true) {
        const r = r_mut, c = c_mut, k = k_mut;
        if (Long_compare(c, Long_fromBits(0, 0, false)) > 0) {
            const rak = Long_op_Addition(BigNatModule_coeff64(r, k), c);
            BigNatModule_setCoeff(r, k, (value = Long_op_BitwiseAnd(rak, BigNatModule_baseMaski64), (~(~Long_toInt(value)))));
            r_mut = r;
            c_mut = Long_op_Division(rak, BigNatModule_baseNi64);
            k_mut = (k + 1);
            continue BigNatModule_mulSchoolBookCarry;
        }
        break;
    }
}

export function BigNatModule_mulSchoolBookOneSmall(p, q) {
    let value;
    const bp = BigNatModule_bound(p) | 0;
    const rbound = (bp + 1) | 0;
    const r = BigNatModule_createN(rbound);
    const q_1 = Long_fromInteger(q, false, 2);
    let c = Long_fromBits(0, 0, false);
    for (let i = 0; i <= (bp - 1); i++) {
        const rak = Long_op_Addition(Long_op_Addition(c, BigNatModule_coeff64(r, i)), Long_op_Multiply(BigNatModule_coeff64(p, i), q_1));
        BigNatModule_setCoeff(r, i, (value = Long_op_BitwiseAnd(rak, BigNatModule_baseMaski64), (~(~Long_toInt(value)))));
        c = Long_op_Division(rak, BigNatModule_baseNi64);
    }
    BigNatModule_mulSchoolBookCarry(r, c, bp);
    return BigNatModule_normN(r);
}

export function BigNatModule_mulSchoolBookNeitherSmall(p, q) {
    let value;
    const rbound = (p.bound + q.bound) | 0;
    const r = BigNatModule_createN(rbound);
    const ra = r.digits;
    for (let i = 0; i <= (p.bound - 1); i++) {
        const pai = Long_fromInteger(p.digits[i], false, 2);
        let c = Long_fromBits(0, 0, false);
        let k = i | 0;
        for (let j = 0; j <= (q.bound - 1); j++) {
            const qaj = Long_fromInteger(q.digits[j], false, 2);
            const rak = Long_op_Addition(Long_op_Addition(Long_fromInteger(ra[k], false, 2), c), Long_op_Multiply(pai, qaj));
            ra[k] = (value = Long_op_BitwiseAnd(rak, BigNatModule_baseMaski64), (~(~Long_toInt(value))));
            c = Long_op_Division(rak, BigNatModule_baseNi64);
            k = (k + 1);
        }
        BigNatModule_mulSchoolBookCarry(r, c, k);
    }
    return BigNatModule_normN(r);
}

export function BigNatModule_mulSchoolBook(p, q) {
    const pSmall = BigNatModule_bound(p) === 1;
    const qSmall = BigNatModule_bound(q) === 1;
    if (pSmall ? qSmall : false) {
        return BigNatModule_mulSchoolBookBothSmall(BigNatModule_coeff(p, 0), BigNatModule_coeff(q, 0));
    }
    else if (pSmall) {
        return BigNatModule_mulSchoolBookOneSmall(q, BigNatModule_coeff(p, 0));
    }
    else if (qSmall) {
        return BigNatModule_mulSchoolBookOneSmall(p, BigNatModule_coeff(q, 0));
    }
    else {
        return BigNatModule_mulSchoolBookNeitherSmall(p, q);
    }
}

export class BigNatModule_encoding extends Types_Record {
    constructor(bigL, twoToBigL, k, bigK, bigN, split, splits) {
        super();
        this.bigL = (bigL | 0);
        this.twoToBigL = (twoToBigL | 0);
        this.k = (k | 0);
        this.bigK = (bigK | 0);
        this.bigN = (bigN | 0);
        this.split = (split | 0);
        this.splits = splits;
    }
}

export function BigNatModule_encoding$reflection() {
    return Reflection_record_type("BigInt.BigNatModule.encoding", [], BigNatModule_encoding, () => [["bigL", Reflection_int32_type], ["twoToBigL", Reflection_int32_type], ["k", Reflection_int32_type], ["bigK", Reflection_int32_type], ["bigN", Reflection_int32_type], ["split", Reflection_int32_type], ["splits", Reflection_array_type(Reflection_int32_type)]]);
}

export function BigNatModule_mkEncoding(bigL, k, bigK, bigN) {
    return new BigNatModule_encoding(bigL, BigNatModule_pow32(2, bigL), k, bigK, bigN, ~(~(BigNatModule_baseBits / bigL)), Array_initialize(~(~(BigNatModule_baseBits / bigL)), (i) => BigNatModule_pow32(2, bigL * i), Int32Array));
}

export const BigNatModule_table = [BigNatModule_mkEncoding(1, 28, 268435456, 268435456), BigNatModule_mkEncoding(2, 26, 67108864, 134217728), BigNatModule_mkEncoding(3, 24, 16777216, 50331648), BigNatModule_mkEncoding(4, 22, 4194304, 16777216), BigNatModule_mkEncoding(5, 20, 1048576, 5242880), BigNatModule_mkEncoding(6, 18, 262144, 1572864), BigNatModule_mkEncoding(7, 16, 65536, 458752), BigNatModule_mkEncoding(8, 14, 16384, 131072), BigNatModule_mkEncoding(9, 12, 4096, 36864), BigNatModule_mkEncoding(10, 10, 1024, 10240), BigNatModule_mkEncoding(11, 8, 256, 2816), BigNatModule_mkEncoding(12, 6, 64, 768), BigNatModule_mkEncoding(13, 4, 16, 208)];

export function BigNatModule_calculateTableTow(bigL) {
    const k = (BigNatModule_FFT_maxBitsInsideFp - (2 * bigL)) | 0;
    const bigK = BigNatModule_pow64(Long_fromBits(2, 0, false), k);
    const N = Long_op_Multiply(bigK, Long_fromInteger(bigL, false, 2));
    return [bigL, k, bigK, N];
}

export function BigNatModule_encodingGivenResultBits(bitsRes) {
    const selectFrom = (i_mut) => {
        selectFrom:
        while (true) {
            const i = i_mut;
            if (((i + 1) < BigNatModule_table.length) ? (bitsRes < BigNatModule_table[i + 1].bigN) : false) {
                i_mut = (i + 1);
                continue selectFrom;
            }
            else {
                return BigNatModule_table[i];
            }
            break;
        }
    };
    if (bitsRes >= BigNatModule_table[0].bigN) {
        throw (new Error("Product is huge, around 268435456 bits, beyond quickmul"));
    }
    else {
        return selectFrom(0);
    }
}

export const BigNatModule_bitmask = Array_initialize(BigNatModule_baseBits, (i) => (BigNatModule_pow32(2, i) - 1), Int32Array);

export const BigNatModule_twopowers = Array_initialize(BigNatModule_baseBits, (i) => BigNatModule_pow32(2, i), Int32Array);

export const BigNatModule_twopowersI64 = Array_initialize(BigNatModule_baseBits, (i) => BigNatModule_pow64(Long_fromBits(2, 0, false), i));

export function BigNatModule_wordBits(word) {
    const hi = (k_mut) => {
        hi:
        while (true) {
            const k = k_mut;
            if (k === 0) {
                return 0;
            }
            else if ((word & BigNatModule_twopowers[k - 1]) !== 0) {
                return k | 0;
            }
            else {
                k_mut = (k - 1);
                continue hi;
            }
            break;
        }
    };
    return hi(BigNatModule_baseBits) | 0;
}

export function BigNatModule_bits(u) {
    if (u.bound === 0) {
        return 0;
    }
    else {
        return ((BigNatModule_degree(u) * BigNatModule_baseBits) + BigNatModule_wordBits(u.digits[BigNatModule_degree(u)])) | 0;
    }
}

export function BigNatModule_extractBits(n, enc, bi) {
    const bj = ((bi + enc.bigL) - 1) | 0;
    const biw = (~(~(bi / BigNatModule_baseBits))) | 0;
    const bjw = (~(~(bj / BigNatModule_baseBits))) | 0;
    if (biw !== bjw) {
        let x;
        const z = n;
        const i = biw | 0;
        x = ((i < z.bound) ? z.digits[i] : 0);
        let y;
        const z_1 = n;
        const i_1 = bjw | 0;
        y = ((i_1 < z_1.bound) ? z_1.digits[i_1] : 0);
        const xbit = (bi % BigNatModule_baseBits) | 0;
        const nxbits = (BigNatModule_baseBits - xbit) | 0;
        const x_1 = (x >> xbit) | 0;
        const y_1 = (y << nxbits) | 0;
        const x_2 = (x_1 | y_1) | 0;
        const x_3 = (x_2 & BigNatModule_bitmask[enc.bigL]) | 0;
        return x_3 | 0;
    }
    else {
        let x_4;
        const z_2 = n;
        const i_2 = biw | 0;
        x_4 = ((i_2 < z_2.bound) ? z_2.digits[i_2] : 0);
        const xbit_1 = (bi % BigNatModule_baseBits) | 0;
        const x_5 = (x_4 >> xbit_1) | 0;
        const x_6 = (x_5 & BigNatModule_bitmask[enc.bigL]) | 0;
        return x_6 | 0;
    }
}

export function BigNatModule_encodePoly(enc, n) {
    const poly = Array_fill(new Uint32Array(enc.bigK), 0, enc.bigK, BigNatModule_FFT_Fp_ofInt32(0));
    const biMax = (n.bound * BigNatModule_baseBits) | 0;
    const encoder = (i_mut, bi_mut) => {
        encoder:
        while (true) {
            const i = i_mut, bi = bi_mut;
            if ((i === enc.bigK) ? true : (bi > biMax)) {
            }
            else {
                const pi = BigNatModule_extractBits(n, enc, bi) | 0;
                poly[i] = BigNatModule_FFT_Fp_ofInt32(pi);
                const i_1 = (i + 1) | 0;
                const bi_1 = (bi + enc.bigL) | 0;
                i_mut = i_1;
                bi_mut = bi_1;
                continue encoder;
            }
            break;
        }
    };
    encoder(0, 0);
    return poly;
}

export function BigNatModule_decodeResultBits(enc, poly) {
    let n = 0;
    for (let i = 0; i <= (poly.length - 1); i++) {
        if (poly[i] !== BigNatModule_FFT_mzero) {
            n = i;
        }
    }
    const rbits = ((BigNatModule_FFT_maxBitsInsideFp + (enc.bigL * n)) + 1) | 0;
    return (rbits + 1) | 0;
}

export function BigNatModule_decodePoly(enc, poly) {
    const rbound = ((~(~(BigNatModule_decodeResultBits(enc, poly) / BigNatModule_baseBits))) + 1) | 0;
    const r = BigNatModule_createN(rbound);
    const evaluate = (i_mut, j_mut, d_mut) => {
        evaluate:
        while (true) {
            const i = i_mut, j = j_mut, d = d_mut;
            if (i === enc.bigK) {
            }
            else {
                if (j >= rbound) {
                }
                else {
                    const x = Long_op_Multiply(Long_fromInteger(BigNatModule_FFT_Fp_toInt(poly[i]), false, 2), BigNatModule_twopowersI64[d]);
                    BigNatModule_contributeArr(r.digits, j, x);
                }
                const i_2 = (i + 1) | 0;
                const d_1 = (d + enc.bigL) | 0;
                const patternInput = (d_1 >= BigNatModule_baseBits) ? [j + 1, d_1 - BigNatModule_baseBits] : [j, d_1];
                i_mut = i_2;
                j_mut = patternInput[0];
                d_mut = patternInput[1];
                continue evaluate;
            }
            break;
        }
    };
    evaluate(0, 0, 0);
    return BigNatModule_normN(r);
}

export function BigNatModule_quickMulUsingFft(u, v) {
    const bitsRes = (BigNatModule_bits(u) + BigNatModule_bits(v)) | 0;
    const enc = BigNatModule_encodingGivenResultBits(bitsRes);
    const upoly = BigNatModule_encodePoly(enc, u);
    const vpoly = BigNatModule_encodePoly(enc, v);
    const rpoly = BigNatModule_FFT_computeFftPaddedPolynomialProduct(enc.bigK, enc.k, upoly, vpoly);
    const r = BigNatModule_decodePoly(enc, rpoly);
    return BigNatModule_normN(r);
}

export const BigNatModule_minDigitsKaratsuba = 16;

export function BigNatModule_recMulKaratsuba(mul, p, q) {
    const bp = p.bound | 0;
    const bq = q.bound | 0;
    const bmax = BigNatModule_maxInt(bp, bq) | 0;
    if (bmax > BigNatModule_minDigitsKaratsuba) {
        const k = (~(~(bmax / 2))) | 0;
        const a0 = BigNatModule_restrictTo(k, p);
        const a1 = BigNatModule_shiftDown(k, p);
        const b0 = BigNatModule_restrictTo(k, q);
        const b1 = BigNatModule_shiftDown(k, q);
        const q0 = mul(a0, b0);
        const q1 = mul(BigNatModule_add(a0, a1), BigNatModule_add(b0, b1));
        const q2 = mul(a1, b1);
        const p1 = BigNatModule_sub(q1, BigNatModule_add(q0, q2));
        const r = BigNatModule_add(q0, BigNatModule_shiftUp(k, BigNatModule_add(p1, BigNatModule_shiftUp(k, q2))));
        return r;
    }
    else {
        return BigNatModule_mulSchoolBook(p, q);
    }
}

export function BigNatModule_mulKaratsuba(x, y) {
    return BigNatModule_recMulKaratsuba(BigNatModule_mulKaratsuba, x, y);
}

export const BigNatModule_productDigitsUpperSchoolBook = ~(~(64000 / BigNatModule_baseBits));

export const BigNatModule_singleDigitForceSchoolBook = ~(~(32000 / BigNatModule_baseBits));

export const BigNatModule_productDigitsUpperFft = ~(~(BigNatModule_table[0].bigN / BigNatModule_baseBits));

export function BigNatModule_mul(p, q) {
    return BigNatModule_mulSchoolBook(p, q);
}

export function BigNatModule_scaleSubInPlace(x, f, a, n) {
    const patternInput = [x.digits, BigNatModule_degree(x)];
    const x_1 = patternInput[0];
    const patternInput_1 = [a.digits, BigNatModule_degree(a)];
    const ad = patternInput_1[1] | 0;
    const a_1 = patternInput_1[0];
    const f_1 = Long_fromInteger(f, false, 2);
    let j = 0;
    let z = Long_op_Multiply(f_1, Long_fromInteger(a_1[0], false, 2));
    while ((Long_compare(z, Long_fromBits(0, 0, false)) > 0) ? true : (j < ad)) {
        if (j > patternInput[1]) {
            throw (new Error("scaleSubInPlace: pre-condition did not apply, result would be -ve"));
        }
        let zLo;
        let value_1;
        const x_2 = z;
        const value = Long_op_BitwiseAnd(x_2, BigNatModule_baseMaski64);
        value_1 = (~(~Long_toInt(value)));
        zLo = value_1;
        let zHi;
        const x_3 = z;
        zHi = Long_op_Division(x_3, BigNatModule_baseNi64);
        if (zLo <= x_1[j + n]) {
            x_1[j + n] = (x_1[j + n] - zLo);
        }
        else {
            x_1[j + n] = (x_1[j + n] + (BigNatModule_baseN - zLo));
            zHi = Long_op_Addition(zHi, Long_fromBits(1, 0, false));
        }
        if (j < ad) {
            z = Long_op_Addition(zHi, Long_op_Multiply(f_1, Long_fromInteger(a_1[j + 1], false, 2)));
        }
        else {
            z = zHi;
        }
        j = (j + 1);
    }
    void BigNatModule_normN(x);
}

export function BigNatModule_scaleSub(x, f, a, n) {
    const freshx = BigNatModule_add(x, BigNatModule_zero);
    BigNatModule_scaleSubInPlace(freshx, f, a, n);
    return BigNatModule_normN(freshx);
}

export function BigNatModule_scaleAddInPlace(x, f, a, n) {
    const patternInput = [x.digits, BigNatModule_degree(x)];
    const x_1 = patternInput[0];
    const patternInput_1 = [a.digits, BigNatModule_degree(a)];
    const ad = patternInput_1[1] | 0;
    const a_1 = patternInput_1[0];
    const f_1 = Long_fromInteger(f, false, 2);
    let j = 0;
    let z = Long_op_Multiply(f_1, Long_fromInteger(a_1[0], false, 2));
    while ((Long_compare(z, Long_fromBits(0, 0, false)) > 0) ? true : (j < ad)) {
        if (j > patternInput[1]) {
            throw (new Error("scaleSubInPlace: pre-condition did not apply, result would be -ve"));
        }
        let zLo;
        let value_1;
        const x_2 = z;
        const value = Long_op_BitwiseAnd(x_2, BigNatModule_baseMaski64);
        value_1 = (~(~Long_toInt(value)));
        zLo = value_1;
        let zHi;
        const x_3 = z;
        zHi = Long_op_Division(x_3, BigNatModule_baseNi64);
        if (zLo < (BigNatModule_baseN - x_1[j + n])) {
            x_1[j + n] = (x_1[j + n] + zLo);
        }
        else {
            x_1[j + n] = (zLo - (BigNatModule_baseN - x_1[j + n]));
            zHi = Long_op_Addition(zHi, Long_fromBits(1, 0, false));
        }
        if (j < ad) {
            z = Long_op_Addition(zHi, Long_op_Multiply(f_1, Long_fromInteger(a_1[j + 1], false, 2)));
        }
        else {
            z = zHi;
        }
        j = (j + 1);
    }
    void BigNatModule_normN(x);
}

export function BigNatModule_scaleAdd(x, f, a, n) {
    const freshx = BigNatModule_add(x, BigNatModule_zero);
    BigNatModule_scaleAddInPlace(freshx, f, a, n);
    return BigNatModule_normN(freshx);
}

export function BigNatModule_removeFactor(x, a, n) {
    const patternInput = [BigNatModule_degree(a), BigNatModule_degree(x)];
    const degx = patternInput[1] | 0;
    const dega = patternInput[0] | 0;
    if (degx < (dega + n)) {
        return 0;
    }
    else {
        const patternInput_1 = [a.digits, x.digits];
        const xa = patternInput_1[1];
        const aa = patternInput_1[0];
        let f;
        if (dega === 0) {
            if (degx === n) {
                f = (~(~(xa[n] / aa[0])));
            }
            else {
                const f64 = Long_op_Division(Long_op_Addition(Long_op_Multiply(Long_fromInteger(xa[degx], false, 2), BigNatModule_baseNi64), Long_fromInteger(xa[degx - 1], false, 2)), Long_fromInteger(aa[0], false, 2));
                f = (~(~Long_toInt(f64)));
            }
        }
        else if (degx === (dega + n)) {
            f = (~(~(xa[degx] / (aa[dega] + 1))));
        }
        else {
            const f64_1 = Long_op_Division(Long_op_Addition(Long_op_Multiply(Long_fromInteger(xa[degx], false, 2), BigNatModule_baseNi64), Long_fromInteger(xa[degx - 1], false, 2)), Long_op_Addition(Long_fromInteger(aa[dega], false, 2), Long_fromBits(1, 0, false)));
            f = (~(~Long_toInt(f64_1)));
        }
        if (f === 0) {
            const lte = BigNatModule_shiftCompare(a, n, x, 0) !== 1;
            if (lte) {
                return 1;
            }
            else {
                return 0;
            }
        }
        else {
            return f | 0;
        }
    }
}

export function BigNatModule_divmod(b, a) {
    if (BigNatModule_isZero(a)) {
        throw (new Error());
    }
    else if (BigNatModule_degree(b) < BigNatModule_degree(a)) {
        return [BigNatModule_zero, b];
    }
    else {
        const x = BigNatModule_copyN(b);
        const d = BigNatModule_createN(((BigNatModule_degree(b) - BigNatModule_degree(a)) + 1) + 1);
        let p = BigNatModule_degree(b) | 0;
        const m = BigNatModule_degree(a) | 0;
        let n = (p - m) | 0;
        const Invariant = (tupledArg) => {
        };
        let finished = false;
        while (!finished) {
            Invariant([d, x, n, p]);
            const f = BigNatModule_removeFactor(x, a, n) | 0;
            if (f > 0) {
                BigNatModule_scaleSubInPlace(x, f, a, n);
                BigNatModule_scaleAddInPlace(d, f, BigNatModule_one, n);
                Invariant([d, x, n, p]);
            }
            else {
                finished = ((f === 0) ? (n === 0) : false);
                if (!finished) {
                    if (p === (m + n)) {
                        Invariant([d, x, n - 1, p]);
                        n = (n - 1);
                    }
                    else {
                        Invariant([d, x, n - 1, p - 1]);
                        n = (n - 1);
                        p = (p - 1);
                    }
                }
            }
        }
        return [BigNatModule_normN(d), BigNatModule_normN(x)];
    }
}

export function BigNatModule_div(b, a) {
    return BigNatModule_divmod(b, a)[0];
}

export function BigNatModule_rem(b, a) {
    return BigNatModule_divmod(b, a)[1];
}

export function BigNatModule_bitAnd(a, b) {
    const rbound = BigNatModule_minInt(a.bound, b.bound) | 0;
    const r = BigNatModule_createN(rbound);
    for (let i = 0; i <= (r.bound - 1); i++) {
        r.digits[i] = (a.digits[i] & b.digits[i]);
    }
    return BigNatModule_normN(r);
}

export function BigNatModule_bitOr(a, b) {
    const rbound = BigNatModule_maxInt(a.bound, b.bound) | 0;
    const r = BigNatModule_createN(rbound);
    for (let i = 0; i <= (a.bound - 1); i++) {
        r.digits[i] = (r.digits[i] | a.digits[i]);
    }
    for (let i_1 = 0; i_1 <= (b.bound - 1); i_1++) {
        r.digits[i_1] = (r.digits[i_1] | b.digits[i_1]);
    }
    return BigNatModule_normN(r);
}

export function BigNatModule_bitXor(a, b) {
    const rbound = BigNatModule_maxInt(a.bound, b.bound) | 0;
    const r = BigNatModule_createN(rbound);
    for (let i = 0; i <= (a.bound - 1); i++) {
        r.digits[i] = (r.digits[i] ^ a.digits[i]);
    }
    for (let i_1 = 0; i_1 <= (b.bound - 1); i_1++) {
        r.digits[i_1] = (r.digits[i_1] ^ b.digits[i_1]);
    }
    return BigNatModule_normN(r);
}

export function BigNatModule_hcf(a, b) {
    const hcfloop = (a_1_mut, b_1_mut) => {
        hcfloop:
        while (true) {
            const a_1 = a_1_mut, b_1 = b_1_mut;
            if (BigNatModule_equal(BigNatModule_zero, a_1)) {
                return b_1;
            }
            else {
                const patternInput = BigNatModule_divmod(b_1, a_1);
                a_1_mut = patternInput[1];
                b_1_mut = a_1;
                continue hcfloop;
            }
            break;
        }
    };
    if (BigNatModule_lt(a, b)) {
        return hcfloop(a, b);
    }
    else {
        return hcfloop(b, a);
    }
}

export const BigNatModule_two = BigNatModule_embed(2);

export function BigNatModule_powi(x, n) {
    const power = (acc_mut, x_1_mut, n_1_mut) => {
        power:
        while (true) {
            const acc = acc_mut, x_1 = x_1_mut, n_1 = n_1_mut;
            if (n_1 === 0) {
                return acc;
            }
            else if ((n_1 % 2) === 0) {
                acc_mut = acc;
                x_1_mut = BigNatModule_mul(x_1, x_1);
                n_1_mut = (~(~(n_1 / 2)));
                continue power;
            }
            else {
                acc_mut = BigNatModule_mul(x_1, acc);
                x_1_mut = BigNatModule_mul(x_1, x_1);
                n_1_mut = (~(~(n_1 / 2)));
                continue power;
            }
            break;
        }
    };
    return power(BigNatModule_one, x, n);
}

export function BigNatModule_pow(x, n) {
    const power = (acc_mut, x_1_mut, n_1_mut) => {
        power:
        while (true) {
            const acc = acc_mut, x_1 = x_1_mut, n_1 = n_1_mut;
            if (BigNatModule_isZero(n_1)) {
                return acc;
            }
            else {
                const patternInput = BigNatModule_divmod(n_1, BigNatModule_two);
                const ndiv2 = patternInput[0];
                if (BigNatModule_isZero(patternInput[1])) {
                    acc_mut = acc;
                    x_1_mut = BigNatModule_mul(x_1, x_1);
                    n_1_mut = ndiv2;
                    continue power;
                }
                else {
                    acc_mut = BigNatModule_mul(x_1, acc);
                    x_1_mut = BigNatModule_mul(x_1, x_1);
                    n_1_mut = ndiv2;
                    continue power;
                }
            }
            break;
        }
    };
    return power(BigNatModule_one, x, n);
}

export function BigNatModule_toFloat(n) {
    const evalFloat = (acc_mut, k_mut, i_mut) => {
        evalFloat:
        while (true) {
            const acc = acc_mut, k = k_mut, i = i_mut;
            if (i === n.bound) {
                return acc;
            }
            else {
                acc_mut = (acc + (k * n.digits[i]));
                k_mut = (k * BigNatModule_baseN);
                i_mut = (i + 1);
                continue evalFloat;
            }
            break;
        }
    };
    return evalFloat(0, 1, 0);
}

export function BigNatModule_ofInt32(n) {
    return BigNatModule_embed(n);
}

export function BigNatModule_ofInt64(n) {
    return BigNatModule_embed64(n);
}

export function BigNatModule_toUInt32(n) {
    const matchValue = n.bound | 0;
    switch (matchValue) {
        case 0: {
            return 0;
        }
        case 1: {
            const value = n.digits[0] | 0;
            return value >>> 0;
        }
        case 2: {
            const patternInput = [n.digits[0], n.digits[1]];
            const xB = patternInput[1] | 0;
            if (xB > BigNatModule_baseMask32B) {
                throw (new Error());
            }
            return ((patternInput[0] & BigNatModule_baseMask32A) >>> 0) + ((((xB & BigNatModule_baseMask32B) >>> 0) << BigNatModule_baseShift32B) >>> 0);
        }
        default: {
            throw (new Error());
        }
    }
}

export function BigNatModule_toUInt64(n) {
    const matchValue = n.bound | 0;
    switch (matchValue) {
        case 0: {
            return Long_fromBits(0, 0, true);
        }
        case 1: {
            const value = n.digits[0] | 0;
            return Long_fromInteger(value, true, 2);
        }
        case 2: {
            const patternInput = [n.digits[0], n.digits[1]];
            return Long_op_Addition(Long_fromInteger(patternInput[0] & BigNatModule_baseMask64A, true, 2), Long_op_LeftShift(Long_fromInteger(patternInput[1] & BigNatModule_baseMask64B, true, 2), BigNatModule_baseShift64B));
        }
        case 3: {
            const patternInput_1 = [n.digits[0], n.digits[1], n.digits[2]];
            const xC = patternInput_1[2] | 0;
            if (xC > BigNatModule_baseMask64C) {
                throw (new Error());
            }
            return Long_op_Addition(Long_op_Addition(Long_fromInteger(patternInput_1[0] & BigNatModule_baseMask64A, true, 2), Long_op_LeftShift(Long_fromInteger(patternInput_1[1] & BigNatModule_baseMask64B, true, 2), BigNatModule_baseShift64B)), Long_op_LeftShift(Long_fromInteger(xC & BigNatModule_baseMask64C, true, 2), BigNatModule_baseShift64C));
        }
        default: {
            throw (new Error());
        }
    }
}

export function BigNatModule_toString(n) {
    const degn = BigNatModule_degree(n) | 0;
    const route = (prior_mut, k_mut, ten2k_mut) => {
        route:
        while (true) {
            const prior = prior_mut, k = k_mut, ten2k = ten2k_mut;
            if (BigNatModule_degree(ten2k) > degn) {
                return new Types_List([k, ten2k], prior);
            }
            else {
                prior_mut = (new Types_List([k, ten2k], prior));
                k_mut = (k + 1);
                ten2k_mut = BigNatModule_mul(ten2k, ten2k);
                continue route;
            }
            break;
        }
    };
    const kten2ks = route(new Types_List(), 0, BigNatModule_embed(10));
    const collect = (isLeading, digits, n_1, _arg1) => {
        if (_arg1.tail != null) {
            const prior_1 = _arg1.tail;
            const patternInput = BigNatModule_divmod(n_1, _arg1.head[1]);
            const nL = patternInput[1];
            const nH = patternInput[0];
            if (isLeading ? BigNatModule_isZero(nH) : false) {
                const digits_1 = collect(isLeading, digits, nL, prior_1);
                return digits_1;
            }
            else {
                const digits_2 = collect(false, digits, nL, prior_1);
                const digits_3 = collect(isLeading, digits_2, nH, prior_1);
                return digits_3;
            }
        }
        else {
            const n_2 = BigNatModule_eval32(n_1) | 0;
            if (isLeading ? (n_2 === 0) : false) {
                return digits;
            }
            else {
                return new Types_List(Util_int32ToString(n_2), digits);
            }
        }
    };
    const digits_4 = collect(true, new Types_List(), n, kten2ks);
    if (digits_4.tail == null) {
        return "0";
    }
    else {
        let arg00;
        arg00 = Array.from(digits_4);
        return String_join("", arg00);
    }
}

export function BigNatModule_ofString(str) {
    const len = str.length | 0;
    if (String_isNullOrEmpty(str)) {
        throw (new Error("empty string\\nParameter name: str"));
    }
    const ten = BigNatModule_embed(10);
    const build = (acc_mut, i_mut) => {
        build:
        while (true) {
            const acc = acc_mut, i = i_mut;
            if (i === len) {
                return acc;
            }
            else {
                const c = str[i];
                const d = (c.charCodeAt(0) - "0".charCodeAt(0)) | 0;
                if ((0 <= d) ? (d <= 9) : false) {
                    acc_mut = BigNatModule_add(BigNatModule_mul(ten, acc), BigNatModule_embed(d));
                    i_mut = (i + 1);
                    continue build;
                }
                else {
                    throw (new Error());
                }
            }
            break;
        }
    };
    return build(BigNatModule_embed(0), 0);
}

export function BigNatModule_isSmall(n) {
    return n.bound <= 1;
}

export function BigNatModule_getSmall(n) {
    const z = n;
    const i = 0;
    if (i < z.bound) {
        return z.digits[i] | 0;
    }
    else {
        return 0;
    }
}

export function BigNatModule_factorial(n) {
    const productR = (a, b) => {
        if (BigNatModule_equal(a, b)) {
            return a;
        }
        else {
            const m = BigNatModule_div(BigNatModule_add(a, b), BigNatModule_ofInt32(2));
            return BigNatModule_mul(productR(a, m), productR(BigNatModule_add(m, BigNatModule_one), b));
        }
    };
    return productR(BigNatModule_one, n);
}

