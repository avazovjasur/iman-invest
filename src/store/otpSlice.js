import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lang: 'ru',
  otpGuid: null,
  phoneNumber: null,
  refreshToken: null,
  accessToken: null,
  investorId: null,
  pinCode: null,
  investments: null,
  investments_amount: null,
  investments_profit: null,
  resident: null,
  autopayments: null,
  cards: null,
  profitMonthes: null,
  investmentTransactions: null
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
    setInvestments: (state, action) => {
      state.investments = action.payload;
    },
    setInvestmentsAmount: (state, action) => {
      state.investments_amount = action.payload;
    },
    setInvestmentsProfit: (state, action) => {
      state.investments_profit = action.payload;
    },
    setResident: (state, action) => {
      state.resident = action.payload;
    },
    setAutopayments: (state, action) => {
      state.autopayments = action.payload;
    },
    setCards: (state, action) => {
      state.cards = action.payload;
    },
    setProfitMonthes: (state, action) => {
      state.profitMonthes = action.payload;
    },
    setInvestmentTransactions: (state, action) => {
      state.investmentTransactions = action.payload;
    },
  },
});

export const {
    setLang,
    setOtpGuid,
    setPhoneNumber,
    setTokensAndInvestor,
    setPinCode,
    setInvestments,
    setInvestmentsAmount,
    setInvestmentsProfit,
    setResident,
    setAutopayments,
 } = otpSlice.actions;

export default otpSlice.reducer;
