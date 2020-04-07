import { uuid } from 'uuidv4';

import Client from '../core/models/client';
import { ClientServiceInterface } from './client-service.interface';
import DatabaseAdapter from '../adapter/services/database-adapter';
import { DatabasePort } from '../adapter/interfaces/database-port';
import { Inject } from '../core/modules/decorators';
import { Injectable } from '../core/modules/decorators/injectable';

@Injectable(ClientServiceInterface)
export default class ClientService implements ClientServiceInterface {
    public name = 'ClientService';

    @Inject(DatabasePort)
    private database: DatabaseAdapter;

    public create(username: string, password: string): Client {
        const clientId = uuid();
        const client: Client = new Client(username, password, clientId);
        // this.database.set(clientId, client);
        return client;
    }

    public hello(): void {
        console.log('Hello world from ClientService');
    }
}