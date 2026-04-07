interface ITodoItemProps {
        id: string;
        label: string;
        complete: boolean;

        onRemove (): void;
        onComplete (): void;
    };


export const TodoItem = ({id, label, complete, onComplete, onRemove}: ITodoItemProps )  => {
    
    return (
        <li key={id}>
            {label}

            {complete ? ' - Feito' : ''}

            <button onClick={onComplete}>
                Feito </button>

            <button onClick={onRemove}>
                Remover</button>
        </li>
    );
}