import {
    ActivityIcon,
    CalendarDaysIcon, FileClockIcon,
    FileTextIcon,
    Home,
    OctagonAlertIcon,
    SquareUserRoundIcon,
    SyringeIcon
} from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Menu items.
const items = [
    {
        title: "Overview",
        url: "#",
        icon: Home,
    },
    {
        title: "Problems",
        url: "#",
        icon: OctagonAlertIcon,
    },
    {
        title: "Medications",
        url: "medications",
        icon: SyringeIcon,
    },
    {
        title: "Reports",
        url: "#",
        icon: FileTextIcon,
    },
    {
        title: "Diagnosis",
        url: "#",
        icon: ActivityIcon,
    },
    {
        title: "Avatar",
        url: "#",
        icon: SquareUserRoundIcon,
    },
    {
        title: "Timeline",
        url: "#",
        icon: CalendarDaysIcon,
    },
    {
        title: "Predictions",
        url: "#",
        icon: FileClockIcon,
    },
]

export function AppSidebar() {
    return (
        <Sidebar variant={'sidebar'} collapsible={'icon'}>
            <SidebarContent className="bg-white">
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem key={0} className="h-20">
                                <SidebarMenuButton asChild className="h-20">
                                    <a href={"/"}>
                                        <Avatar className="mt-2">
                                            <AvatarImage src="https://phire.techascent.com/img/doctor.png" />
                                        </Avatar>
                                        My Patients
                                    </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                                {items.map((item) => (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton asChild>
                                            <a href={item.url}>
                                                <item.icon />
                                                <span>{item.title}</span>
                                            </a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
