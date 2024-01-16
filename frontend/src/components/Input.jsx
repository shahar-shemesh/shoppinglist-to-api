export default function Input({ type, placeholder, name, ...props }) {
    let inputClasses = 'text-right px-3 py-2 leading-tight border rounded shadow  text-gray-700 bg-stone-300 max-sm:text-center max-sm:my-2';

    return (<p>
        <input required type={type} placeholder={placeholder} name={name} className={inputClasses} {...props} />
    </p>);
};