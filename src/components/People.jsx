import { useState } from "react";
import Sidebar from "./Sidebar";

function People() {
    const [btnNames, setBtnNames] = useState(["Add", "Add", "Add", "Add"]); // Adjust the length based on the number of People

    const handleButtonClick = (index) => {

        setBtnNames((prev) =>
            prev.map((btnName, i) => (i === index ? "Request Sent" : btnName))
        );
    };

    return (
        <>
            <div className="relative bg-[var(--people-bg-color)] min-h-screen overflow-y-auto">
                <div className="absolute top-0 left-0 h-full w-[var(--sidebar-width)]">
                    <Sidebar />
                </div>

                <div className="flex flex-wrap ml-[var(--people-main-margin-left)] mb-[var(--people-main-margin-bottom)] overflow-hidden h-full">
                    <div className="w-full p-[var(--people-header-padding)] mt-[var(--people-header-margin-top)] h-auto">
                        <h1 className=" text-white">
                            <div className="text-3xl font-bold">
                                People you may know
                            </div>

                        </h1>
                    </div>

                    {btnNames.map((btnName, index) => (
                        <div
                            key={index}
                            className="bg-[var(--people-card-bg-color)] w-[var(--people-card-width)] h-[var(--people-card-height)] m-[var(--people-card-margin)] p-[var(--people-card-padding)] rounded-[var(--people-card-radius)]"
                        >
                            <img
                                src="/assets/person.jpg"
                                className="rounded-t-[var(--people-card-radius)] object-cover"
                                alt=""
                            />
                            <div className="userInfo text-[var(--people-name-font-size)] text-center bg-[var(--people-card-bg-color)]">
                                John Doe
                            </div>
                            <div className="userInfo bg-[var(--people-card-bg-color)] p-[var(--people-card-info-padding)]">
                                <p className="text-[var(--people-desc-font-size)] pl-[var(--people-desc-padding-x)] pr-[var(--people-desc-padding-x)] font-semibold">
                                    <div className="text-amber-100"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Quisquam, voluptatibus.

                                    </div>

                                </p>
                            </div>
                            <div className="addbtn flex items-center justify-center">
                                <button
                                    onClick={() => handleButtonClick(index)}
                                    className="transition-colors duration-500 ease-in-out h-[var(--people-btn-height)] w-[var(--people-btn-width)] rounded-[var(--people-btn-radius)] bg-[var(--people-btn-bg)] font-semibold hover:bg-[var(--people-btn-hover-bg)]"
                                >
                                    <div className="text-amber-100">{btnName}</div>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default People;