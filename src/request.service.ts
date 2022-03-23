import { Injectable, Scope } from "@nestjs/common";

// This scope definition allows each request to have it's own instance of this class
@Injectable({scope: Scope.REQUEST})
export class RequestService {
    private userId: string;

    setUserId(userId: string) {
        this.userId = userId;
    }

    getUserId() {
        return this.userId;
    }
}