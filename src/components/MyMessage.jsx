const myMessage = ({message}) => {
    if(message ?.attachments?. length>0) {
        return (
            <img
                src={message.attachments[0].file}
                alt="message-attachment"
                className="message-image"
                style={{float:'right'}}
            />
        )
    }
    return(
        <div>
            myMessage
        </div>
    )
}

export default myMessage;