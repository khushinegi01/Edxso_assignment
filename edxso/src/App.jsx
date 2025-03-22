import { useState, useEffect } from "react";
import Button from "./components/Button";

function App() {
  const [colors, setColors] = useState(Array(9).fill("bg-gray-200"));
  const [clickOrder, setClickOrder] = useState([]);

  const handleClick = (index) => {
    if (colors[index] !== "bg-gray-200") return;

    setColors(prev => {
      const newColors = [...prev];
      newColors[index] = "bg-green-500";
      return newColors;
    });

    setClickOrder(prev => [...prev, index]);
  };

  useEffect(() => {
    if (clickOrder.length === 9) {
      const orderSequence = [...clickOrder];
      
      const updateColorsSequentially = (step = 0) => {
        if (step >= orderSequence.length) return;

        setColors(prev => {
          const newColors = [...prev];
          newColors[orderSequence[step]] = "bg-orange-500";
          return newColors;
        });

        setTimeout(() => updateColorsSequentially(step + 1), 500);
      };

      updateColorsSequentially();
    }
  }, [clickOrder]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="w-fit grid grid-cols-3 gap-1 p-4">
        {colors.map((color, index) => (
          <Button key={index} onClick={() => handleClick(index)} color={color} />
        ))}
      </div>
    </div>
  );
}

export default App;
