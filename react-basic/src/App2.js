import React, { useState } from 'react';
import './App.css';
// html이 아니라 JSX이기 때문에 js파일에서도 html 작성가능
function App() {

  let post = '강남 우동 맛집';
  let [like, likechange] = useState(0); // 왼쪽에 점령한건 state 이름, 오른쪽은 state 변경 함수
  let [글제목, 글제목변경]= useState(['여자 코트 추천', '맛집 추천', '리액트 공부']);
  
  return (
    // 1. class가 아닌 className
    // 2. 변수 넣을땐 { 중괄호 }
    // 3. style 넣을 땐 style={{스타일명: '값'}}
    // return () 안에는 병렬로 태그 2개이상 기입금지
    // Q. state 언제 씀? → 변동 시 자동으로 html에 반영되게 만들고 싶으면 state 쓰셈
    // 자주 변경될거같은 html 부분은 state로 만듦
    // state 변경할때 = 사용 금지
    // onClick={} 안엔 함수 넣어야 함
    <div className="App"> 
      <div className="black-nav">
        <h4 id={post} style={{color:'gray', fontSize:'16px'}}>ReactStudy</h4>
      </div>

        <button onClick={ () => { 

        let copy = [...글제목];
        copy[0]='남자 코트 추천';
        글제목변경(copy);
         } }> 글수정 </button>

      <div className="list">
      <h4>{글제목[0]} <span onClick={ ()=>{ likechange(like+1) } }>👍</span> {like} </h4> 
      <p>3월 14일 발행</p>
    </div>
    <div className="list">
      {/* <h4>{post}</h4>  */}
      <h4>{글제목[1]}</h4>
      <p>3월 14일 발행</p>
    </div>
    <div className="list">
      {/* <h4>{post}</h4>  */}
      <h4>{글제목[2]}</h4>
      <p>3월 14일 발행</p>
    </div>

    <Modal>

    </Modal>

    </div>
  );
}

// 컴포넌트 만드는 법 -> <함수명><함수명/>
/*
  컴포넌트 만들면 좋은 점
  1) 반복적인 html 축약할 때
  2) 큰 페이지틀
  3) 자주 변경되는 것들

  단점
  state 가져다쓸 때 문제가 생김
*/
function Modal(){
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;