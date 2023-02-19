import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const STATUSES = {
    LOADING: 'LOADING',
    SUCCESS: 'SUCCESS',
    ERROR: 'ERROR'
}

const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
        status: STATUSES,
    },
    reducers: {
        setProducts(state, action) {
            state.data = action.payload;
        },
        setStatus(state, action) {
            state.status = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProduct.pending, (state, action) => {
                state.status = STATUSES.LOADING
            })
            .addCase(fetchProduct.fulfilled, (state, action) => {
                state.status = STATUSES.SUCCESS;
                state.data = action.payload;
            })
            .addCase(fetchProduct.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            })
    }
})

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

// Thunks

export const fetchProduct = createAsyncThunk('products/fetch', async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data;
})

// export function fetchProduct() {
//     return async function fetchProductWithThunk(dispatch, getState) {
//         dispatch(setStatus(STATUSES.LOADING))
//         try {
//             const response = await fetch('https://fakestoreapi.com/products')
//             const data = await response.json()
//             dispatch(setProducts(data))
//             dispatch(setStatus(STATUSES.SUCCESS))
//         } catch (error) {
//             dispatch(setStatus(STATUSES.ERROR))
//         }
//     }
// }