import Question from "./Question";
import Answer from "./Answer";
import Loader from "./Loader";

const Chat = ({ messages, loading }) => {
    return (
        <div className='flex flex-col flex-grow h-0 p-4 overflow-auto'>
            {messages.map((message, index) => (
                <div key={index}>
                    {message.role === 'user' ? (
                        <Question>{message.content}</Question>
                    ) : (
                        <Answer>{message.content}</Answer>
                    )}
                </div>
            ))}
            {loading && <Answer><Loader /></Answer>}
        </div>
    );
}

export default Chat;