import { Vehicle } from './vehicle';
import { PmtRoute } from './pmtroute';
import { state } from './state';
import { County } from './county';
import { driver } from './driver';


export class Accident
{
id: string;
vehicle_id:	Vehicle;	
driver_id:	driver;	
route_id:	PmtRoute;	
state_id:	state;	
county_id:	County;	
occurred_place:	string;	
occurred_date:	Date;
gravity: string;	
nature:	string;	
casualty:	string;	
major_cause:	string;	
minor_cause:	string;	
collider:	string;	
description:	string;	
verdict:	string;	
compensation:	Number;	
remark:	string;	
record_status:	string;	
}
