import React, { useState, useRef } from 'react';
import { string } from 'prop-types';
import { StyledMenuItem } from './MenuItem.styled';

const MenuItem = ({ name, childCategories, uppercase, link }) => {
    const [openChildNav, setOpenChildNav] = useState(false);
    const node = useRef();
    function open() {
        setOpenChildNav(!openChildNav);
        node.current.className += " active";
    }
    function close() {
        setOpenChildNav(!openChildNav);
        node.current.className = uppercase;
    }
    return (
        <>
            {childCategories
                ? <div onMouseEnter={open} onMouseLeave={close}>
                    {name.includes("Shop RH")
                    ? <li className="shop"><span ref={node} className={uppercase}>{name}</span></li>
                    : <li><span ref={node} className={uppercase}>{name}</span></li> 
                    }
                    <StyledMenuItem childCategories={childCategories} openChildNav={openChildNav}>
                        {childCategories.map(list => (
                            <MenuItem
                                key={list.id}
                                name={list.displayName}
                                childCategories={list.childCategories}
                                link={list.targetUrl}
                            />
                        ))}
                    </StyledMenuItem>
                </div>
                : link.includes("rhmodern") 
                ? <a href={link}>
                    <li><span>{name}</span></li>
                </a>
                : <a href={"https://rh.com"+link}>
                    <li><span>{name}</span></li>
                </a>
            }
        </>
    )
}

MenuItem.propTypes = {
    name: string.isRequired
}

export default MenuItem;
