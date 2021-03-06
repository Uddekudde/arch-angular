import {Injectable} from '@angular/core';
import {PORT, SERVER} from '../_config/backend';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class RecruitmentService {

    constructor(private http: Http) {
    }

    apply(firstname, lastname, email, ssn, username, password): Observable<any> {
        return this.http.post('http://' + SERVER + ':' + PORT + '/registration', {
            firstname: firstname,
            lastname: lastname,
            email: email,
            ssn: ssn,
            username: username,
            password: password
        })
            .map((response: Response) => {
                return response.json();
            });
    }
}
