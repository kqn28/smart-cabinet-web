CREATE TABLE sm.cabinet_items (
	id int8 NOT NULL GENERATED ALWAYS AS IDENTITY,
	user_id int8 NOT NULL,
	"name" varchar(300) NOT NULL,
	quantity float8 NOT NULL,
	unit varchar(50) NOT NULL,
	CONSTRAINT cabinet_items_pk PRIMARY KEY (id),
	CONSTRAINT cabinet_items_fk FOREIGN KEY (user_id) REFERENCES sm.users(id)
);
