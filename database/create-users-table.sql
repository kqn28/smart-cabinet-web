CREATE TABLE sm.users (
	id int8 NOT NULL GENERATED ALWAYS AS IDENTITY,
	first_name varchar(100) NOT NULL,
	last_name varchar(100) NOT NULL,
	email varchar(200) NOT NULL,
	"password" varchar(100) NOT NULL,
	username varchar(100) NOT NULL,
	created_on timestamp NOT NULL,
	item_list_table_id int8 NULL,
	last_updated timestamp NOT NULL,
	CONSTRAINT users_pk PRIMARY KEY (id)
);
