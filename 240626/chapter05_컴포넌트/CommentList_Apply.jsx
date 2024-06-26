import React from "react";
import Comment_Apply from "./Comment_Apply";

const comments = [
    {
        name: "라면",
        comment: "국민들에게 가장 사랑받는 간편식 1위",
        imageUrl: "https://cdn-icons-png.flaticon.com/512/2718/2718224.png"
    },
    {
        name: "돈가스",
        comment: "가장 무난한 경양식이자 든든한 고기 메뉴",
        imageUrl: "https://w7.pngwing.com/pngs/765/49/png-transparent-menchi-katsu-tonkatsu-karaage-korokke-tempura-pork-cutlet-in-supermarket-miscellaneous-food-recipe.png"
    },
    {
        name: "치킨",
        comment: "국민 야식의 1위, 맥주와 곁들이는 순간 예술이 된다.",
        imageUrl: "https://w7.pngwing.com/pngs/755/1005/png-transparent-church-s-chicken-fried-chicken-wrap-hot-chicken-crispy-food-recipe-chicken-meat.png"
    },
    {
        name: "김밥",
        comment: "국민 도시락, 우리아이 영양간식",
        imageUrl: "https://w7.pngwing.com/pngs/1007/349/png-transparent-california-roll-sashimi-sushi-gimbap-makizushi-sushi-food-recipe-sashimi.png"
    },
    {
        name: "떡볶이",
        comment: "분식 1위, 더이상의 말이 필요한가",
        imageUrl: "https://w7.pngwing.com/pngs/607/223/png-transparent-tteok-bokki-rice-cake-korean-cuisine-nian-gao-cheesecake-fry-rice-cake-in-the-basket-food-cheese-recipe.png"
    },            
]

function CommentList_Apply(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment_Apply name={comment.name} comment={comment.comment} image={comment.imageUrl} />  
                );
            })}
        </div>
    );
}

export default CommentList_Apply;