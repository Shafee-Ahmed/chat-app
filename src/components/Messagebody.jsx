import Messagecontainer from "./Messagecontainer";

function Messagebody() {
    return (
        <>
            <div className="border-[var(--messagebody-border-width)] flex flex-col h-full w-full bg-[var(--messagebody-bg)]">
                <nav className="flex justify-between items-center bg-[var(--messagebody-nav-bg)] p-[var(--messagebody-nav-padding)]">
                    <div className="username text-[var(--messagebody-username-font-size)] flex items-center">
                        <img
                            src="/assets/person.jpg"
                            alt="User"
                            className="w-[var(--messagebody-avatar-size)] h-[var(--messagebody-avatar-size)] object-cover rounded-full mr-[var(--messagebody-avatar-margin-right)]"
                        />
                       <div className="text-white">UserName</div> 
                    </div>
                    <div className="btn bg-[var(--messagebody-btn-bg)] p-[var(--messagebody-btn-padding-y)] pl-[var(--messagebody-btn-padding-x)] pr-[var(--messagebody-btn-padding-x)] text-[var(--messagebody-btn-font-size)] rounded-[var(--messagebody-btn-radius)] hover:bg-[var(--messagebody-btn-hover-bg)]">
                      <div className="text-black">View Profile</div> 
                    </div>
                </nav>
                <Messagecontainer />
            </div>
        </>
    )
}
export default Messagebody;