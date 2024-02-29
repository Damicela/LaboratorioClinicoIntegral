/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"


// eslint-disable-next-line react-refresh/only-export-components
const PdfRender = ({test, path}) => {

    return (
            <Link to={path} className="text-blue-800 hover:text-blue-500"  target="_blank">
            {test}
            </Link>
    )
}

export default PdfRender