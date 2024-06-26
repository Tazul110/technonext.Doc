import { UserResponse } from "../../shared/api-models";

export namespace UserAction {
    export class SetUserData {
        static readonly type = '[SetUserData] Set User data';
        constructor(public data: UserResponse) { }
    }
    export class Logout {
        static readonly type = '[Logout] Removes User data';
        constructor() { }
    }
}