export interface ITypeApartment {
  icon: string;
  title: string;
}

export interface IUser {
  _id: string;
  avatar: string;
  name: string;
  phoneNumber: string;
  password: string;
  email: string;
  role: string;
  address: string;
  createdAt: Date;
}

// apartmetn
export interface IApartmentCreate {
  address: string;
  name: string;
  desc: string;
  room: string;
  price_per_day: number;
  num_bedrooms: number;
  num_living_rooms: number;
  num_bathrooms: number;
  total_people: number;
  city: string;
  apartment_type: string;
  user_id?: string;
}

export interface IApartmentRead {
  id: string;
  desc: string;
  img_room: string;
  price_per_day: number;
  num_bedrooms: number;
  num_bathrooms: number;
  num_living_rooms: number;
  name: string;
  room: string;
  created_at: string;
  updated_at: string;
  address: string;
  total_people: number;
  apartment_type: string;
  is_approved: boolean;
  images: IImagesApartment[];
  total_rating?: number;
}

export interface IApartmentDetail extends IApartmentRead {
  total_rating: number;
  amenities: IAmenityRead[];
  apartment_contract: IApartmentContract[];
  apartment_tags: {
    tag_id: string;
    id: string;
    apartment_id: string;
    tag: ITagRead;
  }[];
  owner: IUser;
}

export interface IImagesApartment {
  id: string;
  apartment_id: string;
  created_at: string;
  image_url: string;
}

export interface IApartmentContract {
  content: string;
  id: string;
  end_date: string;
  start_date: string;
  apartment_id: string;
  user_id: string;
  total_amount: number;
  num_of_people: number;
  status: string;
}

// tags
export interface ITagCreate {
  name: string;
  desc: string;
}

export interface ITagRead {
  id: string;
  name: string;
  desc: string;
}

// contract

export interface IContractCreate {
  content: string;
  user_id: string;
  apartment_id: string;
  start_date: Date;
  end_date: Date;
  total_amount: number;
  num_of_people: number;
  status?: string;
}

export interface IContractsTrip extends IContractCreate {
  id: string;
  apartment: IApartmentRead;
}

// amenity

export interface IAmenityCreate {
  name: string;
  desc: string;
}

export interface IAmenityRead {
  id: string;
  name: string;
  desc: string;
}

export interface IComment {
  id: string;
  created_at: string;
  rate_location: number;
  rate_interior: number;
  user_id: string;
  apartment_id: string;
  text: string;
  rate_amenities: number;
  rate_price: number;
  total_rate: number;
  user: IUser;
}

export interface IStatisticalComment {
  total_rate_location: number;
  total_rate_price: number;
  total_rate_amenities: number;
  total_rate_interior: number;
}

export interface IApartmentComment extends IStatisticalComment {
  comments: IComment[];
}

export interface IContractLatest extends IApartmentContract {
  apartment: IApartmentRead;
  user: IUser;
}

export interface IMember {
  user_id: string;
  room_id: string;
  created_at: string;
  updated_at: string;
  id: string;
  user: IUser;
}

export interface IConversationRead {
  key: string;
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface IConversation extends IConversationRead {
  members: IMember[];
}

export interface IMessage {
  sender_id: string;
  id: string;
  room_id: string;
  content: string;
  created_at: string;
  updated_at: string;
  user: IUser;
}

export interface IMessageCreate {
  sender_id: string;
  room_id: string;
  content: string;
}

export interface IConversationMessage extends IConversationRead {
  messages: IMessage[];
}

export interface IRoomCreate {
  name: string;
  key: string;
  users_id: string[];
}
