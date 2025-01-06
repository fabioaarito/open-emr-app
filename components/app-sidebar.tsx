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
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"

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
        url: "#",
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
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
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
