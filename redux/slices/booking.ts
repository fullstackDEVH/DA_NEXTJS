import { IResponseApartmentContract } from "@/utils/interface.v2";
import { createSlice } from "@reduxjs/toolkit";

interface ISetBooking {
  start_date: Date | null;
  end_date: Date | null;
}

interface IInitstates extends ISetBooking {
  dates: IResponseApartmentContract[];
}

const initialState: IInitstates = {
  start_date: null,
  end_date: null,
  dates: [],
};

const bookingSlice = createSlice({
  name: "booking",
  initialState: initialState,
  reducers: {
    setDate: (
      state,
      action: {
        type: string;
        payload: IResponseApartmentContract;
      }
    ) => {
      state.dates = [...state.dates, { ...action.payload }];
      state.end_date = new Date();
      state.start_date = new Date();
    },

    setDates: (
      state,
      action: {
        type: string;
        payload: IResponseApartmentContract[];
      }
    ) => {
      state.dates = action.payload;
    },

    setDateBooking: (
      state,
      action: {
        type: string;
        payload: ISetBooking;
      }
    ) => {
      state.start_date = action.payload.start_date;
      state.end_date = action.payload.end_date;
    },

    removeDate: (state) => {
      state.start_date = initialState.start_date;
      state.end_date = initialState.end_date;
    },
  },
});

export const { setDateBooking, removeDate, setDates, setDate } =
  bookingSlice.actions;
export default bookingSlice.reducer;
