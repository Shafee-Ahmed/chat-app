import { useState } from "react";

function MyProfile() {
    const [aboutMe, setAboutMe] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
    const [isEditing, setIsEditing] = useState(false);

    const handleClick = () => {
        if (isEditing) {

            const textArea = document.getElementById("about-me-editor");
            setAboutMe(textArea.value);
            setIsEditing(false);
        } else {
            setAboutMe("");
            setIsEditing(true);
        }
    };

    return (
        <div className="flex bg-[var(--myprofile-bg)] h-screen overflow-hidden p-[var(--myprofile-padding)]">
            <div className="w-[var(--myprofile-sidebar-width)] p-[var(--myprofile-sidebar-padding)] border-r-[var(--myprofile-sidebar-border-width)] border-[var(--myprofile-sidebar-border-color)]"></div>
            <div className="w-[var(--myprofile-main-width)] p-[var(--myprofile-main-padding)]">
                <h1 className="text-3xl font-bold">My Profile</h1>
                <div className="flex flex-col">
                    <img
                        src="/assets/person.jpg"
                        alt="Profile"
                        className="rounded-full mb-[var(--myprofile-avatar-margin-bottom)] w-[var(--myprofile-avatar-size)] h-[var(--myprofile-avatar-size)] object-cover items-center mx-auto"
                    />
                    <h2 className=" text-black font-bold">
                        <div className="text-[var(--myprofile-name-font-size)] ">John Doe</div>
                    </h2>
                    <p className="text-black  pt-[var(--myprofile-info-padding-y)] ]">
                        <div className="text-xl">Date of Birth: January 1, 1990</div>
                    </p>
                    <p className="text-black  pt-[var(--myprofile-info-padding-y)] pb-[var(--myprofile-info-padding-y)]">
                        <div className="text-xl"> Friends: 150</div>

                    </p>
                    <div className="flex justify-between">
                        {isEditing ? (
                            <textarea
                                id="about-me-editor"
                                className="text-[var(--myprofile-info-color)] text-sm pt-[var(--myprofile-info-padding-y)]  w-full rounded-l-[var(--myprofile-about-radius)] border-2 border-[var(--myprofile-about-border-color)]"
                                value={aboutMe}
                                onChange={(e) => setAboutMe(e.target.value)}
                            />
                        ) : (
                            <p id="about-me" className="text-black text-xl )]">
                                About Me: {aboutMe}
                            </p>
                        )}

                        {isEditing ? (
                            <button
                                id="btn"
                                onClick={handleClick}
                                className="text-[var(--myprofile-btn-font-size)] bg-[var(--myprofile-btn-bg)] p-[var(--myprofile-btn-padding)] w-[var(--myprofile-btn-width)] rounded-r-[var(--myprofile-btn-radius)] hover:bg-[var(--myprofile-btn-hover-bg)]"
                            >
                                save
                            </button>
                        ) : (
                            <button
                                id="btn"
                                onClick={handleClick}
                                className="text-[var(--myprofile-btn-font-size)] bg-[var(--myprofile-btn-bg)] p-[var(--myprofile-btn-padding)] w-[var(--myprofile-btn-width)] rounded-[var(--myprofile-btn-radius)] hover:bg-[var(--myprofile-btn-hover-bg)]"
                            >
                                Edit
                            </button>
                        )}
                    </div>

                    <div className="mt-[var(--myprofile-social-margin-top)]">
                        <h3 className="text-black text-xl mb-[var(--myprofile-social-margin-bottom)]">Social Media</h3>
                        <ul className="list-none pt-[var(--myprofile-social-padding-top)] text-black text-xl w-full h-[var(--myprofile-social-height)] flex justify-start items-center gap-[var(--myprofile-social-gap)] mt-0">
                            <li className="flex items-center justify-center">
                                <a
                                    href="https://facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[var(--myprofile-facebook-color)] hover:underline"
                                >
                                    <img src="/assets/facebook.png" alt="Facebook" className="w-[var(--myprofile-social-icon-size)] h-[var(--myprofile-social-icon-size)]" />
                                </a>
                            </li>
                            <li className="flex items-center justify-center">
                                <a
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[var(--myprofile-twitter-color)] hover:underline"
                                >
                                    <img src="/assets/linkedin.png" alt="LinkedIn" className="w-[var(--myprofile-social-icon-size)] h-[var(--myprofile-social-icon-size)]" />
                                </a>
                            </li>
                            <li className="flex items-center justify-center">
                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[var(--myprofile-instagram-color)] hover:underline"
                                >
                                    <img src="/assets/instagram.png" alt="Instagram" className="w-[var(--myprofile-social-icon-size)] h-[var(--myprofile-social-icon-size)]" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyProfile;