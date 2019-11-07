CREATE OR REPLACE FUNCTION sm.cabinet_items__delete_item(param_user_id bigint, param_item_id bigint)
 RETURNS SETOF sm.cabinet_items
 LANGUAGE plpgsql
AS $function$
	begin
		delete from sm.cabinet_items ci where ci.id = param_item_id;
	   
	   	return query select * from sm.cabinet_items ci where ci.user_id = param_user_id;
	END;
$function$
;
