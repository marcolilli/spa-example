import {useEffect, useState} from "react";

interface RenderVisualizerProps {
    count: number;
}

export  default function RenderVisualizer({count}: RenderVisualizerProps) {
    const [colorIndex, setColorIndex] = useState(0);

    const colors = ['red', 'green', 'blue', 'orange', 'purple'];

    useEffect(() => {
        let nextColorIndex = colorIndex + 1;

        if (nextColorIndex >= colors.length) {
            nextColorIndex = 0;
        }

        setColorIndex(nextColorIndex)
    }, [colors.length, count]);

    return (
        <div style={{backgroundColor: colors[colorIndex], width: "5rem", height: "5rem", borderRadius: "10px"}}/>
    )
}