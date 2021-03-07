import React, {useState, useEffect} from "react";

function App() {
    const [stringLength, setStringLength] = useState(0);
    const [stringWidth, setStringWidth] = useState(0);
    const [stringThickness, setStringThickness] = useState(0);
    const [clear, setClear] = useState(false);

    useEffect(() => {
        document.querySelector('#widthResult').value = "";
    }, [])
    useEffect(() => {
        if (clear)
            document.querySelector('#widthResult, #lengthResult').value = "";
    })

    const Quantity = (e) => {
        e.preventDefault();
        if (clear) setClear(false);
        let currStringWidth = document.querySelector('#stringWidth').value
        if (currStringWidth === '')
            return;
        let sum1 = ((stringWidth + parseInt(currStringWidth)) * 4) / 5;
        //wzór ile sznurków potrzeba = (zakładana szerokość makramy * 4)/5
        setStringWidth(sum1);
        document.querySelector('#widthResult').value = "";
    }

    const Length = (e) => {
        e.preventDefault();
        if (clear) setClear(false);
        let currStringLength = document.querySelector('#stringLength').value
        if (currStringLength === '')
            return;
        let sum2 = (stringLength + parseInt(currStringLength)) * 8;
        //wzór na długość jednego odcinka sznurka = (długość makramy, jaką chcemy zrobić) * 8
        setStringLength(sum2);
        document.querySelector('#lengthResult').value = "";
    }
    const Thickness = (e) => {
        e.preventDefault();
        if (clear) setClear(false);
        let currStringThickness = document.querySelector('#stringThickness').value
        if (currStringThickness === '')
            return;
        let sum3 = (stringThickness + parseInt(currStringThickness));
        setStringThickness(sum3);
    }
    const Clear = (e) => {
        e.preventDefault();

        document.querySelector('form').reset();
        setClear(true);
        setStringLength('');
        setStringWidth('');
        setStringThickness('');
    }

    return (
        <>
            <h3>Makramiara</h3>
            <p>Oblicz ile sznurka potrzebujesz</p>
            <form>
                <label>Wpisz szerokość makramy</label>
                <input type="text" id="stringWidth" alt="wpisz szerokość makramy"/>
                <label>Wpisz długość makramy</label>
                <input type="text" id="stringLength" alt="wpisz długość makramy"/>
                <label>Wpisz grubość sznurka</label>
                <input type="text" id="stringThickness" alt="wpisz grubość sznurka"/>
                <p>Potrzebujesz</p>
                <input type="text" id="widthResult" value={stringWidth} readOnly/>
                <p>sznurki o długości</p><input type="text" id="lengthResult" value={stringLength} readOnly/>
                <button onClick={Quantity}>Calculate number</button>
                <button onClick={Length}>Calculate length</button>
                <button onClick={Clear}>Clear all</button>
            </form>
        </>
    );
}

export default App;

