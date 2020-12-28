import { AccountEntity } from "./account.entity";

export class ActivityWindowEntity {
    private readonly _activities: AccountEntity[] = [];

    get activities(): AccountEntity[] {
        return this._activities
    }

    addActivity(activity: AccountEntity) {
        this.activities.push(activity);
        return this
    }
}