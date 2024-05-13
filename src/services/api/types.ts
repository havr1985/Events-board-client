
export type TEvent = {
    _id: string;
    title: string;
    description: string;
    date: string;
    organizer: string;
}

export type TResEvents = {
    result: TEvent[],
    totalPage: number
}

export type TSubUser = {
  _id: string,
  name: string,
  email: string,
  born: string,
  heard: string,
  subscribed: string[]
};

export type TResEventById = {
    result: TEvent;
    subUser: TSubUser[];
}
export type TReqUser = {
    id: string;
    name: string;
    email: string;
    born: string;
    heard: string;
}