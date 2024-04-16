import ScrollTrigger from "gsap/ScrollTrigger";
import Observer from "gsap/Observer";
import gsap from "gsap/gsap-core";
import React, {
    createContext,
    useRef,
    useState,
    useContext,
} from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [activeSide, setActiveSide] = useState(0);
    const activeBtn = useRef(null);

    gsap.registerPlugin(ScrollTrigger);


    const handleActiveSide = (clickedSide) => {
        const active = Number(activeBtn.current.dataset.active);
        const diff = clickedSide - active;
        const pos = Number(activeBtn.current.dataset.pos);
        const calc = pos + 96 * diff + 12 * diff;
        activeBtn.current.style.transform = `translateX(${calc}px)`;
        activeBtn.current.dataset.pos = calc;
        activeBtn.current.dataset.active = clickedSide;
        
        setActiveSide(clickedSide);

    }; 

    

    return (
        <DataContext.Provider
            value={{
                activeSide,
                activeBtn,
                handleActiveSide,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => useContext(DataContext);
