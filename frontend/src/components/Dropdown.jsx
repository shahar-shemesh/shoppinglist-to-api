export default function Dropdown({ options }) {
    let inputClasses = 'text-right px-3 py-2 leading-tight border rounded shadow  text-gray-700 bg-stone-300 max-sm:mt-2 max-sm:mb-4';

    return <div>
        <select name="category" className={inputClasses}>
            <option key='blankKey' hidden value>קטגוריה</option>
            { options.map( (option, index) => <option key={option.value} value={option.value}>{option.name}</option> )}
        </select>
    </div>
};