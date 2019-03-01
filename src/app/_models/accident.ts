import { Vehicle } from './vehicle';
import { User } from './user';
import { route } from './route';
import { state } from './state';
import { County } from './county';

export class Accident
{
id: string;
//accident_id: Number;	
vehicle_id:	Vehicle;	
driver_id:	User;	
route_id:	route;	
state_id:	state;	
county_id:	County;	
occurred_place:	String;	
occurred_date:	Date;	
nature:	String;	
casualty:	String;	
major_cause:	String;	
minor_cause:	String;	
collider:	String;	
description:	String;	
verdict:	String;	
compensation:	Number;	
remark:	String;	
record_status:	String;	
}
