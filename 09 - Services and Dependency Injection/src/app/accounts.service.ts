import { Injectable, EventEmitter } from '@angular/core';
import { LoggingService } from "./logging.service";

// this metadata/decorator is important for services
// but it appears only services that receive other services or something else
@Injectable()
export class AccountsService {
    accounts = [
        {
            name: 'Master Account',
            status: 'active'
        },
        {
            name: 'Testaccount',
            status: 'inactive'
        },
        {
            name: 'Hidden Account',
            status: 'unknown'
        }
    ];

    statusUpdated = new EventEmitter<string>();

    constructor(private loggingService: LoggingService) {}

    addAccount(name: string, status: string) {
        this.accounts.push({name: name, status: status});
    }

    updateStatus(id: number, status: string) {
        this.accounts[id].status = status;
    }
}