import React, {
    createContext,
    useLayoutEffect,
    useRef,
    useState,
    useContext,
    useEffect,
} from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [activeSide, setActiveSide] = useState(1);
    const [dimenstions, setDimensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth,
    });
    const [animate, setAnimate] = useState(false);
    const activeBtn = useRef(null);

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
        function updateSize() {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        window.addEventListener("resize", updateSize);
        updateSize();
        return () => window.removeEventListener("resize", updateSize);
    }, []);

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

    useEffect(() => {
        // const siblingWidth = activeBtn.current.nextSibling.offsetWidth;
        // activeBtn.current.style.width = `${siblingWidth}px`;
    }, [dimenstions]);

    const handleAnimate = () => {
        setAnimate(!animate);
    };

    return (
        <DataContext.Provider
            value={{
                activeSide,
                dimenstions,
                animate,
                activeBtn,
                handleActiveSide,
                handleAnimate,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => useContext(DataContext);
