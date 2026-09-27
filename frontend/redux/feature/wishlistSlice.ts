import {createSlice} from "@reduxjs/toolkit";
import {WishlistState} from "@/types/type";


const initialState: WishlistState = {
    wishlist: [],
}

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers : {
        addToWishList : (state, action) => {
            state.wishlist.push(action.payload);
        }
    }
});

export const {addToWishList} = wishlistSlice.actions;
export default wishlistSlice.reducer;