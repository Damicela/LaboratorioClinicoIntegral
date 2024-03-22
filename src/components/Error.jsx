function Error({error}){
    return (
        <div className="text-center my-4 text-red-600 uppercase">
            {error}
        </div>
    )
}

Error.propTypes = '';

export default Error