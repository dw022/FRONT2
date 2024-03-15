import {
  useEffect,
  useRef,
  useContext,
  createContext,
  useState
} from "react";

export default App;

function App() {
    return <Snippet />
    
}

/*
    리액트 기본

    1. 기본 사용방법
    2. 실제 트리에 접근하기
    3. useRef Hook
*/

/*
  기본 사용방법

  가상 트리가 실제 트리로 변환된 다음 문서에 주입된다
*/

// function Snippet() {
//   // 가상 트리 (virtual tree)
//   return <h1>Hello React!</h1>
// } 


/*
  실제트리에 접근하기
*/

// function Snippet() {

//   // id로 접근 - 접근 실패
//   // 가상 트리가 문서에 주입되기 전 접근을 시도했다.
//   console.log(document.getElementById("btn"));

//   // 비동기적으로 작동한다. - 제일 마지막에 실행된다.
//   useEffect(() => {
//     console.log(document.getElementById("btn"));
//   })

//   return (
//     <div>
//       <h1>실제 엘리먼트에 접근하기</h1>

//       <button id="btn">나 잡아봐라</button>
//     </div>
//   )
// }

// function Snippet() {
//   // ref 변수 선언
//   const buttonRef = useRef(null);

//   // 버튼에 접근
//   useEffect(() => {
//     // current 속성에 엘리먼트 저장
//     console.log(buttonRef.current);
//   })

//   return (
//     <div>
//       <h1>useRef Hook</h1>
//       {/* 엘리먼트에 ref 애트리뷰트 추가 */}
//       <button ref={buttonRef}>button</button>
//     </div>
//   )
// }

/*
  JSX (JavaScript eXtention)

  자바스크립트 확장 문법
  가상 트리를 만들기 위해 사용된다
  선언적 문법

  1. 기본 문법
  2. Fragments
  3. 변수 출력
  4. 조건부 렌더링
  5. 리스트 렌더링
*/

/*
  1. 기본 문법
*/

// function Snippet() {
//   return (
//     <form>
//       <h1>Google</h1>
//       <input
//         type="search"
//         id="search"
//         name="q"
//         className="class1 class2"
//         style={{ display: "inline-block"}}
//         placeholder="Search Google"
//         autoComplete="off"
//         />
//     </form>
//   )
// }

/*
  Fragments

  전체 가상 트리는 한개의 태그로 감싸져야 한다
  불필요하게 태그를 만들고 싶지않을 때 fragments를
  사용할 수 있다
*/

// function Snippet() {
//   return (
//     // fragments 빈 태그처럼 생김
//     <>
//     <h1>Heading</h1>
//       <ul>
//         <li>list item</li>
//         <li>list item</li>
//         <li>list item</li>
//       </ul>
//     </>
//   )
// }

// /*
//   변수 출력
// */

// function Snippet() {
//   const cat = {
//     name: "치즈",
//     age: 2,
//     home: null,
//     sound: function() {
//       return "야옹";
//     }
//   }

//   return (
//     <ul>
//       <li>이름: {cat.name}</li>
//       <li>나이: {cat.age}</li>
//       <li>집: {cat.home}</li>
//       <li>울음소리: {cat.sound()}</li>
//     </ul>
//   )
// }

/*
  조건부 렌더링

  1. && (AND)
  표현식1 && 표현식2

  표현식1이 참인 경우 표현식2를 출력한다
  표현식1이 거짓인 경우 아무것도 출력하지 않는다

  2. || (OR)
  표현식1 || 표현식2

  표현식1이 참인 경우 표현식1을 출력한다
  표현식1이 거짓인 경우 표현식 2를 출력한다

  3. 삼항연산자
  조건 ? 값1 : 값2

  조건이 참인 경우 값1을 출력한다
  조건이 거짓인 경우 값2를 출력한다.
  */

  // function Snippet() {
  //   return (
  //     <>
  //     <h1>조건부 렌더링</h1>
  //     <h3>&& (AND)</h3>
  //     <ol>
  //       <li>{true && "표현식 2"}</li>
  //       <li>{false && "표현식 2"}</li>
  //       </ol>
        
  //       <h3>|| OR</h3>
  //       <ol>
  //         <li>{"표현식 1" || "표현식 2"}</li>
  //         <li>{"" || "표현식 2"}</li>
  //       </ol>

  //       <h3>? (Ternary)</h3>
  //       <ol>
  //         <li>{true ? "표현식 1" : "표현식 2"}
  //         </li>{false ? "표현식 1": "표현식 2"}
  //       </ol>
  //       </>
  //   )
  // }

  /*
  Q. JSX 1
  아래의 데이터를 참고하여 화면에 보이는 리스트를 만들어보세요
  */

//   function Snippet() {
    
//     const country = {
//       capitalCity: "서울",
//       name: "대한민국",
//       population: 5000,
//       language:"한국어",
//       isG7: false
//     }
//     return (
//       <>
//       <h1>Q. JSX 1</h1>
//       <h2>{country.name}</h2>
//       <ol>
//         <li>수도: {country.capitalCity}</li>
//         <li>인구: 약 {country.population.toLocaleString()}만명</li>
//         <li>언어: {country.language}</li>
//         <li>G7 여부: {country.isG7 ? "예" : "아니오"}</li>
//       </ol>
//       </>
//     )
// }

/*
  리스트 렌더링
*/

// function Snippet() {
//   const beers = [
//     {name: "Heineken", origin: "Netherlands"},
//     {name: "Guinness", origin: "Ireland"},
//     {name: "Asahi", origin: "Japan"}
//   ]

//   const beerList = beers.map((beer) => (
//     // 리스트 렌더링에 필요한 애트리뷰트. 고유한 값이어ㅑ 함
//     <li key={beer.name}>
//       <b>{beer.name}</b> - {beer.origin}
//     </li>
//   ))

//   return (
//     <>
//     <h3>리스트 렌더링</h3>
//     <ul>
//       {beerList}
//       </ul>
//       </>
//   )
// }

/*
  Q. JSX 2
  아래의 데이터를 참고하여 화면에 보이는 
  테이블을 만들어보세요.
*/

// function Snippet() {
//   const beers = [
//     {id: 1, name: "Guinness", origin: "Ireland", available: false},
//     {id: 2, name: "Heineken", origin: "Netherlands", available: true},
//     {id: 3, name: "Budwiser", origin: "USA", available: true}
//   ]

//   return (
//     <table border="1">
//       <thead>
//         <tr>
//           <th>ID</th>
//           <th>NAME</th>
//           <th>Origin</th>
//           <th>Available</th>
//         </tr>
//       </thead>
//       <tbody>
//         {beers.map(beer => (
//           <tr key={beer.id}>
//             <td>{beer.id}</td>
//             <td>{beer.name}</td>
//             <td>{beer.origin}</td>
//             <td>{beer.available ? "예" : "아니오"}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   )
// }

// // 상품 설명
// function Content() {
//   return (
//     <section>
//       <h3>Samsung Galaxy S24</h3>
//       <i>특징</i>
//       {/* dl: data list, dt: data table, dd: data description */}
//       <dl>
//         <dt>CPU</dt>
//         <dd>8 Core</dd>
//         <dt>RAM</dt>
//         <dd>8GB</dd>
//         <dt>Storage</dt>
//         <dd>512GB SSD</dd>
//       </dl>
//       <button>장바구니에 추가</button>
//     </section>
//   )
// }

// // 리뷰
// function Reviews() {
//   return (
//     <section>
//       <h3>고객 리뷰</h3>
//       <ul>
//         <li>I love the design!</li>
//         <li>Poor quality.</li>
//         <li>Great product!</li>
//       </ul>
//     </section>
//   )
// }

// // 추천상품
// function Suggested() {
//   return (
//     <section>
//     <h3>추천 상품</h3>
//     <ul>
//       <li>iPhone 15 Pro</li>
//       <li>Pixel Pro 8</li>
//       <li>Huawei</li>
//     </ul>
//     </section>
//   )
// }

// // 메인 컴포넌트 - 컴포넌트가 모이는 곳
// function Snippet() {
//   return (
//     <>
//       <header>
//         <h1>Amazon.com</h1>
//       </header>

//       <main>
//         <Content />
//         <Reviews />
//       </main>

//       <aside>
//         <Suggested />
//       </aside>
//     </>
//   )
// }

// function Profile({ profile }) {
//   // props에 접근
//   console.log(profile);

//   return (
//     <section>
//       <h3>{profile.username}</h3>
//       <p>{profile.bio}</p>
//       <ul>
//         <li>게시물 {profile.posts}</li>
//         <li>팔로워 {profile.followers}</li>
//         <li>팔로잉 {profile.following}</li>
//       </ul>
//     </section>
//   )
// }

// function Snippet() {
//   const DATA = {
//     username: "예수님",
//     bio: "네 이웃을 사랑하라!",
//     posts: 5,
//     followers: 10,
//     following: 20
//   }

//   return (
//     <>
//       <h1>Instagram.com</h1>

//       {/* props: 다른 컴포넌트에 전달하는 데이터 */}
//       <Profile profile={DATA} />
//     </>
//   )
// }

/*
  Q. props
  뷰를 참고하여 Content 컴포넌트를 완성해보세요.
  (Content는 DATA를 사용하여 뷰를 생성합니다.)
*/

// function Content( {video} ) {
//   return (
//     <section>
//       <h3>{video.title}</h3>
//       <img src={video.source} width="200" />
//       <p>
//         {video.views} views
//       </p>
//     </section>
//   )
// }

// function Snippet() {

//   const DATA = {
//   title: "고양이는 액체일까?",
//   author: "who",
//   source: "https://img.sbs.co.kr/newimg/news/20180607/201190562_500.jpg",
//   views: 99,
// }

// return (
//   <>
//   <h1>YouTube.com</h1>

//   <Content />

//   <h3>댓글</h3>
//   <ul>
//     <li>유치하게 등수는 ㅉㅉ 3빠</li>
//     <li>2빠</li>
//     <li>1빠</li>
//   </ul>
//   </>
//   )
// }

/*
  컴포넌트 트리

  컴포넌트를 트리구조로 만들 수 있다
  라우터 등의 기능을 구현할 때
  적합하다
*/

// // children props는 자식 컴포넌트를 의미한다
// function Layout({ children }) {
//   return (
//     <>
//       <nav>
//         <ul>
//           <li>Home</li>
//           <li>About</li>
//           <li>Posts</li>
//         </ul>
//       </nav>

//       <main>
//         {/* Article 컴포넌트 */}
//         {children}
//       </main>
//     </>
//   )
// }

// function Article() {
//   return (
//     <section>
//       <h1>First post</h1>
//       <i>January 1, 2024</i>
//       <p>..</p>
//     </section>
//   )
//   }

// // 메인 - 컴포넌트들이 모이는 곳
// function Snippet() {
//   return (
//     <Layout>
//       <Article />
//     </Layout>
//   )
// }

/*
  트리구조에서 데이터 전달하기

  트리구조에서 하위 컴포넌트에 데이터를 전달할 수 있다.
  예) 인증 구현
*/

// // context 선언
// const AuthContext = createContext();

// // 인증(Authentication) 처리
// function AuthProvider({ children }) {
//   //지역변수 - 유저 데이터
//   const value = { username: "bunny" };

//   return (
//     // context 컴포넌트에 value 객체를 전달한다
//     <AuthContext.Provider value={value}>
//       {children}
//     </AuthContext.Provider>
//   )
// }

// function Layout({ children }) {

//   // value 객체에 접근하기
//   const auth = useContext(AuthContext);

//   console.log(auth);

//   return (
//     <>
//       <nav>
//         <ul>
//           <li>Home</li>
//           <li>About</li>
//           <li>Posts</li>
//         </ul>
//       </nav>

//       {/* 인증 상태 구현 */}
//       {auth ? (
//         <p>안녕하세요, {auth.username}님!</p>
//       ) : (
//         <p> 로그인하세요.</p>
//       )}

//       <main>
//         {/* Article 컴포넌트 */}
//         {children}
//       </main>
//     </>
//   )
// }

// function Article() {
//   return (
//     <section>
//       <h1>First post</h1>
//       <i>January 1, 2024</i>
//       <p>..</p>
//     </section>
//   )
//   }

// // 메인 - 컴포넌트들이 모이는 곳
// function Snippet() {
//   return (
//     <AuthProvider>
//       <Layout>
//         <Article />
//       </Layout>
//     </AuthProvider>
//   )
// }

/*
  리액트에서 이벤트 처리 방법
*/

// function Snippet() {
//   function handleClick() {
//     alert("lol");
//   }

//   return (
//     <button onClick={handleClick}>
//       클릭
//     </button>
//   )
// }

/*
  뷰 업데이트

  1. 예시
  2. 동적 스타일링
*/

/*
  예시
*/

/*
  useState Hook

  const [state, setState] = useState(initialValue)

  1. state: 컴포넌트 내의 변수
  2. setState(newState): state를 newState로 업데이트하는 함수
  3. initialValue: state의 초기값
*/
// function Snippet() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     // 현재 count를 1 증가시킨다
//     setCount(count + 1);
//   }

//   return (
//     <>
//       <p>count: {count}</p>
//       <button onClick={handleClick}>+</button>
//     </>
//   )
// }

/*
  동적 스타일링
*/

// function Snippet() {
//   // 리액트의 꽃
//   const [liked, setLiked]= useState(false);

//   function handleClick() {
//     setLiked(!liked);
//   }

//   return (
//     <>
//       <h1>좋아요 버튼</h1>
//       <svg style={{width: "2rem", fill: liked ? "#e00" : "#000"}}
//       onClick={handleClick}
//       xmlns="http://www.w3.org/2000/svg" 
//       viewBox="0 0 512 512">
//         <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/>
//       </svg>
//     </>
//   )
// }

function Snippet() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <>
      <h1>Subscribe button</h1>
      <button onClick={() => setSubscribed(!subscribed)}>
      </button>
    </>
  )
}