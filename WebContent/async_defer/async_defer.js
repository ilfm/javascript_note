/**
 * script async 와 defer
 * - 엘리코딩 강의노트
 * - https://www.youtube.com/watch?v=tJieVCgGzhs
 */
console.log("Hello World");
/*
	○ console API 
	- WEB API로 자바스크립트에서 기본적으로 제공하는 것이 아니라
	  WEB 즉, 브라우저에서 제공하는 API이다.
	- https://developer.mozilla.org/en-US/docs/Web/API
	
	○ 브라우저 동작 과정
	
		1. head 안에 스크립트가 있는 경우
		   parsing HTML → fetching js → executing js → parsing HTML
	
		- 이런 경우 HTML 파싱하는 도중 서버에서 js파일을 다운받고 실행한 다음
	  	  다시 HTML을 파싱하기 때문에 js파일이 크다면 사용자는 페이지를 늦게 
	      보게 된다.
	      
		2. body 맨끝에 스크립트가 있는 경우
		   parsing HTML → fetching js → executing js 
	
		- 이런 경우 자바스크립트 파일에 의존적인 페이지라면 제대로 작동하지 않거나
		  밋밋한 페이지를 보게 된다.
	    
	    3. head + async의 경우
		   parsing HTML 	→ blocked 		→  parsing HTML	      
				fetching js → executing js
				
		- 이 경우 HTML을 parsing 하는 동안 js를 다운 받을수 있는 장점이 있지만
		  만약 js파일에서 DOM 조작하는 스크립트가 있다면 HTML 요소가 정의 되지 
		  않은 시점에서 js가 실행되면 오류가 발생하는 문제점이 있다.
		- 만약 여러개의 async의 옵션으로 다수의 스크립트를 다운로드 받는다면 
		  순서와 상관없이 먼저 다운된 순서로 실행 되기 때문에 순서가 중요한 js
		  라면 문제가 일어 날 수 있다.
		
		4. head + defer의 경우
		   parsing HTML 		→ parsing 끝
		   fetching js 			→ executing js
		
		- 가장 안전한 경우이다.
		- defer 옵션으로 다수의 스크립트를 다운받을 경우 HTML을 모두 파싱한
		  다음 '순서대로' 실행하기 때문에 안전하게 사용할 수 있다.
		
	○ 'use strict'
		- typescript의 경우는 선언하지 않아도 되지만 바닐라 자바스크립트의 경우 
		  선언해주는게 좋다.
		 
 */