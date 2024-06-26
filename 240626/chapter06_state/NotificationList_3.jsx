import React from "react";
import Notification_3 from "./Notification_3";
const reservedNotifications = [
    {
        id:1,
        message:"안녕하세요, 오늘 일정을 알려드립니다.",
    },
    {
        id:2,    
        message:"오늘 교통이 혼잡하여 평소보다 30분 일찍 출근하시는 걸 권장합니다.",
    },
    {
        id:3,     
        message:"오늘은 오전 10시에 거래처와 미팅이 있을 예정입니다.",
    },
    {
        id:4,     
        message:"점심식사는 거래처 인사들과 교류회로써 진행될 예정입니다.",
    },
    {
        id:5,     
        message:"오후 일과는 거래처 미팅 보고서를 작성 및 브리핑이 예정되어 있습니다.",
    },
    {
        id:6,     
        message:"금일 퇴근은 7시로 예정되어 있습니다.",
    },            
];
var timer;

class NotificationList_3 extends React.Component{
    constructor(props){
        super(props);
        this.state={
        notifications:[],      // state에 넣어서 초기화
        };
    }
    componentDidMount(){
        const {notifications}=this.state;
        timer = setInterval(()=>{
        if (notifications.length < reservedNotifications.length){
            const index = notifications.length;
            notifications.push(reservedNotifications[index]);
            this.setState({
            notifications: notifications,
            });
        } else{
            this.setState({notifications: [],});
            clearInterval(timer);
            }
        }, 1000);
            }
        componentWillUnmount(){
            if(timer){
                clearInterval(timer);
            }
        }
        render(){
            return(
                <div>
                    {this.state.notifications.map((notification) =>{
                    return <Notification_3 key={notification.id} id={notification.id} message={notification.message}/>;
                })}
                </div>
            );
        }
}
export default NotificationList_3;
        
