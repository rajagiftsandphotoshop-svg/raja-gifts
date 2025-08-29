create table products (
  id bigserial primary key,
  name text not null,
  price numeric(10,2) not null,
  created_at timestamptz default now()
);
