CREATE TABLE board(
    id char(8) PRIMARY KEY,
    name varchar(32) NOT NULL,
    admin_key uuid NOT NULL,
    crated_at timestamp
);

INSERT INTO board VALUES(
    'FzByAeJK', 
    'テスト用ボード！', 
    'b80d01c2-bd4e-4f56-bce7-1178b7774696',
    '2004-10-19 10:23:54'
);
