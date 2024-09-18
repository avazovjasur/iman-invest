import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lang: 'ru',
  otpGuid: null,
  phoneNumber: null,
  refreshToken: null,
  accessToken: null,
  investorId: null,
  pinCode: null,
};

const otpSlice = createSlice({
  name: 'otp',
  initialState,
  reducers: {
    setLang: (state, action) => {
      state.lang = action.payload;
    },
    setOtpGuid: (state, action) => {
      state.otpGuid = action.payload;
    },
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
    setTokensAndInvestor: (state, action) => {
      const { refreshToken, accessToken, investorId } = action.payload;
      state.refreshToken = refreshToken;
      state.accessToken = accessToken;
      state.investorId = investorId;
    },
    setPinCode: (state, action) => {
      state.pinCode = action.payload;
    },
  },
});

export const { 
    setLang,
    setOtpGuid,
    setPhoneNumber,
    setTokensAndInvestor,
    setPinCode,
 } = otpSlice.actions;

export default otpSlice.reducer;