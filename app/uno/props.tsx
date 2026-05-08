interface PropsType {
    nombre: string;
}

export default function Props({ nombre }: PropsType) {
    return (
        <div>
            {nombre}
        </div>
    );
}