import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {categories} from '../constants'
import SidebarItem from './SidebarItem';
import { Link } from 'react-router-dom';
import { toggleMenu } from '../feature/sidebarSlice';

const SidebarContainer = () => {
    const [category, setCategory] = useState("New");
    const mobileMenu = useSelector(store => store.header.mobileMenu);
    const dispatch = useDispatch();
    const isMenu = useSelector(store => store.sidebar.isMenu);
    
    const handleSidebar = ()=> {
        // dispatch(toggleMenu());
    }

    const clickHandler= (name, type)=> {
        setCategory(name);
    }
    
    return (
        <>
            {
                isMenu ? 
                    <div
                    className={`md:block w-[270px] overflow-y-auto h-full py-4 absolute md:relative z-10 translate-x-[-240px] md:translate-x-0 transition-all ${mobileMenu ? "translate-x-0" : ""}`}>
                <div className="flex px-5 flex-col">
                    {categories.map((item) => {
                        return (
                            <React.Fragment key={item.name}>
                                <Link to={item.type === "home" ? "/" : item.name}>
                                    <SidebarItem
                                        text={item.type === "home" ? "Home" : item.name}
                                        icon={item.icon}
                                        action={() => {
                                            clickHandler(item.name, item.type);
                                        }}
                                        className={`${
                                            category === item.name
                                                ? "bg-white/[0.15]"
                                                : ""
                                        }`}
                                    />
                                </Link>
                                {item.divider && (
                                    <hr className="my-5 border-white/[0.2]" />
                                )}
                            </React.Fragment>
                        );
                    })}
                    <hr className="my-5 border-white/[0.2]" />
                    <div className="text-white/[0.5] text-[12px]">
                        Created by: <b><i>Wafiq Hossain </i></b>
                    </div>
                </div>
            </div>
            : 
            ""
        }
        </>
        
    );
}

export default SidebarContainer