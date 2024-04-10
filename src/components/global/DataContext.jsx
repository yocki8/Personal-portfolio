import React, {
    createContext,
    useLayoutEffect,
    useRef,
    useState,
    useContext,
} from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [activeSide, setActiveSide] = useState(1);
    const [cubeAnimating, setCubeAnimating] = useState(false);
    const [animate, setAnimate] = useState(false);
    const activeBtn = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e) => {
        setPosition({
            x: e.clientX,
            y: e.clientY,
        });
    };
    const handleActiveSide = (side) => {
        const clickedSide = Number(side);
        const diff = clickedSide - activeSide;
        const pos = Number(activeBtn.current.dataset.pos);
        const calc = pos + 96 * diff + 12 * diff;
        activeBtn.current.style.transform = `translateX(${calc}px)`;
        activeBtn.current.dataset.pos = calc;

        setActiveSide(clickedSide);
    };

    useLayoutEffect(() => {
        function changeSide(e) {
            const key = e.key;

            if (!isNaN(key)) {
                if (key >= 1 && key <= 6) handleActiveSide(key);
            }
        }

        window.addEventListener("keydown", changeSide);
        return () => window.removeEventListener("keydown", changeSide);
    }, []);

    const handleAnimate = () => {
        setAnimate(!animate);
    };

    return (
        <DataContext.Provider
            value={{
                activeSide,
                animate,
                activeBtn,
                handleActiveSide,
                handleAnimate,
                cubeAnimating,
                setCubeAnimating,
                position,
                handleMouse,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => useContext(DataContext);
