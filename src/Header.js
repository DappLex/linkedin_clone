import './Header.css'
import { MdOutlineSearch } from 'react-icons/md'
import { MdAddHomeWork } from 'react-icons/md'
import { MdSupervisorAccount } from 'react-icons/md'
import { MdBusinessCenter } from 'react-icons/md'
import { MdChat } from 'react-icons/md'
import { MdNotificationsActive } from 'react-icons/md'
import channel from './assets/channel.jpeg'
import linkedIn from './assets/linkedin.png'
import HearderOption from './HeaderOption'

const Header = () => {

    return (
        <div className="Header">
            <div className="Header__left">
                <img src={linkedIn} alt="" />

                <div className="Header__search">
                    <MdOutlineSearch />
                    <input type="text" />
                </div>
            </div>
            <div className="Header__right">
                <HearderOption
                    icon={<MdAddHomeWork />} title="Home"
                />
                <HearderOption
                    icon={<MdSupervisorAccount />}
                    title="My Network"
                />
                <HearderOption
                    icon={<MdBusinessCenter />}
                    title="Job"
                />
                <HearderOption
                    icon={<MdChat />}
                    title="Messages"
                />
                <HearderOption
                    icon={<MdNotificationsActive />}
                    title="Notification"
                />

                <HearderOption 
                    avatar={channel}
                    title="Me"
                />


            </div>

        </div>
    );
};

export default Header;