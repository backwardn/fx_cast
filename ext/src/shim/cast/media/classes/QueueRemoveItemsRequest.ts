"use strict";

export default class QueueRemoveItemsRequest {
    public customData: any = null;
    public requestId: (number | null) = null;
    public sessionId: (string | null) = null;
    public type: string = "QUEUE_REMOVE";

    constructor (
            public itemIds: number[]) {}
}
