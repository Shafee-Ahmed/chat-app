import { useState } from "react";

function Headertab() {
    const [activeTab, setActiveTab] = useState('ALL');

    const messages = Array(11).fill({
        name: "Messina Jason",
        time: "5 MINS AGO",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        avatar: "/assets/person.jpg"
    });

    return (
        <div className="w-full h-full flex flex-col">
            <div className="sticky top-0 bg-[var(--headertab-bg)] z-10 pt-[var(--headertab-tab-padding-top)] px-[var(--headertab-tab-padding-x)]">
                <div className="flex justify-around border-b text-white text-[12px] border-[var(--headertab-tab-border-color)]">
                    {['ALL', 'PEOPLE', 'GROUPS'].map((tab) => (
                        <button
                            key={tab}
                            className={`px-[var(--headertab-tab-padding-x)] py-[var(--headertab-tab-padding-y)] font-bold text-[var(--headertab-tab-font-size)] ${activeTab === tab
                                ? 'text-[var(--headertab-tab-active-color)] border-b-2 border-[var(--headertab-tab-active-border)]'
                                : 'text-[var(--headertab-tab-inactive-color)]'
                                }`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex-1 overflow-y-auto px-[var(--headertab-list-padding-x)]">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className="
                        transion-colors duration-300 ease-in-out
                        flex items-start rounded-[var(--headertab-card-radius)] p-[var(--headertab-card-padding)] my-[var(--headertab-card-margin-y)] bg-[var(--headertab-card-bg)] hover:bg-[var(--headertab-card-hover-bg)] cursor-pointer"
                    >
                        <img
                            src={message.avatar}
                            className="w-[var(--headertab-avatar-size)] h-[var(--headertab-avatar-size)] object-cover rounded-full mr-[var(--headertab-avatar-margin-right)]"
                            alt="User"
                        />
                        <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-center">
                                <div className=" text-white truncate">{message.name}</div>
                                <div className=" text-[var(--headertab-time-font-size)] whitespace-nowrap ml-[var(--headertab-time-margin-left)]">
                                    <div className="text-white text-[11px]">
                                        {message.time}
                                    </div>


                                </div>
                            </div>
                            <div className=" text-[var(--headertab-text-font-size)]">
                                <div className="text-white truncate">
                                    {message.text}
                                </div>


                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Headertab;