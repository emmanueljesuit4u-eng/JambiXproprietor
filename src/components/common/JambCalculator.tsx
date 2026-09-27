import React, { useState, useEffect, useRef } from 'react';
import { X, Minus, Calculator, RotateCcw, Move } from 'lucide-react';

interface JambCalculatorProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JambCalculator: React.FC<JambCalculatorProps> = ({ isOpen, onClose }) => {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');
  const [memory, setMemory] = useState<number>(0);
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [operator, setOperator] = useState<string | null>(null);
  const [prevValue, setPrevValue] = useState<number | null>(null);
  const [isMinimized, setIsMinimized] = useState(false);

  // Dragging support so candidate can reposition calculator on screen
  const [position, setPosition] = useState({ x: 20, y: 80 });
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef<{ startX: number; startY: number; posX: number; posY: number }>({
    startX: 0,
    startY: 0,
    posX: 20,
    posY: 80,
  });

  // Handle keyboard inputs when open
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if student is in an input field
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;

      const key = e.key;
      if (/^[0-9]$/.test(key)) {
        inputDigit(key);
      } else if (key === '.') {
        inputDot();
      } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        e.preventDefault();
        const op = key === '*' ? '×' : key === '/' ? '÷' : key;
        performOperation(op);
      } else if (key === 'Enter' || key === '=') {
        e.preventDefault();
        handleEquals();
      } else if (key === 'Backspace') {
        e.preventDefault();
        handleBackspace();
      } else if (key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, display, waitingForOperand, operator, prevValue]);

  // Drag listeners
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - dragRef.current.startX;
      const dy = e.clientY - dragRef.current.startY;
      const nextX = Math.max(10, Math.min(window.innerWidth - 320, dragRef.current.posX + dx));
      const nextY = Math.max(10, Math.min(window.innerHeight - 200, dragRef.current.posY + dy));
      setPosition({ x: nextX, y: nextY });
    };

    const handleMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
      }
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  const onDragStart = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      posX: position.x,
      posY: position.y,
    };
  };

  const inputDigit = (digit: string) => {
    if (waitingForOperand) {
      setDisplay(digit);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? digit : display.length < 14 ? display + digit : display);
    }
  };

  const inputDot = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
      return;
    }
    if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const clearAll = () => {
    setDisplay('0');
    setEquation('');
    setPrevValue(null);
    setOperator(null);
    setWaitingForOperand(false);
  };

  const clearEntry = () => {
    setDisplay('0');
  };

  const handleBackspace = () => {
    if (waitingForOperand) return;
    if (display.length > 1) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay('0');
    }
  };

  const toggleSign = () => {
    const val = parseFloat(display);
    if (!isNaN(val)) {
      setDisplay((-val).toString());
    }
  };

  const calculateSquareRoot = () => {
    const val = parseFloat(display);
    if (val < 0) {
      setDisplay('Error');
      return;
    }
    const res = Math.sqrt(val);
    setDisplay(formatResult(res));
    setEquation(`√(${display})`);
    setWaitingForOperand(true);
  };

  const calculateSquare = () => {
    const val = parseFloat(display);
    const res = val * val;
    setDisplay(formatResult(res));
    setEquation(`sqr(${display})`);
    setWaitingForOperand(true);
  };

  const calculateReciprocal = () => {
    const val = parseFloat(display);
    if (val === 0) {
      setDisplay('Error: Div by 0');
      return;
    }
    const res = 1 / val;
    setDisplay(formatResult(res));
    setEquation(`1/(${display})`);
    setWaitingForOperand(true);
  };

  const calculatePercentage = () => {
    const val = parseFloat(display);
    const res = val / 100;
    setDisplay(formatResult(res));
  };

  const performOperation = (nextOperator: string) => {
    const inputValue = parseFloat(display);

    if (prevValue === null) {
      setPrevValue(inputValue);
      setEquation(`${formatResult(inputValue)} ${nextOperator}`);
    } else if (operator) {
      const currentValue = prevValue || 0;
      const result = executeCalculation(currentValue, inputValue, operator);

      setPrevValue(result);
      setDisplay(formatResult(result));
      setEquation(`${formatResult(result)} ${nextOperator}`);
    }

    setWaitingForOperand(true);
    setOperator(nextOperator);
  };

  const executeCalculation = (a: number, b: number, op: string): number => {
    switch (op) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '×':
        return a * b;
      case '÷':
        return b === 0 ? 0 : a / b;
      default:
        return b;
    }
  };

  const handleEquals = () => {
    if (operator === null || prevValue === null) return;

    const inputValue = parseFloat(display);
    const result = executeCalculation(prevValue, inputValue, operator);

    setEquation(`${prevValue} ${operator} ${inputValue} =`);
    setDisplay(formatResult(result));
    setPrevValue(null);
    setOperator(null);
    setWaitingForOperand(true);
  };

  const formatResult = (num: number): string => {
    if (isNaN(num)) return 'Error';
    if (!isFinite(num)) return 'Overflow';
    const str = num.toString();
    if (str.length > 12) {
      return parseFloat(num.toFixed(8)).toString();
    }
    return str;
  };

  // Memory functions
  const memoryClear = () => setMemory(0);
  const memoryRecall = () => {
    setDisplay(memory.toString());
    setWaitingForOperand(true);
  };
  const memoryAdd = () => setMemory(memory + parseFloat(display || '0'));
  const memorySubtract = () => setMemory(memory - parseFloat(display || '0'));

  if (!isOpen) return null;

  return (
    <div
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
      className="fixed z-[70] select-none shadow-2xl rounded-2xl overflow-hidden border border-slate-700 bg-slate-900 text-white w-[300px] animate-in fade-in zoom-in-95 duration-150"
    >
      {/* Title Bar with Draggable Handle */}
      <div
        onMouseDown={onDragStart}
        className="px-3.5 py-2.5 bg-gradient-to-r from-emerald-800 to-slate-900 border-b border-slate-700/80 flex items-center justify-between cursor-move"
      >
        <div className="flex items-center gap-2">
          <Calculator className="w-4 h-4 text-emerald-300" />
          <span className="text-xs font-black tracking-wide text-white">JAMB CBT Calculator</span>
        </div>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-1 text-slate-300 hover:text-white hover:bg-white/10 rounded-md transition-colors cursor-pointer"
            title={isMinimized ? 'Expand' : 'Minimize'}
          >
            <Minus className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={onClose}
            className="p-1 text-slate-300 hover:text-white hover:bg-rose-600 rounded-md transition-colors cursor-pointer"
            title="Close"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <div className="p-3 bg-slate-950/95 space-y-2.5">
          {/* LCD Digital Display */}
          <div className="p-2.5 bg-slate-900 rounded-xl border border-slate-800 flex flex-col justify-end text-right">
            <div className="h-4 text-[11px] font-mono text-slate-400 truncate">
              {equation || ' '}
            </div>
            <div className="flex items-center justify-between mt-1">
              <span className={`text-[10px] font-black px-1 rounded ${memory !== 0 ? 'bg-emerald-600 text-white' : 'text-transparent'}`}>
                M
              </span>
              <span className="text-xl sm:text-2xl font-mono font-bold text-white tracking-wider truncate">
                {display}
              </span>
            </div>
          </div>

          {/* Memory Row */}
          <div className="grid grid-cols-5 gap-1 text-[11px] font-bold">
            <button
              type="button"
              onClick={memoryClear}
              className="py-1 bg-slate-800/80 hover:bg-slate-700 text-slate-300 rounded-lg transition-colors cursor-pointer"
            >
              MC
            </button>
            <button
              type="button"
              onClick={memoryRecall}
              className="py-1 bg-slate-800/80 hover:bg-slate-700 text-slate-300 rounded-lg transition-colors cursor-pointer"
            >
              MR
            </button>
            <button
              type="button"
              onClick={memoryAdd}
              className="py-1 bg-slate-800/80 hover:bg-slate-700 text-slate-300 rounded-lg transition-colors cursor-pointer"
            >
              M+
            </button>
            <button
              type="button"
              onClick={memorySubtract}
              className="py-1 bg-slate-800/80 hover:bg-slate-700 text-slate-300 rounded-lg transition-colors cursor-pointer"
            >
              M-
            </button>
            <button
              type="button"
              onClick={clearAll}
              className="py-1 bg-rose-700/80 hover:bg-rose-600 text-white rounded-lg transition-colors cursor-pointer"
            >
              C
            </button>
          </div>

          {/* Keypad Grid */}
          <div className="grid grid-cols-5 gap-1.5 text-xs font-bold">
            {/* Row 1 */}
            <button
              type="button"
              onClick={clearEntry}
              className="p-2 bg-slate-800 hover:bg-slate-700 text-amber-400 rounded-xl transition-colors cursor-pointer"
            >
              CE
            </button>
            <button
              type="button"
              onClick={handleBackspace}
              className="p-2 bg-slate-800 hover:bg-slate-700 text-amber-400 rounded-xl transition-colors cursor-pointer"
            >
              ⌫
            </button>
            <button
              type="button"
              onClick={toggleSign}
              className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl transition-colors cursor-pointer"
            >
              ±
            </button>
            <button
              type="button"
              onClick={calculateSquareRoot}
              className="p-2 bg-slate-800 hover:bg-slate-700 text-emerald-400 rounded-xl transition-colors cursor-pointer"
            >
              √
            </button>
            <button
              type="button"
              onClick={() => performOperation('÷')}
              className={`p-2 rounded-xl transition-colors cursor-pointer ${operator === '÷' ? 'bg-emerald-600 text-white' : 'bg-slate-800 hover:bg-slate-700 text-emerald-400'}`}
            >
              ÷
            </button>

            {/* Row 2 */}
            <button
              type="button"
              onClick={() => inputDigit('7')}
              className="p-2.5 bg-slate-800/90 hover:bg-slate-700/90 text-white rounded-xl transition-colors cursor-pointer"
            >
              7
            </button>
            <button
              type="button"
              onClick={() => inputDigit('8')}
              className="p-2.5 bg-slate-800/90 hover:bg-slate-700/90 text-white rounded-xl transition-colors cursor-pointer"
            >
              8
            </button>
            <button
              type="button"
              onClick={() => inputDigit('9')}
              className="p-2.5 bg-slate-800/90 hover:bg-slate-700/90 text-white rounded-xl transition-colors cursor-pointer"
            >
              9
            </button>
            <button
              type="button"
              onClick={calculatePercentage}
              className="p-2 bg-slate-800 hover:bg-slate-700 text-emerald-400 rounded-xl transition-colors cursor-pointer"
            >
              %
            </button>
            <button
              type="button"
              onClick={() => performOperation('×')}
              className={`p-2 rounded-xl transition-colors cursor-pointer ${operator === '×' ? 'bg-emerald-600 text-white' : 'bg-slate-800 hover:bg-slate-700 text-emerald-400'}`}
            >
              ×
            </button>

            {/* Row 3 */}
            <button
              type="button"
              onClick={() => inputDigit('4')}
              className="p-2.5 bg-slate-800/90 hover:bg-slate-700/90 text-white rounded-xl transition-colors cursor-pointer"
            >
              4
            </button>
            <button
              type="button"
              onClick={() => inputDigit('5')}
              className="p-2.5 bg-slate-800/90 hover:bg-slate-700/90 text-white rounded-xl transition-colors cursor-pointer"
            >
              5
            </button>
            <button
              type="button"
              onClick={() => inputDigit('6')}
              className="p-2.5 bg-slate-800/90 hover:bg-slate-700/90 text-white rounded-xl transition-colors cursor-pointer"
            >
              6
            </button>
            <button
              type="button"
              onClick={calculateReciprocal}
              className="p-2 bg-slate-800 hover:bg-slate-700 text-emerald-400 rounded-xl transition-colors cursor-pointer text-[10px]"
            >
              1/x
            </button>
            <button
              type="button"
              onClick={() => performOperation('-')}
              className={`p-2 rounded-xl transition-colors cursor-pointer ${operator === '-' ? 'bg-emerald-600 text-white' : 'bg-slate-800 hover:bg-slate-700 text-emerald-400'}`}
            >
              -
            </button>

            {/* Row 4 */}
            <button
              type="button"
              onClick={() => inputDigit('1')}
              className="p-2.5 bg-slate-800/90 hover:bg-slate-700/90 text-white rounded-xl transition-colors cursor-pointer"
            >
              1
            </button>
            <button
              type="button"
              onClick={() => inputDigit('2')}
              className="p-2.5 bg-slate-800/90 hover:bg-slate-700/90 text-white rounded-xl transition-colors cursor-pointer"
            >
              2
            </button>
            <button
              type="button"
              onClick={() => inputDigit('3')}
              className="p-2.5 bg-slate-800/90 hover:bg-slate-700/90 text-white rounded-xl transition-colors cursor-pointer"
            >
              3
            </button>
            <button
              type="button"
              onClick={calculateSquare}
              className="p-2 bg-slate-800 hover:bg-slate-700 text-emerald-400 rounded-xl transition-colors cursor-pointer text-[10px]"
            >
              x²
            </button>
            <button
              type="button"
              onClick={() => performOperation('+')}
              className={`p-2 rounded-xl transition-colors cursor-pointer ${operator === '+' ? 'bg-emerald-600 text-white' : 'bg-slate-800 hover:bg-slate-700 text-emerald-400'}`}
            >
              +
            </button>

            {/* Row 5 */}
            <button
              type="button"
              onClick={() => inputDigit('0')}
              className="col-span-2 p-2.5 bg-slate-800/90 hover:bg-slate-700/90 text-white rounded-xl transition-colors cursor-pointer text-center"
            >
              0
            </button>
            <button
              type="button"
              onClick={inputDot}
              className="p-2.5 bg-slate-800/90 hover:bg-slate-700/90 text-white rounded-xl transition-colors cursor-pointer"
            >
              .
            </button>
            <button
              type="button"
              onClick={handleEquals}
              className="col-span-2 p-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl transition-colors cursor-pointer shadow-md shadow-emerald-900/40 text-sm font-black"
            >
              =
            </button>
          </div>

          <div className="flex items-center justify-between text-[10px] text-slate-500 pt-1">
            <span>Supports keyboard: 0-9, +, -, *, /, Enter</span>
            <span className="text-emerald-500 font-bold">Standard 8-Key</span>
          </div>
        </div>
      )}
    </div>
  );
};
