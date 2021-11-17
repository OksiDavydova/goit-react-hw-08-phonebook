import * as fetchActions from "./actions-contacts";

const fetchContacts = () => (dispatch) => {
  dispatch(fetchActions.fetchContactsRequest());
  try {
    dispatch(fetchActions.fetchContactsSuccess());
  } catch {
    dispatch(fetchActions.fetchContactsError());
  }
};
