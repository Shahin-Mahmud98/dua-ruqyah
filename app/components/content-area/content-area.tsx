import { ModeToggle } from "@/app/dark-mode";
import DashboardNavBar1 from "../das-nav-bar";
import { GoSidebarCollapse } from "react-icons/go";
import { MdAdd } from "react-icons/md";
import { HomeIcon } from "lucide-react";
import Dashboard from "./dashboard/dashboard";
// import { DuaIcon } from "@/app/components/dua-icon";

export default function ContentArea(){
    return(
        <div className="w-full">
        <DashboardNavBar1
        className="h-[105px] border bg-inherit border-none px-8 "
        searchProps={{
            placeholder:"Search a Type",
            value:"",
            onChange:()=>{
            }
            
        }}
        username="Admin"
        avatarFallback="Am"
        iconButtons={[
            <ModeToggle key="modeToggle" />,
            <span key={"sidebarLayout"}>
                <GoSidebarCollapse  />
            </span>,

        ]}

        buttonData={{
            text:"Add New",
            icon:MdAdd,
            onClickedBtn:()=>{
            }
        }}
        leftSection={
            <div className="flex items-center gap-2">
                <div className="text-2xl text-primary">
                    <HomeIcon />
                </div>
                <span className="text-2xl font-bold max-md:hidden">
                    Dua & Ruqyah
                </span>
            </div>
        }
        />
        
        <Dashboard/>
        </div>
   
    )
}