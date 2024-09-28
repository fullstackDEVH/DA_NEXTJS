import { IUser } from "./interface";

export interface IResponseApartmentAmenity {
  _id: string;
  name: string;
  description: string;
  icon: string;
}

export interface IResponseApartmentTag {
  _id: string;
  name: string;
  icon: string;
}

export interface IResponseRatingApartment {
  cleanliness: number;
  accuracy: number;
  check_in: number;
  communication: number;
  location: number;
  value: number;
  totalScope: number;
}

export interface IResponseApartment {
  amentities: (IResponseApartmentAmenity | string)[];
  description: string;
  images: string[];
  isApproved: boolean;
  name: string;
  address: string;
  rating: IResponseRatingApartment;
  pricePerNight: string;
  numOfMinRentNight: number;
  rooms: { livingRoom: number; bedRoom: number; bathRoom: number };
  tags: (IResponseApartmentTag | string)[];
  _id: string;
  type: string;
  owner: IUser;
  createAt: Date;
  updatedAt: Date;
}

export interface IResponseApartmentComment {
  _id: string;
  parentComment?: IResponseApartmentComment;
  apartment: string | IResponseApartment;
  author: IUser;
  content: string;
  rating: IResponseRatingApartment;
  created_at: Date;
}

export interface IResponseApartmentComment {
  _id: string;
  apartmentId: string;
  content: string;
  author: IUser;
  rating: IResponseRatingApartment;
  children: IResponseApartmentComment[];
}

export interface IRequestApartmentComment
  extends Pick<
    IResponseApartmentComment,
    "apartmentId" | "content" | "rating"
  > {}