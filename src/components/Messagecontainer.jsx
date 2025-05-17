import { useState } from "react";

function Messagecontainer() {

    const [messages, setMessages] = useState([
        { text: "Hello, how are you?", isUser: false },
        { text: "I'm good, thanks! How about you?", isUser: false },
        { text: "I'm doing well too, thanks for asking!", isUser: true },
    ]);

    const handleSendMessage = () => {

        const input = document.getElementById("message-input");
        const newMessage = input.value.trim();

        if (newMessage) {

            setMessages((prevMessages) => [
                ...prevMessages,
                { text: newMessage, isUser: true },
            ]);


            input.value = "";
        }
    };

    return (
        <>
            <div className="flex flex-col h-full w-full bg-[var(--messagecontainer-bg)]">
                {/* Messages */}
                <div className="message-container flex flex-col h-full w-full p-[var(--messagecontainer-messages-padding)] overflow-y-auto">
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={`message-item flex  items-center ${message.isUser ? " justify-end  " : ""} mb-[var(--messagecontainer-message-margin-bottom)]`}
                        >
                            {!message.isUser && (
                                <img
                                    src="/assets/person.jpg"
                                    alt="User"
                                    className="w-[var(--messagecontainer-avatar-size)] h-[var(--messagecontainer-avatar-size)] object-cover rounded-full mr-[var(--messagecontainer-avatar-margin)]"
                                />
                            )}
                            <div  className={message.isUser ? "bg-gray-400 rounded-xl " : "bg-[var(--messagecontainer-bubble-bg)] rounded-xl "}
                            >
                                <div
                                    className=" p-[var(--messagecontainer-bubble-padding)] max-w-[var(--messagecontainer-bubble-max-width)] flex flex-wrap"
                                >

                                    {message.text}
                                </div>

                            </div>
                            {message.isUser && (
                                <img
                                    src="/assets/person.jpg"
                                    alt="User"
                                    className="w-[var(--messagecontainer-avatar-size)] h-[var(--messagecontainer-avatar-size)] object-cover rounded-full ml-[var(--messagecontainer-avatar-margin)]"
                                />
                            )}
                        </div>
                    ))}
                </div>

                {/* Input */}
                <div className="input-container flex items-center p-[var(--messagecontainer-input-padding)] border-t border-[var(--messagecontainer-input-border-color)]">
                    <div className="flex items-center pr-[var(--messagecontainer-upload-margin-right)] justify-center">
                        <label
                            htmlFor="file-upload"
                            className="flex items-center px-[var(--messagecontainer-upload-padding-x)] py-[var(--messagecontainer-upload-padding-y)] bg-[var(--messagecontainer-upload-bg)] border border-[var(--messagecontainer-upload-border-color)] rounded-[var(--messagecontainer-upload-radius)] shadow-sm cursor-pointer hover:bg-[var(--messagecontainer-upload-hover-bg)]"
                        >
                            <img
                                src="/assets/upload.png"
                                alt="Upload"
                                className="w-[var(--messagecontainer-upload-icon-size)] h-[var(--messagecontainer-upload-icon-size)] object-cover mr-[var(--messagecontainer-upload-icon-margin)]"
                            />
                            <span className="text-[var(--messagecontainer-upload-text-color)] font-medium">
                                Upload files
                            </span>
                        </label>
                        <input
                            id="file-upload"
                            type="file"
                            className="hidden"
                            aria-label="Upload File"
                        />
                    </div>
                    <input
                        id="message-input"
                        type="text"
                        placeholder="Type your message..."
                        className="flex-1 h-[var(--messagecontainer-input-height)] mr-[var(--messagecontainer-input-margin-right)] rounded-r-[var(--messagecontainer-input-radius)] border border-[var(--messagecontainer-input-border-color)] text-semibold pl-[var(--messagecontainer-input-padding-left)] text-white text-start rounded-l-[var(--messagecontainer-input-radius)] focus:outline-none"
                    />
                    <button
                        onClick={handleSendMessage}
                        className="bg-[var(--messagecontainer-send-btn-bg)] border border-[var(--messagecontainer-input-border-color)] border-l-0 rounded-[var(--messagecontainer-send-btn-radius)] w-[var(--messagecontainer-send-btn-width)] flex items-center justify-center hover:bg-[var(--messagecontainer-send-btn-hover-bg)]"
                    >
                        <img
                            src="/assets/send.png"
                            className="w-[var(--messagecontainer-send-icon-width)] h-[var(--messagecontainer-send-icon-height)] m-[var(--messagecontainer-send-icon-margin)]"
                            alt="Send"
                        />
                    </button>
                </div>
            </div>
        </>
    );
}

export default Messagecontainer;