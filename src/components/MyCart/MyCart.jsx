
import { AuthContext } from "../providers/AuthProvider";
import { useContext, useEffect, useState } from "react";
import CardProduct from "../CardProduct/CardProduct";

const MyCart = () => {
    const [cardProducts, setCardProducts] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`https://cosmetics-server-site-by-faria-15ni10ce5.vercel.app/cart/${user.uid}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCardProducts(data);
            })
            .catch(error => console.log(error))
    }, [user])

    return (
        <div>
            {
                cardProducts.map(cardProduct => <CardProduct key={cardProduct._id} cardProduct={cardProduct} setCardProducts={setCardProducts}></CardProduct>)
            }
        </div>
    );
};

export default MyCart;