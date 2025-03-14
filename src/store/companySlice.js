import { createSlice } from "@reduxjs/toolkit";
import localforage from "localforage";
import { COMPANY_KEY } from "../constants/localKeys";

const initialState = {
  data: {
    id: "companyID",
    image: "",
    billingAddress: "",
    companyName: "",
    companyEmail: "",
    companyMobile: "",
    companyGST: "",
    companyUDYAM: "",
    companySAC: "",
  },
};

export const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    updateCompanyData: (state, action) => {
      try {
        const {
          image,
          billingAddress,
          companyName,
          companyEmail,
          companyMobile,
          companyGST,
          companyUDYAM,
          companySAC
        } = action.payload;
        state.data.image = image ? image : "";
        state.data.billingAddress = billingAddress ? billingAddress : "";
        state.data.companyName = companyName ? companyName : "";
        state.data.companyEmail = companyEmail ? companyEmail : "";
        state.data.companyMobile = companyMobile ? companyMobile : "";
        state.data.companyGST = companyGST ? companyGST : "";
        state.data.companyUDYAM = companyUDYAM ? companyUDYAM : "";
        state.data.companySAC = companySAC ? companySAC : "";
        localforage.setItem(COMPANY_KEY, action.payload);
      } catch (e) {
        console.log(e);
      }
    },
  },
});

export const { updateCompanyData } = companySlice.actions;

export const getCompanyData = (state) => state.company.data;

export default companySlice.reducer;
