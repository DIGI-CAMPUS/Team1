SELECT ename  --이름
	, sal*3   -- 3달치 봉급
	, COMM    -- 수수료(?)
FROM emp;     

SELECT ename
	, sal + comm
FROM emp;


/**
**alias 사용하기
**
**/

SELECT ename AS "emp_name"
	, sal*3 AS "SAL3M"
	, comm AS "commission"
FROM EMP
;

-- from (테이블명)이 없으면 오류남
SELECT 100 +5
	, 10-3
	, 30*2
	, 10/3;
	
-- dual을 사용할경우 임시테이블 가용 가능
SELECT 100 + 5
	, 10 - 3
	, 30 * 2
	, 10 / 3
FROM dual;

--random 숫자 생성 방법
SELECT dbms_random.value() * 100
FROM dual;
-- 0 ~ 0.99999범위의 무작위 수를 생성

--테이블명에 alias사용(오류)
SELECT ename
FROM EMP AS employee;
--다음과 같이 사용
SELECT ENAME AS "emplyee name"
FROM EMP employee;

--ORDER BY 사용하기
-- ASC
SELECT *
FROM EMP
ORDER BY SAL; -- 디폴트는 오름차순
-- DESC
SELECT *
FROM EMP
ORDER BY SAL DESC; --내림차순
--두 개 이상의 정렬조건
SELECT *
FROM EMP
ORDER BY DEPTNO ASC, SAL DESC;

--CharacterSet 예시
SELECT *
FROM NLS_DATABASE_PARAMETERS ;

SELECT *
FROM NLS_DATABASE_PARAMETERS
WHERE PARAMETER = 'NLS_CHARACTERSET';

SELECT *
FROM NLS_DATABASE_PARAMETERS
WHERE PARAMETER LIKE '%LANGUAGE';