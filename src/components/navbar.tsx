"use client";

import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, MoveRight, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { navigationItems } from "@/lib/consts";

export const Header1 = () => {
   
    
    const [isOpen, setOpen] = useState(false);
    return (
        <header className="w-full z-40 fixed top-0 left-0 bg-transparent backdrop-blur-lg pt-2 flex-col">
            <div className="container relative mx-auto flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center px-4 pb-2">
                <div className="justify-start items-center gap-4 lg:flex hidden flex-row">
                    <NavigationMenu className="flex justify-start items-start">
                        <NavigationMenuList className="flex justify-start gap-4 flex-row">
                            {navigationItems.map((item) => (
                                <NavigationMenuItem key={item.title}>
                                    {item.href ? (
                                        <>
                                            <NavigationMenuLink href={item.href}>
                                                <Button variant="ghost" className="rounded-full">{item.title}</Button>
                                            </NavigationMenuLink>
                                        </>
                                    ) : (
                                        <>
                                            <NavigationMenuTrigger className="font-medium text-sm">
                                                {item.title}
                                            </NavigationMenuTrigger>
                                            <NavigationMenuContent className="!w-[450px] p-4">
                                                <div className="flex flex-col lg:grid grid-cols-2 gap-4">
                                                    <div className="flex flex-col h-full justify-between">
                                                        <div className="flex flex-col">
                                                            <p className="text-base">{item.title}</p>
                                                            <p className="text-muted-foreground text-sm">
                                                                {item.description}
                                                            </p>
                                                        </div>

                                                    </div>
                                                    <div className="flex flex-col text-sm h-full justify-end">
                                                        
                                                    </div>
                                                </div>
                                            </NavigationMenuContent>
                                        </>
                                    )}
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div className="flex lg:justify-center">
                    <p className="font-bryant font-semibold text-2xl">acodax</p>
                </div>
                <div className="flex justify-end w-full gap-4">
                    <Link href="/login">
                        <Button variant='secondary' className=" md:inline rounded-full">
                            Contact us
                        </Button>
                    </Link>
                </div>
                <div className="flex w-12 shrink lg:hidden items-end justify-end">
                    <Button variant="ghost" className="rounded-full" onClick={() => setOpen(!isOpen)}>
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </Button>
                </div>
            </div>
            {isOpen && (
                <div className="border-t flex flex-col w-full right-0 bg-background shadow-lg container gap-4 p-4">
                    {navigationItems.map((item) => (
                        <div key={item.title}>
                            <div className="flex flex-col gap-2">
                                {item.href ? (
                                    <Link
                                        href={item.href}
                                        className="flex justify-between items-center"
                                    >
                                        <span className="text-lg">{item.title}</span>
                                        <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />
                                    </Link>
                                ) : (
                                    <p className="text-lg">{item.title}</p>
                                )}

                            </div>
                        </div>
                    ))}
                </div>
            )}
        </header>
    );
};