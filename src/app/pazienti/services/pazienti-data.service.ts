import { Injectable } from '@angular/core';

import { Paziente } from '../models/paziente.model';
import { HttpBaseService } from '../../core/services/http-base.service';

@Injectable()
export class PazientiDataService extends HttpBaseService {

    fireRequest(paziente: Paziente, method: string) {

        // const links = paziente.links
        //     ? paziente.links.find(x => x.method === method)
        //     : null;

        switch (method) {
            case 'DELETE': {
                return super.delete(paziente.id);
            }
            case 'POST': {
                return super.add<Paziente>(paziente);
            }
            case 'PUT': {
                return super.update<Paziente>(paziente.id, paziente);
            }
            default: {
                //console.log(`${links.method} not found!!!`);
                break;
            }
        }
    }
}