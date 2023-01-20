import { PRODUCT_API, PRODUCT_DATA } from "./product.actionTypes";
import { ProductType } from "../../GlobalTypes/ProductType";

export interface StateType {
    loading: boolean,
    error: boolean,
    data: ProductType | null,
    edited: ProductType | null,
    id: string | undefined
}

const initState: StateType = {
    loading:false,
    error:false,
    data: null,
    edited: null,
    id: undefined,
}

export default function productReducer(state:StateType=initState, {type, payload}:any){
    console.log(type, payload)
    switch (type) {
        default: return state;
        case PRODUCT_DATA.FETCH_LOADING: return {...state, loading:true};
        case PRODUCT_DATA.FETCH_ERROR: return {...state, error:true, loading:false};
        case PRODUCT_DATA.FETCH_SUCCESS: return {...state, data:payload, edited:payload, loading:false};
        case PRODUCT_DATA.UPDATE_LOADING: return {...state, loading:true};
        case PRODUCT_DATA.UPDATE_ERROR: return {...state, error:true, loading:false};
        case PRODUCT_DATA.UPDATE_SUCCESS: return {...state, data:payload, loading:false};
        case PRODUCT_API.SET_PRODUCT_ID: return {...state, id:payload};
        case PRODUCT_API.RESET_EDITED: return {...state, edited:state.data};
        case PRODUCT_API.UPDATE_EDITED: return {...state, edited:{...state.edited, ...payload}};
        case PRODUCT_API.UPDATE_SPEC: return {...state, edited:{...state.edited, product_specifications:{product_specification: state.edited?.product_specifications?.product_specification?.map((s, i)=>i===payload.i?{...state.edited?.product_specifications?.product_specification[i], value:payload.change}:s)}}};
        case PRODUCT_API.REMOVE_SPEC: return {...state, edited:{...state.edited, product_specifications:{product_specification: state.edited?.product_specifications?.product_specification?.filter((_, i, __)=>{return i!==payload})}}};
        case PRODUCT_API.ADD_SPEC: return {...state, edited:{...state.edited, product_specifications:{...state.edited?.product_specifications?.product_specification, payload}}}
    }
}