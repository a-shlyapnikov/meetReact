import style from'./Message.module.scss';


function Message(props) {
	return (
		<div className={style.Message}>
			<h3 className={style.Message_text}>{props.text}</h3>
		</div>
	);
}

export default Message;
