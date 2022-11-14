import { IShareWidgetState, TInviteeOptions } from "./types";

export const initialShareWidgetReducerState: IShareWidgetState = {
  showSearchAndInvitePage: false,
  availableInviteesOptions: [],
  selectedInvitees: [],
  globalAccess: "Can edit",
};

export enum Actions {
  SET_GLOBAL_ACCESS = "SET_GLOBAL_ACCESS",
  SHOW_INVITEES_PAGE = "SHOW_INVITEES_PAGE",
  HIDE_INVITEES_PAGE = "HIDE_INVITEES_PAGE",
  SET_INVITEES_OPTIONS = "SET_INVITEES_OPTIONS",
  SET_SELECTED_INVITEES = "SET_SELECTED_INVITEES",
}

export const accessOptions = [
  { value: "Full access", label: "Full access" },
  { value: "Can edit", label: "Can edit", selected: true },
  { value: "Can view", label: "Can view" },
  { value: "No access", label: "No access", variant: "danger" },
];

export const fakeOptions: TInviteeOptions[] = [
  {
    label: "Select a person",
    options: [
      {
        value: 787645,
        label: "Nikunj",
        profileImg:
          "https://cdn.xxl.thumbs.canstockphoto.com/brunette-profile-girl-with-dog-puppy-mini-pinscher-brunette-profile-girl-with-dog-puppy-mascot-mini-picture_csp7874431.jpg",
      },
      {
        value: 6787,
        label: "Himanshu",
        profileImg:
          "https://images.statusfacebook.com/profile_pictures/cute-profile-picture/cute-profile-picture-for-whatsapp-facebook-60.jpg",
      },
      {
        value: 94456,
        label: "Arjun",
        profileImg:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbsL1QtyU8q-Vc97GNci2pfNEgUR2qkwMv-g&usqp=CAU",
      },
    ],
  },
  {
    label: "Select a group",
    options: [
      {
        value: 1231,
        label: "Everyone at OSlash",
        members: 20,
        profileImg: "",
      },
      {
        value: 5467,
        label: "QA group",
        members: 5,
        profileImg:
          "https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?w=2000",
      },
      {
        value: 6755,
        label: "HR group",
        members: 25,
        profileImg:
          "https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/profile-photos-4.jpg",
      },
    ],
  },
];
