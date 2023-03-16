SELECT ename  --이름
	, sal*3   -- 3달치 봉급
	, COMM    -- 수수료(?)
FROM emp;     

SELECT ename
	, sal + comm
FROM emp;