### Персонаж

```sql
CREATE TABLE CHARACTER (
	ID SERIAL PRIMARY KEY,
	NAME VARCHAR(30),
	COLOR CHAR(7)
);

ALTER TABLE CHARACTER ADD description VARCHAR(2000);
```

-   color - hex-запись цвета, которым отрисовывается

### Состояние

```sql
CREATE TABLE state (
	id SERIAL PRIMARY KEY,
	character_id INT REFERENCES character (id),
	title VARCHAR(30),
	image VARCHAR(100)
);
```

### Новелла

```sql
CREATE TABLE Novel (
	id 	SERIAL PRIMARY KEY,
	title VARCHAR(70),
	description VARCHAR(3000),
	horizontal_poster varchar(100),
	vertical_poster varchar(100)
);
```

```sql
CREATE TABLE state (

);
```

```sql
CREATE TABLE state (

);
```

```sql
CREATE TABLE state (

);
```

```sql
CREATE TABLE state (

);
```
