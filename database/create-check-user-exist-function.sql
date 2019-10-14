CREATE OR REPLACE FUNCTION sm.users__check_user_exist(param_username character varying, param_email character varying)
 RETURNS boolean
 LANGUAGE plpgsql
AS $function$
	BEGIN
		return count(*) > 0 from sm.users u where u.username = param_username or u.email = param_email;
	END
$function$
;