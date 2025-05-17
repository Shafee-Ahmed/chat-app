import Sidebar from "./Sidebar";
import Headertab from "./Headertab";
import Messagebody from "./Messagebody";
function Messages({ username }) {
    return (
        <>
            <div className="relative bg-[var(--messages-bg-color)] min-h-screen">
                <div className="absolute top-0 left-0 h-full w-[var(--sidebar-width)]">
                    <Sidebar />
                </div>
                <div className="flex flex-wrap ml-[var(--messages-main-margin-left)] mt-[var(--messages-main-margin-top)] h-full">
                    <nav className="flex justify-between w-full items-center bg-[var(--messages-bg-color)] p-[var(--messages-header-padding)] shadow-md">
                        <div className="text-white text-3xl font-bold">Messages</div>
                        <div className="text-white text-3xl">{username}</div>
                    </nav>
                    <div className="flex w-full h-[calc(100vh-var(--messages-header-height))]">
                        {/* Left Side */}
                        <div className="leftside w-[var(--messages-leftside-width)] h-full flex flex-col border-r border-[var(--messages-border-color)]">
                            <div className="searchbar flex w-full p-[var(--messages-searchbar-padding)]">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="w-full h-[var(--messages-searchbar-input-height)] border border-[var(--messages-border-color)] text-semibold pl-[var(--messages-searchbar-input-padding-left)] text-start rounded-l-md focus:outline-none
                        text-white
                        "
                                />
                                <button className="bg-[var(--messages-searchbar-btn-bg)] border border-[var(--messages-border-color)] border-l-0 rounded-r-md w-[var(--messages-searchbar-btn-width)] flex items-center justify-center hover:bg-[var(--messages-searchbar-btn-hover-bg)]">
                                    <img
                                        src="/assets/search.png"
                                        className="w-[var(--messages-searchbar-icon-size)] h-[var(--messages-searchbar-icon-size)]"
                                        alt="Search"
                                    />
                                </button>
                            </div>
                            <div className="flex-1 overflow-y-auto">
                                <Headertab />
                            </div>
                        </div>
                        {/* Right Side */}
                        <div className="rightside flex-1">
                            <Messagebody />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Messages;