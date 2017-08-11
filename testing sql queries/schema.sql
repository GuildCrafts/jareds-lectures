DROP TABLE IF EXISTS events;

CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  started_at date NOT NULL,
  ended_at date NOT NULL,
  title varchar(255) NOT NULL,
  description text
);

INSERT INTO
  events (
    started_at,
    ended_at,
    title,
    description
  )
VALUES
  (
    '2017-07-24',
    '2017-07-25',
    'phill made coffee',
    'this is a fake event, this never happen'
  )
;
