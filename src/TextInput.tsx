interface TextInputProps {
    value?: string,
    cols?: number,
    rows?: number,
    placeholder?: string,
    onInput?: (value: string) => void,
}

export function TextInput(props: TextInputProps) {
    const { value: initText, placeholder, cols, rows, onInput } = props;

    function inputCallback(e: React.ChangeEvent<HTMLTextAreaElement>){
        if (onInput)
            onInput(e.target.value) 
    }

    let el = <textarea autoCorrect="false" value={initText} placeholder={placeholder} cols={cols} rows={rows} onInput={inputCallback} />

    return el;
}