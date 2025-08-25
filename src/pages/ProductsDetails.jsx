import { useParams, useLocation } from "react-router-dom";

export default function ProductsDetails() {
    const params = useParams()
    const location = useLocation()

    console.log(location);

    return (
        <>
        <p>{ params.id }</p>
        <h2> Products Details</h2>
        </>
    )
}