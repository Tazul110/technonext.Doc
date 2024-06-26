import { Action, Select, Selector, State, StateContext, Store } from "@ngxs/store";
import { UserResponse } from "../../shared/api-models";
import { Injectable } from '@angular/core';
import { UserAction } from './user.action';

export interface UserStateModel {
    user: UserResponse | null;
}

@State<UserStateModel>({
    name: 'user',
    defaults: {
        user: null
    }
})
@Injectable()
export class UserState {
    @Selector()
    static IsLoggedIn(state: UserStateModel): boolean{
        return state.user?.token != null;
    }

    @Selector()
    static userNameOrEmail(state: UserStateModel): string {
        return state.user?.userName ?? state.user?.email ?? "";
    }

    @Selector()
    static user(state: UserStateModel): UserResponse | null {
        return state.user;
    }

    @Selector()
    static token(state: UserStateModel): string {
        return state.user?.token ?? "";
    }

    constructor(
        private store: Store
    ){

    }

    @Action(UserAction.SetUserData)
    async setUserData(ctx: StateContext<UserStateModel>, action: UserAction.SetUserData) {
        let state = ctx.getState();

        ctx.setState({
            ...state,
            user: action.data
        });
    }

    @Action(UserAction.Logout)
    async Logout(ctx: StateContext<UserStateModel>) {
        const currentState = ctx.getState();

        // Check if the users is already logged out
        if (currentState.user === null) {
            return;
        }

        // Clear users state
        ctx.setState({
            user: null,
        });

        // Reload the page
        if(typeof window !== "undefined"){
            window.location.reload();
        }
    }
}
