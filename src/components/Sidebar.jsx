import { Link } from "react-router-dom";
function Sidebar() {
    return (
        <>
            <div className="fixed top-0 left-0 h-full w-[var(--sidebar-width)] shadow-lg bg-[var(--sidebar-bg-color)]">
                <h1 className="text-[var(--sidebar-title-font-size)] font-bold text-[35px] p-[var(--sidebar-title-padding)] m-[var(--sidebar-title-margin)] w-auto h-auto relative inline-block ">
                    <div className="text-[var(--sidebar-title-color)]">Chat App</div>

                    <span className="absolute bottom-1 left-0 w-full h-[var(--sidebar-title-underline-height)] bg-[var(--sidebar-title-underline-color)] transform scale-x-[var(--sidebar-title-underline-scale)]"></span>
                </h1>
                <div className="flex flex-col text-[var(--menu-font-size)] pt-[var(--menu-padding-top)] mt-[var(--menu-margin-top)]">
                    <p className="text-[var(--menu-title-font-size)] pl-[var(--menu-title-padding-left)] font-bold">
                        <div className="text-[var(--sidebar-title-color)]">
                            Menu
                        </div>


                    </p>
                    <Link
                        to="/Home/People"
                        className="
                        transition-colors duration-500 ease-in-out
                        flex justify-start bg-[var(--menu-item-bg-color)] h-[var(--menu-item-height)] pl-[var(--menu-item-padding-left)] mb-[var(--menu-item-margin-bottom)] hover:bg-[var(--menu-item-hover-bg-color)] items-center font-semibold"
                    >
                        <img
                            className="
                            
                            p-[var(--menu-item-icon-padding)] w-[var(--menu-item-icon-width)] h-[var(--menu-item-icon-height)]"
                            src="/assets/profile_icon.png"
                            alt=""
                        />
                        <div className="text-[var(--menu-item-text-color)] font-bold text-[20px]">
                            <div className="text-[var(--sidebar-title-color)]">
                                People

                            </div>

                        </div>
                    </Link>

                    <Link
                        to="/Home/Messages"
                        className="
                         transition-colors duration-500 ease-in-out
                        flex justify-start bg-[var(--menu-item-bg-color)] h-[var(--menu-item-height)] pl-[var(--menu-item-padding-left)] mb-[var(--menu-item-margin-bottom)] hover:bg-[var(--menu-item-hover-bg-color)] items-center font-semibold"
                    >
                        <img
                            className="p-[var(--menu-item-icon-padding)] w-[var(--menu-item-icon-width)] h-[var(--menu-item-icon-height)]"
                            src="/assets/people_icon.png"
                            alt=""
                        />
                        <div className="text-[var(--menu-item-text-color)] font-bold text-[20px]">
                            <div className="text-[var(--sidebar-title-color)]">
                                Messages
                            </div>


                        </div>
                    </Link>
                    <Link
                        to="/Home/Group"
                        className="
                         transition-colors duration-500 ease-in-out
                        flex justify-start bg-[var(--menu-item-bg-color)] h-[var(--menu-item-height)] pl-[var(--menu-item-padding-left)] mb-[var(--menu-item-margin-bottom)] hover:bg-[var(--menu-item-hover-bg-color)] items-center font-semibold"
                    >
                        <img
                            className="p-[var(--menu-item-icon-padding)] w-[var(--menu-item-icon-width)] h-[var(--menu-item-icon-height)]"
                            src="/assets/group_icon.png"
                            alt=""
                        />
                        <div className="text-[var(--menu-item-text-color)] font-bold text-[20px]"><div className="text-[var(--sidebar-title-color)]">
                            Groups
                        </div></div>
                    </Link>

                    <Link
                        to="/Home/MyProfile"
                        className="
                         transition-colors duration-500 ease-in-out
                        flex justify-start mt-[var(--menu-item-margin-top-large)] bg-[var(--menu-item-bg-color)] h-[var(--menu-item-height)] pl-[var(--menu-item-padding-left)] mb-[var(--menu-item-margin-bottom)] hover:bg-[var(--menu-item-hover-bg-color)] items-center font-semibold"
                    >
                        <img
                            className="p-[var(--menu-item-icon-padding)] w-[var(--menu-item-icon-width)] h-[var(--menu-item-icon-height)]"
                            src="/assets/profile_icon.png"
                            alt=""
                        />
                        <div className="text-[var(--menu-item-text-color)] font-bold text-[20px]"><div className="text-[var(--sidebar-title-color)]">
                            My Profile
                        </div></div>
                    </Link>
                </div>
            </div>
        </>
    );
}
export default Sidebar;