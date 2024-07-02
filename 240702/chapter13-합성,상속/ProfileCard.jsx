import Card from "./Card";

function ProfileCard(props) {
    return (
        <Card title="Bang Woo Hyuk" backgroundColor="#2ECCFA" image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Meta-Logo.png/800px-Meta-Logo.png?20211104123859">
            <p>안녕하세요, 방우혁입니다.</p>
            <p>리액트 실습으로 웹 프로그래밍을 공부하고 있어요</p>
            <p>나중에 개인 홈페이지를 만들 수 있을 것 같아 기대가 큽니다</p>
            <p>음악 듣기가 취미입니다.</p>
            <p>아직 배울 것이 많아 갈 길이 멉니다.</p>
        </Card>
    );
}

export default ProfileCard;