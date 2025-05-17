import { useState } from "react";
import Sidebar from "./Sidebar";

function Group() {

    const [btnNames, setBtnNames] = useState(["Join", "Join", "Join", "Join"]); // Adjust the length based on the number of groups

    const handleButtonClick = (index) => {

        setBtnNames((prev) =>
            prev.map((btnName, i) => (i === index ? "Request Sent" : btnName))
        );
    };

    return (
        <>
            <div className="relative bg-[var(--group-bg-color)] min-h-screen overflow-y-auto">
                <div className="absolute top-0 left-0 h-full w-[var(--sidebar-width)]">
                    <Sidebar />
                </div>

                <div className="flex flex-wrap ml-[var(--group-main-margin-left)] mb-[var(--group-main-margin-bottom)] overflow-hidden h-full">
                    <div className="w-full p-[var(--group-header-padding)] mt-[var(--group-header-margin-top)] h-auto">
                        <h1 className="text-[var(--group-header-font-size)]"><div className="text-white text-3xl font-bold">Available Groups</div> </h1>
                    </div>

                    {btnNames.map((btnName, index) => (
                        <div
                            key={index}
                            className="bg-[var(--group-card-bg-color)] w-[var(--group-card-width)] h-[var(--group-card-height)] m-[var(--group-card-margin)] p-[var(--group-card-padding)] rounded-[var(--group-card-radius)]"
                        >
                            <img
                                src="/assets/person.jpg"
                                className="rounded-t-[var(--group-card-radius)] object-cover"
                                alt=""
                            />
                            <div className="userInfo text-[var(--group-name-font-size)] text-start pl-2 pt-1 bg-[var(--group-card-bg-color)]">
                                <div className="text-white font-semibold">Bice : 2022</div>
                            </div>
                            <div className="userInfo text-[var(--group-members-font-size)] font-semibold text-left pl-[var(--group-members-padding-left)] pt-[var(--group-members-padding-top)] bg-[var(--group-card-bg-color)]">
                                <div className="text-white">Members: 20</div>
                            </div>
                            <div className="userInfo text-white bg-[var(--group-card-bg-color)] p-[var(--group-card-info-padding)]">
                                <p className="text-[var(--group-desc-font-size)] pl-[var(--group-desc-padding-x)] pr-[var(--group-desc-padding-x)] font-semibold">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
                                </p>
                            </div>
                            <div className="addbtn flex items-center justify-center">
                                <button
                                    onClick={() => handleButtonClick(index)}
                                    className="h-[var(--group-btn-height)] w-[var(--group-btn-width)] rounded-[var(--group-btn-radius)] bg-[var(--group-btn-bg)] font-semibold hover:bg-[var(--group-btn-hover-bg)]"
                                >
                                  <div className="text-white">{btnName}</div> 
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Group;