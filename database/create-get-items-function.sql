CREATE OR REPLACE FUNCTION sm.cabinet_items__get_items(param_user_id bigint)
 RETURNS SETOF sm.cabinet_items
 LANGUAGE plpgsql
AS $function$
	begin
	   	return query select * from sm.cabinet_items ci where ci.user_id = param_user_id;
	END;
$function$
;
