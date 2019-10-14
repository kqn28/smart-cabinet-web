CREATE OR REPLACE FUNCTION sm.users__create_user(param_first_name character varying, param_last_name character varying, param_email character varying, param_pasword character varying, param_username character varying)
 RETURNS void
 LANGUAGE plpgsql
AS $function$
	BEGIN
		INSERT INTO sm.users (first_name, last_name, email, "password", username, created_on, item_list_table_id, last_updated)
	    values (param_first_name, param_last_name, param_email, param_password, param_username, now(), null, now());
	END
$function$
;
