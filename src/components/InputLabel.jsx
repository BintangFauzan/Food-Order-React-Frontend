export default function InputLabel({classname, input, type, id, placeholder, onChange, ref}) {
    return(
        <>
            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
                <i className={classname}></i>{input}
            </label>
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                onChange={onChange}
                ref={ref}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
        </>
    )
}
