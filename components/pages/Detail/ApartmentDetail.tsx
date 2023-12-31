"use client";

import TitleDetail from "./TitleDetail";
import Desc from "./Desc";
import PayDetail from "./PayDetail";
import NumbRoom from "./NumbRoom";
import { IApartmentDetail } from "@/utils/interface";
import { useAppDispatch } from "@/redux/hooks";
import { setDates } from "@/redux/slices/booking";
import { useEffect } from "react";
import TimeBooking from "./TimeBooking";
import Amenities from "./Amenities";
import { getContractsByApartment } from "@/utils/proxy";

interface IProps {
  apartment: IApartmentDetail;
}

export default function Details({ apartment }: IProps) {
  const {
    owner,
    amenities,
    apartment_contract,
    apartment_tags,
    ...apartmentDetail
  } = apartment;

  return (
    <div className="flex gap-16 pb-8">
      <div className="w-[65%]">
        <TitleDetail apartmentDetail={apartmentDetail} owner={owner} />
        <Desc text={apartmentDetail.desc} />
        <NumbRoom apartment={apartmentDetail} />
        <Amenities amenities={amenities} />
        <TimeBooking />
      </div>

      <PayDetail apartmentDetail={apartmentDetail} />
    </div>
  );
}
