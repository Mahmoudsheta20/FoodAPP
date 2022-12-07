import {fetchUser} from "../utils/fetchuserlocalstorage"

export const initialState = {
    user: fetchUser()
}