CREATE OR REPLACE FUNCTION sm.cabinet_items__add_item(param_user_id bigint, param_name character varying, param_quantity bigint, param_unit character varying)
 RETURNS SETOF sm.cabinet_items
 LANGUAGE plpgsql
AS $function$
	begin
		INSERT INTO sm.cabinet_items (user_id, "name", quantity, unit, created_on, last_updated)
	    values (param_user_id, param_name, param_quantity, param_unit, now(), now());
	   
	   	return query select * from sm.cabinet_items ci where ci.user_id = param_user_id;
	END;
$function$
;
