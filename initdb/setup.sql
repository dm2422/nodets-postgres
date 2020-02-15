CREATE TABLE board(
    id char(8) PRIMARY KEY,
    name varchar(32) NOT NULL,
    crated_at timestamp
);

INSERT INTO board VALUES('FzByAeJK', 'テスト用ボード！', '2004-10-19 10:23:54');