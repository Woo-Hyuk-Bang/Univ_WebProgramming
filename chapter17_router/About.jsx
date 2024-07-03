import {Link} from 'react-router-dom';
const About = ()=> {
    return (
        <div >
            <h1>소개</h1>
            <p>리액트 라우터를사용해 보는 프로젝트</p>
            <Link to="/home">홈으로</Link>
        </div>
    )
}

export default About