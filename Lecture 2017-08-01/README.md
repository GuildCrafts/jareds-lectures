# Lecture

- SQL Schema Design
- @media breakpoints
- Regular Expressions




## Coffee Shop


## Actions

- record a sale

## Questions

- who works here now?
  - `select * from employees where active=true`
- which items are available now?
  - `select * from items where available=true`

- what items were sold within sale 64376473

```sql
SELECT *
FROM items
JOIN sale_items
ON sales.id = sale_items.sale_id
WHERE sale_items.sale_id = 64376473
```

- Which sales include item 54

```sql
SELECT *
FROM sales
JOIN sale_items
ON sales.id = sale_items.sale_id
WHERE sale_items.item_id = 54
```

- which items were sold on a given day (in the past)

```sql
SELECT *
FROM items
JOIN sale_items
ON items.id = sale_items.item_id

WHERE sales.sold_at = '2017-08-01'

```

- how many sales were there in a given day
- How much did we make today
- who sold what items on a given day
- current stock of all items
- how many of item X did we sell on a given day


## Models

### Sale

{
  id: integer,
  items: [
    {
      itemId: Integer,
      count: Integer,
      cost: (integer as money in cents),
    }
  ],
  total: (integer as money in cents),
  tip: (integer as money in cents),
  salesPerson: Employee,
}

### Item

{
  id: Integer,
  name: String,
  description: String,
  cost: (integer as money in cents),
}


### Employee

{
  id: Integer,
  name: String,

}



