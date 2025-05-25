import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./auth-slice/";
import AdminProductsSlice from "./admin/products-slice/";
import AdminOrderSlice from "./admin/order-slice/";
import ShopProductsSlice from "./shop/products-slice/";
import ShopCartSlice from "./shop/cart-slice/";
import ShopAddressSlice from "./shop/address-slice/";
import ShopOrderSlice from "./shop/order-slice/";
import ShopSearchSlice from "./shop/search-slice/";
import ShopReviewSlice from "./shop/review-slice/";
import CommonFeatureSlice from "./common-slice/";

const store = configureStore({
  reducer: {
    auth: AuthReducer,

    adminProducts: AdminProductsSlice,
    adminOrder: AdminOrderSlice,

    shopProducts: ShopProductsSlice,
    shopCart: ShopCartSlice,
    shopAddress: ShopAddressSlice,
    shopOrder: ShopOrderSlice,
    shopSearch: ShopSearchSlice,
    shopReview: ShopReviewSlice,

    commonFeature: CommonFeatureSlice,
  },
});

export default store;
