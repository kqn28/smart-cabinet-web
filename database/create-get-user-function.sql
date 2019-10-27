CREATE OR REPLACE FUNCTION sm.users__get_user(param_username character varying, param_email character varying)
 RETURNS SETOF sm.users
 LANGUAGE plpgsql
AS $function$
	BEGIN
		return query select * from sm.users u where u.username = param_username or u.email = param_email;
	end
$function$
;
