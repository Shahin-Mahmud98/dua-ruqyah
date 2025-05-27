import { HomeIcon, Icon, UserIcon, AppWindowIcon } from "lucide-react";
import { FaShoppingBasket } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { FiPackage } from "react-icons/fi";
import { GrMoney } from "react-icons/gr";
import Sidebar1 from "../side-bar";

export const navItemsArray = [
  {
    icon:<HomeIcon/>,
    name: "Home",
  },
    {
        icon: <FiPackage />,
        name: "Products",
    },
    {
        icon: <FaShoppingBasket />,
        name: "Orders",
    },
    // {
    //     icon: <PawPrintIcon />,
    //     name: "Pets",
    // },
    // {
    //     icon: <BrainCircuitIcon />,
    //     name: "AI",
    // },
    {
        icon: <MdCategory />,
        name: "Categories",
    },
    {
        icon: <UserIcon />,
        name: "Profile",
    },
    {
        icon: <AppWindowIcon />,
        name: "Apps",
    },
];

export default function Sidebar() {
    return (
        <div className="h-full sticky top-0 z-50">
            <Sidebar1
                navItemsProp={navItemsArray}
                domainName="Dua & Ruqyah"
                showcallToAction={false}
                domainObject={{
                    name: "Dua & Ruqyah",
                    icon: <GrMoney size={24} className="text-sm text-white" />,
                }}
                userProfile={{ name: "Admin", email: "admin@gmail.com" }}
            />
        </div>
    );
}       
    
