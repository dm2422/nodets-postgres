CREATE TABLE board(
    id char(8) PRIMARY KEY,
    name varchar(32) NOT NULL,
    crated_at timestamp default CURRENT_TIMESTAMP
);

INSERT INTO board VALUES('FzByAeJK', 'テスト用ボード！');