import { Routes, Route } from 'react-router-dom';
import './Home.css';
import Sidebar from '../components/Sidebar';
import Messages from '../components/Messages';
import Group from '../components/Group';
import People from '../components/People';
import MyProfile from '../components/Myprofile';

function Home() {
    return (
        <div className="flex ">
            <Sidebar />
            <div className="flex-1">
                <Routes>
                    <Route path="/Messages" element={<Messages username="JohnDoe" />} />
                    <Route path="/Group" element={<Group />} />
                    <Route path="/People" element={<People />} />
                    <Route path="/MyProfile" element={<MyProfile />} />
                </Routes>
            </div>
        </div>
    );
}

export default Home;