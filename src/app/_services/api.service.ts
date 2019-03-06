import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/index';

import { environment } from '../../environments/environment';
import {
    Accident,
    ApiResponse,
    Assignment,
    Maintenance,
    Offence,
    PmlWaybill,
    PmtWaybill,
    Rating,
    Schedule,
    Spares,
    Staff,
    Terminal,
    Vehicle,
 } from '../_models';
import { UtilsService } from './utils.service';

@Injectable({ providedIn: 'root' })

export class ApiService {

    apiUrl = environment.PEACE_API;
    constructor(private http: HttpClient, private utilsService: UtilsService) { }
    //accident
    // getAccident(query = '') {
    //     return this.http.get<ApiResponse>(`${this.apiUrl}/accidents${query}`);
    // }
    getAccident(accidents, id): Accident {
        return accidents.filter(obj => obj.id === id);
    }
     
     retrieveAccident(query = ''): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.apiUrl}/accidents${query}`);
    }

    updateAccident(terminal: Terminal): Observable<ApiResponse> {
        const id = terminal.id;
        delete terminal.id;
        const payload = this.utilsService.cleanObject(terminal);
        return this.http.put<ApiResponse>(`${this.apiUrl}/accidents/${id}`, payload);
    }

    createAccident(terminal: Terminal): Observable<ApiResponse> {
        delete terminal.id;
        const payload = this.utilsService.cleanObject(terminal);
        return this.http.post<ApiResponse>(`${this.apiUrl}/accidents`, payload);
    }

    deleteAccident(id: Terminal['id']): Observable<ApiResponse> {
        return this.http.delete<ApiResponse>(`${this.apiUrl}/accidents/${id}`);
    }

    //Accident Cause
    getAccidentCause(accidents, id): Accident {
        return accidents.filter(obj => obj.id === id);
    }
     
     retrieveAccidentCause(query = ''): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.apiUrl}/accident-causes${query}`);
    }

    updateAccidentCause(terminal: Terminal): Observable<ApiResponse> {
        const id = terminal.id;
        delete terminal.id;
        const payload = this.utilsService.cleanObject(terminal);
        return this.http.put<ApiResponse>(`${this.apiUrl}/accident-causes/${id}`, payload);
    }

    createAccidentCause(terminal: Terminal): Observable<ApiResponse> {
        delete terminal.id;
        const payload = this.utilsService.cleanObject(terminal);
        return this.http.post<ApiResponse>(`${this.apiUrl}/accident-causes`, payload);
    }

    deleteAccidentCause(id: Terminal['id']): Observable<ApiResponse> {
        return this.http.delete<ApiResponse>(`${this.apiUrl}/accident-causes/${id}`);
    }


    //Accident victim
    getAccidentVictim(accidents, id): Accident {
        return accidents.filter(obj => obj.id === id);
    }
     
     retrieveAccidentVictim(query = ''): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.apiUrl}/accident-victims${query}`);
    }

    updateAccidentVictim(terminal: Terminal): Observable<ApiResponse> {
        const id = terminal.id;
        delete terminal.id;
        const payload = this.utilsService.cleanObject(terminal);
        return this.http.put<ApiResponse>(`${this.apiUrl}/accident-victims/${id}`, payload);
    }

    createAccidentVictim(terminal: Terminal): Observable<ApiResponse> {
        delete terminal.id;
        const payload = this.utilsService.cleanObject(terminal);
        return this.http.post<ApiResponse>(`${this.apiUrl}/accident-victims`, payload);
    }

    deleteAccidentVictim(id: Terminal['id']): Observable<ApiResponse> {
        return this.http.delete<ApiResponse>(`${this.apiUrl}/accident-victims/${id}`);
    }

    // getAccident(terminals, id): Terminal {
    //     return terminals.filter(obj => obj.id === id);
    // }
    //accident end

    getAssignment(query = '') {
        return this.http.get<ApiResponse>(`${this.apiUrl}/vehicle-assignments${query}`);
    }
    getMaintenance(query = '') {
        return this.http.get<ApiResponse>(`${this.apiUrl}/pmt-maintenances${query}`);
    }

    getOffence(query = '') {
        return this.http.get<ApiResponse>(`${this.apiUrl}/offences${query}`);
    }
    getPmlWaybill(query = '') {
        return this.http.get<ApiResponse>(`${this.apiUrl}/pml-waybills${query}`);
    }

    getPmtWaybill(query = '') {
        return this.http.get<ApiResponse>(`${this.apiUrl}/pmt-waybills${query}`);
    }
    getRating(query = '') {
        return this.http.get<ApiResponse>(`${this.apiUrl}/ratings${query}`);
    }

    getSchedule(query = '') {
        return this.http.get<ApiResponse>(`${this.apiUrl}/pmt-schedules${query}`);
    }
    getSpares(query = '') {
        return this.http.get<ApiResponse>(`${this.apiUrl}/spares${query}`);
    }

    getStaff(query = '') {
        return this.http.get<ApiResponse>(`${this.apiUrl}/staff${query}`);
    }


    // Terminal
    retrieveTerminal(query = ''): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.apiUrl}/terminals${query}`);
    }

    updateTerminal(terminal: Terminal): Observable<ApiResponse> {
        const id = terminal.id;
        delete terminal.id;
        const payload = this.utilsService.cleanObject(terminal);
        return this.http.put<ApiResponse>(`${this.apiUrl}/terminals/${id}`, payload);
    }

    createTerminal(terminal: Terminal): Observable<ApiResponse> {
        delete terminal.id;
        const payload = this.utilsService.cleanObject(terminal);
        return this.http.post<ApiResponse>(`${this.apiUrl}/terminals`, payload);
    }

    deleteTerminal(id: Terminal['id']): Observable<ApiResponse> {
        return this.http.delete<ApiResponse>(`${this.apiUrl}/terminals/${id}`);
    }

    getTerminal(terminals, id): Terminal {
        return terminals.filter(obj => obj.id === id);
    }

    // Vehicle
    getVehicle(query = ''): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.apiUrl}/vehicles${query}`);
    }

    // City, County, State
    retrieveVehicle(query = ''): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.apiUrl}/vehicles${query}`);
    }
    retrieveCounty(query = ''): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.apiUrl}/counties${query}`);
    }
    retrieveDriver(query = ''): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.apiUrl}/drivers${query}`);
    }
    retrieveRoute(query = ''): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.apiUrl}/pmt-routes${query}`);
    }
    retrieveState(query = ''): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.apiUrl}/states${query}`);
    }
    retrieveCity(query = ''): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.apiUrl}/cities${query}`);
    }
}
